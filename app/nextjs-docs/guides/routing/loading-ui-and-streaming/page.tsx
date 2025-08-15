import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content1,
    content1Image,
    instantLoadingStateContent1,
    instantLoadingStateContent2,
    instantLoadingStateContent2Code,
    instantLoadingStateContent2Image,
    instantLoadingStateContent3,
    instantLoadingStateContent3Image,
    instantLoadingStateTips1,
    instantLoadingStateTips2,
    instantLoadingStateTips3,
    instantLoadingStateTitle,
    streamingWithSuspenseContent1,
    streamingWithSuspenseContent10,
    streamingWithSuspenseContent10Image,
    streamingWithSuspenseContent11,
    streamingWithSuspenseContent12,
    streamingWithSuspenseContent13,
    streamingWithSuspenseContent13Code,
    streamingWithSuspenseContent14,
    streamingWithSuspenseContent14List,
    streamingWithSuspenseContent15,
    streamingWithSuspenseContent16,
    streamingWithSuspenseContent16List,
    streamingWithSuspenseContent17,
    streamingWithSuspenseContent18,
    streamingWithSuspenseContent19,
    streamingWithSuspenseContent2,
    streamingWithSuspenseContent3,
    streamingWithSuspenseContent4,
    streamingWithSuspenseContent4Image,
    streamingWithSuspenseContent4List,
    streamingWithSuspenseContent5,
    streamingWithSuspenseContent6,
    streamingWithSuspenseContent6Image,
    streamingWithSuspenseContent7,
    streamingWithSuspenseContent7Image,
    streamingWithSuspenseContent8,
    streamingWithSuspenseContent9,
    streamingWithSuspenseTips,
    streamingWithSuspenseTitle,
    title
} from "@/src/assets/nextjsDocument/routing/loadingUIAndStreaming";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const page = () => {
    return (
        <>
            <CustomSection texts={[title, content1, content1Image]} image={{height: 240}}/>
            <Divider/>
            <CustomSection
                image={{height: 240}}
                texts={[instantLoadingStateTitle, instantLoadingStateContent1, instantLoadingStateContent2, instantLoadingStateContent2Image]}/>
            <CustomSection
                image={{height: 300}}
                goodToKnown={<GoodToKnown list={instantLoadingStateTips1}/>}
                texts={[instantLoadingStateContent2Code, instantLoadingStateContent3, instantLoadingStateContent3Image]}/>
            <CustomSection
                texts={[]}
                goodToKnown={<GoodToKnown title={instantLoadingStateTips2} text={instantLoadingStateTips3}/>}/>
            <Divider/>
            <CustomSection goodToKnown={<GoodToKnown text={streamingWithSuspenseTips}/>}
                           texts={[streamingWithSuspenseTitle, streamingWithSuspenseContent1]}/>
            <CustomSection
                texts={[streamingWithSuspenseContent2, streamingWithSuspenseContent3, streamingWithSuspenseContent4]}>
                <CustomList items={streamingWithSuspenseContent4List}/>
            </CustomSection>
            <CustomSection
                image={{height: 240}}
                texts={[streamingWithSuspenseContent4Image, streamingWithSuspenseContent5,
                    streamingWithSuspenseContent6, streamingWithSuspenseContent6Image]}/>
            <Divider/>
            <CustomSection
                image={{height: 280}}
                texts={[streamingWithSuspenseContent7, streamingWithSuspenseContent7Image,
                    streamingWithSuspenseContent8,
                    streamingWithSuspenseContent9, streamingWithSuspenseContent10, streamingWithSuspenseContent10Image,
                    streamingWithSuspenseContent11, streamingWithSuspenseContent12,
                    streamingWithSuspenseContent13, streamingWithSuspenseContent13Code, streamingWithSuspenseContent14]}>
                <CustomList items={streamingWithSuspenseContent14List}/>
            </CustomSection>
            <CustomSection texts={[streamingWithSuspenseContent15, streamingWithSuspenseContent16]}>
                <CustomList items={streamingWithSuspenseContent16List}/>
            </CustomSection>
            <CustomSection
                texts={[streamingWithSuspenseContent17, streamingWithSuspenseContent18, streamingWithSuspenseContent19]}/>
            <Divider/>
        </>
    )
};

export default page
