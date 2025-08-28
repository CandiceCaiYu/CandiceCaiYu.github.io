import {Table} from "antd";

export interface CustomTableProps {
    dataSource: Array<Record<string, string>>
    columns?: Array<Record<string, string>>
    showHeader?: boolean
}

const CustomTable = ({dataSource, columns, showHeader}: CustomTableProps) => {
    return (
        <Table
            columns={columns ||
                [
                    {title: '文件夹', key: 'name', dataIndex: 'name'},
                    {title: '文件扩展名', key: 'extension', dataIndex: 'extension'},
                    {title: '描述', key: 'description', dataIndex: 'description'}
                ]}
            dataSource={dataSource}
            pagination={false}
            showHeader={showHeader}
        />
    )
};

export default CustomTable
