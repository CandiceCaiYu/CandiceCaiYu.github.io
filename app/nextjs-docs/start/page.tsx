import {
    accessibilityContent,
    accessibilityTitle,
    communityContent,
    communityTitle,
    concept1,
    concept2,
    concept3,
    conceptTitle,
    howToUseDocsEnd,
    howToUseDocsLeft,
    howToUseDocsRight,
    howToUseDocsTitle,
    mainFeaturesContents,
    mainFeaturesDescription,
    mainFeaturesTitle,
    preRequireSection1,
    preRequireSection2,
    preRequireTitle,
    routerSection1,
    routerSection2,
    routerSection3,
    routerTitle,
    title,
    welcome
} from "@/src/assets/nextjsDocument/introduction";
import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Table} from "antd";

export default function Page() {
    return (
        <div style={{padding: '0 40px',}}>
            <CustomSection header={title} texts={[welcome]} isTopTitle={true}/>
            <CustomSection header={conceptTitle} texts={[concept1, concept2, concept3]}/>
            <CustomSection header={mainFeaturesTitle} texts={[mainFeaturesDescription]} isShowDivider={false}>
                <Table columns={
                    [
                        {title: '功能', key: 'feature', dataIndex: 'feature'},
                        {title: '描述', key: 'description', dataIndex: 'description'}
                    ]}
                       dataSource={mainFeaturesContents}
                       pagination={false}
                />
            </CustomSection>
            <CustomSection header={howToUseDocsTitle} texts={[howToUseDocsLeft, howToUseDocsRight, howToUseDocsEnd]}/>
            <CustomSection header={routerTitle} texts={[routerSection1, routerSection2, routerSection3]}/>
            <CustomSection header={preRequireTitle} texts={[preRequireSection1, preRequireSection2]}/>
            <CustomSection header={accessibilityTitle} texts={[accessibilityContent]}/>
            <CustomSection header={communityTitle} texts={[communityContent]}/>
        </div>
    )
}
