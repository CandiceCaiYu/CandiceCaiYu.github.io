import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Divider} from "antd";
import {
    content1,
    content2,
    handleExpectedErrorContent1,
    handleExpectedErrorContent2,
    handleExpectedErrorContent3,
    handleExpectedErrorContent3Code,
    handleExpectedErrorContent4,
    handleExpectedErrorContent4Code,
    handleExpectedErrorContent5,
    handleExpectedErrorContent6,
    handleExpectedErrorContent7,
    handleExpectedErrorContent7Code,
    handleExpectedErrorContentTips,
    handleExpectedErrorTitle,
    handleUncaughtExceptionsContent1,
    handleUncaughtExceptionsContent10,
    handleUncaughtExceptionsContent10Code,
    handleUncaughtExceptionsContent2,
    handleUncaughtExceptionsContent3,
    handleUncaughtExceptionsContent4,
    handleUncaughtExceptionsContent5,
    handleUncaughtExceptionsContent5Code,
    handleUncaughtExceptionsContent6,
    handleUncaughtExceptionsContent7,
    handleUncaughtExceptionsContent8,
    handleUncaughtExceptionsContent8Image,
    handleUncaughtExceptionsContent9,
    handleUncaughtExceptionsTitle,
    title
} from "@/src/assets/nextjsDocument/routing/errorHandling";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";

const page = () => {
    return (
        <>
            <CustomSection texts={[title, content1]}>
                <CustomList items={content2}/>
            </CustomSection>
            <Divider/>
            <CustomSection
                goodToKnown={<GoodToKnown text={handleExpectedErrorContentTips}/>}
                texts={[handleExpectedErrorTitle, handleExpectedErrorContent1,
                    handleExpectedErrorContent2, handleExpectedErrorContent3, handleExpectedErrorContent3Code, handleExpectedErrorContent4,
                    handleExpectedErrorContent4Code]}/>
            <CustomSection
                texts={[handleExpectedErrorContent5, handleExpectedErrorContent6, handleExpectedErrorContent7, handleExpectedErrorContent7Code]}/>
            <Divider/>
            <CustomSection texts={[handleUncaughtExceptionsTitle, handleUncaughtExceptionsContent1]}>
                <CustomList items={handleUncaughtExceptionsContent2}/>
            </CustomSection>
            <CustomSection
                image={{height: 300}}
                texts={[handleUncaughtExceptionsContent3, handleUncaughtExceptionsContent4, handleUncaughtExceptionsContent5, handleUncaughtExceptionsContent5Code,
                    handleUncaughtExceptionsContent6, handleUncaughtExceptionsContent7, handleUncaughtExceptionsContent8, handleUncaughtExceptionsContent8Image,
                    handleUncaughtExceptionsContent9, handleUncaughtExceptionsContent10, handleUncaughtExceptionsContent10Code]}/>

        </>
    )
};
export default page
