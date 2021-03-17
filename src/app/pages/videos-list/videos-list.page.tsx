import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { VideoApi } from "../../api/video.api";
import { VideosListComponent } from "./components/videos-list.component";
import { VideoFilterBarComponent } from "./components/video-filter-bar.component";
import styles from "./videos-list.module.scss";
import { VideoPageHeaderComponent } from "./components/video-page-header.component";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { VideoModel } from "../../models/video.model";

export function VideosPage() {

    const [videos, setVideos] = useState<any[]>([{}, {}, {}, {}]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        getVideos();
    }

    useEffect(() => {
        getVideos();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getVideos = async () => {
        try {
            // let videos = new VideoApi().getVideos();
            let addedVideos = [
                {}, {}, {}
            ];
            setVideos([...videos, ...addedVideos])
        } catch (e) {

        }
    };

    //bottom scroll listener 
    useBottomScrollListener(getVideos, {
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
                </Container>
            </section>
        </>

    )

}