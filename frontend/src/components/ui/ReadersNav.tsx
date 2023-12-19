import Image from "next/image"
import Link from "next/link"
import { FiBell } from 'react-icons/fi'
import { HiOutlineHome } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'

const styles = {
    logoContainer: 'cursor-pointer',
    wrapper: 'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]',
    iconContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878] cursor-pointer',
    divider: 'boredr-b',
    profileImage: 'object-cover',
    profileImageContainer: 'w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center'
}

export default function ReadersNav() {
    return(
        <div className={styles.wrapper}>
            <Link href='/'>
                <div className={styles.logoContainer}>
                    <Image src="/smallLogo.png" alt="Small Logo" width={50} height={50}/>
                </div>
            </Link>
            <div className={styles.iconContainer}>
                <HiOutlineHome />
                <FiBell />
                <BiBookmarks />
                <RiArticleLine />
                <div className={styles.divider} />
                <BsPencilSquare />
            </div>
            <div className={styles.profileImageContainer}>
                <Image className={styles.profileImage} src="/qazi.jpeg" alt="Profile Image" width={50} height={50}/>
            </div>
        </div>
    )
}