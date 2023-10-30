import Image from "next/image";
import styles from './styles.module.scss'
import avatar from '../../../../public/avatar.jpg'
export default function Header() {
    return (
        <div className={styles.header}>
            <h1>Cai Yu's Blog</h1>
            <Image src={avatar} width={50}  height={50} className={styles.avatar} title={'contact me'}/>
        </div>
    )
}
