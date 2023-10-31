import Image from "next/image";
import avatar from '../../public/avatar.jpg'
import styles from './styles.module.scss'

export default function profile() {
    return (
        <div className={styles.profile}>
            <div className={`${styles.slide} ${styles.slide1}`}>
                <div>
                    <h2>Hello, I'm Yu Cai</h2>
                    <h3>I'm | Front-end developer</h3>
                </div>
                <Image src={avatar} width={400} height={500} className={styles.img}/>
            </div>
        </div>
    )
}
