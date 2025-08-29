import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    apiReferences,
    description,
    handlingExpectedErrorsContent1,
    handlingExpectedErrorsContent10Code,
    handlingExpectedErrorsContent2,
    handlingExpectedErrorsContent3,
    handlingExpectedErrorsContent4,
    handlingExpectedErrorsContent4Code,
    handlingExpectedErrorsContent5,
    handlingExpectedErrorsContent5Code,
    handlingExpectedErrorsContent6,
    handlingExpectedErrorsContent7,
    handlingExpectedErrorsContent7Code,
    handlingExpectedErrorsContent8,
    handlingExpectedErrorsContent9,
    handlingExpectedErrorsContent9Code,
    handlingExpectedErrorsTitle,
    handlingUncaughtExceptionContent1,
    handlingUncaughtExceptionContent10,
    handlingUncaughtExceptionContent11,
    handlingUncaughtExceptionContent11Code,
    handlingUncaughtExceptionContent2,
    handlingUncaughtExceptionContent3,
    handlingUncaughtExceptionContent4,
    handlingUncaughtExceptionContent4Code,
    handlingUncaughtExceptionContent5,
    handlingUncaughtExceptionContent5Img,
    handlingUncaughtExceptionContent6,
    handlingUncaughtExceptionContent7,
    handlingUncaughtExceptionContent8,
    handlingUncaughtExceptionContent8Code,
    handlingUncaughtExceptionContent9,
    handlingUncaughtExceptionContent9Code,
    handlingUncaughtExceptionTitle,
    title
} from "@/src/assets/nextjsDocument/start/errorHandling";
import {Divider} from "antd";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, description]}/>
            <Divider/>

            <CustomSection
                texts={[handlingExpectedErrorsTitle, handlingExpectedErrorsContent1, handlingExpectedErrorsContent2, handlingExpectedErrorsContent3, handlingExpectedErrorsContent4, handlingExpectedErrorsContent4Code, handlingExpectedErrorsContent5,
                    handlingExpectedErrorsContent5Code, handlingExpectedErrorsContent6, handlingExpectedErrorsContent7, handlingExpectedErrorsContent7Code, handlingExpectedErrorsContent8, handlingExpectedErrorsContent9, handlingExpectedErrorsContent9Code, handlingExpectedErrorsContent10Code]}/>
            <Divider/>

            <CustomSection
                image={{height: 340}}
                texts={[handlingUncaughtExceptionTitle, handlingUncaughtExceptionContent1, handlingUncaughtExceptionContent2, handlingUncaughtExceptionContent3, handlingUncaughtExceptionContent4, handlingUncaughtExceptionContent4Code, handlingUncaughtExceptionContent5, handlingUncaughtExceptionContent5Img, handlingUncaughtExceptionContent6, handlingUncaughtExceptionContent7, handlingUncaughtExceptionContent8, handlingUncaughtExceptionContent8Code, handlingUncaughtExceptionContent9, handlingUncaughtExceptionContent9Code, handlingUncaughtExceptionContent10, handlingUncaughtExceptionContent11, handlingUncaughtExceptionContent11Code]}/>
            <Divider/>

            <FooterApiReferenceSection apis={apiReferences}/>
        </>
    )
}
export default Page
