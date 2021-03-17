import React from "react";
import { VideoModel } from "../../../models/video.model";
import { VideoItemComponent } from "./video-item.component";

interface VideosListComponentType {
    videos: VideoModel[];
}

export const VideosListComponent: React.FunctionComponent<VideosListComponentType> = ({
    videos
}) => {
    return (
        <>
            {
                videos.map((video: VideoModel, index: number) => (
                    <div style={{ marginBottom: 20 }} key={index}>
                        <VideoItemComponent video={video}></VideoItemComponent>
                    </div>
                ))
            }
        </>
    )
}