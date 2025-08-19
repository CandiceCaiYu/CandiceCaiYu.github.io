import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    continuousIntegrationContent1,
    continuousIntegrationContent2,
    continuousIntegrationResourcesList,
    continuousIntegrationTitle,
    creatingYourFirstTestCode1,
    creatingYourFirstTestCode2,
    creatingYourFirstTestCode3,
    creatingYourFirstTestContent1,
    creatingYourFirstTestContent2,
    creatingYourFirstTestingGoodToKnow,
    creatingYourFirstTestTitle,
    introduction,
    manualSetupCode1,
    manualSetupContent1,
    manualSetupContent2,
    manualSetupTitle,
    quickStartCode,
    quickStartContent,
    quickStartTitle,
    runningYourTestsContent1,
    runningYourTestsContent2,
    runningYourTestsContent3,
    runningYourTestsTitle,
    title
} from "@/src/assets/nextjsDocument/testing/playwright";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <div>
            <CustomSection texts={[title, introduction]}/><Divider/>
            <CustomSection texts={[quickStartTitle, quickStartContent, quickStartCode]}/><Divider/>
            <CustomSection
                texts={[manualSetupTitle, manualSetupContent1, manualSetupCode1, manualSetupContent2]}/><Divider/>
            <CustomSection
                texts={[creatingYourFirstTestTitle, creatingYourFirstTestContent1, creatingYourFirstTestCode1, creatingYourFirstTestCode2, creatingYourFirstTestContent2, creatingYourFirstTestCode3]}/>
            <GoodToKnown text={creatingYourFirstTestingGoodToKnow}/>
            <Divider/>
            <CustomSection
                texts={[runningYourTestsTitle, runningYourTestsContent1, runningYourTestsContent2, runningYourTestsContent3]}/><Divider/>
            <CustomSection
                texts={[continuousIntegrationTitle, continuousIntegrationContent1, continuousIntegrationContent2]}/>
            <CustomList items={continuousIntegrationResourcesList}/>
        </div>
    )
}

export default Page
