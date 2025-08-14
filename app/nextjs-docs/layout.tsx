'use client';

import {Divider, Menu} from "antd";
import {MenuItem, nextjsMenu} from "@/src/assets/nextjsDocument/menu";
import styles from './styles.module.scss'
import {UpCircleFilled} from "@ant-design/icons";
import {ReactElement, ReactNode, useEffect, useState} from "react";
import {useLocation} from "react-use";
import {find, findIndex, flatMap, isNil} from "lodash";
import FooterNavigator, {FooterNavigatorLink} from "@/app/nextjs-docs/components/FooterNavigator";


export default function NextJSLayout(prop: {
    children: ReactNode
}) {
    const [backToTopOpacity, setBackToTopOpacity] = useState(0);
    const [selectKeys, setSelectKeys] = useState<string[]>([]);
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const [previous, setPrevious] = useState<FooterNavigatorLink>();
    const [next, setNext] = useState<FooterNavigatorLink>();
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
            const firstLayerIndex = findIndex(nextjsMenu, item => item.label?.props?.href === pathname);
            if (firstLayer) {
                setSelectKeys([firstLayer.key]);
                setOpenKeys([firstLayer.key]);
                handleSetFooterNavigatorNext({
                    firstLayer,
                    firstLayerIndex,
                });
                handleSetFooterNavigatorPrevious({
                    firstLayer,
                    firstLayerIndex
                });
                return;
            }
        } else if (routes.length === 3) {
            const firstLayer = find(nextjsMenu, item => item.label?.props?.href === `/${routes[0]}/${routes[1]}`);
            const firstLayerIndex = findIndex(nextjsMenu, item => item.label?.props?.href === `/${routes[0]}/${routes[1]}`);
            if (!firstLayer || !firstLayer.children) {
                return;
            }
            const secondLayer = find(firstLayer.children, item => item.label?.props?.href === pathname);
            const secondLayerIndex = findIndex(firstLayer.children, item => item.label?.props?.href === pathname);
            if (secondLayer && firstLayer) {
                setSelectKeys([secondLayer.key]);
                setOpenKeys([secondLayer.key, firstLayer.key]);
                handleSetFooterNavigatorNext({
                    firstLayer,
                    firstLayerIndex,
                    secondLayer,
                    secondLayerIndex
                })
                handleSetFooterNavigatorPrevious({
                    firstLayer,
                    firstLayerIndex,
                    secondLayerIndex
                })
                return;
            }
        } else if (routes.length === 4) {
            const firstLayer = find(nextjsMenu, item => checkHref(item?.label, `/${routes[0]}/${routes[1]}`));
            const firstLayerIndex = findIndex(nextjsMenu, item => checkHref(item?.label, `/${routes[0]}/${routes[1]}`));
            const secondLayer = find(firstLayer?.children, item => item.label?.props?.href === `/${routes[0]}/${routes[1]}/${routes[2]}`);
            const secondLayerIndex = findIndex(firstLayer?.children, item => item.label?.props?.href === `/${routes[0]}/${routes[1]}/${routes[2]}`);
            if (!firstLayer || !firstLayer.children || !secondLayer || !secondLayer.children) {
                return;
            }
            const thirdLayer = find(secondLayer.children, item => item.label?.props?.href === pathname);
            const thirdLayerIndex = findIndex(secondLayer.children, item => item.label?.props?.href === pathname);
            if (thirdLayer && secondLayer && firstLayer) {
                setSelectKeys([thirdLayer.key]);
                setOpenKeys([secondLayer.key, firstLayer.key]);
                handleSetFooterNavigatorNext({
                    firstLayer,
                    firstLayerIndex,
                    secondLayer,
                    secondLayerIndex,
                    thirdLayer,
                    thirdLayerIndex
                })

                handleSetFooterNavigatorPrevious({
                    secondLayer,
                    thirdLayerIndex
                })
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

    const handleSetFooterNavigatorPrevious = ({
                                                  firstLayer,
                                                  firstLayerIndex,
                                                  secondLayer,
                                                  secondLayerIndex,
                                                  thirdLayerIndex
                                              }: {
        firstLayer?: MenuItem,
        firstLayerIndex?: number,
        secondLayer?: MenuItem,
        secondLayerIndex?: number
        thirdLayerIndex?: number
    }) => {

        if (secondLayer && secondLayer.children && thirdLayerIndex && thirdLayerIndex - 1 >= 0) {
            setPrevious({
                label: secondLayer.children[thirdLayerIndex - 1].label?.props?.children,
                href: secondLayer.children[thirdLayerIndex - 1].label?.props?.href,
            })
        } else if (secondLayer && thirdLayerIndex === 0) {
            setPrevious({
                label: secondLayer.label?.props?.children,
                href: secondLayer.label?.props?.href,
            })
        } else if (firstLayer && firstLayer.children && secondLayerIndex && secondLayerIndex - 1 >= 0) {
            setPrevious({
                label: firstLayer.children[secondLayerIndex - 1].label?.props?.children,
                href: firstLayer.children[secondLayerIndex - 1].label?.props?.href,
            })
        } else if (firstLayer && secondLayerIndex === 0) {
            setPrevious({
                label: firstLayer.label?.props?.children,
                href: firstLayer.label?.props?.href,
            })
        } else if (firstLayerIndex && firstLayerIndex - 1 >= 0) {
            const previousItem = flatMap(nextjsMenu[firstLayerIndex - 1])
            console.log('previousItem..', previousItem)
            setPrevious({
                label: previousItem[previousItem.length - 1].label?.props?.children,
                href: previousItem[previousItem.length - 1].label?.props?.href,
            })
        } else {
            setPrevious(undefined)
        }
    }

    const handleSetFooterNavigatorNext = (
        {firstLayer, firstLayerIndex, secondLayer, secondLayerIndex, thirdLayer, thirdLayerIndex}:
        {
            firstLayer: MenuItem, firstLayerIndex: number, secondLayer?: MenuItem, secondLayerIndex?: number,
            thirdLayer?: MenuItem, thirdLayerIndex?: number
        }) => {
        if (secondLayer?.children && !isNil(thirdLayerIndex) && thirdLayerIndex + 1 < secondLayer.children.length) {
            setNext({
                label: secondLayer.children[thirdLayerIndex + 1]?.label?.props?.children,
                href: secondLayer.children[thirdLayerIndex + 1]?.label?.props?.href,
            })
        } else if (firstLayer && secondLayer?.children && isNil(thirdLayerIndex)) {
            setNext({
                label: secondLayer.children[0]?.label?.props?.children,
                href: secondLayer.children[0]?.label?.props?.href,
            })
        } else if (firstLayer && firstLayer.children && !secondLayer) {
            setNext({
                label: firstLayer.children[0]?.label?.props?.children,
                href: firstLayer.children[0]?.label?.props?.href,
            })
        } else if (firstLayer && firstLayer.children && !isNil(secondLayerIndex) && secondLayerIndex + 1 < firstLayer.children.length) {
            setNext({
                label: firstLayer.children[secondLayerIndex + 1].label?.props?.children,
                href: firstLayer.children[secondLayerIndex + 1].label?.props?.href,
            })
        } else if (firstLayerIndex + 1 < nextjsMenu.length) {
            setNext({
                label: nextjsMenu[firstLayerIndex + 1]?.label?.props?.children,
                href: nextjsMenu[firstLayerIndex + 1]?.label?.props?.href,
            })
        } else {
            setNext(undefined)
        }
    }

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
                <FooterNavigator previous={previous} next={next}/>
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
