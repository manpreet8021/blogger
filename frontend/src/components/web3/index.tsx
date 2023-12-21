"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useGetUserDetailQuery } from "../redux/slices/userApiSlice";

interface contextProps {
    address: string | null,
    error: string | null,
    initalized: boolean,
    connect: () => void
}

const Web3Context = createContext<contextProps|null>(null);

interface Props {
    children: React.ReactNode
}

export default function Web3ContextProvider({children}: Props) {
    const [address, setAddress] = useState<string|null>(null)
    const [error, setError] = useState<string|null>(null)
    const [initalized, setInitalized] = useState(false)

    useEffect(()=>{
        const getCurrentWalletConnected = async() =>{
            try {
                if(typeof window != undefined && window.ethereum != undefined) {
                    const accounts = await window.ethereum.request({
                        method: "eth_accounts"
                    });
                    if(accounts.length) {
                        setAddress(accounts[0])
                    }
                } else {
                    throw new Error("metamask_needed")
                }
            } catch (err: any) {
                if(err.message == 'metamask_needed') {
                    setError("Metamask");
                }
            } finally {
                setInitalized(true)
            }
        }

        const onAccountChanged = () => {
            if(typeof window != undefined && window.ethereum != undefined) {
                window.ethereum.on('accountsChanged', (account:any) => {
                    setAddress(account[0])
                })
            }
        } 

        onAccountChanged();
        getCurrentWalletConnected()

        return(()=>{
            if(typeof window != undefined && window.ethereum != undefined) {
                window.ethereum.removeListener('accountsChanged', (account:any) => {
                    setAddress(account[0])
                })
            }
        })
    }, [])

    const _web3Data = useMemo(()=>{
        return {
            initalized,
            address,
            error,
            connect: async () => {
                try {
                    if(typeof window != undefined && window.ethereum != undefined) {
                        const accounts = await window.ethereum.request({
                            method: "eth_requestAccounts"
                        });
                        if(accounts.length) {
                            setAddress(accounts[0])
                        }
                    } else {
                        throw new Error("metamask_needed")
                    }
                } catch (err: any) {
                    if(err.message == 'metamask_needed') {
                        setError("Metamask");
                    }
                }
            }
        }
    },[initalized, address, error])

    return(
        <Web3Context.Provider value={_web3Data}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context)
}