import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    appRoutingConventionsDynamicRoutes,
    appRoutingConventionsDynamicRoutesTitle,
    appRoutingConventionsGroupAndPrivateRoutes,
    appRoutingConventionsGroupAndPrivateRoutesTitle,
    appRoutingConventionsNestedRoutes,
    appRoutingConventionsNestedRoutesTitle,
    appRoutingConventionsParallelAndInterceptedRoutes,
    appRoutingConventionsParallelAndInterceptedRoutesTitle,
    appRoutingConventionsRouteMetadataAppIcon,
    appRoutingConventionsRouteMetadataAppIconTitle,
    appRoutingConventionsRouteMetadataTitle,
    appRoutingConventionsRouteOpenGraphAndTwitter,
    appRoutingConventionsRouteOpenGraphAndTwitterTitle,
    appRoutingConventionsRouteSEO,
    appRoutingConventionsRouteSEOTitle,
    appRoutingConventionsRoutingFiles,
    appRoutingConventionsRoutingFilesTitle,
    organizingYourProjectContent1,
    organizingYourProjectContent10,
    organizingYourProjectContent11,
    organizingYourProjectContent11Img,
    organizingYourProjectContent12,
    organizingYourProjectContent12GTK,
    organizingYourProjectContent12List,
    organizingYourProjectContent13,
    organizingYourProjectContent14,
    organizingYourProjectContent15,
    organizingYourProjectContent15Img,
    organizingYourProjectContent16,
    organizingYourProjectContent16List,
    organizingYourProjectContent17,
    organizingYourProjectContent18,
    organizingYourProjectContent18Img,
    organizingYourProjectContent2,
    organizingYourProjectContent3,
    organizingYourProjectContent3Img,
    organizingYourProjectContent3List,
    organizingYourProjectContent4,
    organizingYourProjectContent4Img,
    organizingYourProjectContent5,
    organizingYourProjectContent6,
    organizingYourProjectContent7,
    organizingYourProjectContent7Img,
    organizingYourProjectContent8,
    organizingYourProjectContent8Img,
    organizingYourProjectContent9,
    organizingYourProjectContent9GTK,
    organizingYourProjectContent9Img,
    organizingYourProjectTitle,
    projectStructureDescription1,
    projectStructureExampleContent1,
    projectStructureExampleContent10,
    projectStructureExampleContent10Img,
    projectStructureExampleContent11,
    projectStructureExampleContent12,
    projectStructureExampleContent12Img,
    projectStructureExampleContent13,
    projectStructureExampleContent14,
    projectStructureExampleContent15,
    projectStructureExampleContent15Img,
    projectStructureExampleContent16,
    projectStructureExampleContent1GTK,
    projectStructureExampleContent2,
    projectStructureExampleContent3,
    projectStructureExampleContent3Img,
    projectStructureExampleContent4,
    projectStructureExampleContent5,
    projectStructureExampleContent6,
    projectStructureExampleContent7,
    projectStructureExampleContent7Img,
    projectStructureExampleContent8,
    projectStructureExampleContent9,
    projectStructureExampleContent9Img,
    projectStructureExamplesTitle,
    title,
    topLevelFiles,
    topLevelFilesDescription,
    topLevelFilesTitle,
    topLevelFolders,
    topLevelFoldersDescription,
    topLevelFoldersImage,
    topLevelFoldersTitle
} from "@/src/assets/nextjsDocument/start/projectStructure";
import {Divider} from "antd";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <div>
            <CustomSection texts={[title, projectStructureDescription1]}/>
            <Divider/>

            <CustomSection image={{height: 260}}
                           texts={[topLevelFoldersTitle, topLevelFoldersDescription, topLevelFoldersImage]}/>
            <SectionWithTable dataSource={topLevelFolders}/>

            <CustomSection texts={[topLevelFilesTitle, topLevelFilesDescription]}/>
            <SectionWithTable dataSource={topLevelFiles}/>
            <CustomSection texts={[appRoutingConventionsRoutingFilesTitle]}/>
            <SectionWithTable
                dataSource={appRoutingConventionsRoutingFiles}/>
            <CustomSection texts={[appRoutingConventionsNestedRoutesTitle]}/>
            <SectionWithTable
                dataSource={appRoutingConventionsNestedRoutes}/>
            <CustomSection texts={[appRoutingConventionsDynamicRoutesTitle]}/>
            <SectionWithTable
                dataSource={appRoutingConventionsDynamicRoutes}/>
            <CustomSection texts={[appRoutingConventionsGroupAndPrivateRoutesTitle]}/>
            <SectionWithTable
                dataSource={appRoutingConventionsGroupAndPrivateRoutes}/>
            <CustomSection texts={[appRoutingConventionsParallelAndInterceptedRoutesTitle]}/>
            <SectionWithTable
                dataSource={appRoutingConventionsParallelAndInterceptedRoutes}/>
            <CustomSection
                texts={[appRoutingConventionsRouteMetadataTitle]}/>
            <CustomSection texts={[appRoutingConventionsRouteMetadataAppIconTitle]}/>
            <SectionWithTable
                dataSource={appRoutingConventionsRouteMetadataAppIcon}/>
            <CustomSection texts={[appRoutingConventionsRouteOpenGraphAndTwitterTitle]}/>
            <SectionWithTable
                dataSource={appRoutingConventionsRouteOpenGraphAndTwitter}/>
            <CustomSection texts={[appRoutingConventionsRouteSEOTitle]}/>
            <SectionWithTable dataSource={appRoutingConventionsRouteSEO}/>
            <Divider/>
            <CustomSection
                texts={[organizingYourProjectTitle, organizingYourProjectContent1, organizingYourProjectContent2, organizingYourProjectContent3]}/>
            <CustomList items={organizingYourProjectContent3List}/>
            <CustomSection image={{height: 300}} texts={[organizingYourProjectContent3Img]}
            />
            <CustomSection
                image={{height: 380}}
                texts={[organizingYourProjectContent4, organizingYourProjectContent4Img, organizingYourProjectContent5, organizingYourProjectContent6]}/>
            <CustomSection texts={[organizingYourProjectContent7, organizingYourProjectContent7Img]}/>
            <CustomSection image={{height: 320}}
                           texts={[organizingYourProjectContent8, organizingYourProjectContent8Img]}/>
            <CustomSection image={{height: 520}}
                           texts={[organizingYourProjectContent9, organizingYourProjectContent9Img]}/>
            <GoodToKnown text={organizingYourProjectContent9GTK}/>
            <CustomSection
                image={{height: 380}}
                texts={[organizingYourProjectContent10, organizingYourProjectContent11, organizingYourProjectContent11Img, organizingYourProjectContent12]}/>
            <CustomList items={organizingYourProjectContent12List}/>
            <GoodToKnown list={organizingYourProjectContent12GTK}/>
            <CustomSection
                image={{height: 360}}
                texts={[organizingYourProjectContent13, organizingYourProjectContent14, organizingYourProjectContent15, organizingYourProjectContent15Img, organizingYourProjectContent16]}/>
            <CustomList items={organizingYourProjectContent16List}/>
            <CustomSection
                image={{height: 340}}
                texts={[organizingYourProjectContent17, organizingYourProjectContent18, organizingYourProjectContent18Img]}/>
            <Divider/>

            <CustomSection texts={[projectStructureExamplesTitle, projectStructureExampleContent1]}/>
            <GoodToKnown text={projectStructureExampleContent1GTK}/>
            <CustomSection
                image={{height: 360}}
                texts={[projectStructureExampleContent2, projectStructureExampleContent3, projectStructureExampleContent3Img, projectStructureExampleContent4, projectStructureExampleContent5, projectStructureExampleContent6]}/>
            <CustomSection
                image={{height: 460}}
                texts={[projectStructureExampleContent7, projectStructureExampleContent7Img, projectStructureExampleContent8]}/>
            <CustomSection image={{height: 420}}
                           texts={[projectStructureExampleContent9, projectStructureExampleContent9Img]}/>
            <CustomSection image={{height: 360}}
                           texts={[projectStructureExampleContent10, projectStructureExampleContent10Img]}/>
            <CustomSection
                image={{height: 240}}
                texts={[projectStructureExampleContent11, projectStructureExampleContent12, projectStructureExampleContent12Img]}/>
            <CustomSection
                image={{height: 320}}
                texts={[projectStructureExampleContent13, projectStructureExampleContent14, projectStructureExampleContent15, projectStructureExampleContent15Img, projectStructureExampleContent16]}/>

        </div>
    )
};

export default Page;
