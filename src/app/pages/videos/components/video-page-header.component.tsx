import React from "react";
import { Col, InputGroup, FormControl, Row } from "react-bootstrap";

import styles from "../videos.module.scss";
import { VideoHeroBarComponent } from "./video-hero-bar.component";

export function VideoPageHeaderComponent() {


    return (
        <div className={styles.VideoPageHeaderContainer}>
            <div className={styles.VideoPageHeaderLayer}></div>

            <Row className={styles.VideoPageHeaderLogoContainer}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWEAAAAwCAYAAADAWssxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NmYxMWM2Yy0zMjI5LTQ1YTctOGJkMS0yODg0NjAxZjEyMTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc2Qzc4NzA3QjQ0MTFFNUI5QTBFM0EyN0YxQTJERkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjc2Qzc4NkY3QjQ0MTFFNUI5QTBFM0EyN0YxQTJERkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYzg3NTgyNi0yMDJkLTRmZTctOTc3MS1mMTExY2Y0YTZhYTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjZmMTFjNmMtMzIyOS00NWE3LThiZDEtMjg4NDYwMWYxMjEz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" alt="THE WIRE"></img>
                <form>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Search video url or keyword e.g. funny cat" />
                            <InputGroup.Append>
                                <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#848F91"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </form>
            </Row>

            <VideoHeroBarComponent></VideoHeroBarComponent>
        </div>
    )

}