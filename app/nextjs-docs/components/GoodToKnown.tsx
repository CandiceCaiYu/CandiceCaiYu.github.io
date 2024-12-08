import CustomList from "@/app/nextjs-docs/components/CustomList";
import style from "../styles.module.scss";
import {automaticInstallationGoodToKnownTitle} from "@/src/assets/nextjsDocument/routing/installation";

const GoodToKnown = ({title = automaticInstallationGoodToKnownTitle, text, list, description}: {
    title?: string,
    text?: string,
    list?: string[],
    description?: string
}) => {
    return (
        <blockquote className={style.goodToKnown}>
            <h5>{title} {text &&
                <span>{text}</span>}</h5>
            {description && <p className={style.description}>{description}</p>}
            {list && (
                <CustomList items={list} isSmall/>
            )}
        </blockquote>
    )
};

export default GoodToKnown

