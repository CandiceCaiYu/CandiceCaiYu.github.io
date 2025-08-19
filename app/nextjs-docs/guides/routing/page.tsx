import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    advancedRoutingPatternsContent1,
    advancedRoutingPatternsContent2,
    advancedRoutingPatternsContent3,
    advancedRoutingPatternsContent4,
    advancedRoutingPatternsTitle,
    appRouterContent1,
    appRouterContent2,
    appRouterContent3,
    appRouterContent4,
    appRouterContentImage,
    appRouterRecommendationContent,
    appRouterRecommendationTitle,
    appRouterTitle,
    colocationContent1,
    colocationContent2,
    colocationContent3,
    colocationImage,
    colocationTitle,
    componentHierarchyContent1,
    componentHierarchyContent2,
    componentHierarchyContent2Image,
    componentHierarchyContent3,
    componentHierarchyContent3Image,
    componentHierarchyTitle,
    description,
    filesConventionsContent1,
    filesConventionsContent2,
    filesConventionsContent3,
    filesConventionsTitle,
    nestedRoutesContent1,
    nestedRoutesContent2,
    nestedRoutesContent3,
    nestedRoutesTitle,
    roleOfFoldersAndFiles,
    roleOfFoldersAndFilesContent1,
    roleOfFoldersAndFilesContent2,
    roleOfFoldersAndFilesContent3,
    routeSegment,
    routeSegmentContent1,
    routeSegmentImage,
    terminology,
    terminologyDescription,
    terminologyTitle,
    terminologyTreeImage,
    title
} from "@/src/assets/nextjsDocument/routing/routing";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, description]}/>
            <Divider/>
            <CustomSection image={{height: 400}}
                           texts={[terminologyTitle, terminologyDescription, terminologyTreeImage]}>
                <CustomList items={terminology}/>
            </CustomSection>
            <Divider/>
            <CustomSection
                goodToKnown={<GoodToKnown text={appRouterContent3}/>}
                texts={[appRouterTitle, appRouterContent1, appRouterContent2]}/>
            <CustomSection
                goodToKnown={<GoodToKnown text={appRouterRecommendationContent} title={appRouterRecommendationTitle}/>}
                texts={[appRouterContentImage, appRouterContent4]}/>
            <Divider/>
            <CustomSection texts={[roleOfFoldersAndFiles, roleOfFoldersAndFilesContent1]}>
                <CustomList items={[roleOfFoldersAndFilesContent2, roleOfFoldersAndFilesContent3]}/>
            </CustomSection>
            <Divider/>
            <CustomSection image={{height: 300}}
                           texts={[routeSegment, routeSegmentContent1, routeSegmentImage]}/>
            <Divider/>
            <CustomSection texts={[nestedRoutesTitle, nestedRoutesContent1, nestedRoutesContent2]}>
                <CustomList items={nestedRoutesContent3}/>
            </CustomSection>
            <SectionWithTable
                goodToKnown={<GoodToKnown text={filesConventionsContent3}/>}
                dataSource={filesConventionsContent2}
                texts={[filesConventionsTitle, filesConventionsContent1]}/>
            <Divider/>
            <CustomSection texts={[componentHierarchyTitle, componentHierarchyContent1]}>
                <CustomList items={componentHierarchyContent2}/>
            </CustomSection>
            <CustomSection
                image={{height: 360}}
                texts={[componentHierarchyContent2Image]}/>
            <CustomSection
                image={{height: 420}}
                texts={[componentHierarchyContent3, componentHierarchyContent3Image]}/>
            <Divider/>
            <CustomSection
                image={{height: 460}}
                texts={[colocationTitle, colocationContent1, colocationContent2, colocationImage, colocationContent3]}/>
            <Divider/>
            <CustomSection texts={[advancedRoutingPatternsTitle, advancedRoutingPatternsContent1]}>
                <CustomList items={[advancedRoutingPatternsContent2, advancedRoutingPatternsContent3]}/>
            </CustomSection>
            <CustomSection texts={[advancedRoutingPatternsContent4]}/>
        </>
    )
};
export default Page;
