import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
    ApiReferences,
    descriptions1,
    descriptions2,
    descriptions2List,
    fetchContent1,
    fetchContent1Code,
    fetchContent1GTK,
    fetchContent2,
    fetchContent2Code,
    fetchContent3,
    fetchContent4,
    fetchTitle,
    revalidatePathContent1,
    revalidatePathContent1Code,
    revalidatePathContent2,
    revalidatePathTitle,
    revalidateTagContent1,
    revalidateTagContent1Code,
    revalidateTagContent2,
    revalidateTagContent2Code,
    revalidateTagContent3,
    revalidateTagContent3Code,
    revalidateTagContent4,
    revalidateTagContent5,
    revalidateTagTitle,
    title,
    unstableCacheContent1,
    unstableCacheContent1Code,
    unstableCacheContent2Code,
    unstableCacheContent3,
    unstableCacheContent3Code,
    unstableCacheContent3List,
    unstableCacheContent4,
    unstableCacheTitle
} from "@/src/assets/nextjsDocument/start/cachingAndRevalidating";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import {Divider} from "antd";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const Page = () => {
        return (
            <>
                <CustomSection texts={[title, descriptions1, descriptions2]}/>
                <CustomList items={descriptions2List}/>
                <Divider/>

                <CustomSection texts={[fetchTitle, fetchContent1, fetchContent1Code]}/>
                <GoodToKnown text={fetchContent1GTK}/>
                <CustomSection texts={[fetchContent2, fetchContent2Code, fetchContent3, fetchContent4,]}/>
                <Divider/>

                <CustomSection
                    texts={[unstableCacheTitle, unstableCacheContent1, unstableCacheContent1Code, unstableCacheContent2Code, unstableCacheContent3]}/>
                <CustomList items={unstableCacheContent3List}/>
                <CustomSection texts={[unstableCacheContent3Code, unstableCacheContent4]}/>
                <Divider/>

                <CustomSection
                    texts={[revalidateTagTitle, revalidateTagContent1, revalidateTagContent1Code, revalidateTagContent2, revalidateTagContent2Code, revalidateTagContent3, revalidateTagContent3Code, revalidateTagContent4, revalidateTagContent5,]}/>
                <Divider/>

                <CustomSection
                    texts={[revalidatePathTitle, revalidatePathContent1, revalidatePathContent1Code, revalidatePathContent2]}/>
                <FooterApiReferenceSection apis={ApiReferences}/>
            </>
        )
    }
;
export default Page
