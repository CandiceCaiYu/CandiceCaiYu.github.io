import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    additionalResourcesContent,
    additionalResourcesList,
    additionalResourcesTitle,
    addTestScriptToPackageJsonCode1,
    addTestScriptToPackageJsonContent1,
    addTestScriptToPackageJsonContent2,
    addTestScriptToPackageJsonTitle,
    creatingYourFirstTestCode1,
    creatingYourFirstTestCode2,
    creatingYourFirstTestCode3,
    creatingYourFirstTestContent1,
    creatingYourFirstTestContent2,
    creatingYourFirstTestContent3,
    creatingYourFirstTestTitle,
    extendJestWithCustomMatchersCode1,
    extendJestWithCustomMatchersCode2,
    extendJestWithCustomMatchersContent1,
    extendJestWithCustomMatchersContent2,
    extendJestWithCustomMatchersContent3,
    extendJestWithCustomMatchersGoodToKnow2,
    extendJestWithCustomMatchersTitle,
    goodToKnow,
    handlingAbsoluteImportsAndModulePathAliasesCode1,
    handlingAbsoluteImportsAndModulePathAliasesCode2,
    handlingAbsoluteImportsAndModulePathAliasesContent1,
    handlingAbsoluteImportsAndModulePathAliasesTitle,
    introduction,
    manualSetupCode2,
    manualSetupCode3,
    manualSetupCode5,
    manualSetupContent1,
    manualSetupContent2,
    manualSetupContent3,
    manualSetupContent4,
    manualSetupContent5,
    manualSetupContent6,
    manualSetupContent6GoodToKnow,
    manualSetupContent6List,
    manualSetupTitle,
    quickStartCode,
    quickStartContent,
    quickStartTitle,
    runningYourTestsCode,
    runningYourTestsTitle,
    title
} from "@/src/assets/nextjsDocument/testing/jest";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <div>
            <CustomSection texts={[title, introduction]} goodToKnown={<GoodToKnown text={goodToKnow}/>}/>
            <Divider/>
            <CustomSection texts={[quickStartTitle, quickStartContent, quickStartCode]}/>
            <Divider/>
            <CustomSection
                texts={[manualSetupTitle, manualSetupContent1, manualSetupContent2, manualSetupCode2, manualSetupContent3, manualSetupCode3, manualSetupContent4, manualSetupContent5, manualSetupCode5, manualSetupContent6]}/>
            <CustomList items={manualSetupContent6List}/>
            <GoodToKnown text={manualSetupContent6GoodToKnow}/>
            <Divider/>
            <CustomSection
                texts={[handlingAbsoluteImportsAndModulePathAliasesTitle, handlingAbsoluteImportsAndModulePathAliasesContent1, handlingAbsoluteImportsAndModulePathAliasesCode1, handlingAbsoluteImportsAndModulePathAliasesCode2]}/>
            <Divider/>
            <CustomSection
                texts={[extendJestWithCustomMatchersTitle, extendJestWithCustomMatchersContent1, extendJestWithCustomMatchersCode1, extendJestWithCustomMatchersContent2, extendJestWithCustomMatchersCode2,]}/>
            <GoodToKnown text={extendJestWithCustomMatchersGoodToKnow2}/>
            <CustomSection texts={[extendJestWithCustomMatchersContent3]}/>
            <Divider/>
            <CustomSection
                texts={[addTestScriptToPackageJsonTitle, addTestScriptToPackageJsonContent1, addTestScriptToPackageJsonCode1, addTestScriptToPackageJsonContent2,]}/>
            <Divider/>
            <CustomSection
                texts={[creatingYourFirstTestTitle, creatingYourFirstTestContent1, creatingYourFirstTestContent2, creatingYourFirstTestCode1, creatingYourFirstTestCode2, creatingYourFirstTestContent3, creatingYourFirstTestCode3]}/>
            <Divider/>
            <CustomSection texts={[runningYourTestsTitle, runningYourTestsCode]}/>
            <Divider/>
            <CustomSection texts={[additionalResourcesTitle, additionalResourcesContent]}/>
            <CustomList items={additionalResourcesList}/>


        </div>
    );
}

export default Page
