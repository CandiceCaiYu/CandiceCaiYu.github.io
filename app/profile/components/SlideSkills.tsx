'use client'
import styles from "@/app/profile/styles.module.scss";
import skillsImg from "@/public/yello-cat.png";
import Image from 'next/image'
import {Bar, Pie} from "@ant-design/plots";

export default function SlideSkills() {
    const data = [
        {
            year: '1951 年',
            value: 38,
        },
        {
            year: '1952 年',
            value: 52,
        },
        {
            year: '1956 年',
            value: 61,
        },
        {
            year: '1957 年',
            value: 145,
        },
        {
            year: '1958 年',
            value: 48,
        },
    ];
    const barConfig = {
        data: data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        width: 500,
        legend: {
            position: 'top-left',
        },
    }

    const pieData = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const pieConfig = {
        appendPadding: 10,
        data: pieData,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        width: 400,
        colors: ['#feb153', '#4b6c6b', '#e9f1df', '#9d9b86'],
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({percent}) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return (
        <div className={`${styles.slide} ${styles.slide_skills}`}>
            <div>
                {/*<div className={styles.imageShadow}></div>*/}
                <Image src={skillsImg} width={460} height={600} className={styles.img} alt={'avatar'}/>
            </div>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <h2>My skills</h2>
                    <div>
                        <Bar {...barConfig}/>
                    </div>
                </div>
                <div>
                    <h2>My project type</h2>
                    <Pie {...pieConfig}/>
                </div>
            </div>
        </div>
    )
}
