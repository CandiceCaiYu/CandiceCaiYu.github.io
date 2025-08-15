import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content1List,
    content2,
    content3,
    content3Code,
    content4,
    exampleContent1,
    exampleContent10,
    exampleContent11,
    exampleContent12,
    exampleContent13,
    exampleContent13Code,
    exampleContent14,
    exampleContent15,
    exampleContent15Code,
    exampleContent16,
    exampleContent17,
    exampleContent18,
    exampleContent19,
    exampleContent19Code,
    exampleContent19Tips,
    exampleContent1Code,
    exampleContent2,
    exampleContent20,
    exampleContent20Code,
    exampleContent21,
    exampleContent22,
    exampleContent23,
    exampleContent24,
    exampleContent25,
    exampleContent25Img,
    exampleContent25List,
    exampleContent26,
    exampleContent27,
    exampleContent28,
    exampleContent28Code,
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
    exampleContent37,
    exampleContent38,
    exampleContent38Code1,
    exampleContent38Code2,
    exampleContent38Tips,
    exampleContent39,
    exampleContent3Code,
    exampleContent4,
    exampleContent40,
    exampleContent41Code,
    exampleContent42,
    exampleContent43,
    exampleContent43Tips,
    exampleContent44,
    exampleContent45,
    exampleContent46,
    exampleContent46Code,
    exampleContent47,
    exampleContent47Code1,
    exampleContent47Code2,
    exampleContent5,
    exampleContent6,
    exampleContent6Code,
    exampleContent7,
    exampleContent8,
    exampleContent9,
    exampleTitle,
    referenceContent1List,
    referenceTitle,
    subTitle,
    title
} from "@/src/assets/nextjsDocument/dataFetching/dataFetchingAndCaching";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, subTitle]} >
                <CustomList items={content1List} />
            </CustomSection>
            <CustomSection texts={[content2, content3, content3Code, content4]} />
            <Divider />

            <CustomSection texts={[referenceTitle]} >
                <CustomList items={referenceContent1List} />
            </CustomSection>
            <Divider />

            <CustomSection
                goodToKnown={<GoodToKnown list={exampleContent19Tips} />}
                texts={[exampleTitle,exampleContent1,exampleContent1Code,
                exampleContent2, exampleContent3,  exampleContent3Code, exampleContent4,  exampleContent5,  exampleContent6, exampleContent6Code, exampleContent7,
                exampleContent8,  exampleContent9,  exampleContent10,exampleContent11,exampleContent12,exampleContent13,  exampleContent13Code,exampleContent14,exampleContent15,exampleContent15Code,exampleContent16,exampleContent17,exampleContent18,exampleContent19,]} />
            <CustomSection texts={[exampleContent19Code,exampleContent20,exampleContent20Code,exampleContent21,exampleContent22,]} />
            <Divider />

            <CustomSection
                image={{height: 240}}
                texts={[exampleContent23,exampleContent24,exampleContent25,exampleContent25Img,]} >
                <CustomList items={exampleContent25List} />
            </CustomSection>
            <CustomSection
                goodToKnown={<GoodToKnown text={exampleContent38Tips} />}
                texts={[exampleContent26,exampleContent27,exampleContent28,exampleContent28Code,exampleContent29,exampleContent30,exampleContent31,exampleContent32,exampleContent33,exampleContent34,exampleContent34Text,exampleContent34Code,exampleContent35,exampleContent36,exampleContent37,exampleContent38,exampleContent38Code1,exampleContent38Code2]} />
            <CustomSection goodToKnown={<GoodToKnown list={exampleContent43Tips} />} texts={[exampleContent39,exampleContent40,exampleContent41Code,exampleContent42,exampleContent43,]} />
            <CustomSection texts={[exampleContent44,exampleContent45,exampleContent46,exampleContent46Code,exampleContent47,exampleContent47Code1,exampleContent47Code2,]} />
            <CustomSection texts={[]} />
            <CustomSection texts={[]} />
            <Divider />
        </>
    )
}

export default Page
