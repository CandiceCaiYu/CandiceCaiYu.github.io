import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    generateStaticParamsContent1,
    generateStaticParamsContent10,
    generateStaticParamsContent10Code,
    generateStaticParamsContent11,
    generateStaticParamsContent11Code,
    generateStaticParamsContent12,
    generateStaticParamsContent13,
    generateStaticParamsContent14,
    generateStaticParamsContent15,
    generateStaticParamsContent16,
    generateStaticParamsContent17,
    generateStaticParamsContent17Code,
    generateStaticParamsContent18,
    generateStaticParamsContent18Code,
    generateStaticParamsContent19,
    generateStaticParamsContent2,
    generateStaticParamsContent20,
    generateStaticParamsContent20Code,
    generateStaticParamsContent20GTK,
    generateStaticParamsContent21Code,
    generateStaticParamsContent22,
    generateStaticParamsContent23,
    generateStaticParamsContent24,
    generateStaticParamsContent25,
    generateStaticParamsContent25List,
    generateStaticParamsContent26,
    generateStaticParamsContent27,
    generateStaticParamsContent28,
    generateStaticParamsContent28Code,
    generateStaticParamsContent29,
    generateStaticParamsContent2Code,
    generateStaticParamsContent2GTK,
    generateStaticParamsContent3,
    generateStaticParamsContent30,
    generateStaticParamsContent30Code,
    generateStaticParamsContent31,
    generateStaticParamsContent32,
    generateStaticParamsContent33,
    generateStaticParamsContent34,
    generateStaticParamsContent34Code,
    generateStaticParamsContent34GTK,
    generateStaticParamsContent4,
    generateStaticParamsContent5,
    generateStaticParamsContent6,
    generateStaticParamsContent7,
    generateStaticParamsContent8,
    generateStaticParamsContent8List,
    generateStaticParamsContent8TableColumn,
    generateStaticParamsContent8TableDataSource,
    generateStaticParamsContent9,
    generateStaticParamsContent9Code
} from "@/src/assets/nextjsDocument/apiReferences/functions/generateStaticParams";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import CustomTable from "@/app/nextjs-docs/components/SectionWithTable";

const Page = () => {
    return (
        <>
            <CustomSection
                texts={[generateStaticParamsContent1, generateStaticParamsContent2, generateStaticParamsContent2Code]}/>
            <GoodToKnown list={generateStaticParamsContent2GTK}/>
            <Divider/>

            <CustomSection
                texts={[generateStaticParamsContent3, generateStaticParamsContent4, generateStaticParamsContent5, generateStaticParamsContent6]}/>
            <Divider/>

            <CustomSection texts={[generateStaticParamsContent7, generateStaticParamsContent8]}/>
            <CustomList items={generateStaticParamsContent8List}/>
            <CustomTable dataSource={generateStaticParamsContent8TableDataSource}
                         columns={generateStaticParamsContent8TableColumn}/>
            <Divider/>

            <CustomSection texts={[generateStaticParamsContent9, generateStaticParamsContent9Code]}/>
            <Divider/>
            <CustomSection texts={[generateStaticParamsContent10, generateStaticParamsContent10Code]}/>
            <Divider/>
            <CustomSection texts={[generateStaticParamsContent11, generateStaticParamsContent11Code]}/>
            <Divider/>

            <CustomSection
                texts={[generateStaticParamsContent12, generateStaticParamsContent13, generateStaticParamsContent14, generateStaticParamsContent15, generateStaticParamsContent16, generateStaticParamsContent17, generateStaticParamsContent17Code, generateStaticParamsContent18, generateStaticParamsContent18Code, generateStaticParamsContent19, generateStaticParamsContent20, generateStaticParamsContent20Code]}/>
            <GoodToKnown text={generateStaticParamsContent20GTK}/>
            <CustomSection
                texts={[generateStaticParamsContent21Code, generateStaticParamsContent22, generateStaticParamsContent23, generateStaticParamsContent24, generateStaticParamsContent25]}/>
            <CustomList items={generateStaticParamsContent25List}/>
            <CustomSection
                texts={[generateStaticParamsContent26, generateStaticParamsContent27, generateStaticParamsContent28, generateStaticParamsContent28Code, generateStaticParamsContent29, generateStaticParamsContent30, generateStaticParamsContent30Code, generateStaticParamsContent31, generateStaticParamsContent32, generateStaticParamsContent33, generateStaticParamsContent34, generateStaticParamsContent34Code]}/>
            <GoodToKnown text={generateStaticParamsContent34GTK}/>
        </>
    )
}
export default Page

