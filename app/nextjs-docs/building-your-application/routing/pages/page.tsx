import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    pagesContent1,
    pagesContent2,
    pagesContent2Code,
    pagesContent2Image,
    pagesContent3,
    pagesContentTips,
    pagesTitle
} from "@/src/assets/nextjsDocument/pages";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection
                goodToKnown={<GoodToKnown list={pagesContentTips}/>}
                texts={[pagesTitle, pagesContent1, pagesContent2, pagesContent2Image, pagesContent2Code, pagesContent3]}/>

        </>
    )
};
export default Page;
