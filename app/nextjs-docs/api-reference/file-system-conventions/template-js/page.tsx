import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    templateJsContent1,
    templateJsContent10,
    templateJsContent10List,
    templateJsContent2,
    templateJsContent3,
    templateJsContent3List,
    templateJsContent4,
    templateJsContent5,
    templateJsContent5Code,
    templateJsContent5Img,
    templateJsContent6,
    templateJsContent6Code,
    templateJsContent7,
    templateJsContent8,
    templateJsContent9
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/templateJs";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import {Divider} from "antd";

const Page = () => {
    return (
        <>
            <CustomSection texts={[templateJsContent1, templateJsContent2, templateJsContent3]}/>
            <CustomList items={templateJsContent3List}/>
            <Divider/>

            <CustomSection
                texts={[templateJsContent4, templateJsContent5, templateJsContent5Img, templateJsContent5Code, templateJsContent6, templateJsContent6Code]}/>
            <Divider/>

            <CustomSection
                texts={[templateJsContent7, templateJsContent8, templateJsContent9, templateJsContent5Code, templateJsContent10]}/>
            <CustomList items={templateJsContent10List}/>

        </>
    )
}
export default Page

