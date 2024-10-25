import {ReactNode} from "react";
import {Divider} from "antd";

interface CustomSectionProps {
    header: ReactNode;
    texts: ReactNode[];
    children?: ReactNode;
    isShowDivider?: boolean;
    isTopTitle?: boolean;
}

const CustomSection = ({header, texts, children, isTopTitle, isShowDivider = true}: CustomSectionProps) => {
    return (
        <div>
            {isTopTitle
                ? <h1 style={{fontSize: '2rem', margin: '48px 0 24px', fontWeight: 'bold'}}>{header}</h1>
                : <h2 style={{fontSize: '1.5rem', margin: '48px 0 24px', fontWeight: 'bold'}}>{header}</h2>
            }
            {texts.map((item, index) => <p key={index}
                                           style={{
                                               marginBottom: '24px',
                                               color: '#171717',
                                               fontSize: isTopTitle ? '16px' : '14px'
                                           }}>{item}</p>)}
            {children}
            {/*<div style={{height: '1px', width: '100%', marginTop: '48px', background: "#eee"}}></div>*/}
            {isShowDivider && <Divider/>}
        </div>
    )
};
export default CustomSection
