import style from '../styles.module.scss'
import CustomMarkdown from "@/app/nextjs-docs/components/CustomMarkdown";

const CustomList = ({items, isSmall}: { items: string[], isSmall?: boolean }) => {
    return (
        <ul className={style.list}>
            {items.map((item, index) => (
                <li key={index} className={`${style.item} ${isSmall && style.small}`}>
                    <span> - </span>
                    <CustomMarkdown text={item}/>
                </li>
            ))}
        </ul>
    )
};
export default CustomList
