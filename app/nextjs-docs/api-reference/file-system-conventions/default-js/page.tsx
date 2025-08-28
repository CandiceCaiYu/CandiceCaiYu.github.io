import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    apiReferences,
    defaultJsContent1,
    defaultJsContent2,
    defaultJsContent3,
    defaultJsContent3Img,
    defaultJsContent4,
    defaultJsContent5,
    defaultJsContent6,
    defaultJsContent7,
    defaultJsContent8,
    defaultJsContent9,
    defaultJsContent9Code,
    defaultJsContent9List,
    defaultJsContent9Table,
    title
} from "@/src/assets/nextjsDocument/apiReferences/defaultJs";
import CustomTable from "@/app/nextjs-docs/components/SectionWithTable";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const Page = () => {
    return (<>
        <CustomSection
            image={{height: 380}}
            texts={[title, defaultJsContent1, defaultJsContent2, defaultJsContent3, defaultJsContent3Img]}/>
        <CustomSection
            texts={[defaultJsContent4, defaultJsContent5, defaultJsContent6, defaultJsContent7, defaultJsContent8, defaultJsContent9, defaultJsContent9Code]}/>
        <CustomTable {...defaultJsContent9Table} />
        <CustomList items={defaultJsContent9List}/>
        <FooterApiReferenceSection apis={apiReferences}/>
    </>)
}

export default Page
