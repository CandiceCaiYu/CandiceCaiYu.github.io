'use client';

import {Menu} from "antd";
import {nextjsMenu} from "@/src/assets/nextjsDocument/menu";
import styles from './styles.module.scss'
import {UpCircleFilled} from "@ant-design/icons";
import {useEffect, useState} from "react";

export default function NextJSLayout(prop: {
    children: React.ReactNode
}) {
    const [backToTopOpacity, setBackToTopOpacity] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

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
                      defaultSelectedKeys={["212"]}
                    //   defaultSelectedKeys={selectedKeys}
                    // defaultOpenKeys={["2", "21",]}
                      style={{height: '100%'}}
                />

            </div>
            <div className={styles.center}>{prop.children}</div>
            <div className={styles.right}></div>
            <div className={styles.backToTop} style={{opacity: backToTopOpacity}} onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }}>
                <UpCircleFilled/>
            </div>
        </section>
    )
}
