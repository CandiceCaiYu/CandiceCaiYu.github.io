'use client'

import {Empty} from "antd";

const EmptyPage = ({title}: { title?: String }) => {
    return (
        <>
            {title && <h1>{title}</h1>}
            <Empty imageStyle={{margin: '120px 0 360px 0'}} description={false}/>
        </>
    )

}
export default EmptyPage
