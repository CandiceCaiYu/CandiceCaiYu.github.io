import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    content1,
    content2,
    content2Code,
    content2TipsList,
    content3,
    content4,
    content4Code,
    content5,
    content6,
    content6Code,
    content7,
    content8,
    content9,
    content9Code1,
    content9Code2,
    title
} from "@/src/assets/nextjsDocument/styling/sass";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1, content2, content2Code]}
                           goodToKnown={<GoodToKnown list={content2TipsList}/>}/>
            <CustomSection
                texts={[content3, content4, content4Code, content5, content6, content6Code, content7, content8, content9, content9Code1, content9Code2]}/>
        </>
    )
};

export default Page
