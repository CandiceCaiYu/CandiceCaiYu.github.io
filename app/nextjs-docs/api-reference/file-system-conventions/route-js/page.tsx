import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    routeJsContent1,
    routeJsContent10,
    routeJsContent10Code,
    routeJsContent10TableData,
    routeJsContent11,
    routeJsContent12,
    routeJsContent12Code,
    routeJsContent12GTK,
    routeJsContent13,
    routeJsContent14,
    routeJsContent15,
    routeJsContent15Code,
    routeJsContent16,
    routeJsContent16Code,
    routeJsContent17,
    routeJsContent17Code,
    routeJsContent18,
    routeJsContent19,
    routeJsContent19Code,
    routeJsContent2,
    routeJsContent20,
    routeJsContent20Code,
    routeJsContent21,
    routeJsContent21Code,
    routeJsContent22,
    routeJsContent23,
    routeJsContent23Code,
    routeJsContent24,
    routeJsContent24Code,
    routeJsContent25,
    routeJsContent26,
    routeJsContent26Code,
    routeJsContent26TableData,
    routeJsContent27,
    routeJsContent28,
    routeJsContent28Code,
    routeJsContent29,
    routeJsContent2Code,
    routeJsContent3,
    routeJsContent30,
    routeJsContent30Code,
    routeJsContent31,
    routeJsContent31Code,
    routeJsContent32,
    routeJsContent33,
    routeJsContent33Code,
    routeJsContent34,
    routeJsContent35,
    routeJsContent35Code,
    routeJsContent36,
    routeJsContent37,
    routeJsContent38,
    routeJsContent38Code,
    routeJsContent38GTK,
    routeJsContent39,
    routeJsContent4,
    routeJsContent40,
    routeJsContent40Code,
    routeJsContent41,
    routeJsContent42,
    routeJsContent43,
    routeJsContent43Code,
    routeJsContent44,
    routeJsContent45,
    routeJsContent45Code,
    routeJsContent46,
    routeJsContent5,
    routeJsContent5Code,
    routeJsContent6,
    routeJsContent7,
    routeJsContent8,
    routeJsContent8Code,
    routeJsContent9
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/routeJs";
import {Divider} from "antd";
import CustomTable from "@/app/nextjs-docs/components/SectionWithTable";
import {routeTableColumns} from "@/src/assets/nextjsDocument/common";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[routeJsContent1, routeJsContent2, routeJsContent2Code]}/>
            <Divider/>

            <CustomSection
                texts={[routeJsContent3, routeJsContent4, routeJsContent5, routeJsContent5Code, routeJsContent6, routeJsContent7, routeJsContent8, routeJsContent8Code, routeJsContent9, routeJsContent10, routeJsContent10Code]}/>
            <CustomTable dataSource={routeJsContent10TableData} columns={routeTableColumns}/>
            <CustomSection texts={[routeJsContent11, routeJsContent12, routeJsContent12Code]}/>
            <GoodToKnown text={routeJsContent12GTK}/>
            <Divider/>

            <CustomSection
                texts={[routeJsContent13, routeJsContent14, routeJsContent15, routeJsContent15Code, routeJsContent16, routeJsContent16Code, routeJsContent17, routeJsContent17Code, routeJsContent18, routeJsContent19, routeJsContent19Code, routeJsContent20, routeJsContent20Code, routeJsContent21, routeJsContent21Code, routeJsContent22, routeJsContent23, routeJsContent23Code, routeJsContent24, routeJsContent24Code, routeJsContent25, routeJsContent26, routeJsContent26Code]}/>
            <CustomTable dataSource={routeJsContent26TableData} columns={routeTableColumns}/>
            <CustomSection
                texts={[routeJsContent27, routeJsContent28, routeJsContent28Code, routeJsContent29, routeJsContent30, routeJsContent30Code, routeJsContent31, routeJsContent31Code, routeJsContent32, routeJsContent33, routeJsContent33Code, routeJsContent34, routeJsContent35, routeJsContent35Code, routeJsContent36, routeJsContent37, routeJsContent38, routeJsContent38Code]}/>
            <GoodToKnown list={routeJsContent38GTK}/>
            <CustomSection
                texts={[routeJsContent39, routeJsContent40, routeJsContent40Code, routeJsContent41, routeJsContent42, routeJsContent43, routeJsContent43Code, routeJsContent44, routeJsContent45, routeJsContent45Code, routeJsContent46,]}/>
        </>
    )
}
export default Page

