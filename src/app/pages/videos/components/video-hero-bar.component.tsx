import React from "react";

import styles from "../videos.module.scss";

export function VideoHeroBarComponent() {

    return (
        <div className={styles.VideoHeroBarContainer}>
            <p>A real-time feed displaying <span>every new video</span> the moment it's available for licensing</p>

        </div>
    )
}