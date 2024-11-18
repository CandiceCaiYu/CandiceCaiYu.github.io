import style from '../styles.module.scss'
import CustomMarkdown from "@/app/nextjs-docs/components/CustomMarkdown";

interface CustomListProps {
    items: (string | string[])[];
    isSmall?: boolean;
    isOrder?: boolean;
    image?: { width?: number, height?: number }
    isSubList?: boolean;
}

const CustomList = ({items, isSmall, isOrder, image, isSubList}: CustomListProps) => {
    const isImage = (text: string) => {
        return text.match(/!\[.*?\]\((.*?)\)/);
    };
    return (
        <ul className={style.list}>
            {items.map((item, index) => {
                if (item instanceof Array) {
                    return <CustomList key={index} items={item} isSmall={isSmall} isOrder={isOrder} image={image}
                                       isSubList={true}/>
                }
                return (
                    <li key={`index-${item}`}
                        className={`${style.item} ${isSmall && style.small} ${isSubList && style.subList}`}>
                        {!isImage(item) && <span> {isOrder ? `${index + 1}.` : '-'} </span>}
                        <CustomMarkdown text={item} image={image}/>
                    </li>
                )
            })}
        </ul>
    )
};
export default CustomList
