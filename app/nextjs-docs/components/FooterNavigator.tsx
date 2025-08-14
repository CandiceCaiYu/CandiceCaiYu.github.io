import style from "../styles.module.scss";
import Link from "next/link";
import {Flex} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

export interface FooterNavigatorLink {
    href: string;
    label: string;
    action?: string;
}

export interface FooterNavigatorProps {
    previous?: FooterNavigatorLink;
    next?: FooterNavigatorLink;
}

export enum FooterNavigatorAction {
    Previous = 'Previous',
    Next = 'Next'
}

const FooterNavigator = (props: FooterNavigatorProps) => {
    const {previous, next} = props;
    const ActionItem = ({href, label, action}: FooterNavigatorLink) => (
        <Link href={href}>
            <Flex className={style.actionItem} gap={8}>
                {action === FooterNavigatorAction.Previous && <LeftOutlined className={style.icon}/>}
                <div>
                    <div className={style.action}>{action}</div>
                    <div className={style.actionLink}>{label}</div>
                </div>
                {action === FooterNavigatorAction.Next && <RightOutlined className={style.icon}/>}
            </Flex>
        </Link>
    );
    return (
        <Flex className={style.footerNavigator} justify={"space-between"}>
            {previous ? ActionItem({...previous, action: FooterNavigatorAction.Previous}) : <div/>}
            {next ? ActionItem({...next, action: FooterNavigatorAction.Next}) : <div/>}
        </Flex>
    );
}
export default FooterNavigator
