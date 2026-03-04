import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
        clientComponentPatternsContent1,
        clientComponentPatternsContent2,
        clientComponentPatternsContent3,
        clientComponentPatternsContent4,
        clientComponentPatternsContent4Code,
        clientComponentPatternsContent5,
        clientComponentPatternsContent6,
        clientComponentPatternsContent7,
        clientComponentPatternsTitle,
        content,
        interleavingServerAndClientComponentsContent1,
        interleavingServerAndClientComponentsContent10,
        interleavingServerAndClientComponentsContent11,
        interleavingServerAndClientComponentsContent11Code,
        interleavingServerAndClientComponentsContent12,
        interleavingServerAndClientComponentsContent12TipsList,
        interleavingServerAndClientComponentsContent2,
        interleavingServerAndClientComponentsContent2List,
        interleavingServerAndClientComponentsContent3,
        interleavingServerAndClientComponentsContent4,
        interleavingServerAndClientComponentsContent4Code,
        interleavingServerAndClientComponentsContent5,
        interleavingServerAndClientComponentsContent6,
        interleavingServerAndClientComponentsContent7,
        interleavingServerAndClientComponentsContent9,
        interleavingServerAndClientComponentsContent9Code,
        interleavingServerAndClientComponentsTitle,
        serverComponentPatternsContent1,
        serverComponentPatternsContent10,
        serverComponentPatternsContent11,
        serverComponentPatternsContent12,
        serverComponentPatternsContent13,
        serverComponentPatternsContent14,
        serverComponentPatternsContent14Code,
        serverComponentPatternsContent15,
        serverComponentPatternsContent15Code,
        serverComponentPatternsContent16,
        serverComponentPatternsContent17,
        serverComponentPatternsContent18,
        serverComponentPatternsContent19,
        serverComponentPatternsContent2,
        serverComponentPatternsContent20,
        serverComponentPatternsContent21,
        serverComponentPatternsContent22,
        serverComponentPatternsContent22Code,
        serverComponentPatternsContent23,
        serverComponentPatternsContent23Code,
        serverComponentPatternsContent24,
        serverComponentPatternsContent25,
        serverComponentPatternsContent25Code,
        serverComponentPatternsContent26,
        serverComponentPatternsContent26Code,
        serverComponentPatternsContent27,
        serverComponentPatternsContent28,
        serverComponentPatternsContent29,
        serverComponentPatternsContent29Code,
        serverComponentPatternsContent3,
        serverComponentPatternsContent30,
        serverComponentPatternsContent30Code,
        serverComponentPatternsContent31,
        serverComponentPatternsContent31Code,
        serverComponentPatternsContent32,
        serverComponentPatternsContent32TipsText,
        serverComponentPatternsContent33,
        serverComponentPatternsContent34,
        serverComponentPatternsContent35,
        serverComponentPatternsContent36,
        serverComponentPatternsContent4,
        serverComponentPatternsContent5,
        serverComponentPatternsContent6,
        serverComponentPatternsContent7,
        serverComponentPatternsContent8,
        serverComponentPatternsContent9,
        serverComponentPatternsContent9Code,
        serverComponentPatternsTitle,
        title,
        whenToUseServerAndClientComponentsContent,
        whenToUseServerAndClientComponentsContentTable,
        whenToUseServerAndClientComponentsTitle
} from "@/src/assets/nextjsDocument/rendering/compositionPatterns";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content]}/>
            <Divider/>

            <CustomSection
                texts={[whenToUseServerAndClientComponentsTitle, whenToUseServerAndClientComponentsContent]}/>
            <SectionWithTable
                columns={[
                    {title: 'What do you need to do?', key: 'case', dataIndex: 'case'},
                    {title: 'Server Component', key: 'server', dataIndex: 'server'},
                    {title: 'Client Component', key: 'client', dataIndex: 'client'},
                ]}
                dataSource={whenToUseServerAndClientComponentsContentTable}

            />
            <Divider/>

            <CustomSection
                goodToKnown={<GoodToKnown text={serverComponentPatternsContent32TipsText}/>}
                texts={[serverComponentPatternsTitle, serverComponentPatternsContent1, serverComponentPatternsContent2, serverComponentPatternsContent3,
                    serverComponentPatternsContent4, serverComponentPatternsContent5, serverComponentPatternsContent6, serverComponentPatternsContent7, serverComponentPatternsContent8, serverComponentPatternsContent9, serverComponentPatternsContent9Code, serverComponentPatternsContent10, serverComponentPatternsContent11, serverComponentPatternsContent12, serverComponentPatternsContent13, serverComponentPatternsContent14, serverComponentPatternsContent14Code, serverComponentPatternsContent15, serverComponentPatternsContent15Code,
                    serverComponentPatternsContent16, serverComponentPatternsContent17, serverComponentPatternsContent18, serverComponentPatternsContent19, serverComponentPatternsContent20, serverComponentPatternsContent21, serverComponentPatternsContent22, serverComponentPatternsContent22Code, serverComponentPatternsContent23, serverComponentPatternsContent23Code, serverComponentPatternsContent24, serverComponentPatternsContent25, serverComponentPatternsContent25Code, serverComponentPatternsContent26, serverComponentPatternsContent26Code, serverComponentPatternsContent27, serverComponentPatternsContent28, serverComponentPatternsContent29, serverComponentPatternsContent29Code, serverComponentPatternsContent30, serverComponentPatternsContent30Code, serverComponentPatternsContent31, serverComponentPatternsContent31Code, serverComponentPatternsContent32]}/>
            <CustomSection
                texts={[serverComponentPatternsContent33, serverComponentPatternsContent34, serverComponentPatternsContent35, serverComponentPatternsContent36]}/>
            <Divider/>

            <CustomSection
                texts={[clientComponentPatternsTitle, clientComponentPatternsContent1, clientComponentPatternsContent2, clientComponentPatternsContent3, clientComponentPatternsContent4, clientComponentPatternsContent4Code, clientComponentPatternsContent5, clientComponentPatternsContent6, clientComponentPatternsContent7]}/>
            <Divider/>

            <CustomSection
                texts={[interleavingServerAndClientComponentsTitle, interleavingServerAndClientComponentsContent1, interleavingServerAndClientComponentsContent2]}>
                <CustomList items={[interleavingServerAndClientComponentsContent2List]}/>
            </CustomSection>
            <CustomSection goodToKnown={<GoodToKnown list={interleavingServerAndClientComponentsContent12TipsList}/>}
                           texts={[interleavingServerAndClientComponentsContent3, interleavingServerAndClientComponentsContent4, interleavingServerAndClientComponentsContent4Code, interleavingServerAndClientComponentsContent5, interleavingServerAndClientComponentsContent6, interleavingServerAndClientComponentsContent7, interleavingServerAndClientComponentsContent9, interleavingServerAndClientComponentsContent9Code, interleavingServerAndClientComponentsContent10, interleavingServerAndClientComponentsContent11, interleavingServerAndClientComponentsContent11Code, interleavingServerAndClientComponentsContent12]}/>
            <Divider/>
        </>
    )
}

export default Page
