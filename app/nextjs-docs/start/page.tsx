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
import {Divider, Table} from "antd";

export default function Page() {
    return (
        <div style={{padding: '0 40px',}}>
            <CustomSection texts={[title, welcome]} isTopTitle={true}/>
            <Divider/>
            <CustomSection texts={[conceptTitle, concept1, concept2, concept3]}/>
            <Divider/>
            <CustomSection texts={[mainFeaturesTitle, mainFeaturesDescription]}>
                <Table columns={
                    [
                        {title: '功能', key: 'feature', dataIndex: 'feature'},
                        {title: '描述', key: 'description', dataIndex: 'description'}
                    ]}
                       dataSource={mainFeaturesContents}
                       pagination={false}
                />
            </CustomSection>
            <CustomSection texts={[howToUseDocsTitle, howToUseDocsLeft, howToUseDocsRight, howToUseDocsEnd]}/>
            <Divider/>
            <CustomSection texts={[routerTitle, routerSection1, routerSection2, routerSection3]}/>
            <Divider/>
            <CustomSection texts={[preRequireTitle, preRequireSection1, preRequireSection2]}/>
            <Divider/>
            <CustomSection texts={[accessibilityTitle, accessibilityContent]}/>
            <Divider/>
            <CustomSection texts={[communityTitle, communityContent]}/>
        </div>
    )
}
