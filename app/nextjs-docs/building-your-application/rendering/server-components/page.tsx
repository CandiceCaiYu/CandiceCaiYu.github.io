import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    benefitsOfServerRenderingContent,
    benefitsOfServerRenderingContentList,
    benefitsOfServerRenderingTitle,
    content,
    content2,
    contentList,
    howAreServerComponentsRenderedContent1,
    howAreServerComponentsRenderedContent2,
    howAreServerComponentsRenderedContent2List,
    howAreServerComponentsRenderedContent3,
    howAreServerComponentsRenderedContent3List,
    howAreServerComponentsRenderedContent3TipsDescription,
    howAreServerComponentsRenderedContent3TipsList,
    howAreServerComponentsRenderedContent3TipsTitle,
    howAreServerComponentsRenderedTitle,
    serverRenderingStrategiesContent1,
    serverRenderingStrategiesContent10,
    serverRenderingStrategiesContent11,
    serverRenderingStrategiesContent12,
    serverRenderingStrategiesContent13,
    serverRenderingStrategiesContent13List,
    serverRenderingStrategiesContent14,
    serverRenderingStrategiesContent14Img,
    serverRenderingStrategiesContent15,
    serverRenderingStrategiesContent15Img, serverRenderingStrategiesContent16, serverRenderingStrategiesContent17,
    serverRenderingStrategiesContent2,
    serverRenderingStrategiesContent3,
    serverRenderingStrategiesContent4,
    serverRenderingStrategiesContent5,
    serverRenderingStrategiesContent6,
    serverRenderingStrategiesContent7,
    serverRenderingStrategiesContent7TipsList,
    serverRenderingStrategiesContent7TipsTitle,
    serverRenderingStrategiesContent8,
    serverRenderingStrategiesContent9,
    serverRenderingStrategiesContent9Table,
    serverRenderingStrategiesTitle,
    title,
    usingServerComponentsInNextjsContent,
    usingServerComponentsInNextjsTitle
} from "@/src/assets/nextjsDocument/rendering/serverComponents";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content]} >
                <CustomList items={contentList} />
            </CustomSection>
            <CustomSection texts={[content2]} />
            <Divider />

            <CustomSection texts={[benefitsOfServerRenderingTitle,benefitsOfServerRenderingContent]} >
                <CustomList items={benefitsOfServerRenderingContentList} />
            </CustomSection>
            <Divider />

            <CustomSection texts={[usingServerComponentsInNextjsTitle,usingServerComponentsInNextjsContent]} />
            <Divider />

            <CustomSection texts={[howAreServerComponentsRenderedTitle,howAreServerComponentsRenderedContent1,howAreServerComponentsRenderedContent2]} >
                <CustomList items={howAreServerComponentsRenderedContent2List} />
            </CustomSection>
            <CustomSection goodToKnown={<GoodToKnown title={howAreServerComponentsRenderedContent3TipsTitle} list={howAreServerComponentsRenderedContent3TipsList} description={howAreServerComponentsRenderedContent3TipsDescription}  />} texts={[howAreServerComponentsRenderedContent3]} >
                <CustomList items={howAreServerComponentsRenderedContent3List} />
            </CustomSection>
            <Divider />

            <CustomSection goodToKnown={<GoodToKnown title={serverRenderingStrategiesContent7TipsTitle} list={serverRenderingStrategiesContent7TipsList} />} texts={[serverRenderingStrategiesTitle,serverRenderingStrategiesContent1,serverRenderingStrategiesContent2,serverRenderingStrategiesContent3,serverRenderingStrategiesContent4,serverRenderingStrategiesContent5,serverRenderingStrategiesContent6,serverRenderingStrategiesContent7,]} />
            <SectionWithTable
                columns={[
                    {title: 'Dynamic APIs', dataIndex: 'api', key:'api'},
                    {title: 'Data', dataIndex: 'data', key:'data'},
                    {title: 'Route', dataIndex: 'route', key:'route'},
                ]}
                dataSource={serverRenderingStrategiesContent9Table}
                texts={[serverRenderingStrategiesContent8, serverRenderingStrategiesContent9]} />
            <CustomSection texts={[serverRenderingStrategiesContent10,serverRenderingStrategiesContent11,serverRenderingStrategiesContent12,serverRenderingStrategiesContent13,]} >
                <CustomList items={serverRenderingStrategiesContent13List} />
            </CustomSection>
            <CustomSection image={{height: 260}} texts={[serverRenderingStrategiesContent14,serverRenderingStrategiesContent14Img]} />
            <CustomSection image={{height: 360}} texts={[serverRenderingStrategiesContent15, serverRenderingStrategiesContent15Img, serverRenderingStrategiesContent16,serverRenderingStrategiesContent17]} />
            <Divider />
        </>
    )
}

export default Page
