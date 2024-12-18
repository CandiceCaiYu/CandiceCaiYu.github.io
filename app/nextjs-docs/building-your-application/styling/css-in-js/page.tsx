import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content10,
    content11,
    content12,
    content13,
    content13Code,
    content14,
    content14Code,
    content15,
    content15TipList,
    content1TipList,
    content1TipTitle,
    content2,
    content2List,
    content3,
    content3List,
    content3TipText,
    content4,
    content5,
    content6,
    content6List,
    content7,
    content8,
    content8Code,
    content9,
    content9Code,
    title
} from "@/src/assets/nextjsDocument/styling/cssInJs";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title]}
                           goodToKnown={<GoodToKnown title={content1TipTitle} list={content1TipList}/>}/>
            <CustomSection texts={[content2]}>
                <CustomList items={content2List}/>
            </CustomSection>
            <CustomSection texts={[content3]} goodToKnown={<GoodToKnown text={content3TipText}/>}>
                <CustomList items={content3List}/>
            </CustomSection>
            <CustomSection texts={[content4]}/>
            <Divider/>

            <CustomSection texts={[content5, content6]}>
                <CustomList items={content6List} isOrder/>
            </CustomSection>
            <CustomSection
                goodToKnown={<GoodToKnown list={content15TipList}/>}
                texts={[content7, content8, content8Code, content9, content9Code, content10, content11, content12, content13, content13Code, content14, content14Code, content15]}/>
            <Divider/>
        </>
    )
};

export default Page
