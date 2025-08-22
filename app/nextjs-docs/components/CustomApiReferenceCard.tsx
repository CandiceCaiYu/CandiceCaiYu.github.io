'use client';

import {Card} from "antd";
import {useRouter} from 'next/navigation'

export interface CustomApiReferenceCardProps {
    title: string;
    content: string;
    url: string;
}

const CustomApiReferenceCard = ({url, title, content}: CustomApiReferenceCardProps) => {
    const {push} = useRouter()

    return (
        <Card
            style={{width: '350px', height: '160px', overflow: 'hidden',}}
            hoverable
            onClick={() => push(url)}
        >
            <h4 style={{margin: '0 0 12px 0'}}>{title}</h4>
            <div style={{
                height: '70px',
            }}>{content}</div>
        </Card>
    )
}

export default CustomApiReferenceCard
