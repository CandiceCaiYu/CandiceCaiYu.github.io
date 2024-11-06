import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    activeNavLinkContent1,
    activeNavLinkContent2,
    activeNavLinkContent2Code1,
    activeNavLinkContent2Code2,
    activeNavLinkTitle,
    layoutsAndTemplatesDescription,
    layoutsAndTemplatesTitle,
    layoutsContent1,
    layoutsContent2,
    layoutsContent2Code,
    layoutsContent2Image,
    layoutsDescription,
    layoutsTitle,
    nestedLayoutContent1,
    nestedLayoutContent2,
    nestedLayoutContent2Code,
    nestedLayoutContent2Image,
    nestedLayoutContent3,
    nestedLayoutContent4,
    nestedLayoutContent4Image,
    nestedLayoutContentTips,
    nestedLayoutTitle,
    rootLayout,
    rootLayoutContent,
    rootLayoutContentCode,
    templatesContent1,
    templatesContent2,
    templatesContent2List,
    templatesContent3,
    templatesContent3Code,
    templatesContent3Image,
    templatesContent4,
    templatesContent4Code,
    templatesContentExampleMetadataContent1,
    templatesContentExampleMetadataContent2,
    templatesContentExampleMetadataContent2Code,
    templatesContentExampleMetadataContent3,
    templatesContentExampleMetadataTips,
    templatesContentExampleMetadataTitle,
    templatesContentExampleTitle,
    templatesTitle
} from "@/src/assets/nextjsDocument/layoutsAndTemplates";
import {Divider} from "antd";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[layoutsAndTemplatesTitle, layoutsAndTemplatesDescription]}/>
            <Divider/>
            <CustomSection
                image={{height: 260}}
                texts={[layoutsTitle, layoutsDescription, layoutsContent1, layoutsContent2, layoutsContent2Image, layoutsContent2Code]}/>
            <CustomSection texts={[rootLayout, rootLayoutContent, rootLayoutContentCode]}/>
            <CustomSection
                image={{height: 260}}
                texts={[nestedLayoutTitle, nestedLayoutContent1, nestedLayoutContent2, nestedLayoutContent2Image,
                    nestedLayoutContent2Code]}/>
            <CustomSection
                goodToKnown={<GoodToKnown list={nestedLayoutContentTips}/>}
                image={{height: 500}}
                texts={[nestedLayoutContent3, nestedLayoutContent4, nestedLayoutContent4Image]}/>
            <Divider/>
            <CustomSection texts={[templatesTitle, templatesContent1, templatesContent2]}>
                <CustomList items={templatesContent2List}/>
            </CustomSection>
            <CustomSection
                texts={[templatesContent3, templatesContent3Image, templatesContent3Code, templatesContent4, templatesContent4Code]}/>
            <CustomSection
                goodToKnown={<GoodToKnown text={templatesContentExampleMetadataTips}/>}
                texts={[templatesContentExampleTitle, templatesContentExampleMetadataTitle, templatesContentExampleMetadataContent1, templatesContentExampleMetadataContent2, templatesContentExampleMetadataContent2Code]}/>
            <CustomSection texts={[templatesContentExampleMetadataContent3]}/>
            <CustomSection
                texts={[activeNavLinkTitle, activeNavLinkContent1, activeNavLinkContent2, activeNavLinkContent2Code1, activeNavLinkContent2Code2]}/>
            <Divider/>


        </>
    )
};
export default Page;
