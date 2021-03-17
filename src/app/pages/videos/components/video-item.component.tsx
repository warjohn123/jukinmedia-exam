import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { VideoModel } from "../../../models/video.model";

import styles from "../videos.module.scss";

interface VideoItemComponentType {
    video: VideoModel;
}

export const VideoItemComponent: React.FunctionComponent<VideoItemComponentType> = ({
    video
}) => {

    return (
        <Card className={styles.VideoItem}>
            <Card.Body>
                <Row>
                    <Col md={12} lg={{ order: 2, span: 6 }}>
                        <div className={styles.VideoPlayer}>
                            <button className={styles.VideoPlayButton}></button>
                            <img alt="video" className={styles.VideoThumbnail} src={video.imgUrl} />
                        </div>
                    </Col>
                    <Col md={12} lg={{ order: 1, span: 6 }}>
                        <p className={styles.VideoTitle}>
                            {video.title}
                        </p>

                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.VideoDetail}>
                                        Date Added:
                                    </td>
                                    <td>17 Mar 21</td>
                                </tr>
                                <tr>
                                    <td className={styles.VideoDetail}>
                                        Date Posted:
                                    </td>
                                    <td>04 Sep 17</td>
                                </tr>
                                <tr>
                                    <td className={styles.VideoDetail}>
                                        Views:
                                    </td>
                                    <td>{video.views}</td>
                                </tr>
                                <tr>
                                    <td className={styles.VideoDetail}>
                                        Location:
                                    </td>
                                    <td>{video.location ? video.location : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td className={styles.VideoDetail}>
                                        JV#:
                                    </td>
                                    <td>1177062-1</td>
                                </tr>
                            </tbody>
                        </table>

                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}