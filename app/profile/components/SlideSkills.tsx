'use client'
import styles from "@/app/profile/styles.module.scss";
import skillsImg from "@/public/programmer.png";
import Image from 'next/image'
import {Pie} from "@ant-design/plots";
import {Rate} from "antd";

export default function SlideSkills() {
    const data = [
        {name: 'React', value: 4},
        {name: 'Vue', value: 4},
        {name: 'Angular', value: 3.5},
        {name: 'Javascript / ES5 / ES6', value: 4},
        {name: 'HTML / HTML5', value: 4},
        {name: 'TypeScript', value: 4},
        {name: 'CSS/CSS3/Scss/Less', value: 4},
        {name: 'Echarts', value: 4},
        {name: 'Jest/Test library', value: 3.5},
        {name: 'Axios', value: 4},
        {name: 'Git', value: 4},
        {name: 'Webpack/Vite', value: 3.5},
    ];

    const pieData = [
        {type: 'PC web', value: 60},
        {type: 'Mobile web', value: 30},
        {type: 'App', value: 5},
        {type: 'Mini program', value: 5},
    ];
    const pieConfig = {
        appendPadding: 10,
        data: pieData,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        width: 400,
        colors: ['#feb153', '#4b6c6b', '#e9f1df', '#9d9b86'],
        interactions: [
            {
                type: 'element-active',
            },
        ],
        label: {
            type: 'inner',
            content: '{name}',
        },
    };
    return (
        <div className={`${styles.slide} ${styles.slide_skills}`}>
            <Image src={skillsImg} width={700} height={660} className={styles.img} alt={'avatar'}/>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <h2>My skills</h2>
                    <div>
                        {data.map(item => (
                            <div key={item.name} className={styles.rate_item}>
                                <span className={styles.rate_name}>{item.name}:</span>
                                <Rate allowHalf defaultValue={item.value}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>My project types</h2>
                    <Pie {...pieConfig}/>
                </div>
            </div>
        </div>
    )
}
