import React from "react";
import {Footer as Foot} from "antd/es/layout/layout";
import {FOOTER_INFO} from "@/src/assets/constants";
import styles from './styles.module.scss'

export default function Footer() {
    return (
        <div>
            <div className={styles.footer_wrapper}>
                {FOOTER_INFO.map(item => (
                    <div key={item.id} className={styles.footer_list}>
                        <h6>{item.title}</h6>
                        <ul>
                            {item.details.map(detail => (
                                <a
                                    key={detail.id}
                                    className={styles.footer_list_item} href={detail.link}
                                    target={'_blank'}>
                                    {detail.icon && <i>{detail.icon}</i>}
                                    <span>{detail.name}</span>
                                </a>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Foot className={styles.footer_bottom}>Copyright © 2023 巫瞅瞅</Foot>
        </div>
    )
}
