import Image from "next/image"
import { AiFillPlayCircle } from "react-icons/ai"
import { IoLogoTwitter } from "react-icons/io"
import { FaFacebook } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"
import { HiOutlineLink } from "react-icons/hi"
import { BiBookmarks } from "react-icons/bi"
import { FiMoreHorizontal } from "react-icons/fi"

const styles = {
    wrapper: 'flex items-center justify-center flex-[3] border-l border-r',
    content: 'h-screen w-full p-[2rem]',
    postHeaderContainer: 'flex justify-between items-center mt-[2.2rem] mb-[1.2rem]',
    authorContainer: 'flex gap-[1rem]',
    authorProfileImageContainer: 'h-[3rem] w-[3rem] grid center rounded-full overflow-hidden',
    column: 'flex-1 flex flex-col justify-center',
    image: 'object-cover',
    postDetails: 'flex gap-[.2rem] text-[#787878]',
    listenButton: 'flex items-center gap-[.2rem] text-[#1A8917]',
    socials: 'flex gap-[1rem] text-[#787878] cursor-pointer',
    space: 'w-[.5rem]',
    bannerContainer: 'h-[18rem] w-full grid center overflow-hidden mb-[2rem]',
    articleMainContainer: 'flex flex-col gap-[1rem]',
    title: 'font-bold text-3xl',
    subTitle: 'font-mediumserifItalic text-[1.4rem] text-[#292929]',
    articleText: 'font-mediumSerif text-[1.4rem] text-[#292929]'
}

export default function ArticleMain() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorProfileImageContainer}>
                            <Image 
                                className={styles.image}
                                src="/qazi.jpeg"
                                width={100}
                                height={100}
                                alt="profile image"
                            />
                        </div>
                        <div className={styles.column}>
                            <div>Manpreet Singh</div>
                            <div className={styles.postDetails}>
                                <span>June 15 • 7 min read • </span><span className={styles.listenButton}><AiFillPlayCircle /> Listen</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <IoLogoTwitter />
                        <FaFacebook />
                        <GrLinkedin />
                        <HiOutlineLink />
                        <div className={styles.space} />
                        <BiBookmarks />
                        <FiMoreHorizontal />
                    </div>
                </div>
                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerContainer}>
                        <Image 
                            className={styles.image}
                            src="/banner.png"
                            height={400}
                            width={400}
                            alt="Banner image"
                        />
                    </div>
                    <h1 className={styles.title}>Help Wanted: Node Addon API's Road to Full Unit Test Coverage</h1>
                    <h4 className={styles.subTitle}>
                        <div>
                            Manpreet Singh, Dec 18 2023
                        </div>
                        <div>Published in Node.js Collection</div>
                    </h4>
                    <div className={styles.articleText}>
                    We've made it one of our milestones to achieve full testing coverage. Although we have completed documenting existing tests for our C++ classes, there are still quite a few gaps that we
                    have yet to cover. We've labeled test coverage reports as “good first issue” and any empty entries in these tables mean that test coverage is missing for the class method.
                    PRs are welcome!
                    </div>
                </div>
            </div>
        </div>
    )
}