import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content1,
    content1Table,
    managementRedirectScaleContent1,
    managementRedirectScaleContent10,
    managementRedirectScaleContent10Code,
    managementRedirectScaleContent11,
    managementRedirectScaleContent11Code,
    managementRedirectScaleContent11Tips,
    managementRedirectScaleContent2,
    managementRedirectScaleContent2List,
    managementRedirectScaleContent3,
    managementRedirectScaleContent4,
    managementRedirectScaleContent5,
    managementRedirectScaleContent5Code,
    managementRedirectScaleContent6,
    managementRedirectScaleContent6Code,
    managementRedirectScaleContent7,
    managementRedirectScaleContent8,
    managementRedirectScaleContent8List,
    managementRedirectScaleContent9,
    managementRedirectScaleContentTips,
    managementRedirectScaleContentTipsTitle,
    managementRedirectScaleTitle,
    nextResponseRedirectContent1,
    nextResponseRedirectContent2,
    nextResponseRedirectContent2Code,
    nextResponseRedirectContent3,
    nextResponseRedirectContent3More,
    nextResponseRedirectTitle,
    permanentRedirectContent1,
    permanentRedirectContent2,
    permanentRedirectContent2Code,
    permanentRedirectContent2Tips,
    permanentRedirectContent3,
    permanentRedirectTitle,
    redirectingContent1,
    redirectingContent2,
    redirectingContent2Code,
    redirectingContent2Tips,
    redirectingContentMore,
    redirectingTitle,
    redirectsInNextConfigContent1,
    redirectsInNextConfigContent2,
    redirectsInNextConfigContent3,
    redirectsInNextConfigContent3Code,
    redirectsInNextConfigContent3More,
    redirectsInNextConfigContent3Tips,
    redirectsInNextConfigTitle,
    title,
    useRouterContent1,
    useRouterContent1Code,
    useRouterContent1More,
    useRouterContent1Tips,
    useRouterTitle
} from "@/src/assets/nextjsDocument/routing/Redirecting";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <SectionWithTable texts={[title, content1]} showHeader columns={[
                {
                    title: 'name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'purpose',
                    dataIndex: 'purpose',
                    key: 'purpose',
                },
                {
                    title: 'where',
                    dataIndex: 'where',
                    key: 'where',
                },
                {
                    title: 'statusCode',
                    dataIndex: 'statusCode',
                    key: 'statusCode',
                },
            ]} dataSource={content1Table}/>
            <CustomSection
                texts={[redirectingTitle, redirectingContent1, redirectingContent2, redirectingContent2Code]}
                goodToKnown={<GoodToKnown list={redirectingContent2Tips}/>}/>
            <CustomSection texts={[redirectingContentMore]}/>
            <Divider/>
            <CustomSection
                texts={[permanentRedirectTitle, permanentRedirectContent1, permanentRedirectContent2, permanentRedirectContent2Code]}
                goodToKnown={<GoodToKnown list={permanentRedirectContent2Tips}/>}/>
            <CustomSection texts={[permanentRedirectContent3]}/>
            <Divider/>
            <CustomSection texts={[useRouterTitle, useRouterContent1, useRouterContent1Code]}
                           goodToKnown={<GoodToKnown list={useRouterContent1Tips}/>}/>
            <CustomSection texts={[useRouterContent1More]}/>
            <Divider/>
            <CustomSection
                texts={[redirectsInNextConfigTitle, redirectsInNextConfigContent1, redirectsInNextConfigContent2, redirectsInNextConfigContent3, redirectsInNextConfigContent3Code, redirectsInNextConfigContent3More]}
                goodToKnown={<GoodToKnown list={redirectsInNextConfigContent3Tips}/>}/>
            <Divider/>
            <CustomSection
                texts={[nextResponseRedirectTitle, nextResponseRedirectContent1, nextResponseRedirectContent2, nextResponseRedirectContent2Code]}
                goodToKnown={<GoodToKnown text={nextResponseRedirectContent3}/>}/>

            <CustomSection texts={[nextResponseRedirectContent3More]}/>
            <Divider/>

            <CustomSection
                goodToKnown={<GoodToKnown title={managementRedirectScaleContentTipsTitle}
                                          text={managementRedirectScaleContentTips}/>}
                texts={[managementRedirectScaleTitle, managementRedirectScaleContent1, managementRedirectScaleContent2]}>
                <CustomList items={managementRedirectScaleContent2List} isOrder/>
            </CustomSection>
            <CustomSection
                texts={[managementRedirectScaleContent3, managementRedirectScaleContent4, managementRedirectScaleContent5, managementRedirectScaleContent5Code, managementRedirectScaleContent6, managementRedirectScaleContent6Code]}/>
            <CustomSection texts={[managementRedirectScaleContent7, managementRedirectScaleContent8]}>
                <CustomList items={managementRedirectScaleContent8List}/>
            </CustomSection>
            <CustomSection
                goodToKnown={<GoodToKnown list={managementRedirectScaleContent11Tips}/>}
                texts={[managementRedirectScaleContent9, managementRedirectScaleContent10, managementRedirectScaleContent10Code,
                    managementRedirectScaleContent11, managementRedirectScaleContent11Code]}/>
        </>
    )
};
export default Page;
