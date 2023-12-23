import Image from "next/image"
import Link from "next/link"

const styles = {
    wrapper: 'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
    authorContainer: 'flex gap-[.4rem]',
    authorImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    authorImage:'object-cover',
    postDetails: 'flex-[2.5] flex flex-col',
    authorName:'font-semibold',
    title: 'font-bold text-2xl',
    brefing: 'text-[#787878]',
    category: 'bg-[#F2F3F2]',
    detailsContainer: 'flex items-center justify-between text-[#787878]',
    articleDetails: 'my-2 text-[.8rem]',
    thumbnailContainer: ''
}

export default function PostCard() {
    return (
        <Link href="/post/1">
            <div className={styles.wrapper}>
                <div className={styles.postDetails}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorImageContainer}>
                            <Image src='/logo.png' className={styles.authorImage} width={40} height={40} alt="Display Image " />
                        </div>

                        <div className={styles.authorName}>
                            Manpreet Singh
                        </div>
                    </div>
                    <h1 className={styles.title}>Tools that will make you productive In 2023</h1>
                    <div className={styles.brefing}>
                        Productivity is the skill that can be learned.
                    </div>
                    <div className={styles.detailsContainer}>
                        <span className={styles.articleDetails}>June 15 • 5 min read • <span className={styles.category}>productivity</span></span>
                    </div>
                </div>

                <div className={styles.thumbnailContainer}>
                    <Image height={100} width={100} src="/logo.png" alt="thumnail"/>
                </div>
            </div>
        </Link>
    )
}