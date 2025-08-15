import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    caveatsContent1,
    caveatsContentList, caveatsContentTable,
    caveatsTitle,
    content1,
    content2,
    content3,
    content3List,
    content4,
    content4Code,
    content5,
    content5List,
    content6,
    content7,
    content7List,
    content8,
    content8List,
    exampleContent1,
    exampleContent10,
    exampleContent10Code,
    exampleContent11,
    exampleContent11Code,
    exampleContent12,
    exampleContent13,
    exampleContent14,
    exampleContent15,
    exampleContent16,
    exampleContent17,
    exampleContent2,
    exampleContent2Code,
    exampleContent3,
    exampleContent4,
    exampleContent5,
    exampleContent6,
    exampleContent6Code,
    exampleContent7,
    exampleContent8,
    exampleContent9,
    exampleContent9Code,
    exampleTitle,
    title,
    troubleshootingContent1,
    troubleshootingContent2,
    troubleshootingContent2Code,
    troubleshootingContent3,
    troubleshootingContent4,
    troubleshootingContent5,
    troubleshootingContent5Code,
    troubleshootingContent6,
    troubleshootingTitle
} from "@/src/assets/nextjsDocument/dataFetching/incrementalStaticRegeneration";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1]} >
                <CustomList items={content2} />
            </CustomSection>
            <CustomSection texts={[content3]} >
                <CustomList items={content3List}  />
            </CustomSection>
            <CustomSection texts={[content4, content4Code, content5]} >
                <CustomList items={[content5List]} isOrder />
            </CustomSection>
            <Divider />

            <CustomSection texts={[content6, content7]} >
                <CustomList items={[content7List]} />
            </CustomSection>
            <CustomSection texts={[ content8]} >
                <CustomList items={[content8List]} />
            </CustomSection>
            <Divider />

            <CustomSection texts={[exampleTitle,exampleContent1,exampleContent2,exampleContent2Code,exampleContent3,exampleContent4,exampleContent5,exampleContent6,exampleContent6Code,exampleContent7,exampleContent8,exampleContent9,exampleContent9Code,exampleContent10,exampleContent10Code,exampleContent11,exampleContent11Code,exampleContent12,exampleContent13,exampleContent14,exampleContent15,exampleContent16,exampleContent17,]} />
            <Divider />

            <CustomSection texts={[troubleshootingTitle,troubleshootingContent1,troubleshootingContent2,troubleshootingContent2Code,troubleshootingContent3,troubleshootingContent4,troubleshootingContent5,troubleshootingContent5Code,troubleshootingContent6,]} />
            <Divider />

            <CustomSection texts={[caveatsTitle]} >
                <CustomList items={[caveatsContentList]} />
            </CustomSection>
            <Divider />

            <SectionWithTable
                texts={[caveatsContent1]}
                dataSource={caveatsContentTable}
                columns={
                   [{title: '版本', dataIndex: 'version', key: 'version'},
                    {title: '变更', dataIndex: 'changes', key: 'changes'}]}
            />
        </>
    )
}

export default Page
