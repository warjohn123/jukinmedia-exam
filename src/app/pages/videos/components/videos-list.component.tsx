import React from "react";
import { Col, Row } from "react-bootstrap";
import { VideoListDisplayType, VideoModel } from "../../../models/video.model";
import { VideoItemComponent } from "./video-item.component";

interface VideosListComponentType {
    videos: VideoModel[];
    displayType: string;
}

export const VideosListComponent: React.FunctionComponent<VideosListComponentType> = ({
    videos,
    displayType
}) => {
    return (
        <>
            {displayType == VideoListDisplayType.list && (
                videos.map((video: VideoModel, index: number) => (
                    <div style={{ marginBottom: 20 }} key={index}>
                        <VideoItemComponent video={video}></VideoItemComponent>
                    </div>
                ))
            )}


            {displayType == VideoListDisplayType.grid && (
                <Row>
                    { videos.map((video: VideoModel, index: number) => (
                        <Col lg={4} md={6} sm={12} style={{ marginBottom: 20 }}>
                            <VideoItemComponent displayType={VideoListDisplayType.grid} video={video}></VideoItemComponent>
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}