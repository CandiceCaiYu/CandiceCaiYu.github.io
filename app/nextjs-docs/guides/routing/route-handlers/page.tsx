import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content1,
    content10,
    content11,
    content11Code,
    content11Tips,
    content12,
    content13,
    content14,
    content15,
    content15List,
    content15Table,
    content16,
    content16Code,
    content17,
    content18,
    content19,
    content1Image,
    content1Tips,
    content2,
    content20,
    content20Code,
    content21,
    content22,
    content23,
    content23Code,
    content24,
    content24Code,
    content25,
    content26,
    content27,
    content27Code,
    content28,
    content28Code,
    content29,
    content29Code,
    content3,
    content30,
    content30Tips,
    content31,
    content31Code,
    content31Table,
    content32,
    content33,
    content33Code,
    content34,
    content35,
    content35Code,
    content36,
    content36Code,
    content37,
    content38,
    content38Code,
    content39,
    content3Code,
    content4,
    content40,
    content40Code,
    content41,
    content42,
    content43,
    content43Code,
    content43Tips,
    content44,
    content45,
    content45Code,
    content46,
    content47,
    content48,
    content48Code,
    content49,
    content5,
    content50,
    content50Code,
    content50More,
    content6,
    content7,
    content8,
    content9,
    title
} from "@/src/assets/nextjsDocument/routing/routeHandlers";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";

const Page = () => {
    return (
        <>
            <CustomSection goodToKnown={<GoodToKnown text={content1Tips}/>} texts={[title, content1, content1Image]}/>
            <Divider/>
            <CustomSection
                texts={[content2, content3, content3Code, content4, content5, content6, content7, content8]}/>
            <Divider/>
            <CustomSection goodToKnown={<GoodToKnown text={content11Tips}/>}
                           texts={[content9, content10, content11, content11Code]}/>
            <CustomSection texts={[content12, content13, content14, content15]}>
                <CustomList items={content15List}/>
            </CustomSection>
            <SectionWithTable texts={[]} dataSource={content15Table} columns={[
                {title: 'Page', key: 'page', dataIndex: 'page'},
                {title: 'Route', key: 'route', dataIndex: 'route'},
                {title: 'Result', key: 'result', dataIndex: 'result'},
            ]}/>
            <CustomSection texts={[content16, content16Code]}/>
            <Divider/>
            <CustomSection
                goodToKnown={<GoodToKnown text={content30Tips} title={''}/>}
                texts={[content17, content18, content19, content20, content20Code, content21, content22,
                    content23, content23Code, content24, content24Code, content25, content26, content27, content27Code, content28,
                    content28Code, content29, content29Code, content30]}/>
            <SectionWithTable texts={[content31, content31Code]} dataSource={content31Table} columns={[
                {title: 'Route', key: 'route', dataIndex: 'route'},
                {title: 'Example URL', key: 'example', dataIndex: 'example'},
                {title: 'Params', key: 'params', dataIndex: 'params'}
            ]}/>
            <CustomSection goodToKnown={<GoodToKnown list={content43Tips}/>}
                           texts={[content32, content33, content33Code, content34, content35, content35Code, content36,
                               content36Code, content37, content38, content38Code, content39, content40, content40Code,
                               content41, content42, content43, content43Code]}/>
            <CustomSection
                texts={[content44, content45, content45Code, content46, content47, content48, content48Code, content49, content50, content50Code, content50More,]}/>
            <Divider/>
        </>
    )
};

export default Page
