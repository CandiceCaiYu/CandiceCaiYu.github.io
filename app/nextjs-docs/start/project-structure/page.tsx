import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    appRoutingConventions,
    appRoutingConventionsDescription,
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
    pageRoutingConventions,
    pageRoutingConventionsDescription,
    pageRoutingConventionsRoutesDynamicFiles,
    pageRoutingConventionsRoutesDynamicFolders,
    pageRoutingConventionsRoutesDynamicTitle,
    pageRoutingConventionsRoutesFileConventions,
    pageRoutingConventionsRoutesFiles,
    pageRoutingConventionsRoutesFolderConventions,
    pageRoutingConventionsRoutesFolders,
    pageRoutingConventionsRoutesTitle,
    pageRoutingConventionsSpecialFiles,
    pageRoutingConventionsSpecialFileTitle,
    projectStructureDescription1,
    projectStructureDescription2,
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

const Page = () => {
    return (
        <div>
            <CustomSection texts={[title, projectStructureDescription1, projectStructureDescription2]}/>
            <Divider/>
            <SectionWithTable texts={[topLevelFoldersTitle, topLevelFoldersDescription, topLevelFoldersImage]}
                              dataSource={topLevelFolders}/>
            <Divider/>
            <SectionWithTable texts={[topLevelFilesTitle, topLevelFilesDescription]}
                              dataSource={topLevelFiles}/>
            <Divider/>
            <CustomSection
                texts={[appRoutingConventions, appRoutingConventionsDescription]}/>
            <SectionWithTable texts={[appRoutingConventionsRoutingFilesTitle]}
                              dataSource={appRoutingConventionsRoutingFiles}/>
            <SectionWithTable texts={[appRoutingConventionsNestedRoutesTitle]}
                              dataSource={appRoutingConventionsNestedRoutes}/>
            <SectionWithTable texts={[appRoutingConventionsDynamicRoutesTitle]}
                              dataSource={appRoutingConventionsDynamicRoutes}/>
            <SectionWithTable texts={[appRoutingConventionsGroupAndPrivateRoutesTitle]}
                              dataSource={appRoutingConventionsGroupAndPrivateRoutes}/>
            <SectionWithTable texts={[appRoutingConventionsParallelAndInterceptedRoutesTitle]}
                              dataSource={appRoutingConventionsParallelAndInterceptedRoutes}/>
            <CustomSection
                texts={[appRoutingConventionsRouteMetadataTitle]}/>
            <SectionWithTable
                texts={[appRoutingConventionsRouteMetadataAppIconTitle]}
                dataSource={appRoutingConventionsRouteMetadataAppIcon}/>
            <SectionWithTable
                texts={[appRoutingConventionsRouteOpenGraphAndTwitterTitle]}
                dataSource={appRoutingConventionsRouteOpenGraphAndTwitter}/>
            <SectionWithTable
                texts={[appRoutingConventionsRouteSEOTitle]}
                dataSource={appRoutingConventionsRouteSEO}/>
            <Divider/>
            <CustomSection texts={[pageRoutingConventions, pageRoutingConventionsDescription]}/>
            <SectionWithTable
                texts={[pageRoutingConventionsSpecialFileTitle]}
                dataSource={pageRoutingConventionsSpecialFiles}/>
            <CustomSection
                texts={[pageRoutingConventionsRoutesTitle]}
            />
            <SectionWithTable
                texts={[pageRoutingConventionsRoutesFolderConventions]}
                dataSource={pageRoutingConventionsRoutesFolders}/>
            <SectionWithTable
                texts={[pageRoutingConventionsRoutesFileConventions]}
                dataSource={pageRoutingConventionsRoutesFiles}/>
            <CustomSection
                texts={[pageRoutingConventionsRoutesDynamicTitle]}/>
            <SectionWithTable
                texts={[pageRoutingConventionsRoutesFolderConventions]}
                dataSource={pageRoutingConventionsRoutesDynamicFolders}/>
            <SectionWithTable
                texts={[pageRoutingConventionsRoutesFileConventions]}
                dataSource={pageRoutingConventionsRoutesDynamicFiles}/>
        </div>
    )
};

export default Page;
