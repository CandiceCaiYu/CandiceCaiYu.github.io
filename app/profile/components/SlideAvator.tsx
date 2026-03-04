'use client';

import styles from "@/app/profile/styles.module.scss";
import HeaderBackToHome from "@/app/dashboard/components/head/headerBackToHome";

export default function SlideAvatar() {
    return (
        <div className={`${styles.slide} ${styles.slide1}`}>
            <HeaderBackToHome style={{position: "absolute", top: 0, right: 0}}/>
            <div className={styles.content}>
                <h2>Hello, I&#39;m Yu Cai</h2>
                <h3>I&#39;m | Front-end developer</h3>
            </div>
        </div>
    )
}
