import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    description1,
    description2,
    description3,
    description3Code,
    description4,
    googleFontsContent1,
    googleFontsContent2,
    googleFontsContent2Code,
    googleFontsContent3,
    googleFontsContent3Code,
    googleFontsTitle,
    localFontsContent1,
    localFontsContent1Code,
    localFontsContent2,
    localFontsContent2Code,
    localFontsTitle,
    title
} from "@/src/assets/nextjsDocument/start/fontOptimization";
import {Divider} from "antd";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, description1, description2, description3, description3Code, description4]}/>
            <Divider/>

            <CustomSection
                texts={[googleFontsTitle, googleFontsContent1, googleFontsContent2, googleFontsContent2Code, googleFontsContent3, googleFontsContent3Code]}/>
            <Divider/>

            <CustomSection
                texts={[localFontsTitle, localFontsContent1, localFontsContent1Code, localFontsContent2, localFontsContent2Code]}/>
            <CustomSection texts={[]}/>
            <CustomSection texts={[]}/>
            <CustomSection texts={[]}/>
            <CustomSection texts={[]}/>
            <CustomSection texts={[]}/>
        </>
    )
}

export default Page
