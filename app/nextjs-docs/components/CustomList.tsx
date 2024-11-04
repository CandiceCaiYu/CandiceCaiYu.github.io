import style from '../styles.module.scss'
import CustomMarkdown from "@/app/nextjs-docs/components/CustomMarkdown";

const CustomList = ({items, isSmall, isOrder}: { items: string[], isSmall?: boolean, isOrder?: boolean }) => {
    return (
        <ul className={style.list}>
            {items.map((item, index) => (
                <li key={index} className={`${style.item} ${isSmall && style.small}`}>
                    <span> {isOrder ? index + 1 : '-'} </span>
                    <CustomMarkdown text={item}/>
                </li>
            ))}
        </ul>
    )
};
export default CustomList
