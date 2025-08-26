import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {
        apiReferences,
        createServerFunctionContent10Code,
        createServerFunctionContent2,
        createServerFunctionContent2Code,
        createServerFunctionContent3,
        createServerFunctionContent4,
        createServerFunctionContent4Code,
        createServerFunctionContent4GTK,
        createServerFunctionContent5,
        createServerFunctionContent6,
        createServerFunctionContent6Code,
        createServerFunctionContent7Code,
        createServerFunctionContent7GTK,
        createServerFunctionContent8,
        createServerFunctionContent9,
        createServerFunctionContent9Code,
        createServerFunctionTitle,
        intro,
        invokeServerFunctionContent1,
        invokeServerFunctionContent1GTK,
        invokeServerFunctionContent1List,
        invokeServerFunctionContent2,
        invokeServerFunctionContent3,
        invokeServerFunctionContent4,
        invokeServerFunctionContent4Code,
        invokeServerFunctionContent5Code,
        invokeServerFunctionContent6,
        invokeServerFunctionContent7,
        invokeServerFunctionContent7Code,
        invokeServerFunctionTitle,
        serverFunctionExampleContent1,
        serverFunctionExampleContent10,
        serverFunctionExampleContent11,
        serverFunctionExampleContent11Code,
        serverFunctionExampleContent11List,
        serverFunctionExampleContent2,
        serverFunctionExampleContent2Code,
        serverFunctionExampleContent3,
        serverFunctionExampleContent4,
        serverFunctionExampleContent4Code,
        serverFunctionExampleContent5,
        serverFunctionExampleContent6,
        serverFunctionExampleContent6Code,
        serverFunctionExampleContent7,
        serverFunctionExampleContent8,
        serverFunctionExampleContent9,
        serverFunctionExampleContent9Code,
        serverFunctionExampleTitle,
        title,
        whatServerFunctionContent1,
        whatServerFunctionContent2,
        whatServerFunctionContent3,
        whatServerFunctionContent3List,
        whatServerFunctionContent4,
        whatServerFunctionContent5,
        whatServerFunctionTitle
} from "@/src/assets/nextjsDocument/start/updatingData";
import CustomList from "@/app/nextjs-docs/components/CustomList";
import {Divider} from "antd";
import GoodToKnown from "@/app/nextjs-docs/components/GoodToKnown";
import FooterApiReferenceSection from "@/app/nextjs-docs/components/FooterApiReferenceSection";

const Page = () => {
    return (
        <>
            <CustomSection texts={[title, intro]}/>
            <CustomSection
                texts={[whatServerFunctionTitle, whatServerFunctionContent1, whatServerFunctionContent2, whatServerFunctionContent3]}/>
            <CustomList items={whatServerFunctionContent3List}/>
            <CustomSection texts={[whatServerFunctionContent4, whatServerFunctionContent5]}/>
            <Divider/>

            <CustomSection
                texts={[createServerFunctionTitle, createServerFunctionContent2, createServerFunctionContent2Code, createServerFunctionContent3, createServerFunctionContent4, createServerFunctionContent4Code]}/>
            <GoodToKnown text={createServerFunctionContent4GTK}/>
            <CustomSection
                texts={[createServerFunctionContent5, createServerFunctionContent6, createServerFunctionContent6Code, createServerFunctionContent7Code]}/>
            <GoodToKnown text={createServerFunctionContent7GTK}/>
            <CustomSection
                texts={[createServerFunctionContent8, createServerFunctionContent9, createServerFunctionContent9Code, createServerFunctionContent10Code]}/>
            <Divider/>

            <CustomSection texts={[invokeServerFunctionTitle, invokeServerFunctionContent1]}/>
            <CustomList items={invokeServerFunctionContent1List}/>
            <GoodToKnown text={invokeServerFunctionContent1GTK}/>
            <CustomSection
                texts={[invokeServerFunctionContent2, invokeServerFunctionContent3, invokeServerFunctionContent4, invokeServerFunctionContent4Code, invokeServerFunctionContent5Code, invokeServerFunctionContent6, invokeServerFunctionContent7, invokeServerFunctionContent7Code]}/>
            <Divider/>

            <CustomSection
                texts={[serverFunctionExampleTitle, serverFunctionExampleContent1, serverFunctionExampleContent2, serverFunctionExampleContent2Code, serverFunctionExampleContent3, serverFunctionExampleContent4, serverFunctionExampleContent4Code, serverFunctionExampleContent5, serverFunctionExampleContent6, serverFunctionExampleContent6Code, serverFunctionExampleContent7, serverFunctionExampleContent8, serverFunctionExampleContent9, serverFunctionExampleContent9Code, serverFunctionExampleContent10, serverFunctionExampleContent11]}/>
            <CustomList items={serverFunctionExampleContent11List}/>
            <CustomSection texts={[serverFunctionExampleContent11Code]}/>
            <Divider/>

            <FooterApiReferenceSection apis={apiReferences}/>
        </>
    )
}

export default Page
