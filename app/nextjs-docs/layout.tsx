'use client';

import {Divider, Menu} from "antd";
import {MenuItem, nextjsMenu} from "@/src/assets/nextjsDocument/menu";
import styles from './styles.module.scss'
import {UpCircleFilled} from "@ant-design/icons";
import {ReactNode, useEffect, useState} from "react";
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
        const firstLayer = findItem(nextjsMenu, `/${routes[0]}/${routes[1]}`);
        if (!firstLayer) return;

        const firstLayerIndex = findItemIndex(nextjsMenu, `/${routes[0]}/${routes[1]}`)
        if (routes.length === 2) {
            handleSetNavigation({
                selectedKeys: [firstLayer.key],
                openedKeys: [firstLayer.key],
                nextParams: {
                    firstLayer,
                    firstLayerIndex
                },
                previousParams: {
                    firstLayer,
                    firstLayerIndex
                }
            })
            return;
        }
        if (!firstLayer.children) {
            return;
        }
        const secondLayer = findItem(firstLayer.children, `/${routes[0]}/${routes[1]}/${routes[2]}`)
        if (!secondLayer) return;

        const secondLayerIndex = findItemIndex(firstLayer.children, `/${routes[0]}/${routes[1]}/${routes[2]}`)
        if (routes.length === 3) {
            handleSetNavigation({
                selectedKeys: [secondLayer.key],
                openedKeys: [secondLayer.key, firstLayer.key],
                nextParams: {
                    firstLayer,
                    firstLayerIndex,
                    secondLayer,
                    secondLayerIndex
                },
                previousParams: {
                    firstLayer,
                    firstLayerIndex,
                    secondLayerIndex
                }
            })
            return;
        }
        if (!secondLayer.children) {
            return;
        }
        const thirdLayer = findItem(secondLayer.children);
        if (!thirdLayer) return;

        const thirdLayerIndex = findItemIndex(secondLayer.children);
        if (routes.length === 4) {
            handleSetNavigation({
                selectedKeys: [thirdLayer.key],
                openedKeys: [secondLayer.key, firstLayer.key],
                nextParams: {
                    firstLayer,
                    firstLayerIndex,
                    secondLayer,
                    secondLayerIndex,
                    thirdLayer,
                    thirdLayerIndex
                },
                previousParams: {
                    secondLayer,
                    thirdLayerIndex
                }
            })
            return;
        }
    }, [pathname]);

    const findItem = (parentItems: MenuItem[], currentPathName?: string): MenuItem | undefined => find(parentItems, item => item.label?.props?.href === (currentPathName || pathname))
    const findItemIndex = (parentItems: MenuItem[], currentPathName?: string): number => findIndex(parentItems, item => item.label?.props?.href === (currentPathName || pathname))

    const handleSetNavigation = ({selectedKeys, openedKeys, nextParams, previousParams}: {
        selectedKeys: string[],
        openedKeys: string[],
        nextParams: any,
        previousParams: any
    }) => {
        setSelectKeys(selectedKeys);
        setOpenKeys(openedKeys);
        handleSetFooterNavigatorNext(nextParams);
        handleSetFooterNavigatorPrevious(previousParams);
    }


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

        const getPreviousItem = (parentLayer: MenuItem, currentLayerIndex: number) => {
            if (parentLayer?.children && currentLayerIndex && currentLayerIndex - 1 >= 0) {
                setPrevious({
                    label: parentLayer.children[currentLayerIndex - 1].label?.props?.children,
                    href: parentLayer.children[currentLayerIndex - 1].label?.props?.href,
                })
            } else if (parentLayer && currentLayerIndex === 0) {
                setPrevious({
                    label: parentLayer.label?.props?.children,
                    href: parentLayer.label?.props?.href,
                })
            }
        }
        if (firstLayerIndex && firstLayerIndex - 1 >= 0 && isNil(secondLayerIndex)) {
            const previousItem = flatMap(nextjsMenu[firstLayerIndex - 1])
            setPrevious({
                label: previousItem[previousItem.length - 1].label?.props?.children,
                href: previousItem[previousItem.length - 1].label?.props?.href,
            })
        } else if (secondLayer && !isNil(thirdLayerIndex)) {
            getPreviousItem(secondLayer, thirdLayerIndex);
        } else if (firstLayer && !isNil(secondLayerIndex)) {
            getPreviousItem(firstLayer, secondLayerIndex);
        } else {
            setPrevious(undefined)
        }
    }

    const handleSetFooterNavigatorNext = (
        {firstLayer, firstLayerIndex, secondLayer, secondLayerIndex, thirdLayerIndex}:
        {
            firstLayer: MenuItem, firstLayerIndex: number, secondLayer?: MenuItem, secondLayerIndex?: number,
            thirdLayerIndex?: number
        }) => {

        const getNextItem = (parentLayer: MenuItem, currentLayerIndex?: number) => {
            if (!parentLayer?.children) return
            const isCurrentIndexEmpty = isNil(currentLayerIndex)
            const nextIndex = isCurrentIndexEmpty ? 0 : currentLayerIndex + 1
            setNext({
                label: parentLayer.children[nextIndex].label?.props?.children,
                href: parentLayer.children[nextIndex].label?.props?.href,
            })
        }

        if (secondLayer?.children && !isNil(thirdLayerIndex) && thirdLayerIndex + 1 < secondLayer.children.length) {
            getNextItem(secondLayer, thirdLayerIndex);
        } else if (firstLayer?.children && !isNil(secondLayerIndex) && secondLayerIndex + 1 < firstLayer.children.length) {
            getNextItem(firstLayer, secondLayerIndex);
        } else if (secondLayer?.children && isNil(thirdLayerIndex)) {
            getNextItem(secondLayer, thirdLayerIndex)
        } else if (firstLayer?.children && isNil(secondLayerIndex)) {
            getNextItem(firstLayer, secondLayerIndex)
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
