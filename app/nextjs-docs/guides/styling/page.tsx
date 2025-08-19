import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {content1, content1List, content2, title} from "@/src/assets/nextjsDocument/styling/styling";
import CustomList from "@/app/nextjs-docs/components/CustomList";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, content1]}>
                <CustomList items={content1List}/>
            </CustomSection>
            <CustomSection texts={[content2]}/>
        </>
    )
};

export default Page
