import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    continuousIntegrationCode1,
    continuousIntegrationContent1,
    continuousIntegrationContent2,
    continuousIntegrationList2,
    continuousIntegrationTitle,
    creatingYourFirstCypressComponentTestCode3,
    creatingYourFirstCypressComponentTestCode4,
    creatingYourFirstCypressComponentTestContent1,
    creatingYourFirstCypressComponentTestContent2,
    creatingYourFirstCypressComponentTestContent3,
    creatingYourFirstCypressComponentTestContent4,
    creatingYourFirstCypressComponentTestGoodToKnow4,
    creatingYourFirstCypressComponentTestTitle,
    creatingYourFirstCypressE2ETestCode1,
    creatingYourFirstCypressE2ETestCode2,
    creatingYourFirstCypressE2ETestCode3,
    creatingYourFirstCypressE2ETestCode4,
    creatingYourFirstCypressE2ETestContent1,
    creatingYourFirstCypressE2ETestContent2,
    creatingYourFirstCypressE2ETestContent3,
    creatingYourFirstCypressE2ETestTitle,
    introduction,
    introductionWarning,
    manualSetupCode1,
    manualSetupCode2,
    manualSetupCode3,
    manualSetupContent1,
    manualSetupContent2,
    manualSetupContent3,
    manualSetupContent4,
    manualSetupTitle,
    quickStartCode,
    quickStartContent,
    quickStartTitle,
    runningComponentTestsContent1,
    runningComponentTestsTitle,
    runningE2ETestsContent1,
    runningE2ETestsContent2,
    runningE2ETestsContent2GoodToKnow,
    runningE2ETestsTitle,
    title
} from "@/src/assets/nextjsDocument/testing/cypress";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <div>
            <CustomSection texts={[title, introduction]}
                           goodToKnown={<GoodToKnown title={"Warning:"} description={introductionWarning}/>}
            />
            <Divider/>
            <CustomSection texts={[quickStartTitle, quickStartContent, quickStartCode]}/>
            <Divider/>
            <CustomSection
                texts={[manualSetupTitle, manualSetupContent1, manualSetupCode1, manualSetupContent2, manualSetupCode2, manualSetupContent3, manualSetupCode3, manualSetupContent4]}/>
            <Divider/>
            <CustomSection
                texts={[creatingYourFirstCypressE2ETestTitle, creatingYourFirstCypressE2ETestContent1, creatingYourFirstCypressE2ETestCode1, creatingYourFirstCypressE2ETestContent2, creatingYourFirstCypressE2ETestCode2, creatingYourFirstCypressE2ETestCode3, creatingYourFirstCypressE2ETestContent3, creatingYourFirstCypressE2ETestCode4,]}/>
            <Divider/><CustomSection texts={[runningE2ETestsTitle, runningE2ETestsContent1, runningE2ETestsContent2,]
        } goodToKnown={<GoodToKnown title={"Good to know:"} list={runningE2ETestsContent2GoodToKnow}/>}/>
            <Divider/><CustomSection
            texts={[creatingYourFirstCypressComponentTestTitle, creatingYourFirstCypressComponentTestContent1, creatingYourFirstCypressComponentTestContent2, creatingYourFirstCypressComponentTestContent2, creatingYourFirstCypressComponentTestContent3, creatingYourFirstCypressComponentTestCode3, creatingYourFirstCypressComponentTestContent4, creatingYourFirstCypressComponentTestCode4]}
            goodToKnown={<GoodToKnown title={"Good to know:"}
                                      list={creatingYourFirstCypressComponentTestGoodToKnow4}/>}/>
            <CustomSection texts={[runningComponentTestsTitle, runningComponentTestsContent1]}/>
            <Divider/><CustomSection
            texts={[continuousIntegrationTitle, continuousIntegrationContent1, continuousIntegrationCode1, continuousIntegrationContent2]}/>
            <CustomList items={continuousIntegrationList2}/>

        </div>
    );
}

export default Page
