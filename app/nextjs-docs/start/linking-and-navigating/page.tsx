import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    APIReferences,
    description1,
    description2,
    example1,
    example2,
    example3,
    example4,
    example5,
    example6,
    example6Code,
    example7,
    example8,
    example8Code,
    howNavigationWorksContent1,
    howNavigationWorksContent1List,
    howNavigationWorksContentClientSideTransitions1,
    howNavigationWorksContentClientSideTransitions2,
    howNavigationWorksContentClientSideTransitions3,
    howNavigationWorksContentClientSideTransitions3List,
    howNavigationWorksContentPrefetch1,
    howNavigationWorksContentPrefetch2,
    howNavigationWorksContentPrefetch3,
    howNavigationWorksContentPrefetch3Code,
    howNavigationWorksContentPrefetch4,
    howNavigationWorksContentPrefetch4List,
    howNavigationWorksContentPrefetch5,
    howNavigationWorksContentPrefetch5Image,
    howNavigationWorksContentPrefetch6,
    howNavigationWorksContentServerRendering1,
    howNavigationWorksContentServerRendering2,
    howNavigationWorksContentServerRendering3,
    howNavigationWorksContentServerRendering3List,
    howNavigationWorksContentServerRendering4,
    howNavigationWorksContentServerRendering4GTK,
    howNavigationWorksContentStream1,
    howNavigationWorksContentStream2,
    howNavigationWorksContentStream3,
    howNavigationWorksContentStream3Image,
    howNavigationWorksContentStream4,
    howNavigationWorksContentStream4Code,
    howNavigationWorksContentStream4Image,
    howNavigationWorksContentStream5,
    howNavigationWorksContentStream5GTK,
    howNavigationWorksContentStream6,
    howNavigationWorksContentStream6List,
    howNavigationWorksContentStream7,
    howNavigationWorksTitle,
    title,
    whatCanMakeTransitionsSlowContent1,
    whatCanMakeTransitionsSlowContent10,
    whatCanMakeTransitionsSlowContent10Code,
    whatCanMakeTransitionsSlowContent11,
    whatCanMakeTransitionsSlowContent11Code,
    whatCanMakeTransitionsSlowContent11GTK,
    whatCanMakeTransitionsSlowContent12,
    whatCanMakeTransitionsSlowContent13,
    whatCanMakeTransitionsSlowContent13Code,
    whatCanMakeTransitionsSlowContent14,
    whatCanMakeTransitionsSlowContent14List,
    whatCanMakeTransitionsSlowContent15,
    whatCanMakeTransitionsSlowContent15Code,
    whatCanMakeTransitionsSlowContent16,
    whatCanMakeTransitionsSlowContent17,
    whatCanMakeTransitionsSlowContent18,
    whatCanMakeTransitionsSlowContent18List,
    whatCanMakeTransitionsSlowContent2,
    whatCanMakeTransitionsSlowContent3,
    whatCanMakeTransitionsSlowContent4,
    whatCanMakeTransitionsSlowContent4Code,
    whatCanMakeTransitionsSlowContent4GTK,
    whatCanMakeTransitionsSlowContent5,
    whatCanMakeTransitionsSlowContent6,
    whatCanMakeTransitionsSlowContent7,
    whatCanMakeTransitionsSlowContent7Code,
    whatCanMakeTransitionsSlowContent8,
    whatCanMakeTransitionsSlowContent9,
    whatCanMakeTransitionsSlowTitle
} from "@/src/assets/nextjsDocument/routing/linkingAndNavigating";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const page = () => {
    return (
        <>
            <CustomSection texts={[title, description1, description2]}/>
            <Divider/>
            <CustomSection texts={[howNavigationWorksTitle, howNavigationWorksContent1]}/>
            <CustomList items={howNavigationWorksContent1List}/>
            <CustomSection
                texts={[howNavigationWorksContentServerRendering1, howNavigationWorksContentServerRendering2, howNavigationWorksContentServerRendering3]}/>
            <CustomList items={howNavigationWorksContentServerRendering3List}/>
            <CustomSection texts={[howNavigationWorksContentServerRendering4]}/>
            <GoodToKnown text={howNavigationWorksContentServerRendering4GTK}/>
            <CustomSection
                texts={[howNavigationWorksContentPrefetch1, howNavigationWorksContentPrefetch2, howNavigationWorksContentPrefetch3, howNavigationWorksContentPrefetch3Code, howNavigationWorksContentPrefetch4,]}/>
            <CustomList items={howNavigationWorksContentPrefetch4List}/>
            <CustomSection
                image={{height: 380}}
                texts={[howNavigationWorksContentPrefetch5, howNavigationWorksContentPrefetch5Image, howNavigationWorksContentPrefetch6]}/>
            <CustomSection
                image={{height: 380}}
                texts={[howNavigationWorksContentStream1, howNavigationWorksContentStream2, howNavigationWorksContentStream3, howNavigationWorksContentStream3Image, howNavigationWorksContentStream4]}/>
            <CustomSection
                image={{height: 300}}
                texts={[howNavigationWorksContentStream4Image, howNavigationWorksContentStream4Code, howNavigationWorksContentStream5]}/>
            <GoodToKnown text={howNavigationWorksContentStream5GTK}/>
            <CustomSection texts={[howNavigationWorksContentStream6]}/>
            <CustomList items={howNavigationWorksContentStream6List}/>
            <CustomSection texts={[howNavigationWorksContentStream7]}/>
            <CustomSection
                texts={[howNavigationWorksContentClientSideTransitions1, howNavigationWorksContentClientSideTransitions2, howNavigationWorksContentClientSideTransitions3]}/>
            <CustomList items={howNavigationWorksContentClientSideTransitions3List}/>
            <Divider/>
            <CustomSection
                texts={[whatCanMakeTransitionsSlowTitle, whatCanMakeTransitionsSlowContent1, whatCanMakeTransitionsSlowContent2, whatCanMakeTransitionsSlowContent3, whatCanMakeTransitionsSlowContent4, whatCanMakeTransitionsSlowContent4Code,]}/>
            <GoodToKnown text={whatCanMakeTransitionsSlowContent4GTK}/>
            <CustomSection
                texts={[whatCanMakeTransitionsSlowContent5, whatCanMakeTransitionsSlowContent6, whatCanMakeTransitionsSlowContent7, whatCanMakeTransitionsSlowContent7Code, whatCanMakeTransitionsSlowContent8, whatCanMakeTransitionsSlowContent9, whatCanMakeTransitionsSlowContent10, whatCanMakeTransitionsSlowContent10Code, whatCanMakeTransitionsSlowContent11, whatCanMakeTransitionsSlowContent11Code]}/><Divider/>
            <GoodToKnown text={whatCanMakeTransitionsSlowContent11GTK}/>
            <CustomSection
                texts={[whatCanMakeTransitionsSlowContent12, whatCanMakeTransitionsSlowContent13, whatCanMakeTransitionsSlowContent13Code, whatCanMakeTransitionsSlowContent14]}/><Divider/>
            <CustomList items={whatCanMakeTransitionsSlowContent14List}/>
            <CustomSection
                texts={[whatCanMakeTransitionsSlowContent15, whatCanMakeTransitionsSlowContent15Code, whatCanMakeTransitionsSlowContent16, whatCanMakeTransitionsSlowContent17, whatCanMakeTransitionsSlowContent18]}/>
            <CustomList items={whatCanMakeTransitionsSlowContent18List}/>
            <Divider/>
            <CustomSection
                texts={[example1, example2, example3, example4, example5, example6, example6Code, example7, example8, example8Code]}/>
            <FooterApiReferenceSection {...APIReferences}/>
        </>
    )
};
export default page
