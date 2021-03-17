import React from "react";
import { VideoItemComponent } from "./video-item.component";

import styles from "../videos-list.module.scss";


export function VideosListComponent(props: any) {


    return (
        <>
            {
                props.videos.map((video: any, index: number) => (
                    <div style={{ marginBottom: 20 }} key={index}>
                        <VideoItemComponent video={video}></VideoItemComponent>
                    </div>
                ))
            }
        </>
    )
}