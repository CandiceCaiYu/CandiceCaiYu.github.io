import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {content1, content1List, title,content2, content2List,content3, content3List} from "@/src/assets/nextjsDocument/rendering/runtimes";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1]} >
                <CustomList items={content1List} />
            </CustomSection>
            <Divider />
            <CustomSection texts={[content2]} >
                <CustomList items={content2List} />
            </CustomSection>
            <Divider />
            <CustomSection texts={[content3]} >
                <CustomList items={content3List} />
            </CustomSection>
            <Divider />
        </>
    )
}

export default Page
