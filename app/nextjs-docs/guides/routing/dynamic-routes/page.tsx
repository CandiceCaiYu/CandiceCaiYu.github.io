import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    DynamicRoutesContent1,
    DynamicRoutesContent10,
    DynamicRoutesContent10Code,
    DynamicRoutesContent11,
    DynamicRoutesContent12,
    DynamicRoutesContent13,
    DynamicRoutesContent14,
    DynamicRoutesContent15,
    DynamicRoutesContent16,
    DynamicRoutesContent16Table,
    DynamicRoutesContent17,
    DynamicRoutesContent18,
    DynamicRoutesContent19,
    DynamicRoutesContent2,
    DynamicRoutesContent20,
    DynamicRoutesContent21,
    DynamicRoutesContent22,
    DynamicRoutesContent22Code,
    DynamicRoutesContent23,
    DynamicRoutesContent23Tips,
    DynamicRoutesContent3,
    DynamicRoutesContent4,
    DynamicRoutesContent5,
    DynamicRoutesContent6,
    DynamicRoutesContent6Code,
    DynamicRoutesContent6Table,
    DynamicRoutesContent7,
    DynamicRoutesContent8,
    DynamicRoutesContent8Tips,
    DynamicRoutesContent9,
    DynamicRoutesTitle
} from "@/src/assets/nextjsDocument/routing/DynamicRoutes";
import SectionWithTable from "@/app/nextjs-docs/components/SectionWithTable";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const routeTableColumn = [
    {title: '路由', key: 'route', dataIndex: 'route'},
    {title: '示例', key: 'example', dataIndex: 'example'},
    {title: '参数', key: 'params', dataIndex: 'params'}
];

const Page = () => {
    return (
        <>
            <CustomSection texts={[DynamicRoutesTitle, DynamicRoutesContent1]}/>
            <Divider/>
            <CustomSection texts={[DynamicRoutesContent2, DynamicRoutesContent3, DynamicRoutesContent4]}/>
            <Divider/>
            <CustomSection texts={[DynamicRoutesContent5, DynamicRoutesContent6, DynamicRoutesContent6Code]}/>
            <SectionWithTable dataSource={DynamicRoutesContent6Table} columns={routeTableColumn}/>
            <CustomSection texts={[DynamicRoutesContent7]}/>
            <Divider/> <CustomSection texts={[DynamicRoutesContent8]}>
            <CustomList items={DynamicRoutesContent8Tips}/>
        </CustomSection>

            <Divider/> <CustomSection
            texts={[DynamicRoutesContent9, DynamicRoutesContent10, DynamicRoutesContent10Code, DynamicRoutesContent11, DynamicRoutesContent12, DynamicRoutesContent13]}/>
            <Divider/>
            <CustomSection texts={[DynamicRoutesContent14, DynamicRoutesContent15, DynamicRoutesContent16]}/>
            <SectionWithTable
                columns={routeTableColumn} dataSource={DynamicRoutesContent16Table}/>
            <Divider/>
            <CustomSection
                texts={[DynamicRoutesContent17, DynamicRoutesContent18, DynamicRoutesContent19, DynamicRoutesContent20]}
            />
            <SectionWithTable
                columns={routeTableColumn} dataSource={[
                {route: 'app/shop/[[...slug]]/page.js', example: "/shop", params: "{slug: undefined}"},
                ...DynamicRoutesContent16Table
            ]}/>
            <Divider/>
            <SectionWithTable
                columns={[
                    {title: '路由', key: 'route', dataIndex: 'route'},
                    {title: '参数', key: 'paramsType', dataIndex: 'paramsType'}
                ]}
                dataSource={DynamicRoutesContent23}/>
            <CustomSection goodToKnown={<GoodToKnown text={DynamicRoutesContent23Tips}/>}
                           texts={[DynamicRoutesContent21, DynamicRoutesContent22, DynamicRoutesContent22Code]}/>
        </>
    )
};
export default Page
