import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    automaticInstallation,
    automaticInstallationContent1,
    automaticInstallationContent2,
    automaticInstallationContent3,
    automaticInstallationContent3_1,
    automaticInstallationContent4,
    automaticInstallationContent5,
    automaticInstallationGoodToKnownContent1,
    automaticInstallationGoodToKnownContent2,
    createDirectories,
    createDirectoriesContent1,
    createDirectoriesContent10,
    createDirectoriesContent11,
    createDirectoriesContent12,
    createDirectoriesContent12_code,
    createDirectoriesContent13,
    createDirectoriesContent13_code,
    createDirectoriesContent14,
    createDirectoriesContent14_code,
    createDirectoriesContent15,
    createDirectoriesContent17,
    createDirectoriesContent18,
    createDirectoriesContent19,
    createDirectoriesContent2,
    createDirectoriesContent20,
    createDirectoriesContent3,
    createDirectoriesContent4,
    createDirectoriesContent4_image,
    createDirectoriesContent5,
    createDirectoriesContent5_code,
    createDirectoriesContent6,
    createDirectoriesContent6_code,
    createDirectoriesContent8,
    createDirectoriesContent9,
    manualInstallation,
    manualInstallationContent1,
    manualInstallationContent2,
    manualInstallationContent3,
    manualInstallationContent4,
    manualInstallationContent5,
    manualInstallationContent6,
    manualInstallationContent7,
    manualInstallationContent8,
    manualInstallationContent9,
    runDevelopmentServerContent1,
    runDevelopmentServerContent2,
    runDevelopmentServerContent3,
    runDevelopmentServerTitle,
    systemRequirements,
    systemRequirementsContent1,
    systemRequirementsContent2,
    title
} from "@/src/assets/nextjsDocument/start/installation";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import {Divider} from "antd";

export default function Page() {
    return (<div>
        <CustomSection texts={[title, systemRequirements]}>
            <CustomList items={[systemRequirementsContent1, systemRequirementsContent2]}/>
        </CustomSection>
        <Divider/>
        <CustomSection
            texts={[
                automaticInstallation,
                automaticInstallationContent1,
                automaticInstallationContent2,
                automaticInstallationContent3,
                automaticInstallationContent3_1,
                automaticInstallationContent4,
                automaticInstallationContent5,
            ]}
            goodToKnown={<GoodToKnown
                list={[automaticInstallationGoodToKnownContent1, automaticInstallationGoodToKnownContent2]}/>}
        />
        <Divider/>


        <CustomSection texts={[
            manualInstallation,
            manualInstallationContent1,
            manualInstallationContent2,
            manualInstallationContent3,
            manualInstallationContent4,
            manualInstallationContent5,
        ]}>
            <CustomList items={
                [
                    manualInstallationContent6,
                    manualInstallationContent7,
                    manualInstallationContent8,
                    manualInstallationContent9,
                ]
            }/>
        </CustomSection>
        <CustomSection
            goodToKnown={<GoodToKnown text={createDirectoriesContent8}/>}
            texts={[
                createDirectories,
                createDirectoriesContent1,
                createDirectoriesContent2,
                createDirectoriesContent3,
                createDirectoriesContent4,
                createDirectoriesContent4_image,
                createDirectoriesContent5,
                createDirectoriesContent5_code,
                createDirectoriesContent6,
                createDirectoriesContent6_code,
            ]}/>
        <CustomSection texts={[
            createDirectoriesContent9,]}/>
        <CustomSection
            goodToKnown={<GoodToKnown text={createDirectoriesContent17}/>}
            texts={[
                createDirectoriesContent10,
                createDirectoriesContent11,
                createDirectoriesContent12,
                createDirectoriesContent12_code,
                createDirectoriesContent13,
                createDirectoriesContent13_code,
                createDirectoriesContent14,
                createDirectoriesContent14_code,
                createDirectoriesContent15,
            ]}/>
        <CustomSection texts={[createDirectoriesContent18, createDirectoriesContent19, createDirectoriesContent20]}/>
        <Divider/>
        <CustomSection texts={[runDevelopmentServerTitle]}>
            <CustomList
                isOrder
                items={[runDevelopmentServerContent1, runDevelopmentServerContent2, runDevelopmentServerContent3]}/>
        </CustomSection>
    </div>)
}
