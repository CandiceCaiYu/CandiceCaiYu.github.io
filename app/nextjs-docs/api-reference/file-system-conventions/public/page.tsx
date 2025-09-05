import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    publicFolderContent1,
    publicFolderContent2,
    publicFolderContent2Code,
    publicFolderContent3,
    publicFolderContent4,
    publicFolderContent5Code,
    publicFolderContent6,
    publicFolderContent7
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/public";
import {Divider} from "antd";

const Page = () => {
    return (
        <>
            <CustomSection texts={[publicFolderContent1, publicFolderContent2, publicFolderContent2Code]}/>
            <Divider/>

            <CustomSection texts={[publicFolderContent3, publicFolderContent4, publicFolderContent5Code]}/>
            <Divider/>

            <CustomSection texts={[publicFolderContent6, publicFolderContent7]}/>

        </>
    )
}
export default Page

