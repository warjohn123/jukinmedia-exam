import React, { useEffect, useState } from "react";

import styles from "../videos.module.scss";
import { Col, Form, Row } from "react-bootstrap";

interface DateDisplay {
    hours: string;
    minutes: string;
    seconds: string;
    ampm: string;
}

export function VideoFilterBarComponent(props: any) {

    const formatAMPM = (date: Date): DateDisplay => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        let hoursStr = hours ? hours.toString() : '12'; // the hour '0' should be '12'
        let minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
        let secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();
        return {
            hours: hoursStr,
            minutes: minutesStr,
            seconds: secondsStr,
            ampm: ampm
        };
    }
    const [date, setDate] = useState<DateDisplay>(formatAMPM(new Date()));

    const updateDate = () => {
        setDate(formatAMPM(new Date()));
    };

    useEffect(() => {
        setInterval(updateDate, 1000);
    })

    return (
        <div className={styles.VideoFilterBarContainer}>
            <Row>
                <Col sm={12} md={8}>
                    <Row>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles.VideoFilterClock}>
                                <li>{date?.hours}</li>&nbsp;
                                <li>:</li>&nbsp;
                                <li>{date?.minutes}</li>&nbsp;
                                <li>:</li>&nbsp;
                                <li>{date?.seconds}</li>&nbsp;
                                <li>{date?.ampm}</li>&nbsp;
                            </div>
                        </Col>

                        <Col lg={8} md={6} sm={6}>
                            <div className={styles.VideoFilterDate + " d-none d-sm-block"}>
                                <span className={styles.VideoFilterClockDay}>Wednesday</span>
                                <span>
                                    {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                            </div>
                            <div className="d-block d-sm-none text-center mb-5">
                                {new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
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