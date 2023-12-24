import Image from "next/image"
import { useWeb3 } from "@/components/web3"
import { useGetUserDetailMutation } from "../redux/slices/userApiSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUserDetails } from "../redux/slices/userSlice";

const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'cursor-pointer object-contain',
    bannerNav: 'flex cursor-pointer items-center space-x-5',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
}

export default function Header() {
    const {connect, address, hasError, initalized} = useWeb3()!
    const [getUser, {isLoading}] = useGetUserDetailMutation();
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        const getUserDetail = async () => {
            if(address) {
                try{
                    const response = await getUser({id: address}).unwrap();
                    dispatch(setUserDetails(response))
                } catch(error) {
                    console.log(error)
                }
            }
        }

        address && getUserDetail()
        
    }, [address, dispatch ])

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image src="/logo.png" className={styles.logo} height={40} width={200} alt="logo" />
                </div>
                <div className={styles.bannerNav}>
                    <div>Our Story</div>
                    {
                        initalized || isLoading ?
                            user.userInfo ? 
                            user.userInfo.displayName && user.userInfo.displayName != "" ? <span className={styles.accentedButton}>{user.userInfo.displayName}</span> : <span className={styles.accentedButton}>User</span> 
                                : 
                                    hasError == "Metamask" ? 
                                        <button className={styles.accentedButton} onClick={() => window.open("https://metamask.io/download.html", "_blank")}>Install Metamask</button>
                                    :
                                        <button className={styles.accentedButton} onClick={connect}>Connect</button>
                            : 
                            <span className={styles.accentedButton}>Loading...</span>
                    }
                </div>
            </div>
        </div>
    )
}