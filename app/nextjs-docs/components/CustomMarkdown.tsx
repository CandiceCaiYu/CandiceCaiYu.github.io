'use client';
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from "next/image";

const CustomMarkdown = ({text, image}: {
    text: string,
    image?: { width?: number, height?: number }
}) => {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
                code(props) {
                    const {className, ...rest} = props;
                    const codeText = text.replace(/~~~/g, '');
                    return (
                        <SyntaxHighlighter
                            language="javascript"
                            style={a11yDark}>
                            {String(codeText).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    )
                },
                img(props) {
                    const {src, alt} = props;
                    const textItems = text.match(/!\[.*?\]\((.*?)\)/);
                    return (
                        textItems && <Image src={textItems[1]} width={image?.width || 800}
                                            height={image?.height || 200} alt={'alt'}/>
                    )
                }
            }}
        >{text}</Markdown>
    )
};

export default CustomMarkdown
