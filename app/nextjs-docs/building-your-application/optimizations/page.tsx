import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content1,
    content10,
    content11,
    content2,
    content3,
    content3List,
    content4,
    content5,
    content6,
    content6List,
    content7,
    content8,
    content9,
    title
} from "@/src/assets/nextjsDocument/optimizations/optimizations";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1]}/>
            <Divider/>

            <CustomSection texts={[content2, content3]}>
                <CustomList items={content3List}/>
            </CustomSection>
            <Divider/>

            <CustomSection texts={[content4, content5, content6]}>
                <CustomList items={content6List}/>
            </CustomSection>
            <CustomSection texts={[content7]}/>
            <Divider/>

            <CustomSection texts={[content8, content9]}/>
            <Divider/>

            <CustomSection texts={[content10, content11]}/>
            <Divider/>
        </>
    )
};

export default Page
