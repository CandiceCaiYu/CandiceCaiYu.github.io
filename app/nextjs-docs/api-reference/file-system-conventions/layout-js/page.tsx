import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    layoutJsContent1,
    layoutJsContent10,
    layoutJsContent11,
    layoutJsContent11Code,
    layoutJsContent11GTK,
    layoutJsContent12,
    layoutJsContent13,
    layoutJsContent13Code,
    layoutJsContent13List,
    layoutJsContent14,
    layoutJsContent15,
    layoutJsContent16,
    layoutJsContent17,
    layoutJsContent18,
    layoutJsContent18Code,
    layoutJsContent19,
    layoutJsContent2,
    layoutJsContent20,
    layoutJsContent21,
    layoutJsContent21Code,
    layoutJsContent22Code,
    layoutJsContent23,
    layoutJsContent24,
    layoutJsContent25,
    layoutJsContent25Code,
    layoutJsContent26Code,
    layoutJsContent27,
    layoutJsContent28,
    layoutJsContent29,
    layoutJsContent29Code,
    layoutJsContent2Code,
    layoutJsContent3,
    layoutJsContent30Code,
    layoutJsContent32,
    layoutJsContent33,
    layoutJsContent33Code,
    layoutJsContent35,
    layoutJsContent36,
    layoutJsContent37,
    layoutJsContent37Code,
    layoutJsContent37GTK,
    layoutJsContent38,
    layoutJsContent39,
    layoutJsContent3Code,
    layoutJsContent4,
    layoutJsContent40,
    layoutJsContent40Code,
    layoutJsContent41Code,
    layoutJsContent42,
    layoutJsContent43,
    layoutJsContent43Code,
    layoutJsContent44,
    layoutJsContent45,
    layoutJsContent45Code,
    layoutJsContent5,
    layoutJsContent6,
    layoutJsContent7,
    layoutJsContent8,
    layoutJsContent9,
    layoutJsContent9Code,
    layoutJsContent9List,
    layoutJsContent9TableColumn,
    layoutJsContent9TableData,
    layoutJsContentCode31Code,
    layoutJsContentCode34Code
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/layoutJs";
import {Divider} from "antd";
import CustomTable from "@/app/nextjs-docs/components/SectionWithTable";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection
                texts={[layoutJsContent1, layoutJsContent2, layoutJsContent2Code, layoutJsContent3, layoutJsContent3Code]}/>
            <Divider/>

            <CustomSection
                texts={[layoutJsContent4, layoutJsContent5, layoutJsContent6, layoutJsContent7, layoutJsContent8, layoutJsContent9, layoutJsContent9Code]}/>
            <CustomTable dataSource={layoutJsContent9TableData} columns={layoutJsContent9TableColumn}/>
            <CustomList items={layoutJsContent9List}/>
            <CustomSection texts={[layoutJsContent10, layoutJsContent11, layoutJsContent11Code]}/>
            <GoodToKnown text={layoutJsContent11GTK}/>
            <CustomSection texts={[layoutJsContent12, layoutJsContent13, layoutJsContent13Code]}/>
            <CustomList items={layoutJsContent13List}/>
            <Divider/>

            <CustomSection
                texts={[layoutJsContent14, layoutJsContent15, layoutJsContent16, layoutJsContent17, layoutJsContent18, layoutJsContent18Code, layoutJsContent19, layoutJsContent20, layoutJsContent21, layoutJsContent21Code, layoutJsContent22Code, layoutJsContent23, layoutJsContent24, layoutJsContent25, layoutJsContent25Code, layoutJsContent26Code, layoutJsContent27, layoutJsContent28, layoutJsContent29, layoutJsContent29Code, layoutJsContent30Code, layoutJsContentCode31Code, layoutJsContent32, layoutJsContent33, layoutJsContent33Code, layoutJsContentCode34Code]}/>
            <CustomSection texts={[layoutJsContent35, layoutJsContent36, layoutJsContent37, layoutJsContent37Code]}/>
            <GoodToKnown text={layoutJsContent37GTK}/>
            <CustomSection
                texts={[layoutJsContent38, layoutJsContent39, layoutJsContent40, layoutJsContent40Code, layoutJsContent41Code, layoutJsContent42, layoutJsContent43, layoutJsContent43Code, layoutJsContent44, layoutJsContent45, layoutJsContent45Code]}/>
        </>
    )
}
export default Page

