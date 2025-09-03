import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    notFoundJsContent10,
    notFoundJsContent11,
    notFoundJsContent12,
    notFoundJsContent12GTK,
    notFoundJsContent13,
    notFoundJsContent14,
    notFoundJsContent15,
    notFoundJsContent15Code,
    notFoundJsContent16,
    notFoundJsContent17,
    notFoundJsContent18,
    notFoundJsContent18Code,
    notFoundJsContent18GTK,
    notFoundJsContent2,
    notFoundJsContent3,
    notFoundJsContent3Code,
    notFoundJsContent4,
    notFoundJsContent5,
    notFoundJsContent6,
    notFoundJsContent6GTK,
    notFoundJsContent7,
    notFoundJsContent7List,
    notFoundJsContent8,
    notFoundJsContent8Code,
    notFoundJsContent9,
    notFoundJsDescription1,
    notFoundJsDescription1List,
    notFoundJsTitle
} from "@/src/assets/nextjsDocument/apiReferences/fileSystems/notFoundJs";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import {Divider} from "antd";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[notFoundJsTitle, notFoundJsDescription1]}/>
            <CustomList items={notFoundJsDescription1List}/>
            <Divider/>

            <CustomSection
                texts={[notFoundJsContent2, notFoundJsContent3, notFoundJsContent3Code, notFoundJsContent4, notFoundJsContent5, notFoundJsContent6]}/>
            <GoodToKnown text={notFoundJsContent6GTK}/>
            <CustomSection texts={[notFoundJsContent7]}/>
            <CustomList items={notFoundJsContent7List}/>
            <CustomSection
                texts={[notFoundJsContent8, notFoundJsContent8Code, notFoundJsContent9, notFoundJsContent10, notFoundJsContent11, notFoundJsContent12]}/>
            <GoodToKnown text={notFoundJsContent12GTK}/>
            <CustomSection
                texts={[notFoundJsContent13, notFoundJsContent14, notFoundJsContent15, notFoundJsContent15Code, notFoundJsContent16, notFoundJsContent17, notFoundJsContent18, notFoundJsContent18Code]}/>
            <GoodToKnown text={notFoundJsContent18GTK}/>
            <CustomSection texts={[notFoundJsContent18Code]}/>
        </>
    )
}
export default Page

