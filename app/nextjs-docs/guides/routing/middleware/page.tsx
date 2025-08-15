import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content1,
    content10,
    content10List,
    content11,
    content11List,
    content12,
    content13,
    content13Code,
    content14,
    content14Code,
    content15,
    content15Code,
    content16,
    content16Code,
    content16Tips,
    content17,
    content17List,
    content17More,
    content17Tips,
    content18,
    content18Code,
    content19,
    content2,
    content20,
    content20List,
    content21,
    content21List,
    content22,
    content23,
    content23Code,
    content23List,
    content24,
    content25,
    content25Code,
    content25Tips,
    content26,
    content27,
    content27Code,
    content27Tips,
    content28,
    content29,
    content29Code,
    content3,
    content30,
    content31,
    content32,
    content32Code,
    content33,
    content34,
    content35,
    content35Code1,
    content35Code2,
    content36,
    content36Code1,
    content36Code2,
    content37,
    content38,
    content39,
    content39Code,
    content4,
    content40,
    content40Code,
    content41,
    content42,
    content43,
    content43Table,
    content4List,
    content5,
    content5List,
    content6,
    content7,
    content7Tips,
    content7TipsTitle,
    content8,
    content8Code,
    content9,
    title
} from "@/src/assets/nextjsDocument/routing/middleware";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1, content2]}/>
            <Divider/>
            <CustomSection texts={[content3, content4]}>
                <CustomList items={content4List}/>
            </CustomSection>
            <CustomSection texts={[content5]}>
                <CustomList items={content5List}/>
            </CustomSection>
            <Divider/>
            <CustomSection
                goodToKnown={<GoodToKnown title={content7TipsTitle} text={content7Tips}/>}
                texts={[content6, content7]}/>
            <Divider/>
            <CustomSection texts={[content8, content8Code]}/>
            <Divider/>
            <CustomSection texts={[content9, content10]}>
                <CustomList items={content10List} isOrder/>
            </CustomSection>
            <CustomSection texts={[content11]}>
                <CustomList items={content11List} isOrder/>
            </CustomSection>
            <CustomSection
                goodToKnown={<GoodToKnown text={content16Tips}/>}
                texts={[content12, content13, content13Code, content14, content14Code,
                    content15, content15Code, content16, content16Code]}/>

            <CustomSection texts={[content17]}>
                <CustomList items={content17List} isOrder/>
            </CustomSection>
            <CustomSection goodToKnown={<GoodToKnown text={content17Tips}/>} texts={[content17More]}/>
            <CustomSection texts={[content18, content18Code]}/>
            <Divider/>
            <CustomSection texts={[content19, content20]}>
                <CustomList items={content20List}/>
            </CustomSection>
            <CustomSection texts={[content21]}>
                <CustomList items={content21List} isOrder/>
            </CustomSection>
            <Divider/>
            <CustomSection texts={[content22, content23]}>
                <CustomList items={content23List} isOrder/>
            </CustomSection>
            <CustomSection texts={[content23Code]}/>
            <Divider/>
            <CustomSection goodToKnown={<GoodToKnown text={content25Tips}/>}
                           texts={[content24, content25, content25Code]}/>
            <CustomSection
                goodToKnown={<GoodToKnown text={content27Tips}/>}
                texts={[content26, content27, content27Code]}/>
            <Divider/>
            <CustomSection texts={[content28, content29, content29Code, content30, content31,
                content32, content32Code]}/>
            <Divider/>
            <CustomSection
                texts={[content33, content34, content35, content35Code1, content35Code2, content36, content36Code1, content36Code2]}/>
            <Divider/>
            <CustomSection texts={[content37, content38, content39, content39Code, content40, content40Code]}/>
            <Divider/>
            <CustomSection texts={[content41, content42]}/>
            <Divider/>
            <SectionWithTable texts={[content43]} dataSource={content43Table} columns={[
                {title: 'Version', key: 'version', dataIndex: 'version'},
                {title: 'Change', key: 'change', dataIndex: 'change'},
            ]}/>
            <Divider/>

        </>
    )
};

export default Page
