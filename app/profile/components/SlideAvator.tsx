import styles from "@/app/profile/styles.module.scss";
import avatar from "@/public/contact.png";
import blueCat from '@/public/blue-cat.png'
import Image from 'next/image'

export default function SlideAvatar() {
    return (
        <div className={`${styles.slide} ${styles.slide1}`}>
            <div className={styles.content}>
                <h2>Hello, I&#39;m Yu Cai</h2>
                <h3>I&#39;m | Front-end developer</h3>
            </div>
            <div className={styles.img_container}>
                <Image src={avatar} width={820} height={640} className={styles.img} alt={'avatar'}/>
                <Image src={blueCat} width={220} height={300} className={styles.img_cat} alt={'blueCat'}/>
            </div>
        </div>
    )
}
