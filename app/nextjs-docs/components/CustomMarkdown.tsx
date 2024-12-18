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
    const files = (path: string) => ({
        terminal: {
            text: 'Terminal',
            icon: '>_'
        },
        js: {
            text: path,
            icon: 'JS'
        },
        ts: {
            text: path,
            icon: 'TS'
        },
        json: {
            text: path,
            icon: 'JSON'
        }
    });
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
                code(props) {
                    const {className, ...rest} = props;
                    const codeTexts = text.split('~~~').filter(item => item);
                    const pathName = codeTexts[1] ? codeTexts[0].replace(';', '') : '';
                    const pathExtension = () => {
                        if (!pathName) {
                            return 'terminal'
                        } else if (pathName.includes('.js')) {
                            return 'js'
                        } else if (pathName.includes('.json')) {
                            return 'json'
                        } else {
                            return 'ts'
                        }
                    };
                    const currentPathInfo = files(pathName)[pathExtension()];
                    const codeContent = String(codeTexts[1] || codeTexts[0]).replace(/\n/, '').replace(/^;/, '');
                    return (
                        <div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '48px',
                                marginBottom: '-7px',
                                background: '#727494',
                                borderRadius: '4px 4px 0 0',
                                color: '#fff',
                            }}>
                                <div
                                    style={{
                                        padding: '2px',
                                        background: currentPathInfo.text !== 'Terminal' ? '#47476e' : '',
                                        fontSize: '12px',
                                        borderRadius: '2px',
                                        marginRight: '12px',
                                        marginLeft: '12px'
                                    }}>{currentPathInfo.icon}
                                </div>
                                <p>{currentPathInfo.text}</p>
                            </div>
                            <SyntaxHighlighter
                                language="javascript"
                                style={a11yDark}>
                                {codeContent}
                            </SyntaxHighlighter>
                        </div>
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
