import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { VideoApi } from "../../api/video.api";
import { VideosListComponent } from "./components/videos-list.component";
import { VideoFilterBarComponent } from "./components/video-filter-bar.component";
import styles from "./videos.module.scss";
import { VideoPageHeaderComponent } from "./components/video-page-header.component";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { VideoModel } from "../../models/video.model";

export function VideosPage() {

    const [videos, setVideos] = useState<VideoModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(0);

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    function handleScroll() {
        if (!isLoading) {
            getVideos(offset);
        }
    }

    const getVideos = async (offset: number) => {
        try {
            setIsLoading(true);
            let data = await new VideoApi().getVideos(offset);

            setVideos([...videos, ...data]);
            setIsLoading(false);

            setOffset((offset || 0) + 12);
        } catch (e) {
            console.log('error', e);
        }
    };

    useEffect(() => {
        getVideos(offset);
    }, [getVideos, offset]);

    //bottom scroll listener 
    useBottomScrollListener(handleScroll, {
        offset: 100,
        debounce: 0,
        triggerOnNoScroll: true
    });

    return (
        <>
            <section>
                <VideoPageHeaderComponent></VideoPageHeaderComponent>
            </section>
            <section>
                <Container>
                    <VideoFilterBarComponent></VideoFilterBarComponent>
                </Container>
            </section>
            <section className={styles.VideoListContainer}>
                <Container>
                    <div className={styles.Spacer}></div>
                    <VideosListComponent key="test" videos={videos}></VideosListComponent>

                    {
                        isLoading && (
                            <h1 className="text-center pt-5 pb-5">Loading videos</h1>
                        )
                    }
                </Container>
            </section>
        </>

    )

}