import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    additionalResourceTitle, additionalResourceTitleContent1, additionalResourceTitleContent1List,
    behaviorContentList,
    behaviorTitle,
    content1,
    content2,
    conventionContent1,
    conventionContent10,
    conventionContent2,
    conventionContent3,
    conventionContent3Code,
    conventionContent4,
    conventionContent5,
    conventionContent5Code1,
    conventionContent5Code2,
    conventionContent6,
    conventionContent7,
    conventionContent8,
    conventionContent9,
    conventionTitle,
    exampleContent1,
    exampleContent10,
    exampleContent11,
    exampleContent12,
    exampleContent12Code,
    exampleContent13,
    exampleContent14,
    exampleContent15,
    exampleContent16,
    exampleContent17,
    exampleContent18,
    exampleContent18Code,
    exampleContent18List,
    exampleContent19,
    exampleContent19Code,
    exampleContent19Tips,
    exampleContent2,
    exampleContent20,
    exampleContent21,
    exampleContent22,
    exampleContent22Code,
    exampleContent22List,
    exampleContent23,
    exampleContent24,
    exampleContent24Code,
    exampleContent25,
    exampleContent26,
    exampleContent26Code,
    exampleContent27,
    exampleContent27Code,
    exampleContent28,
    exampleContent29,
    exampleContent3,
    exampleContent30,
    exampleContent31,
    exampleContent32,
    exampleContent33,
    exampleContent34,
    exampleContent34Code, exampleContent34Text,
    exampleContent35,
    exampleContent36,
    exampleContent36Code,
    exampleContent37,
    exampleContent37Code,
    exampleContent38,
    exampleContent39,
    exampleContent39Code,
    exampleContent4,
    exampleContent40,
    exampleContent41,
    exampleContent41Code,
    exampleContent42,
    exampleContent4Tips,
    exampleContent5,
    exampleContent6,
    exampleContent6Code,
    exampleContent7,
    exampleContent7Code,
    exampleContent7Tips,
    exampleContent8,
    exampleContent9,
    exampleContentTips,
    exampleTitle, securityContent,
    securityContent1,
    securityContent10,
    securityContent11,
    securityContent12,
    securityContent12Tips,
    securityContent13,
    securityContent14, securityContent15, securityContent16, securityContent17, securityContent17Code,
    securityContent2,
    securityContent2Code,
    securityContent2List,
    securityContent2Tips,
    securityContent3,
    securityContent4,
    securityContent4Code,
    securityContent5,
    securityContent6,
    securityContent7,
    securityContent8,
    securityContent8Tips,
    securityContent9,
    securityTitle,
    title
} from "@/src/assets/nextjsDocument/dataFetching/serverActionsAndMutations";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1, content2]} />
            <Divider />

            <CustomSection texts={[conventionTitle,conventionContent1,conventionContent2,conventionContent3,conventionContent3Code,conventionContent4,conventionContent5,conventionContent5Code1,conventionContent5Code2,conventionContent6,conventionContent7,conventionContent8,conventionContent9, conventionContent10]} />
            <Divider />

            <CustomSection texts={[behaviorTitle]} >
                <CustomList items={behaviorContentList} />
            </CustomSection>
            <Divider />

            <CustomSection goodToKnown={<GoodToKnown list={exampleContent4Tips} />} texts={[exampleTitle,exampleContent1,exampleContent2,exampleContent3,exampleContent4,]} />
            <CustomSection goodToKnown={<GoodToKnown list={exampleContent7Tips} />} texts={[exampleContent5,exampleContent6,exampleContent6Code,exampleContent7,exampleContent7Code,]} />
            <CustomSection texts={[exampleContent8,exampleContent9,exampleContent10,exampleContent11,exampleContent12,exampleContent12Code,exampleContent13,exampleContent14,exampleContent15,exampleContent16,exampleContent17,exampleContent18,]} >
                <CustomList items={exampleContent18List} />
            </CustomSection>
            <CustomSection goodToKnown={<GoodToKnown list={exampleContent19Tips} />} texts={[exampleContent18Code,exampleContent19,exampleContent19Code]} />
            <CustomSection goodToKnown={<GoodToKnown list={exampleContent22List} />} texts={[exampleContent20,exampleContent21,exampleContent22,exampleContent22Code,]} />
            <CustomSection goodToKnown={<GoodToKnown list={exampleContentTips} />} texts={[exampleContent23,exampleContent24,exampleContent24Code,exampleContent25,exampleContent26,exampleContent26Code,exampleContent27,exampleContent27Code,exampleContent28,exampleContent29,exampleContent30,exampleContent31,exampleContent32,exampleContent33,exampleContent34,exampleContent34Text,exampleContent34Code,]} />
            <CustomSection goodToKnown={<GoodToKnown text={securityContent2Tips} />} texts={[exampleContent35,exampleContent36,exampleContent36Code,exampleContent37,exampleContent37Code,exampleContent38,exampleContent39,exampleContent39Code,exampleContent40,exampleContent41,exampleContent41Code,exampleContent42, securityTitle,securityContent1,securityContent2]} >
                <CustomList items={securityContent2List} />
            </CustomSection>
            <CustomSection goodToKnown={<GoodToKnown text={securityContent8Tips}/>} texts={[securityContent2Code,securityContent3,securityContent4,securityContent4Code,securityContent5,securityContent6,securityContent7,securityContent8,]} />
            <CustomSection goodToKnown={<GoodToKnown text={securityContent12Tips} />} texts={[securityContent9,securityContent10,securityContent11,securityContent12,]} />
            <CustomSection texts={[securityContent13,securityContent14,securityContent15,securityContent16,securityContent17,securityContent17Code,securityContent]} />
            <CustomSection texts={[additionalResourceTitle,additionalResourceTitleContent1 ]} >
                <CustomList items={additionalResourceTitleContent1List}/>
            </CustomSection>
            <Divider />
        </>
    )
}

export default Page
