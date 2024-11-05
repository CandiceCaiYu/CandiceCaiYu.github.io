import style from '../styles.module.scss'
import CustomMarkdown from "@/app/nextjs-docs/components/CustomMarkdown";

interface CustomListProps {
    items: string[];
    isSmall?: boolean;
    isOrder?: boolean;
    image?: { width?: number, height?: number }
}

const CustomList = ({items, isSmall, isOrder, image}: CustomListProps) => {
    const isImage = (text: string) => {
        return text.match(/!\[.*?\]\((.*?)\)/);
    };
    return (
        <ul className={style.list}>
            {items.map((item, index) => (
                <li key={index} className={`${style.item} ${isSmall && style.small}`}>
                    {!isImage(item) && <span> {isOrder ? index + 1 : '-'} </span>}
                    <CustomMarkdown text={item} image={image}/>
                </li>
            ))}
        </ul>
    )
};
export default CustomList
