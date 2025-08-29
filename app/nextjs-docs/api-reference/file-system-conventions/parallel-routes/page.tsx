import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    apiReferences,
    parallelRoutesBehaviorContent1,
    parallelRoutesBehaviorContent1GTK,
    parallelRoutesBehaviorContent1List,
    parallelRoutesBehaviorTitle,
    parallelRoutesConventionContent1,
    parallelRoutesConventionContent10,
    parallelRoutesConventionContent2,
    parallelRoutesConventionContent2Img,
    parallelRoutesConventionContent3,
    parallelRoutesConventionContent3Code,
    parallelRoutesConventionContent4,
    parallelRoutesConventionContent4GTK,
    parallelRoutesConventionContent5,
    parallelRoutesConventionContent6,
    parallelRoutesConventionContent7,
    parallelRoutesConventionContent7Img,
    parallelRoutesConventionContent8,
    parallelRoutesConventionContent9,
    parallelRoutesConventionTitle,
    parallelRoutesDescription1,
    parallelRoutesDescription2,
    parallelRoutesDescription2Img,
    parallelRoutesExamplesContent1,
    parallelRoutesExamplesContent10,
    parallelRoutesExamplesContent11,
    parallelRoutesExamplesContent11List,
    parallelRoutesExamplesContent12,
    parallelRoutesExamplesContent12Img,
    parallelRoutesExamplesContent13,
    parallelRoutesExamplesContent13Code,
    parallelRoutesExamplesContent13Img,
    parallelRoutesExamplesContent14,
    parallelRoutesExamplesContent14Code,
    parallelRoutesExamplesContent15,
    parallelRoutesExamplesContent15Code,
    parallelRoutesExamplesContent15GTK,
    parallelRoutesExamplesContent16,
    parallelRoutesExamplesContent17,
    parallelRoutesExamplesContent18,
    parallelRoutesExamplesContent18Code,
    parallelRoutesExamplesContent19,
    parallelRoutesExamplesContent2,
    parallelRoutesExamplesContent20,
    parallelRoutesExamplesContent21,
    parallelRoutesExamplesContent21Code,
    parallelRoutesExamplesContent22,
    parallelRoutesExamplesContent22Code,
    parallelRoutesExamplesContent23Code,
    parallelRoutesExamplesContent24,
    parallelRoutesExamplesContent24Code,
    parallelRoutesExamplesContent24GTK,
    parallelRoutesExamplesContent25,
    parallelRoutesExamplesContent26,
    parallelRoutesExamplesContent26Img,
    parallelRoutesExamplesContent27,
    parallelRoutesExamplesContent2Code,
    parallelRoutesExamplesContent3,
    parallelRoutesExamplesContent4,
    parallelRoutesExamplesContent5,
    parallelRoutesExamplesContent5Code,
    parallelRoutesExamplesContent5Img,
    parallelRoutesExamplesContent6,
    parallelRoutesExamplesContent7,
    parallelRoutesExamplesContent8,
    parallelRoutesExamplesContent8Img,
    parallelRoutesExamplesContent9,
    parallelRoutesExamplesContent9Code,
    parallelRoutesExamplesTitle,
    title
} from "@/src/assets/nextjsDocument/apiReferences/parallelRoutes";
import {Divider} from "antd";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const Page = () => {
    return (
        <>
            <CustomSection
                image={{height: 480, width: 860}}
                texts={[title, parallelRoutesDescription1, parallelRoutesDescription2, parallelRoutesDescription2Img]}/>
            <Divider/>

            <CustomSection
                image={{height: 320}}
                texts={[parallelRoutesConventionTitle, parallelRoutesConventionContent1, parallelRoutesConventionContent2, parallelRoutesConventionContent2Img]}/>
            <CustomSection
                texts={[parallelRoutesConventionContent3, parallelRoutesConventionContent3Code, parallelRoutesConventionContent4]}/>
            <GoodToKnown text={parallelRoutesConventionContent4GTK}/>
            <CustomSection
                image={{height: 420}}
                texts={[parallelRoutesConventionContent5, parallelRoutesConventionContent6, parallelRoutesConventionContent7, parallelRoutesConventionContent7Img]}/>
            <CustomSection
                texts={[parallelRoutesConventionContent8, parallelRoutesConventionContent9, parallelRoutesConventionContent10]}/>
            <Divider/>

            <CustomSection texts={[parallelRoutesBehaviorTitle, parallelRoutesBehaviorContent1]}/>
            <CustomList items={parallelRoutesBehaviorContent1List}/>
            <GoodToKnown text={parallelRoutesBehaviorContent1GTK}/>
            <Divider/>

            <CustomSection
                image={{height: 560, width: 960}}
                texts={[parallelRoutesExamplesTitle, parallelRoutesExamplesContent1, parallelRoutesExamplesContent2, parallelRoutesExamplesContent2Code, parallelRoutesExamplesContent3, parallelRoutesExamplesContent4, parallelRoutesExamplesContent5, parallelRoutesExamplesContent5Img, parallelRoutesExamplesContent5Code]}/>
            <CustomSection
                image={{height: 360}}
                texts={[parallelRoutesExamplesContent6, parallelRoutesExamplesContent7, parallelRoutesExamplesContent8, parallelRoutesExamplesContent8Img]}/>
            <CustomSection

                texts={[parallelRoutesExamplesContent9, parallelRoutesExamplesContent9Code, parallelRoutesExamplesContent10, parallelRoutesExamplesContent11]}/>
            <CustomList items={parallelRoutesExamplesContent11List}/>
            <CustomSection image={{height: 320}}
                           texts={[parallelRoutesExamplesContent12, parallelRoutesExamplesContent12Img]}/>
            <CustomSection
                image={{height: 360}}
                texts={[parallelRoutesExamplesContent13, parallelRoutesExamplesContent13Img, parallelRoutesExamplesContent13Code]}/>
            <CustomSection
                texts={[parallelRoutesExamplesContent14, parallelRoutesExamplesContent14Code, parallelRoutesExamplesContent15, parallelRoutesExamplesContent15Code]}/>
            <GoodToKnown list={parallelRoutesExamplesContent15GTK}/>
            <CustomSection
                texts={[parallelRoutesExamplesContent16, parallelRoutesExamplesContent17, parallelRoutesExamplesContent18, parallelRoutesExamplesContent18Code, parallelRoutesExamplesContent19, parallelRoutesExamplesContent20, parallelRoutesExamplesContent21, parallelRoutesExamplesContent21Code, parallelRoutesExamplesContent22, parallelRoutesExamplesContent22Code, parallelRoutesExamplesContent23Code, parallelRoutesExamplesContent24, parallelRoutesExamplesContent24Code]}/>
            <GoodToKnown list={parallelRoutesExamplesContent24GTK}/>
            <CustomSection
                image={{height: 560}}
                texts={[parallelRoutesExamplesContent25, parallelRoutesExamplesContent26, parallelRoutesExamplesContent26Img, parallelRoutesExamplesContent27]}/>
            <Divider/>
            <FooterApiReferenceSection apis={apiReferences}/>
        </>
    )
}

export default Page
