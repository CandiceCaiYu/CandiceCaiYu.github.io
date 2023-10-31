import styles from "@/app/profile/styles.module.scss";
import skillsImg from "@/public/skill.jpg";
import Image from 'next/image'

export default function SlideSkills() {
    return (
        <div className={`${styles.slide} ${styles.slide_skills}`}>
            <div>
                <div className={styles.imageShadow}></div>
                <Image src={skillsImg} width={460} height={800} className={styles.img} alt={'avatar'}/>
            </div>
            <div className={styles.content}>
                <h2>My skills</h2>
            </div>
        </div>
    )
}
