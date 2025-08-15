import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    backToServerEnvironmentContent1, backToServerEnvironmentContent2,
    backToServerEnvironmentTitle,
    benefitsOfClientRenderingContent1,
    benefitsOfClientRenderingContent1List,
    benefitsOfClientRenderingTitle,
    content1,
    content2,
    howAreClientComponentsRenderedContent1,
    howAreClientComponentsRenderedContent2,
    howAreClientComponentsRenderedContent3,
    howAreClientComponentsRenderedContent4,
    howAreClientComponentsRenderedContent4List,
    howAreClientComponentsRenderedContent5,
    howAreClientComponentsRenderedContent5List,
    howAreClientComponentsRenderedContent5TipsText,
    howAreClientComponentsRenderedContent5TipsTitle,
    howAreClientComponentsRenderedContent6,
    howAreClientComponentsRenderedContent7, howAreClientComponentsRenderedContent8,
    howAreClientComponentsRenderedTitle,
    title,
    usingClientComponentsInNextjsContent1,
    usingClientComponentsInNextjsContent2,
    usingClientComponentsInNextjsContent2Code,
    usingClientComponentsInNextjsContent3,
    usingClientComponentsInNextjsContent3Img,
    usingClientComponentsInNextjsContent3TipsList,
    usingClientComponentsInNextjsContent3TipsTitle,
    usingClientComponentsInNextjsTitle
} from "@/src/assets/nextjsDocument/rendering/clientComponents";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title,content1,content2]} />
            <Divider />

            <CustomSection texts={[benefitsOfClientRenderingTitle,benefitsOfClientRenderingContent1]} >
                <CustomList items={benefitsOfClientRenderingContent1List} />
            </CustomSection>
            <Divider />

            <CustomSection
                image={{height: 660}}
                goodToKnown={<GoodToKnown title={usingClientComponentsInNextjsContent3TipsTitle} list={usingClientComponentsInNextjsContent3TipsList} />} texts={[usingClientComponentsInNextjsTitle,usingClientComponentsInNextjsContent1,usingClientComponentsInNextjsContent2,usingClientComponentsInNextjsContent2Code,usingClientComponentsInNextjsContent3,usingClientComponentsInNextjsContent3Img,]} />
            <Divider />


            <CustomSection texts={[howAreClientComponentsRenderedTitle,howAreClientComponentsRenderedContent1,howAreClientComponentsRenderedContent2,howAreClientComponentsRenderedContent3,howAreClientComponentsRenderedContent4]} >
                <CustomList isOrder items={[howAreClientComponentsRenderedContent4List]} />
            </CustomSection>
            <CustomSection goodToKnown={<GoodToKnown title={howAreClientComponentsRenderedContent5TipsTitle} text={howAreClientComponentsRenderedContent5TipsText} />}
                texts={[howAreClientComponentsRenderedContent5]} >
                <CustomList isOrder items={[howAreClientComponentsRenderedContent5List]} />
            </CustomSection>
            <CustomSection texts={[howAreClientComponentsRenderedContent6,howAreClientComponentsRenderedContent7,howAreClientComponentsRenderedContent8]} />
            <Divider />
            <CustomSection texts={[backToServerEnvironmentTitle,backToServerEnvironmentContent1,backToServerEnvironmentContent2]} />
            <Divider />
        </>
    )
}

export default Page
