"use client"

import ArticleMain from "@/components/ui/ArticleMain";
import Header from "@/components/ui/Header";
import ReadersNav from "@/components/ui/ReadersNav";
import Recommendations from "@/components/ui/Recommendations";
import { useWeb3 } from "@/components/web3";

const styles = {
    content: 'flex'
}

export default function Post() {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <ReadersNav />
                <ArticleMain />
                <Recommendations />
            </div>
        </>
    )
}