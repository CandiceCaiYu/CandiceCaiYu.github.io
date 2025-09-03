import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    apiReference,
    errorJsDescription1,
    errorJsDescription1Code,
    errorJsDescription1Img,
    errorJsDescription2,
    errorJsDescription2GTK,
    errorJsDescription2Img,
    errorJsExamplesContent1,
    errorJsExamplesContent2,
    errorJsExamplesContent2Code,
    errorJsExamplesContent2GTK,
    errorJsExamplesContent3,
    errorJsExamplesContent4,
    errorJsExamplesContent5,
    errorJsExamplesTitle,
    errorJsReferenceContent1,
    errorJsReferenceContent2,
    errorJsReferenceContent3,
    errorJsReferenceContent3GTK,
    errorJsReferenceContent4,
    errorJsReferenceContent4List,
    errorJsReferenceContent5,
    errorJsReferenceContent6,
    errorJsReferenceContent7,
    errorJsReferenceContent8,
    errorJsReferenceContent9,
    errorJsReferenceContent9Code,
    errorJsReferenceTitle,
    errorJsTitle
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/errorJs";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const Page = () => {
    return (
        <>
            <CustomSection
                image={{height: 320}}
                texts={[errorJsTitle, errorJsDescription1, errorJsDescription1Img, errorJsDescription1Code]}/>
            <CustomSection image={{height: 460}} texts={[errorJsDescription2, errorJsDescription2Img]}/>
            <GoodToKnown list={errorJsDescription2GTK}/>
            <Divider/>

            <CustomSection
                texts={[errorJsReferenceTitle, errorJsReferenceContent1, errorJsReferenceContent2, errorJsReferenceContent3]}/>
            <GoodToKnown text={errorJsReferenceContent3GTK}/>
            <CustomSection texts={[errorJsReferenceContent4]}/>
            <CustomList items={errorJsReferenceContent4List}/>
            <CustomSection
                texts={[errorJsReferenceContent5, errorJsReferenceContent6, errorJsReferenceContent7, errorJsReferenceContent8, errorJsReferenceContent9, errorJsReferenceContent9Code]}/>
            <Divider/>

            <CustomSection
                texts={[errorJsExamplesTitle, errorJsExamplesContent1, errorJsExamplesContent2,]}/>
            <GoodToKnown text={errorJsExamplesContent2GTK}/>
            <CustomSection
                texts={[errorJsExamplesContent2Code, errorJsExamplesContent3, errorJsExamplesContent4, errorJsExamplesContent5]}/>
            <Divider/>

            <FooterApiReferenceSection apis={apiReference}/>
        </>
    )
}
export default Page
