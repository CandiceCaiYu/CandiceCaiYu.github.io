import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    apisContent1,
    apisContent10,
    apisContent10Text,
    apisContent11,
    apisContent12,
    apisContent13,
    apisContent13Code,
    apisContent14,
    apisContent15,
    apisContent16,
    apisContent16Code,
    apisContent17,
    apisContent18,
    apisContent18Code1,
    apisContent19,
    apisContent19List,
    apisContent19Title,
    apisContent1Table,
    apisContent2,
    apisContent20,
    apisContent20Code,
    apisContent21,
    apisContent21Code,
    apisContent22,
    apisContent22List,
    apisContent23,
    apisContent24,
    apisContent24Code,
    apisContent25,
    apisContent25List,
    apisContent26,
    apisContent26TipsList,
    apisContent26TipsTitle,
    apisContent27,
    apisContent28,
    apisContent29,
    apisContent3,
    apisContent30,
    apisContent31,
    apisContent32,
    apisContent33,
    apisContent34,
    apisContent34Code,
    apisContent35,
    apisContent35Code,
    apisContent36,
    apisContent37,
    apisContent38,
    apisContent39,
    apisContent4,
    apisContent40,
    apisContent40Code,
    apisContent41,
    apisContent41Code,
    apisContent42,
    apisContent43,
    apisContent43Code,
    apisContent44Tips,
    apisContent45,
    apisContent46,
    apisContent47,
    apisContent48,
    apisContent49,
    apisContent49Code,
    apisContent5,
    apisContent6,
    apisContent7,
    apisContent8,
    apisContent9,
    apisTitle,
    cacheInteractionsContent1,
    cacheInteractionsContent2,
    cacheInteractionsContent2List,
    cacheInteractionsContent3,
    cacheInteractionsContent3List,
    cacheInteractionsTitle,
    clientSideRouterCacheContent1,
    clientSideRouterCacheContent10,
    clientSideRouterCacheContent10Tips,
    clientSideRouterCacheContent2,
    clientSideRouterCacheContent3,
    clientSideRouterCacheContent3List,
    clientSideRouterCacheContent3Tips,
    clientSideRouterCacheContent4,
    clientSideRouterCacheContent5,
    clientSideRouterCacheContent5List,
    clientSideRouterCacheContent6,
    clientSideRouterCacheContent6Tips,
    clientSideRouterCacheContent7,
    clientSideRouterCacheContent8,
    clientSideRouterCacheContent8List,
    clientSideRouterCacheContent9,
    clientSideRouterCacheTitle,
    content,
    contentTips,
    dataCacheContent1,
    dataCacheContent1Tips,
    dataCacheContent2,
    dataCacheContent3,
    dataCacheContent3Img,
    dataCacheContent3List,
    dataCacheContent3TipsText,
    dataCacheContent3TipsTitle,
    dataCacheTitle,
    durationContent,
    durationTitle,
    fullRouteCacheContent10,
    fullRouteCacheContent11,
    fullRouteCacheContent11List,
    fullRouteCacheContent12,
    fullRouteCacheContent13,
    fullRouteCacheContent14,
    fullRouteCacheContent15,
    fullRouteCacheContent16,
    fullRouteCacheContent17,
    fullRouteCacheContent18,
    fullRouteCacheContent19,
    fullRouteCacheContent19Img,
    fullRouteCacheContent1TipsText,
    fullRouteCacheContent1TipsTitle,
    fullRouteCacheContent2,
    fullRouteCacheContent20,
    fullRouteCacheContent21,
    fullRouteCacheContent22,
    fullRouteCacheContent23,
    fullRouteCacheContent24,
    fullRouteCacheContent24List,
    fullRouteCacheContent25,
    fullRouteCacheContent26,
    fullRouteCacheContent26List,
    fullRouteCacheContent3,
    fullRouteCacheContent4,
    fullRouteCacheContent5,
    fullRouteCacheContent6,
    fullRouteCacheContent6List,
    fullRouteCacheContent7,
    fullRouteCacheContent7TipsDescription,
    fullRouteCacheContent7TipsList,
    fullRouteCacheContent7TipsMore,
    fullRouteCacheContent7TipsTitle,
    fullRouteCacheContent8,
    fullRouteCacheContent8Img,
    fullRouteCacheContent9,
    fullRouteCacheTitle,
    overviewContent1,
    overviewContent1Table,
    overviewContent2,
    overviewContent2Img,
    overviewContent3,
    overviewTitle,
    requestMemoizationContent1,
    requestMemoizationContent10,
    requestMemoizationContent10Code,
    requestMemoizationContent1Img,
    requestMemoizationContent2,
    requestMemoizationContent2Code,
    requestMemoizationContent3,
    requestMemoizationContent3Img,
    requestMemoizationContent3List,
    requestMemoizationContent3TipsList,
    requestMemoizationContent4,
    requestMemoizationContent5,
    requestMemoizationContent6,
    requestMemoizationContent7,
    requestMemoizationContent8,
    requestMemoizationContent9,
    requestMemoizationTitle,
    revalidatingContent1,
    revalidatingContent10,
    revalidatingContent11,
    revalidatingContent11Code,
    revalidatingContent1List,
    revalidatingContent2,
    revalidatingContent3,
    revalidatingContent3Code,
    revalidatingContent4,
    revalidatingContent5,
    revalidatingContent5Img,
    revalidatingContent5List,
    revalidatingContent6,
    revalidatingContent7,
    revalidatingContent8,
    revalidatingContent9,
    revalidatingContent9Img,
    revalidatingContent9List,
    revalidatingTitle,
    title
} from "@/src/assets/nextjsDocument/caching/caching";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content]} goodToKnown={<GoodToKnown text={contentTips}/>}/>
            <Divider/>
            <SectionWithTable texts={[overviewTitle, overviewContent1]}
                              dataSource={overviewContent1Table}
                              columns={[
                                  {title: 'Mechanism', key: 'mechanism', dataIndex: 'mechanism'},
                                  {title: 'What', key: 'what', dataIndex: 'what'},
                                  {title: 'Where', key: 'where', dataIndex: 'where'},
                                  {title: 'Purpose', key: 'purpose', dataIndex: 'purpose'},
                                  {title: 'Duration', key: 'duration', dataIndex: 'duration'},
                              ]}
            />
            <CustomSection
                image={{height: 500}}
                texts={[overviewContent2, overviewContent2Img, overviewContent3]}/>
            <Divider/>
            <CustomSection
                goodToKnown={<GoodToKnown list={requestMemoizationContent3TipsList}/>}
                image={{height: 480}}
                texts={[requestMemoizationTitle, requestMemoizationContent1, requestMemoizationContent1Img, requestMemoizationContent2, requestMemoizationContent2Code, requestMemoizationContent3, requestMemoizationContent3Img]}>
                <CustomList items={requestMemoizationContent3List}/>
            </CustomSection>
            <CustomSection
                texts={[requestMemoizationContent4, requestMemoizationContent5, requestMemoizationContent6, requestMemoizationContent7, requestMemoizationContent8, requestMemoizationContent9, requestMemoizationContent10, requestMemoizationContent10Code]}/>
            <Divider/>
            <CustomSection texts={[dataCacheTitle, dataCacheContent1]}
                           goodToKnown={<GoodToKnown text={dataCacheContent1Tips}/>}
            />
            <CustomSection
                image={{height: 360}}
                texts={[dataCacheContent2, dataCacheContent3, dataCacheContent3Img]}>
                <CustomList items={dataCacheContent3List}/>
            </CustomSection>
            <CustomSection
                texts={[]}
                goodToKnown={<GoodToKnown title={dataCacheContent3TipsTitle} text={dataCacheContent3TipsText}/>}
            />
            <CustomSection texts={[durationTitle, durationContent]}/>
            <CustomSection texts={[revalidatingTitle, revalidatingContent1]}>
                <CustomList items={revalidatingContent1List}/>
            </CustomSection>
            <CustomSection
                image={{height: 540}}
                texts={[revalidatingContent2, revalidatingContent3, revalidatingContent3Code, revalidatingContent4, revalidatingContent5, revalidatingContent5Img]}>
                <CustomList items={revalidatingContent5List}/>
            </CustomSection>
            <CustomSection
                image={{height: 540}}
                texts={[revalidatingContent6, revalidatingContent7, revalidatingContent8, revalidatingContent9, revalidatingContent9Img]}>
                <CustomList items={revalidatingContent9List}/>
            </CustomSection>
            <CustomSection texts={[revalidatingContent10, revalidatingContent11, revalidatingContent11Code]}/>
            <Divider/>

            <CustomSection texts={[fullRouteCacheTitle]}
                           goodToKnown={<GoodToKnown title={fullRouteCacheContent1TipsTitle}
                                                     text={fullRouteCacheContent1TipsText}/>}/>
            <CustomSection
                texts={[fullRouteCacheContent2, fullRouteCacheContent3, fullRouteCacheContent4, fullRouteCacheContent5, fullRouteCacheContent6]}>
                <CustomList items={fullRouteCacheContent6List} isOrder/>
            </CustomSection>
            <CustomSection texts={[fullRouteCacheContent7]}
                           goodToKnown={<GoodToKnown title={fullRouteCacheContent7TipsTitle}
                                                     description={fullRouteCacheContent7TipsDescription}
                                                     more={fullRouteCacheContent7TipsMore}
                                                     list={fullRouteCacheContent7TipsList}/>}/>
            <CustomSection
                image={{height: 480}}
                texts={[fullRouteCacheContent8, fullRouteCacheContent8Img, fullRouteCacheContent9, fullRouteCacheContent10, fullRouteCacheContent11]}>
                <CustomList items={fullRouteCacheContent11List} isOrder/>
            </CustomSection>
            <CustomSection
                image={{height: 480}}
                texts={[fullRouteCacheContent12, fullRouteCacheContent13, fullRouteCacheContent14, fullRouteCacheContent15, fullRouteCacheContent16, fullRouteCacheContent17, fullRouteCacheContent18, fullRouteCacheContent19, fullRouteCacheContent19Img, fullRouteCacheContent20, fullRouteCacheContent21, fullRouteCacheContent22, fullRouteCacheContent23, fullRouteCacheContent24]}>
                <CustomList items={fullRouteCacheContent24List}/>
            </CustomSection>
            <CustomSection texts={[fullRouteCacheContent25, fullRouteCacheContent26]}>
                <CustomList items={fullRouteCacheContent26List}/>
            </CustomSection>
            <Divider/>

            <CustomSection
                texts={[clientSideRouterCacheTitle, clientSideRouterCacheContent1, clientSideRouterCacheContent2, clientSideRouterCacheContent3]}
                goodToKnown={<GoodToKnown text={clientSideRouterCacheContent3Tips}/>}>

                <CustomList items={clientSideRouterCacheContent3List}/>
            </CustomSection>
            <CustomSection texts={[clientSideRouterCacheContent4, clientSideRouterCacheContent5]}>
                <CustomList items={clientSideRouterCacheContent5List}/>
            </CustomSection>
            <CustomSection texts={[clientSideRouterCacheContent6]}
                           goodToKnown={<GoodToKnown text={clientSideRouterCacheContent6Tips}/>}/>
            <CustomSection texts={[clientSideRouterCacheContent7, clientSideRouterCacheContent8]}>
                <CustomList items={clientSideRouterCacheContent8List}/>
            </CustomSection>
            <CustomSection texts={[clientSideRouterCacheContent9, clientSideRouterCacheContent10]}
                           goodToKnown={<GoodToKnown text={clientSideRouterCacheContent10Tips}/>}/>
            <Divider/>

            <CustomSection texts={[cacheInteractionsTitle, cacheInteractionsContent1, cacheInteractionsContent2]}>
                <CustomList items={cacheInteractionsContent2List}/>
            </CustomSection>
            <CustomSection texts={[cacheInteractionsContent3]}>
                <CustomList items={cacheInteractionsContent3List}/>
            </CustomSection>
            <Divider/>

            <SectionWithTable texts={[apisTitle, apisContent1]} dataSource={apisContent1Table} columns={[
                {title: 'API', key: 'api', dataIndex: 'api'},
                {title: 'Router Cache', key: 'routerCache', dataIndex: 'routerCache'},
                {title: 'FullRoute Cache', key: 'fullRouteCache', dataIndex: 'fullRouteCache'},
                {title: 'Data Cache', key: 'dataCache', dataIndex: 'dataCache'},
                {title: 'React Cache', key: 'reactCache', dataIndex: 'reactCache'},
            ]}/>
            <CustomSection
                texts={[apisContent2, apisContent3, apisContent4, apisContent5, apisContent6, apisContent7, apisContent8, apisContent9, apisContent10, apisContent10Text, apisContent8, apisContent11, apisContent12, apisContent13, apisContent13Code, apisContent14, apisContent15, apisContent16, apisContent16Code, apisContent14, apisContent17, apisContent18, apisContent18Code1, apisContent14, apisContent19Title, apisContent19]}>
                <CustomList items={apisContent19List} isOrder/>
            </CustomSection>
            <CustomSection texts={[apisContent20, apisContent20Code, apisContent21, apisContent21Code, apisContent22]}>
                <CustomList items={apisContent22List} isOrder/>
            </CustomSection>
            <CustomSection texts={[apisContent23, apisContent24, apisContent24Code, apisContent25]}>
                <CustomList items={apisContent25List} isOrder/>
            </CustomSection>
            <CustomSection texts={[apisContent26]}
                           goodToKnown={<GoodToKnown title={apisContent26TipsTitle} list={apisContent26TipsList}/>}/>
            <CustomSection
                texts={[apisContent27, apisContent28, apisContent29, apisContent30, apisContent31, apisContent32, apisContent33, apisContent34, apisContent34Code, apisContent35, apisContent35Code, apisContent36, apisContent37, apisContent38, apisContent39, apisContent40, apisContent40Code, apisContent41, apisContent41Code, apisContent42, apisContent43, apisContent43Code]}
                goodToKnown={<GoodToKnown text={apisContent44Tips}/>}/>
            <CustomSection
                texts={[apisContent45, apisContent46, apisContent47, apisContent48, apisContent49, apisContent49Code]}/>
            <Divider/>
        </>
    )
};

export default Page
