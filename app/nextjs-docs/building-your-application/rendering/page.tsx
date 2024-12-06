import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content1,
    content10,
    content10List,
    content11,
    content12,
    content13,
    content14,
    content15,
    content16,
    content17,
    content18, content19,
    content2, content20, content21, content22,
    content3,
    content3List,
    content4,
    content5,
    content5Img,
    content5List,
    content6,
    content7,
    content8,
    content9,
    title
} from "@/src/assets/nextjsDocument/rendering/rendering";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title,content1 ]} />
            <Divider />

            <CustomSection texts={[content2,content3]} >
                <CustomList items={content3List} />
            </CustomSection>
            <CustomSection texts={[content4,content5,content5Img]} >
                <CustomList items={content5List} />
            </CustomSection>
            <CustomSection texts={[content6,content7,content8,content9,content10,]} >
                <CustomList items={content10List} isOrder />
            </CustomSection>
            <CustomSection texts={[content11,content12,content13,content14,content15,content16,content17,]} />
            <Divider />
            <CustomSection texts={[content18,content19,content20,content21,content22]} />
        </>
    )
}

export default Page
