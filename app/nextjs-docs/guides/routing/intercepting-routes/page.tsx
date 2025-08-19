import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
        content1,
        content10,
        content10List,
        content11,
        content11Image,
        content12,
        content13,
        content13Tips,
        content2,
        content2Image,
        content3,
        content3Image,
        content4,
        content5,
        content6,
        content6List,
        content7,
        content7Image,
        content7Tips,
        content8,
        content9,
        title
} from "@/src/assets/nextjsDocument/routing/interceptingRoutes";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1, content2, content2Image, content3, content3Image,]}/>
            <Divider/>
            <CustomSection texts={[content4, content5, content6]}>
                <CustomList items={content6List}/>
            </CustomSection>
            <CustomSection image={{height: 390}} goodToKnown={<GoodToKnown text={content7Tips}/>}
                           texts={[content7, content7Image]}/>
            <Divider/>
            <CustomSection texts={[content8, content9, content10,]}>
                <CustomList items={content10List}/>
            </CustomSection>
            <CustomSection image={{height: 380}} texts={[content11, content11Image, content12, content13,]}
                           goodToKnown={<GoodToKnown list={content13Tips}/>}/>
        </>
    )
};

export default Page
