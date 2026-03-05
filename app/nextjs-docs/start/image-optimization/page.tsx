import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    description1,
    description1List,
    description2,
    description2Code,
    description3,
    description3GTKText,
    description3GTKTitle,
    localImagesContent1,
    localImagesContent1Code,
    localImagesContent1Img,
    localImagesContent2,
    localImagesContent2Code,
    localImagesTitle,
    remoteImagesContent1,
    remoteImagesContent1Code,
    remoteImagesContent2,
    remoteImagesContent3,
    remoteImagesContent3Code,
    remoteImagesTitle,
    title
} from "@/src/assets/nextjsDocument/start/imageOptimization";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import {Divider} from "antd";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, description1]}/>
            <CustomList items={description1List}/>
            <CustomSection texts={[description2, description2Code, description3]}
                           goodToKnown={<GoodToKnown title={description3GTKTitle} text={description3GTKText}/>}/>
            <Divider/>

            <CustomSection
                image={{height: 160}}
                texts={[localImagesTitle, localImagesContent1, localImagesContent1Img, localImagesContent1Code, localImagesContent2, localImagesContent2Code]}/>
            <Divider/>

            <CustomSection
                texts={[remoteImagesTitle, remoteImagesContent1, remoteImagesContent1Code, remoteImagesContent2, remoteImagesContent3, remoteImagesContent3Code]}/>

        </>)
}

export default Page
