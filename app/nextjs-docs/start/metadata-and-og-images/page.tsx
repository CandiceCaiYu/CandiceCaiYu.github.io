import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    defaultFieldsContent1,
    defaultFieldsContent1Code,
    defaultFieldsContent1List,
    defaultFieldsContent2,
    defaultFieldsTitle,
    description1,
    description1List,
    description2,
    description3,
    faviconsContent1,
    faviconsContent1Img,
    faviconsContent2,
    faviconsTitle,
    fileBasedMetadataContent1,
    fileBasedMetadataContent1List,
    fileBasedMetadataContent2,
    fileBasedMetadataTitle,
    generatedMetadataContent1,
    generatedMetadataContent1Code,
    generatedMetadataTitle,
    generatedOpenGraphImagesContent1,
    generatedOpenGraphImagesContent2,
    generatedOpenGraphImagesContent2Code,
    generatedOpenGraphImagesContent3,
    generatedOpenGraphImagesContent3GTKList,
    generatedOpenGraphImagesTitle,
    memoizingDataRequestsContent1,
    memoizingDataRequestsContent1Code,
    memoizingDataRequestsContent2Code,
    memoizingDataRequestsTitle,
    staticMetadataContent1,
    staticMetadataContent1Code,
    staticMetadataContent2,
    staticMetadataTitle,
    staticOpenGraphImagesContent1,
    staticOpenGraphImagesContent1Img,
    staticOpenGraphImagesContent2,
    staticOpenGraphImagesContent2Img,
    staticOpenGraphImagesContent3,
    staticOpenGraphImagesContent4,
    staticOpenGraphImagesTitle,
    streamingMetadataContent1,
    streamingMetadataContent2,
    streamingMetadataContent3,
    streamingMetadataContent4,
    streamingMetadataContent5,
    streamingMetadataContent6,
    streamingMetadataTitle,
    title
} from "@/src/assets/nextjsDocument/start/metadataAndOGImages";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import {Divider} from "antd";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, description1]}/>
            <CustomList items={description1List}/>
            <CustomSection texts={[description2, description3]}/>
            <Divider/>

            <CustomSection texts={[defaultFieldsTitle, defaultFieldsContent1]}/>
            <CustomList items={defaultFieldsContent1List}/>
            <CustomSection texts={[defaultFieldsContent1Code, defaultFieldsContent2]}/>
            <Divider/>

            <CustomSection
                texts={[staticMetadataTitle, staticMetadataContent1, staticMetadataContent1Code, staticMetadataContent2]}/>
            <Divider/>

            <CustomSection texts={[generatedMetadataTitle, generatedMetadataContent1, generatedMetadataContent1Code]}/>
            <CustomSection
                texts={[streamingMetadataTitle, streamingMetadataContent1, streamingMetadataContent2, streamingMetadataContent3, streamingMetadataContent4, streamingMetadataContent5, streamingMetadataContent6]}/>
            <CustomSection
                texts={[memoizingDataRequestsTitle, memoizingDataRequestsContent1, memoizingDataRequestsContent1Code, memoizingDataRequestsContent2Code]}/>
            <Divider/>

            <CustomSection texts={[fileBasedMetadataTitle, fileBasedMetadataContent1]}/>
            <CustomList items={fileBasedMetadataContent1List}/>
            <CustomSection texts={[fileBasedMetadataContent2]}/>
            <Divider/>

            <CustomSection image={{height: 210}}
                           texts={[faviconsTitle, faviconsContent1, faviconsContent1Img, faviconsContent2]}/>
            <Divider/>
            <CustomSection image={{height: 220}}
                           texts={[staticOpenGraphImagesTitle, staticOpenGraphImagesContent1, staticOpenGraphImagesContent1Img]}/>
            <CustomSection image={{height: 240}}
                           texts={[staticOpenGraphImagesContent2, staticOpenGraphImagesContent2Img, staticOpenGraphImagesContent3, staticOpenGraphImagesContent4]}/>
            <Divider/>
            <CustomSection
                texts={[generatedOpenGraphImagesTitle, generatedOpenGraphImagesContent1, generatedOpenGraphImagesContent2, generatedOpenGraphImagesContent2Code, generatedOpenGraphImagesContent3]}
                goodToKnown={<GoodToKnown list={generatedOpenGraphImagesContent3GTKList}/>}/>
            <CustomSection texts={[]}/>
            <CustomSection texts={[]}/>
        </>
    )
}

export default Page
