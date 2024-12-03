import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {content1, content2, content3, title} from "@/src/assets/nextjsDocument/routing/buildYourApplication";

const Page = () => {
    return (
        <CustomSection texts={[title, content1, content2, content3]}/>
    )
};
export default Page;
