import CustomApiReferenceCard, {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";
import {Flex} from "antd";

export interface FooterApiReferenceSectionProps {
    description?: string;
    apis: CustomApiReferenceCardProps[];
}

const FooterApiReferenceSection = ({description, apis}: FooterApiReferenceSectionProps) => {
    return (
        <div>
            <h3>API Reference</h3>
            {description && <p style={{margin: '24px 0'}}>{description}</p>}
            <Flex gap={48} wrap={'wrap'} style={{marginTop: '16px'}}>
                {apis.map((api) => (
                    <CustomApiReferenceCard {...api} key={api.url}/>
                ))}
            </Flex>
        </div>
    )
}
export default FooterApiReferenceSection
