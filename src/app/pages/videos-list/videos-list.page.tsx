import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { VideoApi } from "../../api/video.api";
import { VideosListComponent } from "./components/videos-list.component";
import styles from "./videos-list.module.scss";

export function VideosPage() {

    const [videos, setVideos] = useState<any[]>([{}, {}, {}, {}]);

    console.log('videos', videos.length);
    useEffect(() => {
        new VideoApi().getVideos().then((data) => {
            // setUser(user);

            console.log('data', data);
        });
    })

    return (


        <section className={styles.VideoListContainer}>
            <Container>
                <div className={styles.Spacer}></div>
                <VideosListComponent key="test" videos={videos}></VideosListComponent>
            </Container>
        </section>
    )

}