import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    srcContent1,
    srcContent2,
    srcContent3,
    srcContent4,
    srcContent4GTK,
    srcContent4Img
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/src";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection image={{height: 360}}
                           texts={[srcContent1, srcContent2, srcContent3, srcContent4, srcContent4Img]}/>
            <GoodToKnown list={srcContent4GTK}/>
        </>
    )
}
export default Page

