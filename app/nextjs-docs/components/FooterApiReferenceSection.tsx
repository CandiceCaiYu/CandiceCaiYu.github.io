import CustomApiReferenceCard, {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";
import {Flex} from "antd";

export interface FooterApiReferenceSectionProps {
    isShowDescription?: boolean;
    apis: CustomApiReferenceCardProps[];
}

const FooterApiReferenceSection = ({isShowDescription = true, apis}: FooterApiReferenceSectionProps) => {
    return (
        <div>
            <h3>API Reference</h3>
            {isShowDescription &&
                <p style={{margin: '24px 0'}}>通过阅读 API 参考，了解有关此页面中提到的功能的更多信息。</p>}
            <Flex gap={48} wrap={'wrap'} style={{marginTop: '16px'}}>
                {apis.map((api) => (
                    <CustomApiReferenceCard {...api} key={api.url}/>
                ))}
            </Flex>
        </div>
    )
}
export default FooterApiReferenceSection
