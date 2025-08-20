import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    creatingDynamicSegmentContent1,
    creatingDynamicSegmentContent2,
    creatingDynamicSegmentContent2Code,
    creatingDynamicSegmentContent3,
    creatingDynamicSegmentContent4,
    creatingDynamicSegmentTitle,
    layoutsAndPagesDescription,
    layoutsAndPagesTitle,
    layoutsContent1,
    layoutsContent2,
    layoutsContent2Code,
    layoutsContent2Image,
    layoutsContent3,
    layoutsDescription,
    layoutsTitle,
    linkingBetweenPagesContent1,
    linkingBetweenPagesContent2,
    linkingBetweenPagesContent2Code,
    linkingBetweenPagesContent2GoodToKnow,
    linkingBetweenPagesTitle,
    nestedLayoutContent1,
    nestedLayoutContent2,
    nestedLayoutContent2Code,
    nestedLayoutContent2Image,
    nestedLayoutContent3,
    nestedLayoutTitle,
    nestedRouteContent1,
    nestedRouteContent1List,
    nestedRouteContent2,
    nestedRouteContent2List,
    nestedRouteContent3,
    nestedRouteContent3Code,
    nestedRouteContent3Image,
    nestedRouteContent4,
    nestedRouteContent4Code,
    nestedRouteContent4Image,
    nestedRouteContent5,
    nestedRouteTitle,
    pageCode1,
    pageContent1,
    pageImage1,
    pageTitle,
    renderingWithSearchParamsContent1,
    renderingWithSearchParamsContent1Code,
    renderingWithSearchParamsContent2,
    renderingWithSearchParamsContent3,
    renderingWithSearchParamsContent4,
    renderingWithSearchParamsContent5,
    renderingWithSearchParamsContent5List,
    renderingWithSearchParamsTitle
} from "@/src/assets/nextjsDocument/routing/layoutsAndPages";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[layoutsAndPagesTitle, layoutsAndPagesDescription]}/>
            <Divider/>
            <CustomSection
                image={{height: 200}}
                texts={[pageTitle, pageContent1, pageImage1, pageCode1]}/>
            <Divider/>
            <CustomSection
                image={{height: 220}}
                texts={[layoutsTitle, layoutsDescription, layoutsContent1, layoutsContent2, layoutsContent2Image, layoutsContent2Code, layoutsContent3]}/>
            <Divider/>
            <CustomSection texts={[nestedRouteTitle, nestedRouteContent1]}/>
            <CustomList items={nestedRouteContent1List}/>
            <CustomSection texts={[nestedRouteContent2]}/>
            <CustomList items={nestedRouteContent2List}/>
            <CustomSection
                image={{height: 260}}
                texts={[nestedRouteContent3, nestedRouteContent3Image, nestedRouteContent3Code, nestedRouteContent4, nestedRouteContent4Image, nestedRouteContent4Code, nestedRouteContent5]}/>
            <CustomSection
                image={{height: 360}}
                texts={[nestedLayoutTitle, nestedLayoutContent1, nestedLayoutContent2, nestedLayoutContent2Image,
                    nestedLayoutContent2Code, nestedLayoutContent3]}/>
            <Divider/>

            <CustomSection
                texts={[creatingDynamicSegmentTitle, creatingDynamicSegmentContent1, creatingDynamicSegmentContent2, creatingDynamicSegmentContent2Code, creatingDynamicSegmentContent3, creatingDynamicSegmentContent4,]}/>
            <Divider/>
            <CustomSection
                texts={[renderingWithSearchParamsTitle, renderingWithSearchParamsContent1, renderingWithSearchParamsContent1Code, renderingWithSearchParamsContent2, renderingWithSearchParamsContent3, renderingWithSearchParamsContent4, renderingWithSearchParamsContent5]}/>
            <CustomList items={renderingWithSearchParamsContent5List}/>
            <Divider/>
            <CustomSection
                texts={[linkingBetweenPagesTitle, linkingBetweenPagesContent1, linkingBetweenPagesContent2, linkingBetweenPagesContent2Code]}/>
            <GoodToKnown text={linkingBetweenPagesContent2GoodToKnow}/>
        </>
    )
};
export default Page;
