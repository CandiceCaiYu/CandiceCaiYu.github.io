import styles from "@/app/profile/styles.module.scss";
import avatar from "@/public/avatar.jpg";
import Image from 'next/image'

export default function SlideAvatar() {
    return (
        <div className={`${styles.slide} ${styles.slide1}`}>
            <div>
                <h2>Hello, I&#39;m Yu Cai</h2>
                <h3>I&#39;m | Front-end developer</h3>
            </div>
            <Image src={avatar} width={400} height={500} className={styles.img} alt={'avatar'}/>
        </div>
    )
}
