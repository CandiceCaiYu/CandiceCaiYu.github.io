import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    creatingRoutesContent2,
    creatingRoutesContent2Image,
    creatingRoutesContent3,
    creatingRoutesContent3Image,
    creatingRoutesContent4,
    creatingRoutesContent5,
    creatingRoutesDescription,
    creatingRoutesTitle,
    creatingUICode,
    creatingUIContent1,
    creatingUIDescription,
    creatingUITitle,
    definingRoutesContent,
    definingRoutesDescription,
    definingRoutesTitle
} from "@/src/assets/nextjsDocument/routing/definingRoutes";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import {Divider} from "antd";

const Page = () => {
    return (
        <>
            <CustomSection texts={[definingRoutesTitle]}
                           goodToKnown={<GoodToKnown title={''} text={definingRoutesDescription}/>}/>
            <CustomSection texts={[definingRoutesContent]}/>
            <Divider/>
            <CustomSection goodToKnown={<GoodToKnown text={creatingRoutesContent5}/>} image={{height: 300}}
                           texts={[creatingRoutesTitle,
                               creatingRoutesDescription, creatingRoutesContent2,
                               creatingRoutesContent2Image, creatingRoutesContent3, creatingRoutesContent3Image, creatingRoutesContent4]}/>
            <CustomSection texts={[creatingUITitle, creatingUIDescription, creatingUIContent1, creatingUICode]}/>
        </>
    )
};
export default Page;
