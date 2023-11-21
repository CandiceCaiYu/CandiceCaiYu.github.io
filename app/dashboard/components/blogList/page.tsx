import styles from './styles.module.scss'

export default function BlogList() {
    const item = {
        date: '11 Nov 2021',
        title: 'GraphQL',
        content: 'This is content'
    };
    return (
        <div className={styles.blog_list}>
            <div className={styles.blog_item}>
                <div className={styles.blog_item_header}>
                    <div>{item.date}</div>
                    <h3>{item.title}</h3>
                </div>
                <div>{item.content}</div>
            </div>
        </div>
    )
}
