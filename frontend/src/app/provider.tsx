"use client"

import { store } from "@/components/redux/store"
import { Provider } from "react-redux"

interface Props {
    children: React.ReactNode
}

export function ReduxProvider({children}: Props) {
    return <Provider store={store}>{children}</Provider>
}