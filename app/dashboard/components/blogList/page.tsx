'use client';
import styles from './styles.module.scss';
import {BLOG_LIST} from "@/src/assets/constants";

export default function BlogList() {
    const item = {
        date: '11 Nov 2021',
        title: 'GraphQL',
        content: 'This is content'
    };
    const goToNextPage = (link: string) => {
        window.open(link)
    };
    return (
        <div className={styles.blog_list}>
            <ul>
                {BLOG_LIST.map(item => (
                    <li className={styles.blog_item} key={item.content} onClick={() => goToNextPage(item.link)}>
                        <div className={styles.blog_item_header}>
                            <h3>{item.title}</h3>
                        </div>
                        <div className={styles.blog_item_content}>{item.content}</div>
                       <div className={styles.blog_item_date}>{item.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
