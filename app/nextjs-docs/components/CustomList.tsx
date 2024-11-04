import style from '../styles.module.scss'
import CustomMarkdown from "@/app/nextjs-docs/components/CustomMarkdown";

const CustomList = ({items}: { items: string[] }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index} className={style.list}>
                    <span> - </span>
                    <CustomMarkdown text={item}/>
                </li>
            ))}
        </ul>
    )
};
export default CustomList
