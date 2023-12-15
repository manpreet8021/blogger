import Image from "next/image"

const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'cursor-pointer object-contain',
    bannerNav: 'flex cursor-pointer items-center space-x-5',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
}

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image src="/logo.png" className={styles.logo} height={40} width={200} alt="logo" />
                </div>
                <div className={styles.bannerNav}>
                    <div>Our Story</div>
                    <div className={styles.accentedButton}>Connect</div>
                </div>
            </div>
        </div>
    )
}