import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    apiReference,
    description,
    dynamicRouteSegmentsContent1,
    dynamicRouteSegmentsContent10,
    dynamicRouteSegmentsContent11,
    dynamicRouteSegmentsContent12,
    dynamicRouteSegmentsContent13,
    dynamicRouteSegmentsContent13TableDataSource,
    dynamicRouteSegmentsContent14,
    dynamicRouteSegmentsContent15,
    dynamicRouteSegmentsContent15TableColumn,
    dynamicRouteSegmentsContent15TableDataSource,
    dynamicRouteSegmentsContent16,
    dynamicRouteSegmentsContent16List,
    dynamicRouteSegmentsContent17,
    dynamicRouteSegmentsContent18,
    dynamicRouteSegmentsContent19,
    dynamicRouteSegmentsContent19Code,
    dynamicRouteSegmentsContent2,
    dynamicRouteSegmentsContent20,
    dynamicRouteSegmentsContent2Code,
    dynamicRouteSegmentsContent3,
    dynamicRouteSegmentsContent3TableColumn,
    dynamicRouteSegmentsContent3TableDataSource,
    dynamicRouteSegmentsContent4,
    dynamicRouteSegmentsContent5,
    dynamicRouteSegmentsContent5Code,
    dynamicRouteSegmentsContent6,
    dynamicRouteSegmentsContent7,
    dynamicRouteSegmentsContent8,
    dynamicRouteSegmentsContent9,
    dynamicRouteSegmentsContent9TableDataSource,
    title
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/dynamicRouteSegments";
import CustomTable from "@/app/nextjs-docs/components/SectionWithTable";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import {Divider} from "antd";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, description]}/>
            <Divider/>

            <CustomSection
                texts={[dynamicRouteSegmentsContent1, dynamicRouteSegmentsContent2, dynamicRouteSegmentsContent2Code, dynamicRouteSegmentsContent3]}/>
            <CustomTable columns={dynamicRouteSegmentsContent3TableColumn}
                         dataSource={dynamicRouteSegmentsContent3TableDataSource}/>
            <CustomSection
                texts={[dynamicRouteSegmentsContent4, dynamicRouteSegmentsContent5, dynamicRouteSegmentsContent5Code, dynamicRouteSegmentsContent6, dynamicRouteSegmentsContent7, dynamicRouteSegmentsContent8, dynamicRouteSegmentsContent9]}/>
            <CustomTable dataSource={dynamicRouteSegmentsContent9TableDataSource}
                         columns={dynamicRouteSegmentsContent3TableColumn}/>
            <CustomSection
                texts={[dynamicRouteSegmentsContent10, dynamicRouteSegmentsContent11, dynamicRouteSegmentsContent12, dynamicRouteSegmentsContent13]}/>
            <CustomTable columns={dynamicRouteSegmentsContent3TableColumn}
                         dataSource={dynamicRouteSegmentsContent13TableDataSource}/>
            <CustomSection texts={[dynamicRouteSegmentsContent14, dynamicRouteSegmentsContent15]}/>
            <CustomTable dataSource={dynamicRouteSegmentsContent15TableDataSource}
                         columns={dynamicRouteSegmentsContent15TableColumn}/>
            <Divider/>

            <CustomSection texts={[dynamicRouteSegmentsContent16]}/>
            <CustomList items={dynamicRouteSegmentsContent16List}/>
            <Divider/>

            <CustomSection
                texts={[dynamicRouteSegmentsContent17, dynamicRouteSegmentsContent18, dynamicRouteSegmentsContent19, dynamicRouteSegmentsContent19Code, dynamicRouteSegmentsContent20]}/>
            <Divider/>

            <FooterApiReferenceSection apis={apiReference}/>
        </>
    )
}
export default Page

