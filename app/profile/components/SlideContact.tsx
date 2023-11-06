import styles from '../styles.module.scss'
import contactImg from '@/public/communicate.png'
import Image from "next/image";

export default function SlideContact() {
    const infoData = [
        {name: 'Name', value: 'Yu Cai'},
        {name: 'Date of birth', value: '3 June 1994'},
        {name: 'Email', value: '6caiyu6@gmail.com'},
        {name: 'Address', value: 'Chengdu, Sichuan Province, China'},
    ]
    return (
        <div className={styles.slide_contact}>
            <div className={styles.content}>
                <h2>Contact me</h2>
                {infoData.map(item => (
                    <div key={item.name} className={styles.contact_item}>
                        <span className={styles.contact_name}>{item.name}:</span>
                        <span className={styles.contact_value}>{item.value}</span>
                    </div>
                ))}
            </div>
            <div>
                <Image src={contactImg} width={700} height={500} alt={'contact me'}/>
            </div>
        </div>
    )
}
