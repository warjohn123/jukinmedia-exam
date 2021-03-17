import React from "react";
import { VideoItemComponent } from "./video-item.component";

import styles from "../videos-list.module.scss";
import { Col, Form, Row } from "react-bootstrap";


export function VideoFilterBarComponent(props: any) {

    return (
        <div className={styles.VideoFilterBarContainer}>
            <Row>
                <Col sm={12} md={8}>

                    <Row>
                        <Col lg={4} md={6} sm={6}>
                            <ul className={styles.VideoFilterClock}>
                                <li>02</li>&nbsp;
                            <li>:</li>&nbsp;
                            <li>47</li>&nbsp;
                            <li>:</li>&nbsp;
                            <li>13</li>&nbsp;
                            <li>PM</li>&nbsp;
                        </ul>
                        </Col>

                        <Col lg={8} md={6} sm={6}>
                            <div className={styles.VideoFilterDate + " d-none d-sm-block"}>
                                <span className={styles.VideoFilterClockDay}>Wednesday</span>
                                <span>17 March 2021</span>
                            </div>
                            <div className="d-block d-sm-none">
                                Wednesday 17 March 2021
                        </div>

                        </Col>
                    </Row>
                </Col>

                <Col sm={12} md={4} className={styles.VideoFilters}>
                    <div className={styles.VideoFilterDropdown}>
                        <Form.Group>
                            <Form.Control as="select" custom>
                                <option>All Videos</option>
                                <option>Trending</option>
                                <option>Last 24 hours</option>
                                <option>Last 7 days</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className={styles.ListView}></div>
                    <div className={styles.GridView}></div>
                </Col>

            </Row>
        </div>
    )
}