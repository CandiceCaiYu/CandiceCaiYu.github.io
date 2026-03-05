import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    cssModulesContent1,
    cssModulesContent2,
    cssModulesContent2Code,
    cssModulesContent3Code,
    cssModulesTitle,
    description1,
    description1List,
    developmentVSProductionContent1List,
    developmentVSProductionTitle,
    externalStylesheetsContent1,
    externalStylesheetsContent1Code,
    externalStylesheetsContent1GTK,
    externalStylesheetsTitle,
    globalCSSContent1,
    globalCSSContent2,
    globalCSSContent2Code,
    globalCSSContent3Code,
    globalCSSContent3GTK,
    globalCSSTitle,
    orderingAndMergingContent1,
    orderingAndMergingContent2,
    orderingAndMergingContent2Code,
    orderingAndMergingContent3Code,
    orderingAndMergingContent4,
    orderingAndMergingContent5,
    orderingAndMergingContent5List,
    orderingAndMergingTitle,
    tailwindcssContent1,
    tailwindcssContent2,
    tailwindcssContent2Code,
    tailwindcssContent3,
    tailwindcssContent3Code,
    tailwindcssContent4,
    tailwindcssContent4Code,
    tailwindcssContent5,
    tailwindcssContent5Code,
    tailwindcssContent6,
    tailwindcssContent6Code,
    tailwindcssContent6GTK,
    tailwindcssTitle,
    title
} from "@/src/assets/nextjsDocument/start/css";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import {Divider} from "antd";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, description1]}/>
            <CustomList items={description1List}/>
            <Divider/>

            <CustomSection
                texts={[tailwindcssTitle, tailwindcssContent1, tailwindcssContent2, tailwindcssContent2Code, tailwindcssContent3, tailwindcssContent3Code, tailwindcssContent4, tailwindcssContent4Code, tailwindcssContent5, tailwindcssContent5Code, tailwindcssContent6, tailwindcssContent6Code]}
                goodToKnown={<GoodToKnown text={tailwindcssContent6GTK}/>}
            />
            <Divider/>

            <CustomSection
                texts={[cssModulesTitle, cssModulesContent1, cssModulesContent2, cssModulesContent2Code, cssModulesContent3Code]}/>
            <Divider/>

            <CustomSection
                texts={[globalCSSTitle, globalCSSContent1, globalCSSContent2, globalCSSContent2Code, globalCSSContent3Code]}
                goodToKnown={<GoodToKnown text={globalCSSContent3GTK}/>}/>
            <Divider/>

            <CustomSection
                texts={[externalStylesheetsTitle, externalStylesheetsContent1, externalStylesheetsContent1Code]}
                goodToKnown={<GoodToKnown text={externalStylesheetsContent1GTK}/>}/>
            <Divider/>

            <CustomSection
                texts={[orderingAndMergingTitle, orderingAndMergingContent1, orderingAndMergingContent2, orderingAndMergingContent2Code, orderingAndMergingContent3Code, orderingAndMergingContent4, orderingAndMergingContent5]}/>
            <CustomList items={[orderingAndMergingContent5List]}/>
            <Divider/>

            <CustomSection texts={[developmentVSProductionTitle]}/>
            <CustomList items={developmentVSProductionContent1List}/>
        </>
    )
}
export default Page
