import styles from './styles.module.scss'
import SlideAvatar from "@/app/profile/components/SlideAvator";
import SlideSkills from "@/app/profile/components/SlideSkills";

export default function profile() {
    return (
        <div className={styles.profile}>
            <SlideAvatar/>
            <SlideSkills/>
        </div>
    )
}
