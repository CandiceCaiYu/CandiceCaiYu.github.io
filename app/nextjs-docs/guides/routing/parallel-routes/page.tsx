import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    activeStateAndNavigationContent1,
    activeStateAndNavigationContent10,
    activeStateAndNavigationContent11,
    activeStateAndNavigationContent12,
    activeStateAndNavigationContent13,
    activeStateAndNavigationContent13Code,
    activeStateAndNavigationContent13Image,
    activeStateAndNavigationContent14,
    activeStateAndNavigationContent15,
    activeStateAndNavigationContent16,
    activeStateAndNavigationContent16Image,
    activeStateAndNavigationContent17,
    activeStateAndNavigationContent17Code,
    activeStateAndNavigationContent18,
    activeStateAndNavigationContent19,
    activeStateAndNavigationContent19List,
    activeStateAndNavigationContent1List,
    activeStateAndNavigationContent1Tips,
    activeStateAndNavigationContent2,
    activeStateAndNavigationContent20,
    activeStateAndNavigationContent20Image,
    activeStateAndNavigationContent21,
    activeStateAndNavigationContent21Code,
    activeStateAndNavigationContent21Image,
    activeStateAndNavigationContent22,
    activeStateAndNavigationContent22Code,
    activeStateAndNavigationContent23,
    activeStateAndNavigationContent23Code,
    activeStateAndNavigationContent23Tips,
    activeStateAndNavigationContent24,
    activeStateAndNavigationContent25,
    activeStateAndNavigationContent26,
    activeStateAndNavigationContent26Code,
    activeStateAndNavigationContent27,
    activeStateAndNavigationContent28,
    activeStateAndNavigationContent29,
    activeStateAndNavigationContent29Code,
    activeStateAndNavigationContent3,
    activeStateAndNavigationContent30,
    activeStateAndNavigationContent30Code1,
    activeStateAndNavigationContent30Code2,
    activeStateAndNavigationContent31,
    activeStateAndNavigationContent31Code,
    activeStateAndNavigationContent31Tips,
    activeStateAndNavigationContent32,
    activeStateAndNavigationContent33,
    activeStateAndNavigationContent33Image,
    activeStateAndNavigationContent34,
    activeStateAndNavigationContent4,
    activeStateAndNavigationContent4Image,
    activeStateAndNavigationContent5,
    activeStateAndNavigationContent6,
    activeStateAndNavigationContent7,
    activeStateAndNavigationContent8,
    activeStateAndNavigationContent9,
    activeStateAndNavigationContent9Code,
    activeStateAndNavigationTitle,
    content1,
    content2,
    content2Image,
    slotContent1,
    slotContent1Image,
    slotContent2,
    slotContent2Code,
    slotContent3,
    slotContent3Tips,
    slotTitle,
    title
} from "@/src/assets/nextjsDocument/routing/parallelRoutes";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection image={{height: 370}} texts={[title, content1, content2, content2Image]}/>
            <Divider/>
            <CustomSection image={{height: 300}} goodToKnown={<GoodToKnown list={slotContent3Tips}/>}
                           texts={[slotTitle, slotContent1, slotContent1Image, slotContent2, slotContent2Code, slotContent3]}/>
            <Divider/>
            <CustomSection
                goodToKnown={<GoodToKnown list={activeStateAndNavigationContent1Tips}/>}
                texts={[activeStateAndNavigationTitle, activeStateAndNavigationContent1]}>
                <CustomList items={activeStateAndNavigationContent1List}/>
            </CustomSection>
            <CustomSection
                image={{height: 370}}
                texts={[activeStateAndNavigationContent2, activeStateAndNavigationContent3, activeStateAndNavigationContent4, activeStateAndNavigationContent4Image, activeStateAndNavigationContent5, activeStateAndNavigationContent6, activeStateAndNavigationContent7, activeStateAndNavigationContent8, activeStateAndNavigationContent9, activeStateAndNavigationContent9Code, activeStateAndNavigationContent10,]}/>
            <Divider/>
            <CustomSection
                image={{height: 370}}
                texts={[activeStateAndNavigationContent11, activeStateAndNavigationContent12, activeStateAndNavigationContent13, activeStateAndNavigationContent13Image, activeStateAndNavigationContent13Code, activeStateAndNavigationContent14, activeStateAndNavigationContent15, activeStateAndNavigationContent16, activeStateAndNavigationContent16Image, activeStateAndNavigationContent17, activeStateAndNavigationContent17Code, activeStateAndNavigationContent18, activeStateAndNavigationContent19]}>
                <CustomList items={activeStateAndNavigationContent19List}/>
            </CustomSection>
            <CustomSection image={{height: 320}}
                           goodToKnown={<GoodToKnown list={activeStateAndNavigationContent23Tips}/>}
                           texts={[activeStateAndNavigationContent20, activeStateAndNavigationContent20Image, activeStateAndNavigationContent21, activeStateAndNavigationContent21Image, activeStateAndNavigationContent21Code, activeStateAndNavigationContent22, activeStateAndNavigationContent22Code, activeStateAndNavigationContent23, activeStateAndNavigationContent23Code]}/>

            <CustomSection goodToKnown={<GoodToKnown list={activeStateAndNavigationContent31Tips}/>}
                           texts={[activeStateAndNavigationContent24, activeStateAndNavigationContent25, activeStateAndNavigationContent26, activeStateAndNavigationContent26Code, activeStateAndNavigationContent27, activeStateAndNavigationContent28, activeStateAndNavigationContent29, activeStateAndNavigationContent29Code, activeStateAndNavigationContent30, activeStateAndNavigationContent30Code1, activeStateAndNavigationContent30Code2, activeStateAndNavigationContent31, activeStateAndNavigationContent31Code]}/>
            <CustomSection
                image={{height: 490}}
                texts={[activeStateAndNavigationContent32, activeStateAndNavigationContent33, activeStateAndNavigationContent33Image, activeStateAndNavigationContent34,]}/>
        </>
    )
};

export default Page
