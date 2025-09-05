import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    routeGroupsContent1,
    routeGroupsContent2,
    routeGroupsContent3,
    routeGroupsContent4,
    routeGroupsContent5,
    routeGroupsContent5Img,
    routeGroupsContent6,
    routeGroupsContent6List,
    routeGroupsContent7,
    routeGroupsContent7List
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/routeGroups";
import {Divider} from "antd";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[routeGroupsContent1, routeGroupsContent2]}/>
            <Divider/>

            <CustomSection
                image={{height: 380}}
                texts={[routeGroupsContent3, routeGroupsContent4, routeGroupsContent5, routeGroupsContent5Img]}/>
            <Divider/>
            <CustomSection texts={[routeGroupsContent6]}/>
            <CustomList items={routeGroupsContent6List}/>
            <Divider/>
            <CustomSection texts={[routeGroupsContent7]}/>
            <CustomList items={routeGroupsContent7List}/>
        </>
    )
}
export default Page

