import CustomList from "@/app/nextjs-docs/components/CustomList";
import style from "../styles.module.scss";
import {automaticInstallationGoodToKnownTitle} from "@/src/assets/nextjsDocument/installation";

const GoodToKnown = ({text, list}: { text?: string, list?: string[] }) => {
    return (
        <blockquote className={style.goodToKnown}>
            <h5>{automaticInstallationGoodToKnownTitle} {text &&
                <span>{text}</span>}</h5>
            {list && (
                <CustomList items={list} isSmall/>
            )}
        </blockquote>
    )
};

export default GoodToKnown

