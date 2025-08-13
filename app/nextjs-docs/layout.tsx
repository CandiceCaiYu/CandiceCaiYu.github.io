'use client';

import {Divider, Menu} from "antd";
import {nextjsMenu} from "@/src/assets/nextjsDocument/menu";
import styles from './styles.module.scss'
import {UpCircleFilled} from "@ant-design/icons";
import {ReactElement, ReactNode, useEffect, useState} from "react";
import {useLocation} from "react-use";
import {find} from "lodash";

export default function NextJSLayout(prop: {
    children: ReactNode
}) {
    const [backToTopOpacity, setBackToTopOpacity] = useState(0);
    const [selectKeys, setSelectKeys] = useState<string[]>([]);
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const {pathname} = useLocation();
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        const routes = pathname?.split('/').filter(Boolean);
        if (!routes) {
            return;
        }
        if (routes.length === 2) {
            const firstLayer = find(nextjsMenu, item => item.label?.props?.href === pathname);
            if (firstLayer) {
                setSelectKeys([firstLayer.key]);
                setOpenKeys([firstLayer.key]);
                return;
            }
        } else if (routes.length === 3) {
            const firstLayer = find(nextjsMenu, item => item.label?.props?.href === `/${routes[0]}/${routes[1]}`);
            const secondLayer = find(firstLayer?.children, item => item.label?.props?.href === pathname);
            if (secondLayer && firstLayer) {
                setSelectKeys([secondLayer.key]);
                setOpenKeys([secondLayer.key, firstLayer.key]);
                return;
            }
        } else if (routes.length === 4) {
            const firstLayer = find(nextjsMenu, item => checkHref(item?.label, `/${routes[0]}/${routes[1]}`));
            const secondLayer = find(firstLayer?.children, item => item.label?.props?.href === `/${routes[0]}/${routes[1]}/${routes[2]}`);
            const thirdLayer = find(secondLayer?.children, item => item.label?.props?.href === pathname);
            if (thirdLayer && secondLayer && firstLayer) {
                setSelectKeys([thirdLayer.key]);
                setOpenKeys([secondLayer.key, firstLayer.key]);
                return;
            }
        }
    }, [pathname]);

    const checkHref = (label: ReactElement, href: String): boolean => {
        if (!label || !label.props || !label.props.href) {
            return false;
        }
        return label.props.href === href
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setBackToTopOpacity(1)
        } else {
            setBackToTopOpacity(0)
        }
    };
    return (
        <section className={styles.layout}>
            <div>
                <Menu mode="inline"
                      items={nextjsMenu}
                      selectedKeys={selectKeys}
                      openKeys={openKeys}
                      style={{height: '100%'}}
                      multiple={false}
                />

            </div>
            <div className={styles.center}>
                <div className={styles.centerHeader}>
                    <h1>Next.js中文文档@v15.0.3</h1>
                    <Divider/>
                </div>
                {prop.children}
            </div>
            <div className={styles.right}>
            </div>
            <div className={styles.backToTop} style={{opacity: backToTopOpacity}} onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }}>
                <UpCircleFilled/>
            </div>
        </section>
    )
}
