import styles from './styles.module.scss'
import SlideAvatar from "@/app/profile/components/SlideAvator";
import SlideSkills from "@/app/profile/components/SlideSkills";
import SlideContact from "@/app/profile/components/SlideContact";


export default function profile() {
    return (
        <div className={styles.profile}>

            <SlideAvatar/>
            <SlideSkills/>
            <SlideContact/>
        </div>
    )
}
