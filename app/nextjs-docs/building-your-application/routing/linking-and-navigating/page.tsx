import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    content,
    description,
    linkComponentContent1,
    linkComponentContent2,
    linkComponentContent2Code,
    linkComponentContent3,
    linkComponentTitle,
    more,
    nativeHistoryApiContent1,
    nativeHistoryApiContent2,
    nativeHistoryApiContent3,
    nativeHistoryApiContent4,
    nativeHistoryApiContent4Code,
    nativeHistoryApiContent5,
    nativeHistoryApiContent6,
    nativeHistoryApiContent6Code,
    nativeHistoryApiTitle,
    redirectFunctionContent1,
    redirectFunctionContent1Code,
    redirectFunctionContentMore,
    redirectFunctionContentTips,
    redirectFunctionTitle,
    routingAndNavigationWorkContent1,
    routingAndNavigationWorkContent10,
    routingAndNavigationWorkContent11,
    routingAndNavigationWorkContent12,
    routingAndNavigationWorkContent13,
    routingAndNavigationWorkContent14,
    routingAndNavigationWorkContent15,
    routingAndNavigationWorkContent16,
    routingAndNavigationWorkContent17,
    routingAndNavigationWorkContent18,
    routingAndNavigationWorkContent19,
    routingAndNavigationWorkContent19Image,
    routingAndNavigationWorkContent2,
    routingAndNavigationWorkContent20,
    routingAndNavigationWorkContent21,
    routingAndNavigationWorkContent22,
    routingAndNavigationWorkContent23,
    routingAndNavigationWorkContent24,
    routingAndNavigationWorkContent25,
    routingAndNavigationWorkContent26,
    routingAndNavigationWorkContent27,
    routingAndNavigationWorkContent3,
    routingAndNavigationWorkContent4,
    routingAndNavigationWorkContent5,
    routingAndNavigationWorkContent6,
    routingAndNavigationWorkContent7,
    routingAndNavigationWorkContent8,
    routingAndNavigationWorkContent9,
    routingAndNavigationWorkTitle,
    title,
    useRouterHookContent1,
    useRouterHookContent1Code,
    useRouterHookContent3,
    useRouterHookContentRecommend,
    useRouterHookContentRecommendTitle,
    useRouterHookTitle
} from "@/src/assets/nextjsDocument/linkingAndNavigating";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import {Divider} from "antd";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const page = () => {
    return (
        <>
            <CustomSection texts={[title, description]}>
                <CustomList items={content}/>
            </CustomSection>
            <CustomSection texts={[more]}/>
            <Divider/>

            <CustomSection
                texts={[linkComponentTitle, linkComponentContent1, linkComponentContent2, linkComponentContent2Code, linkComponentContent3]}/>
            <Divider/>
            <CustomSection goodToKnown={<GoodToKnown title={useRouterHookContentRecommendTitle}
                                                     text={useRouterHookContentRecommend}/>}
                           texts={[useRouterHookTitle, useRouterHookContent1,
                               useRouterHookContent1Code, useRouterHookContent3]}/>
            <Divider/>

            <CustomSection
                goodToKnown={<GoodToKnown list={redirectFunctionContentTips}/>}
                texts={[redirectFunctionTitle, redirectFunctionContent1,
                    redirectFunctionContent1Code]}/>
            <CustomSection texts={[redirectFunctionContentMore]}/>
            <Divider/>
            <CustomSection texts={[nativeHistoryApiTitle, nativeHistoryApiContent1,
                nativeHistoryApiContent2, nativeHistoryApiContent3, nativeHistoryApiContent4, nativeHistoryApiContent4Code,
                nativeHistoryApiContent5, nativeHistoryApiContent6, nativeHistoryApiContent6Code]}/>
            <Divider/>
            <CustomSection
                texts={[routingAndNavigationWorkTitle, routingAndNavigationWorkContent1, routingAndNavigationWorkContent2,
                    routingAndNavigationWorkContent3, routingAndNavigationWorkContent4, routingAndNavigationWorkContent5,
                    routingAndNavigationWorkContent6, routingAndNavigationWorkContent7
                ]}>
                <CustomList items={routingAndNavigationWorkContent8}/>
            </CustomSection>
            <CustomSection
                goodToKnown={<GoodToKnown list={routingAndNavigationWorkContent12}/>}
                texts={[
                    routingAndNavigationWorkContent9, routingAndNavigationWorkContent10, routingAndNavigationWorkContent11,
                ]}/>
            <CustomSection
                texts={[routingAndNavigationWorkContent13, routingAndNavigationWorkContent14,
                    routingAndNavigationWorkContent15, routingAndNavigationWorkContent16, routingAndNavigationWorkContent17,
                    routingAndNavigationWorkContent18, routingAndNavigationWorkContent19, routingAndNavigationWorkContent19Image,
                    routingAndNavigationWorkContent20, routingAndNavigationWorkContent21,
                    routingAndNavigationWorkContent22, routingAndNavigationWorkContent23, routingAndNavigationWorkContent24,
                    routingAndNavigationWorkContent25, routingAndNavigationWorkContent26, routingAndNavigationWorkContent27,
                ]}/>
            <Divider/>
        </>
    )
};
export default page
