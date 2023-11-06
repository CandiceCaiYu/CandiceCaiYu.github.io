import styles from "@/app/profile/styles.module.scss";
import avatar from "@/public/contact.png";
import Image from 'next/image'
import homeImg from "@/public/gitlab-icon.png";
import Link from "next/link";

export default function SlideAvatar() {
    return (
        <div className={`${styles.slide} ${styles.slide1}`}>
            <Link href={'/dashboard'} className={styles.home}>
                <Image src={homeImg} width={48} height={48} alt={'home'}/>
            </Link>
            <div className={styles.content}>
                <h2>Hello, I&#39;m Yu Cai</h2>
                <h3>I&#39;m | Front-end developer</h3>
            </div>
            <Image src={avatar} width={900} height={700} className={styles.img} alt={'avatar'}/>
        </div>
    )
}
