import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    videoOptimizationContent1,
    videoOptimizationContent10,
    videoOptimizationContent10Code,
    videoOptimizationContent10Table,
    videoOptimizationContent10Text,
    videoOptimizationContent11,
    videoOptimizationContent12,
    videoOptimizationContent12List,
    videoOptimizationContent12Text,
    videoOptimizationContent13,
    videoOptimizationContent14,
    videoOptimizationContent15,
    videoOptimizationContent16,
    videoOptimizationContent17,
    videoOptimizationContent17Code,
    videoOptimizationContent18,
    videoOptimizationContent19,
    videoOptimizationContent19Code,
    videoOptimizationContent19TipDescription,
    videoOptimizationContent19TipList,
    videoOptimizationContent2,
    videoOptimizationContent20,
    videoOptimizationContent21,
    videoOptimizationContent21Code,
    videoOptimizationContent22,
    videoOptimizationContent23,
    videoOptimizationContent23List,
    videoOptimizationContent24,
    videoOptimizationContent25,
    videoOptimizationContent26,
    videoOptimizationContent27,
    videoOptimizationContent28,
    videoOptimizationContent29,
    videoOptimizationContent3,
    videoOptimizationContent30,
    videoOptimizationContent30Code,
    videoOptimizationContent31,
    videoOptimizationContent32,
    videoOptimizationContent33,
    videoOptimizationContent33Code,
    videoOptimizationContent34,
    videoOptimizationContent35,
    videoOptimizationContent36,
    videoOptimizationContent36List,
    videoOptimizationContent37,
    videoOptimizationContent38,
    videoOptimizationContent38List,
    videoOptimizationContent39,
    videoOptimizationContent39List,
    videoOptimizationContent4,
    videoOptimizationContent40,
    videoOptimizationContent40List,
    videoOptimizationContent41,
    videoOptimizationContent41List,
    videoOptimizationContent42,
    videoOptimizationContent42List,
    videoOptimizationContent5,
    videoOptimizationContent5Code,
    videoOptimizationContent6,
    videoOptimizationContent6Table,
    videoOptimizationContent6TipText,
    videoOptimizationContent7,
    videoOptimizationContent8,
    videoOptimizationContent8List,
    videoOptimizationContent9,
    videoOptimizationTitle
} from "@/src/assets/nextjsDocument/optimizations/videos";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    const tableColumns = [
        {
            title: 'Attribute',
            key: 'attribute',
            dataIndex: 'attribute'
        },
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description'
        },
        {
            title: 'Example Value',
            key: 'exampleValue',
            dataIndex: 'exampleValue'
        },
    ];
    return (
        <>
            <CustomSection texts={[videoOptimizationTitle, videoOptimizationContent1]}/>
            <Divider/>

            <SectionWithTable
                goodToKnown={<GoodToKnown text={videoOptimizationContent6TipText}/>}
                dataSource={videoOptimizationContent6Table}
                columns={tableColumns}
                texts={[videoOptimizationContent2, videoOptimizationContent3, videoOptimizationContent4, videoOptimizationContent5, videoOptimizationContent5Code, videoOptimizationContent6]}/>
            <CustomSection texts={[videoOptimizationContent7, videoOptimizationContent8]}>
                <CustomList items={videoOptimizationContent8List}/>
            </CustomSection>
            <SectionWithTable
                dataSource={videoOptimizationContent10Table}
                columns={tableColumns}
                texts={[videoOptimizationContent9, videoOptimizationContent10, videoOptimizationContent10Code, videoOptimizationContent10Text]}/>
            <CustomSection
                texts={[videoOptimizationContent11, videoOptimizationContent12, videoOptimizationContent12Text]}>
                <CustomList items={videoOptimizationContent12List}/>
            </CustomSection>
            <CustomSection
                goodToKnown={<GoodToKnown description={videoOptimizationContent19TipDescription}
                                          list={videoOptimizationContent19TipList}/>}
                texts={[videoOptimizationContent13, videoOptimizationContent14, videoOptimizationContent15, videoOptimizationContent16, videoOptimizationContent17, videoOptimizationContent17Code, videoOptimizationContent18, videoOptimizationContent19, videoOptimizationContent19Code]}/>
            <CustomSection
                texts={[videoOptimizationContent20, videoOptimizationContent21, videoOptimizationContent21Code]}>
            </CustomSection>
            <Divider/>

            <CustomSection
                texts={[videoOptimizationContent22, videoOptimizationContent23]}>
                <CustomList items={videoOptimizationContent23List}/>
            </CustomSection>
            <CustomSection
                texts={[videoOptimizationContent24, videoOptimizationContent25, videoOptimizationContent26, videoOptimizationContent27, videoOptimizationContent28, videoOptimizationContent29, videoOptimizationContent30, videoOptimizationContent30Code, videoOptimizationContent31, videoOptimizationContent32, videoOptimizationContent33, videoOptimizationContent33Code, videoOptimizationContent34]}/>
            <Divider/>
            
            <CustomSection
                texts={[videoOptimizationContent35, videoOptimizationContent36]}>
                <CustomList items={videoOptimizationContent36List}/>
            </CustomSection>
            <CustomSection texts={[videoOptimizationContent37, videoOptimizationContent38]}>
                <CustomList items={videoOptimizationContent38List}/>
            </CustomSection>
            <CustomSection texts={[videoOptimizationContent39]}>
                <CustomList items={videoOptimizationContent39List}/>
            </CustomSection>
            <CustomSection texts={[videoOptimizationContent40]}>
                <CustomList items={videoOptimizationContent40List}/>
            </CustomSection>
            <CustomSection texts={[videoOptimizationContent41]}>
                <CustomList items={videoOptimizationContent41List}/>
            </CustomSection>
            <CustomSection texts={[videoOptimizationContent42]}>
                <CustomList items={videoOptimizationContent42List}/>
            </CustomSection>
            <Divider/>
        </>
    )
};

export default Page
