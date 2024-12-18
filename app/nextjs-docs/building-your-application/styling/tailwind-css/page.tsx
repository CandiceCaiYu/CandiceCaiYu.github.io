import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content1,
    content10,
    content11,
    content11Code,
    content12,
    content13,
    content2,
    content3,
    content3Code,
    content4,
    content5,
    content5Code,
    content6,
    content7,
    content8,
    content8Code,
    content9,
    content9Code,
    title
} from "@/src/assets/nextjsDocument/styling/tailwindCss";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1]}/>
            <Divider/>

            <CustomSection texts={[content2, content3, content3Code]}/>
            <Divider/>

            <CustomSection texts={[content4, content5, content5Code,]}/>
            <Divider/>

            <CustomSection texts={[content6, content7, content8, content8Code, content9, content9Code]}/>
            <Divider/>

            <CustomSection texts={[content10, content11, content11Code]}/>
            <Divider/>

            <CustomSection texts={[content12, content13]}/>
            <Divider/>
        </>
    )
};

export default Page
