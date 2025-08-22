import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    APIReferences,
    deduplicateRequestsAndCacheDataContent1,
    deduplicateRequestsAndCacheDataContent2,
    deduplicateRequestsAndCacheDataContent3,
    deduplicateRequestsAndCacheDataContent4,
    deduplicateRequestsAndCacheDataContent5,
    deduplicateRequestsAndCacheDataContent5Code,
    deduplicateRequestsAndCacheDataTitle,
    exampleContent1,
    exampleContent10,
    exampleContent10Code,
    exampleContent11,
    exampleContent11Code,
    exampleContent11GTK,
    exampleContent12,
    exampleContent13,
    exampleContent14,
    exampleContent14Code,
    exampleContent15,
    exampleContent15Code,
    exampleContent2,
    exampleContent3Img,
    exampleContent4,
    exampleContent5,
    exampleContent5Code,
    exampleContent6,
    exampleContent7,
    exampleContent8,
    exampleContent9,
    exampleTitle,
    fetchingDataContent1,
    fetchingDataContent10,
    fetchingDataContent10Code,
    fetchingDataContent11,
    fetchingDataContent11Code,
    fetchingDataContent12,
    fetchingDataContent13,
    fetchingDataContent14,
    fetchingDataContent14Code,
    fetchingDataContent2,
    fetchingDataContent2List,
    fetchingDataContent3,
    fetchingDataContent4,
    fetchingDataContent4Code,
    fetchingDataContent4GTK,
    fetchingDataContent5,
    fetchingDataContent6,
    fetchingDataContent6Code,
    fetchingDataContent7,
    fetchingDataContent8,
    fetchingDataContent8List,
    fetchingDataContent9,
    fetchingDataTitle,
    introduction,
    streamingContent1,
    streamingContent10,
    streamingContent11,
    streamingContent12Code,
    streamingContent13,
    streamingContent14,
    streamingContent15,
    streamingContent2,
    streamingContent2Img,
    streamingContent3,
    streamingContent3List,
    streamingContent4,
    streamingContent5,
    streamingContent6Code,
    streamingContent6Img,
    streamingContent7,
    streamingContent7Img,
    streamingContent8,
    streamingContent8Img,
    streamingContent9,
    streamingContentWarning,
    streamingTitle,
    title
} from "@/src/assets/nextjsDocument/start/fetchingData";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, introduction]}/>
            <Divider/>

            <CustomSection texts={[fetchingDataTitle, fetchingDataContent1, fetchingDataContent2]}/>
            <CustomList items={fetchingDataContent2List}/>
            <CustomSection texts={[fetchingDataContent3, fetchingDataContent4, fetchingDataContent4Code]}/>
            <GoodToKnown list={fetchingDataContent4GTK}/>
            <CustomSection
                texts={[fetchingDataContent5, fetchingDataContent6, fetchingDataContent6Code, fetchingDataContent7, fetchingDataContent8]}/>
            <CustomList items={fetchingDataContent8List}/>
            <CustomSection
                texts={[fetchingDataContent9, fetchingDataContent10, fetchingDataContent10Code, fetchingDataContent11, fetchingDataContent11Code,
                    fetchingDataContent12, fetchingDataContent13, fetchingDataContent14, fetchingDataContent14Code]}/>
            <Divider/>

            <CustomSection
                texts={[deduplicateRequestsAndCacheDataTitle, deduplicateRequestsAndCacheDataContent1, deduplicateRequestsAndCacheDataContent2, deduplicateRequestsAndCacheDataContent3, deduplicateRequestsAndCacheDataContent4, deduplicateRequestsAndCacheDataContent5, deduplicateRequestsAndCacheDataContent5Code]}/>
            <Divider/>

            <CustomSection texts={[streamingTitle]}/>
            <GoodToKnown title={'警告'} text={streamingContentWarning}/>
            <CustomSection image={{height: 380}}
                           texts={[streamingContent1, streamingContent2, streamingContent2Img, streamingContent3]}/>
            <CustomList items={streamingContent3List}/>
            <CustomSection
                image={{height: 270}}
                texts={[streamingContent4, streamingContent5, streamingContent6Img]}/>
            <CustomSection
                image={{height: 320}}
                texts={[streamingContent6Code, streamingContent7, streamingContent7Img]}/>
            <CustomSection
                image={{height: 380}}
                texts={[streamingContent8, streamingContent8Img, streamingContent9, streamingContent10, streamingContent11, streamingContent12Code, streamingContent13, streamingContent14, streamingContent15]}/>
            <CustomSection image={{height: 380, width: 1200}}
                           texts={[exampleTitle, exampleContent1, exampleContent2, exampleContent3Img]}/>
            <CustomSection
                texts={[exampleContent4, exampleContent5, exampleContent5Code, exampleContent6, exampleContent7, exampleContent8, exampleContent9, exampleContent10, exampleContent10Code, exampleContent11, exampleContent11Code]}/>
            <GoodToKnown text={exampleContent11GTK}/>
            <CustomSection
                texts={[exampleContent12, exampleContent13, exampleContent14, exampleContent14Code, exampleContent15, exampleContent15Code]}/>
            <Divider/>
            <FooterApiReferenceSection apis={APIReferences}/>
        </>
    );
}
export default Page
