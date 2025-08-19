import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
        content1,
        content10,
        content11,
        content11Code1,
        content11Code2,
        content12,
        content12Code,
        content13,
        content13Code,
        content14,
        content15,
        content16,
        content16Code,
        content17,
        content17List,
        content2,
        content2List,
        content3,
        content4,
        content5,
        content5Code,
        content6,
        content6Code,
        content7,
        content7Code,
        content8,
        content9,
        title
} from "@/src/assets/nextjsDocument/routing/internationalization";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1]}/>
            <Divider/>
            <CustomSection texts={[content2]}>
                <CustomList items={content2List}/>
            </CustomSection>
            <Divider/>
            <CustomSection
                texts={[content3, content4, content5, content5Code, content6, content6Code, content7, content7Code, content8]}/>
            <Divider/>

            <CustomSection texts={[content9, content10, content11, content11Code1, content11Code2,
                content12, content12Code, content13, content13Code, content14]}/>
            <Divider/>
            <CustomSection texts={[content15, content16, content16Code]}/>
            <Divider/>
            <CustomSection texts={[content17]}>
                <CustomList items={content17List}/>
            </CustomSection>
        </>
    )
};

export default Page;
