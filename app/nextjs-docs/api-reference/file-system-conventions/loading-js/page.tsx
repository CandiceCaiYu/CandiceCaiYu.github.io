import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    loadingJsContent1,
    loadingJsContent10,
    loadingJsContent11,
    loadingJsContent12,
    loadingJsContent12Code,
    loadingJsContent12Img,
    loadingJsContent13,
    loadingJsContent13Img,
    loadingJsContent14,
    loadingJsContent14List,
    loadingJsContent15,
    loadingJsContent16,
    loadingJsContent17,
    loadingJsContent18,
    loadingJsContent19,
    loadingJsContent2,
    loadingJsContent20,
    loadingJsContent20TableColumn,
    loadingJsContent20TableData,
    loadingJsContent21,
    loadingJsContent22,
    loadingJsContent23,
    loadingJsContent24,
    loadingJsContent25,
    loadingJsContent25Code,
    loadingJsContent26,
    loadingJsContent26List,
    loadingJsContent27,
    loadingJsContent2Code,
    loadingJsContent2Img,
    loadingJsContent3,
    loadingJsContent4,
    loadingJsContent5,
    loadingJsContent6,
    loadingJsContent7,
    loadingJsContent8,
    loadingJsContent9,
    loadingJsContent9List
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/loadingJs";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import CustomTable from "@/app/nextjs-docs/components/SectionWithTable";

const Page = () => {
    return (
        <>
            <CustomSection
                image={{height: 400}}
                texts={[loadingJsContent1, loadingJsContent2, loadingJsContent2Img, loadingJsContent2Code, loadingJsContent3, loadingJsContent4]}/>
            <Divider/>

            <CustomSection texts={[loadingJsContent5, loadingJsContent6, loadingJsContent7,]}/>
            <Divider/>
            <CustomSection texts={[loadingJsContent8, loadingJsContent9]}/>
            <CustomList items={loadingJsContent9List}/>
            <CustomSection
                image={{height: 320}}
                texts={[loadingJsContent10, loadingJsContent11, loadingJsContent12, loadingJsContent12Img, loadingJsContent12Code]}/>
            <CustomSection image={{height: 420}}
                           texts={[loadingJsContent13, loadingJsContent13Img, loadingJsContent14]}/>
            <CustomList items={loadingJsContent14List}/>
            <CustomSection
                texts={[loadingJsContent15, loadingJsContent16, loadingJsContent17, loadingJsContent18, loadingJsContent19]}/>
            <Divider/>

            <CustomSection texts={[loadingJsContent20]}/>
            <CustomTable dataSource={loadingJsContent20TableData} columns={loadingJsContent20TableColumn}/>
            <CustomSection texts={[loadingJsContent21]}/>
            <Divider/>

            <CustomSection
                texts={[loadingJsContent22, loadingJsContent23, loadingJsContent24, loadingJsContent25, loadingJsContent25Code, loadingJsContent26]}/>
            <CustomList items={loadingJsContent26List}/>
            <CustomSection texts={[loadingJsContent27]}/>
        </>
    )
}
export default Page

