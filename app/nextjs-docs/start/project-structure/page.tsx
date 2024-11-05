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
} from "@/src/assets/nextjsDocument/projectStructure";
import {Divider, Table} from "antd";

const SectionWithTable = ({texts, dataSource}: {
    texts: string[],
    dataSource: Array<{ name: string, description: string, extension?: string }>
}) => {
    return (
        <CustomSection texts={texts}>
            <Table
                columns={
                    [
                        {title: '文件夹', key: 'name', dataIndex: 'name'},
                        {title: '文件扩展名', key: 'extension', dataIndex: 'extension'},
                        {title: '描述', key: 'description', dataIndex: 'description'}
                    ]}
                dataSource={dataSource}
                pagination={false}
                showHeader={false}
            />
        </CustomSection>
    )
};

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
            <Divider/>
        </div>
    )
};

export default Page;
