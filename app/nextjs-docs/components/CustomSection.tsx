import {ReactNode} from "react";
import CustomMarkdown from "@/app/nextjs-docs/components/CustomMarkdown";
import style from '../styles.module.scss'

interface CustomSectionProps {
    texts: string[];
    children?: ReactNode;
    isTopTitle?: boolean;
    goodToKnown?: ReactNode;
    image?: { width?: number, height?: number }
}

const CustomSection = ({
                           texts,
                           children,
                           isTopTitle,
                           goodToKnown,
                           image
                       }: CustomSectionProps) => {
    return (
        <div className={style.section}>
            {texts.map((item, index) => <div key={index}
                                             style={{
                                                 marginBottom: '24px',
                                                 color: '#171717',
                                                 fontSize: isTopTitle ? '18px' : '16px'
                                             }}>
                <CustomMarkdown text={item} image={image}/>
            </div>)}
            {children}
            {goodToKnown}
        </div>
    )
};
export default CustomSection
