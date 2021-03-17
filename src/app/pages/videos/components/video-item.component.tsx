import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import styles from "../videos.module.scss";

export function VideoItemComponent(props: any) {


    return (
        <Card className={styles.VideoItem}>
            <Card.Body>
                <Row>
                    <Col md={12} lg={{ order: 2, span: 6 }}>
                        <div className={styles.VideoPlayer}>
                            <button className={styles.VideoPlayButton}></button>
                            <img className={styles.VideoThumbnail} src="https://thumbnails-dev.jukinmedia.com/thumbnail-1615935662923.jpg" />
                        </div>
                    </Col>
                    <Col md={12} lg={{ order: 1, span: 6 }}>
                        <p className={styles.VideoTitle}>
                            When I was test
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
                                    <td>3976925</td>
                                </tr>
                                <tr>
                                    <td className={styles.VideoDetail}>
                                        Location:
                                    </td>
                                    <td>N/A</td>
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