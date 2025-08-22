import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    apiReferences,
    exampleTitle,
    howWorkContent1,
    howWorkContent2,
    howWorkContent2GTKDescription,
    howWorkContent2GTKList,
    howWorkContent2GTKTitle,
    howWorkContent2List,
    howWorkContent3,
    howWorkContent4,
    howWorkContent4GTKDescription,
    howWorkContent4GTKTitle,
    howWorkContent4List,
    howWorkContent5,
    howWorkContent6,
    howWorkContent6List,
    howWorkTitle,
    introduction1,
    introduction2,
    serverAndClientComponentExampleContent1,
    serverAndClientComponentExampleContent10,
    serverAndClientComponentExampleContent10Code,
    serverAndClientComponentExampleContent11Code,
    serverAndClientComponentExampleContent12,
    serverAndClientComponentExampleContent12GTK,
    serverAndClientComponentExampleContent13,
    serverAndClientComponentExampleContent14,
    serverAndClientComponentExampleContent15,
    serverAndClientComponentExampleContent15Code,
    serverAndClientComponentExampleContent16,
    serverAndClientComponentExampleContent16Code,
    serverAndClientComponentExampleContent17,
    serverAndClientComponentExampleContent18,
    serverAndClientComponentExampleContent19,
    serverAndClientComponentExampleContent2,
    serverAndClientComponentExampleContent20,
    serverAndClientComponentExampleContent20Code,
    serverAndClientComponentExampleContent21,
    serverAndClientComponentExampleContent21Code,
    serverAndClientComponentExampleContent22,
    serverAndClientComponentExampleContent22GTK,
    serverAndClientComponentExampleContent23,
    serverAndClientComponentExampleContent24,
    serverAndClientComponentExampleContent25,
    serverAndClientComponentExampleContent26,
    serverAndClientComponentExampleContent26Code,
    serverAndClientComponentExampleContent27,
    serverAndClientComponentExampleContent28,
    serverAndClientComponentExampleContent28Code,
    serverAndClientComponentExampleContent29,
    serverAndClientComponentExampleContent29Code,
    serverAndClientComponentExampleContent29GTKList,
    serverAndClientComponentExampleContent29GTKTitle,
    serverAndClientComponentExampleContent2Code,
    serverAndClientComponentExampleContent3,
    serverAndClientComponentExampleContent30,
    serverAndClientComponentExampleContent31,
    serverAndClientComponentExampleContent31Code,
    serverAndClientComponentExampleContent32,
    serverAndClientComponentExampleContent33,
    serverAndClientComponentExampleContent34,
    serverAndClientComponentExampleContent35,
    serverAndClientComponentExampleContent36,
    serverAndClientComponentExampleContent36Code,
    serverAndClientComponentExampleContent37,
    serverAndClientComponentExampleContent38,
    serverAndClientComponentExampleContent39,
    serverAndClientComponentExampleContent39Code,
    serverAndClientComponentExampleContent4,
    serverAndClientComponentExampleContent40,
    serverAndClientComponentExampleContent41,
    serverAndClientComponentExampleContent5,
    serverAndClientComponentExampleContent6,
    serverAndClientComponentExampleContent7,
    serverAndClientComponentExampleContent7Code,
    serverAndClientComponentExampleContent8Code,
    serverAndClientComponentExampleContent9,
    title,
    whenUseContent1,
    whenUseContent2,
    whenUseContent2List,
    whenUseContent3,
    whenUseContent3List,
    whenUseContent4,
    whenUseContent4Code,
    whenUseContent5Code,
    whenUseTitle
} from "@/src/assets/nextjsDocument/start/serverAndClientComponents";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const page = () => {
    return (
        <>
            <CustomSection texts={[title, introduction1, introduction2]}/>
            <Divider/>

            <CustomSection texts={[whenUseTitle, whenUseContent1, whenUseContent2]}/>
            <CustomList items={whenUseContent2List}/>
            <CustomSection texts={[whenUseContent3]}/>
            <CustomList items={whenUseContent3List}/>
            <CustomSection texts={[whenUseContent4, whenUseContent4Code, whenUseContent5Code,]}/>
            <Divider/>
            <CustomSection texts={[howWorkTitle, howWorkContent1, howWorkContent2]}/>
            <CustomList items={howWorkContent2List}/>
            <GoodToKnown title={howWorkContent2GTKTitle} description={howWorkContent2GTKDescription}
                         list={howWorkContent2GTKList}/>
            <CustomSection texts={[howWorkContent3, howWorkContent4]}/>
            <CustomList items={howWorkContent4List}/>
            <GoodToKnown title={howWorkContent4GTKTitle} description={howWorkContent4GTKDescription}/>
            <CustomSection texts={[howWorkContent5, howWorkContent6,]}/>
            <CustomList items={howWorkContent6List}/>
            <Divider/>
            <CustomSection
                texts={[exampleTitle, serverAndClientComponentExampleContent1, serverAndClientComponentExampleContent2, serverAndClientComponentExampleContent2Code, serverAndClientComponentExampleContent3, serverAndClientComponentExampleContent4, serverAndClientComponentExampleContent5, serverAndClientComponentExampleContent6, serverAndClientComponentExampleContent7, serverAndClientComponentExampleContent7Code, serverAndClientComponentExampleContent8Code, serverAndClientComponentExampleContent9, serverAndClientComponentExampleContent10, serverAndClientComponentExampleContent10Code, serverAndClientComponentExampleContent11Code, serverAndClientComponentExampleContent12]}/>
            <GoodToKnown text={serverAndClientComponentExampleContent12GTK}/>
            <CustomSection
                texts={[serverAndClientComponentExampleContent13, serverAndClientComponentExampleContent14, serverAndClientComponentExampleContent15, serverAndClientComponentExampleContent15Code, serverAndClientComponentExampleContent16, serverAndClientComponentExampleContent16Code, serverAndClientComponentExampleContent17, serverAndClientComponentExampleContent18, serverAndClientComponentExampleContent19, serverAndClientComponentExampleContent20, serverAndClientComponentExampleContent20Code, serverAndClientComponentExampleContent21, serverAndClientComponentExampleContent21Code, serverAndClientComponentExampleContent22]}/>
            <GoodToKnown text={serverAndClientComponentExampleContent22GTK}/>
            <CustomSection
                texts={[serverAndClientComponentExampleContent23, serverAndClientComponentExampleContent24, serverAndClientComponentExampleContent25, serverAndClientComponentExampleContent26, serverAndClientComponentExampleContent26Code, serverAndClientComponentExampleContent27, serverAndClientComponentExampleContent28, serverAndClientComponentExampleContent28Code, serverAndClientComponentExampleContent29, serverAndClientComponentExampleContent29Code]}/>
            <GoodToKnown title={serverAndClientComponentExampleContent29GTKTitle}
                         list={serverAndClientComponentExampleContent29GTKList}/>
            <CustomSection
                texts={[serverAndClientComponentExampleContent30, serverAndClientComponentExampleContent31, serverAndClientComponentExampleContent31Code, serverAndClientComponentExampleContent32, serverAndClientComponentExampleContent33, serverAndClientComponentExampleContent34, serverAndClientComponentExampleContent35, serverAndClientComponentExampleContent36, serverAndClientComponentExampleContent36Code, serverAndClientComponentExampleContent37, serverAndClientComponentExampleContent38, serverAndClientComponentExampleContent39, serverAndClientComponentExampleContent39Code, serverAndClientComponentExampleContent40, serverAndClientComponentExampleContent41]}/>
            <Divider/>
            <FooterApiReferenceSection apis={apiReferences}/>
        </>
    )
}

export default page
