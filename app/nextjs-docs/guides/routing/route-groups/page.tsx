import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    routeGroupsContent1,
    routeGroupsContent10,
    routeGroupsContent11,
    routeGroupsContent11Image,
    routeGroupsContent12,
    routeGroupsContent13,
    routeGroupsContent13Image,
    routeGroupsContent14,
    routeGroupsContent15,
    routeGroupsContent16,
    routeGroupsContent16Image,
    routeGroupsContent17,
    routeGroupsContent2,
    routeGroupsContent3,
    routeGroupsContent3List,
    routeGroupsContent4,
    routeGroupsContent5,
    routeGroupsContent6,
    routeGroupsContent7,
    routeGroupsContent8,
    routeGroupsContent8Image,
    routeGroupsContent9,
    routeGroupsContent9Image,
    routeGroupsContentTips,
    routeGroupsTitle
} from "@/src/assets/nextjsDocument/routing/routeGroups";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[routeGroupsTitle, routeGroupsContent1, routeGroupsContent2, routeGroupsContent3]}>
                <CustomList items={routeGroupsContent3List}/>
            </CustomSection>
            <Divider/>
            <CustomSection texts={[routeGroupsContent4, routeGroupsContent5]}/>
            <Divider/>
            <CustomSection
                image={{height: 380}}
                texts={[routeGroupsContent6, routeGroupsContent7, routeGroupsContent8, routeGroupsContent8Image,]}/>
            <CustomSection
                image={{height: 300}}
                texts={[
                    routeGroupsContent9, routeGroupsContent9Image]}/>
            <CustomSection
                image={{height: 380}}
                texts={[
                    routeGroupsContent10, routeGroupsContent11, routeGroupsContent11Image]}/>
            <CustomSection
                texts={[
                    routeGroupsContent12, routeGroupsContent13, routeGroupsContent13Image, routeGroupsContent14, routeGroupsContent15,
                    routeGroupsContent16]}/>
            <CustomSection
                image={{height: 300}}
                texts={[routeGroupsContent16Image, routeGroupsContent17]}/>
            <Divider/>
            <CustomSection texts={[]} goodToKnown={<GoodToKnown list={routeGroupsContentTips}/>}/>
        </>
    )
};

export default Page;
