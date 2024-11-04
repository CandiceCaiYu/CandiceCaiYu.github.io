import {ReactNode} from "react";
import {Divider} from "antd";
import CustomMarkdown from "@/app/nextjs-docs/components/CustomMarkdown";

interface CustomSectionProps {
    header: ReactNode;
    texts: string[];
    children?: ReactNode;
    isShowDivider?: boolean;
    isTopTitle?: boolean;
    goodToKnown?: ReactNode;
}

const CustomSection = ({
                           header,
                           texts,
                           children,
                           isTopTitle,
                           isShowDivider = true,
                           goodToKnown
                       }: CustomSectionProps) => {
    return (
        <div>
            {isTopTitle
                ? <h1 style={{fontSize: '2rem', margin: '48px 0 24px', fontWeight: 'bold'}}>{header}</h1>
                : <h2 style={{fontSize: '1.5rem', margin: '48px 0 24px', fontWeight: 'bold'}}>{header}</h2>
            }
            {texts.map((item, index) => <div key={index}
                                             style={{
                                                 marginBottom: '24px',
                                                 color: '#171717',
                                                 fontSize: isTopTitle ? '16px' : '14px'
                                             }}>
                <CustomMarkdown text={item}/>
            </div>)}
            {children}
            {goodToKnown}
            {/*<div style={{height: '1px', width: '100%', marginTop: '48px', background: "#eee"}}></div>*/}
            {isShowDivider && <Divider/>}
        </div>
    )
};
export default CustomSection
