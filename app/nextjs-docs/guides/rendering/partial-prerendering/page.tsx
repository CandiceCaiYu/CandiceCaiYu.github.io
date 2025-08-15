import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    backgroundContent1,
    backgroundContent2,
    backgroundContent3,
    backgroundTitle,
    content1TipsText,
    content1TipsTitle,
    content2,
    content3,
    content3Img,
    content3TipsText,
    content3TipsTitle,
    dynamicComponentsContent1,
    dynamicComponentsContent2,
    dynamicComponentsContent2Code,
    dynamicComponentsContent3,
    dynamicComponentsContent3Code,
    dynamicComponentsContent4,
    dynamicComponentsContent5, dynamicComponentsContent5Code, dynamicComponentsContent6, dynamicComponentsContent6Code,
    dynamicComponentsTitle,
    title,
    usePartialPrerenderingContent1,
    usePartialPrerenderingContent2,
    usePartialPrerenderingContent2Code1,
    usePartialPrerenderingContent2Code2,
    usePartialPrerenderingContent2TipsList,
    usePartialPrerenderingTitle
} from "@/src/assets/nextjsDocument/rendering/partialPrerendering";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title]} goodToKnown={<GoodToKnown title={content1TipsTitle} text={content1TipsText} />} />
            <CustomSection
                image={{height: 300}}
                texts={[content2,content3,content3Img]} goodToKnown={<GoodToKnown title={content3TipsTitle} text={content3TipsText} />} />
            <Divider />

            <CustomSection texts={[backgroundTitle, backgroundContent1,backgroundContent2,backgroundContent3]} />
            <Divider />

            <CustomSection goodToKnown={<GoodToKnown list={usePartialPrerenderingContent2TipsList} />} texts={[usePartialPrerenderingTitle,usePartialPrerenderingContent1,usePartialPrerenderingContent2, usePartialPrerenderingContent2Code1,usePartialPrerenderingContent2Code2]} />
            <Divider />

            <CustomSection texts={[dynamicComponentsTitle, dynamicComponentsContent1,dynamicComponentsContent2, dynamicComponentsContent2Code,dynamicComponentsContent3, dynamicComponentsContent3Code,dynamicComponentsContent4,dynamicComponentsContent5, dynamicComponentsContent5Code,dynamicComponentsContent6, dynamicComponentsContent6Code]} />
            <CustomSection texts={[]} />
            <CustomSection texts={[]} />
            <CustomSection texts={[]} />
            <CustomSection texts={[]} />
            <CustomSection texts={[]} />
            <Divider />
        </>
    )
}

export default Page
