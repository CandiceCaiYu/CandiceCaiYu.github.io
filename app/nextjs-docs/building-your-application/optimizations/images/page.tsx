import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    configurationContent1,
    configurationContent2,
    configurationTitle,
    content1,
    content1List,
    content2,
    content3,
    content3List,
    content3TipText,
    content3TipTitle,
    exampleContent1,
    exampleContent1Code,
    exampleContent1Img,
    exampleContent2,
    exampleContent2Code,
    exampleContent2Img,
    exampleContent3,
    exampleContent3Code,
    exampleContent3Img,
    exampleContent4,
    exampleTitle,
    imageSizeContent1,
    imageSizeContent2,
    imageSizeContent2List,
    imageSizeContent2TipDescription,
    imageSizeContent2TipList,
    imageSizeContent2TipTitle,
    imageSizeContent3,
    imageSizeTitle,
    otherPropertiesContent1,
    otherPropertiesTitle,
    priorityContent1,
    priorityContent2,
    priorityContent3,
    priorityContent3Code,
    priorityContent4,
    priorityTitle,
    stylingContent1,
    stylingContent1List,
    stylingTitle,
    title,
    usageContent10,
    usageContent10Code,
    usageContent11,
    usageContent11Code,
    usageContent12,
    usageContent13,
    usageContent14,
    usageContent15,
    usageContent15TipText,
    usageContent16,
    usageContent17,
    usageContent18,
    usageContent19,
    usageContent1Code,
    usageContent2,
    usageContent20,
    usageContent3,
    usageContent4,
    usageContent5,
    usageContent5Code,
    usageContent5TipText,
    usageContent5TipTitle,
    usageContent6,
    usageContent6Code,
    usageContent7,
    usageContent8,
    usageContent9,
    usageTitle
} from "@/src/assets/nextjsDocument/optimizations/images";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1]}>
                <CustomList items={content1List}/>
            </CustomSection>
            <CustomSection
                goodToKnown={<GoodToKnown title={content3TipTitle} text={content3TipText}/>}
                texts={[content2, content3]}>
                <CustomList items={content3List}/>
            </CustomSection>
            <Divider/>

            <CustomSection
                goodToKnown={<GoodToKnown title={usageContent5TipTitle} text={usageContent5TipText}/>}
                texts={[usageTitle, usageContent1Code, usageContent2, usageContent3, usageContent4, usageContent5, usageContent5Code]}/>
            <CustomSection
                goodToKnown={<GoodToKnown text={usageContent15TipText}/>}
                texts={[usageContent6, usageContent6Code, usageContent7, usageContent8, usageContent9, usageContent10, usageContent10Code, usageContent11, usageContent11Code, usageContent12, usageContent13, usageContent14, usageContent15]}/>
            <CustomSection texts={[usageContent16, usageContent17, usageContent18, usageContent19, usageContent20]}/>
            <Divider/>

            <CustomSection
                texts={[priorityTitle, priorityContent1, priorityContent2, priorityContent3, priorityContent3Code, priorityContent4]}/>
            <Divider/>

            <CustomSection goodToKnown={<GoodToKnown title={imageSizeContent2TipTitle}
                                                     description={imageSizeContent2TipDescription}
                                                     list={imageSizeContent2TipList}/>}
                           texts={[imageSizeTitle, imageSizeContent1, imageSizeContent2]}>
                <CustomList items={imageSizeContent2List} isOrder/>
            </CustomSection>
            <CustomSection texts={[imageSizeContent3]}/>
            <Divider/>

            <CustomSection texts={[stylingTitle, stylingContent1]}>
                <CustomList items={stylingContent1List}/>
            </CustomSection>
            <Divider/>

            <CustomSection
                image={{height: 320}}
                texts={[exampleTitle, exampleContent1, exampleContent1Img, exampleContent1Code, exampleContent2, exampleContent2Img, exampleContent2Code, exampleContent3, exampleContent3Img, exampleContent3Code, exampleContent4,]}/>
            <Divider/>

            <CustomSection texts={[otherPropertiesTitle, otherPropertiesContent1]}/>
            <Divider/>

            <CustomSection texts={[configurationTitle, configurationContent1, configurationContent2]}/>
            <Divider/>
        </>
    )
};

export default Page
