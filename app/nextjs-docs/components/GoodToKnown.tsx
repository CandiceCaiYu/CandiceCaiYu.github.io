import CustomList from "@/app/nextjs-docs/components/CustomList";
import style from "../styles.module.scss";
import {automaticInstallationGoodToKnownTitle} from "@/src/assets/nextjsDocument/start/installation";

const GoodToKnown = ({title = automaticInstallationGoodToKnownTitle, text, list, description, more}: {
    title?: string,
    text?: string,
    list?: (string | string[])[],
    description?: string
    more?: string
}) => {
    return (
        <blockquote className={style.goodToKnown}>
            <h5>{title} {text &&
                <span>{text}</span>}</h5>
            {description && <p className={style.description}>{description}</p>}
            {list && (
                <CustomList items={list} isSmall/>
            )}
            {more && <p className={style.more}>{more}</p>}
        </blockquote>
    )
};

export default GoodToKnown

