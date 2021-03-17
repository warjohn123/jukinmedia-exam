import React from "react";
import { VideoItemComponent } from "./video-item.component";

import styles from "../videos-list.module.scss";


export function VideosListComponent(props: any) {


    return (
        <>
            {
                props.videos.map((video: any, index: number) => (
                    <>
                        <VideoItemComponent video={video} key={index}></VideoItemComponent>
                        <div className={styles.Spacer}></div>
                    </>
                ))
            }
        </>
    )
}