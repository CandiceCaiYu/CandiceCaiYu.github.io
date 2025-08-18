import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    asyncServerComponentsContent1,
    asyncServerComponentsTitle,
    introduction,
    title,
    typesOfTestsContentList1,
    typesOfTestsTitle
} from "@/src/assets/nextjsDocument/testing/testing";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <div>
            <CustomSection texts={[title, introduction]}/>
            <Divider/>
            <CustomSection texts={[typesOfTestsTitle]}/>
            <CustomList items={typesOfTestsContentList1}/>
            <Divider/>
            <CustomSection texts={[asyncServerComponentsTitle, asyncServerComponentsContent1]}/>
        </div>
    );
}
export default Page
