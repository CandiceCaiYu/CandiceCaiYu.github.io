import CustomSection from "@/app/nextjs-docs/components/CustomSection";
import {Table} from "antd";
import {ReactNode} from "react";

const SectionWithTable = ({texts, dataSource, goodToKnown, columns}: {
    texts: string[],
    dataSource: Array<Record<string, string>>
    goodToKnown?: ReactNode
    columns?: Array<Record<string, string>>
}) => {
    return (
        <CustomSection texts={texts} goodToKnown={goodToKnown}>
            <Table
                columns={columns ||
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
