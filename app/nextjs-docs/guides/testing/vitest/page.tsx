import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    additionalResourcesContent,
    additionalResourcesList,
    additionalResourcesTitle,
    creatingYourFirstTestCode1,
    creatingYourFirstTestCode2,
    creatingYourFirstTestContent1,
    creatingYourFirstTestGoodToKnow2,
    creatingYourFirstTestTitle,
    goodToKnow,
    introduction,
    manualSetupCode1,
    manualSetupCode2,
    manualSetupCode4,
    manualSetupContent1,
    manualSetupContent2,
    manualSetupContent3,
    manualSetupContent4,
    manualSetupContent5,
    manualSetupTitle,
    quickStartCode,
    quickStartContent,
    quickStartTitle,
    runningYourTestsCode1,
    runningYourTestsContent1,
    runningYourTestsTitle,
    title
} from "@/src/assets/nextjsDocument/testing/vitest";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <div>
            <CustomSection texts={[title, introduction]}/><GoodToKnown text={goodToKnow}/> <Divider/>
            <CustomSection texts={[quickStartTitle, quickStartContent, quickStartCode,]}/> <Divider/>
            <CustomSection
                texts={[manualSetupTitle, manualSetupContent1, manualSetupCode1, manualSetupContent2, manualSetupCode2, manualSetupContent3, manualSetupContent4, manualSetupCode4, manualSetupContent5]}/>
            <Divider/>
            <CustomSection
                texts={[creatingYourFirstTestTitle, creatingYourFirstTestContent1, creatingYourFirstTestCode1, creatingYourFirstTestCode2]}/>
            <GoodToKnown text={creatingYourFirstTestGoodToKnow2}/> <Divider/>
            <CustomSection texts={[runningYourTestsTitle, runningYourTestsContent1, runningYourTestsCode1,]}/>
            <Divider/>
            <CustomSection texts={[additionalResourcesTitle, additionalResourcesContent,]}/>
            <CustomList items={additionalResourcesList}/>
        </div>
    )
}
export default Page
