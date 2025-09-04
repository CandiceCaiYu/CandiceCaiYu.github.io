import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    pageJsContent1,
    pageJsContent10,
    pageJsContent10Code,
    pageJsContent10List,
    pageJsContent10TableColumn,
    pageJsContent10TableData,
    pageJsContent11,
    pageJsContent12,
    pageJsContent12Code,
    pageJsContent12GTK,
    pageJsContent13,
    pageJsContent14,
    pageJsContent15,
    pageJsContent15Code,
    pageJsContent16,
    pageJsContent17,
    pageJsContent17Code,
    pageJsContent18,
    pageJsContent19,
    pageJsContent19Code,
    pageJsContent2,
    pageJsContent2Code,
    pageJsContent3,
    pageJsContent3List,
    pageJsContent4,
    pageJsContent5,
    pageJsContent6,
    pageJsContent7,
    pageJsContent7Code,
    pageJsContent7List,
    pageJsContent7TableColumn,
    pageJsContent7TableData,
    pageJsContent8,
    pageJsContent9,
    pageJsContent9Code
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/pageJs";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import CustomTable from "@/app/nextjs-docs/components/SectionWithTable";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[pageJsContent1, pageJsContent2, pageJsContent2Code]}/>
            <Divider/>

            <CustomSection texts={[pageJsContent3]}/>
            <CustomList items={pageJsContent3List}/>
            <Divider/>

            <CustomSection
                texts={[pageJsContent4, pageJsContent5, pageJsContent6, pageJsContent7, pageJsContent7Code]}/>
            <CustomTable dataSource={pageJsContent7TableData} columns={pageJsContent7TableColumn}/>
            <CustomList items={pageJsContent7List}/>
            <CustomSection
                texts={[pageJsContent8, pageJsContent9, pageJsContent9Code, pageJsContent10, pageJsContent10Code]}/>
            <CustomTable dataSource={pageJsContent10TableData} columns={pageJsContent10TableColumn}/>
            <CustomList items={pageJsContent10List}/>
            <CustomSection texts={[pageJsContent11, pageJsContent12, pageJsContent12Code]}/>
            <GoodToKnown list={pageJsContent12GTK}/>
            <CustomSection
                texts={[pageJsContent13, pageJsContent14, pageJsContent15, pageJsContent15Code, pageJsContent16, pageJsContent17, pageJsContent17Code, pageJsContent18, pageJsContent19, pageJsContent19Code]}/>
            <CustomSection texts={[]}/>
            <CustomSection texts={[]}/>
        </>
    )
}
export default Page

