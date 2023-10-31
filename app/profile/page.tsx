
import styles from './styles.module.scss'
import SlideAvatar from "@/app/profile/components/SlideAvator";

export default function profile() {
    return (
        <div className={styles.profile}>
            <SlideAvatar />
        </div>
    )
}
