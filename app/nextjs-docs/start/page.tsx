import {
    accessibilityContent,
    accessibilityTitle,
    communityContent,
    communityTitle,
    concept1,
    concept2,
    concept3,
    conceptTitle,
    howToUseDocsContent1,
    howToUseDocsContentList,
    howToUseDocsRight,
    howToUseDocsTitle,
    mainFeaturesContents,
    mainFeaturesDescription,
    mainFeaturesTitle,
    preRequireSection1,
    preRequireSection2,
    preRequireSectionList1,
    preRequireTitle,
    reactVersionHandlingContent1,
    reactVersionHandlingContent2,
    reactVersionHandlingList1,
    reactVersionHandlingTitle,
    routerSection1,
    routerSection2,
    routerSection3,
    routerSectionList1,
    routerTitle,
    title,
    welcome
} from "@/src/assets/nextjsDocument/routing/introduction";
import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider, Table} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";

export default function Page() {
    return (
        <div>
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
            <CustomSection texts={[howToUseDocsTitle, howToUseDocsContent1]}/>
            <CustomList items={howToUseDocsContentList}/>
            <CustomSection texts={[howToUseDocsRight]}/>
            <Divider/>
            <CustomSection texts={[routerTitle, routerSection1]}/>
            <CustomList items={routerSectionList1}/>
            <CustomSection texts={[routerSection2, routerSection3]}/>
            <CustomSection texts={[reactVersionHandlingTitle, reactVersionHandlingContent1]}/>
            <CustomList items={reactVersionHandlingList1}/>
            <CustomSection texts={[reactVersionHandlingContent2]}/>
            <Divider/>
            <CustomSection texts={[preRequireTitle, preRequireSection1]}/>
            <CustomList items={preRequireSectionList1}/>
            <CustomSection texts={[preRequireSection2]}/>
            <Divider/>
            <CustomSection texts={[accessibilityTitle, accessibilityContent]}/>
            <Divider/>
            <CustomSection texts={[communityTitle, communityContent]}/>
        </div>
    )
}
