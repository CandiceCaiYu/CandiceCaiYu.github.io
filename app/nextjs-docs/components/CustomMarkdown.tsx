'use client';
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CustomMarkdown = ({text}: { text: string }) => {
    const codeText = text.replace(/~~~/g, '');
    return (
        <div>
            <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code(props) {
                        const {className, ...rest} = props;
                        return (
                            <SyntaxHighlighter
                                language="javascript"
                                style={a11yDark}>
                                {String(codeText).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        )
                    }
                }}
            >{text}</Markdown>
        </div>
    )
};

export default CustomMarkdown
