import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Table} from "antd";
import {ReactNode} from "react";

const SectionWithTable = ({texts, dataSource, goodToKnown}: {
    texts: string[],
    dataSource: Array<{ name: string, description: string, extension?: string }>
    goodToKnown?: ReactNode
}) => {
    return (
        <CustomSection texts={texts} goodToKnown={goodToKnown}>
            <Table
                columns={
                    [
                        {title: '文件夹', key: 'name', dataIndex: 'name'},
                        {title: '文件扩展名', key: 'extension', dataIndex: 'extension'},
                        {title: '描述', key: 'description', dataIndex: 'description'}
                    ]}
                dataSource={dataSource}
                pagination={false}
                showHeader={false}
            />
        </CustomSection>
    )
};

export default SectionWithTable
