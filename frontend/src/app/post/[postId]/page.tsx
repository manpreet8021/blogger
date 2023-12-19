import ArticleMain from "@/components/ui/ArticleMain";
import ReadersNav from "@/components/ui/ReadersNav";
import Recommendations from "@/components/ui/Recommendations";

const styles = {
    content: 'flex'
}

export default function Post() {
    return (
        <div className={styles.content}>
            <ReadersNav />
            <ArticleMain />
            <Recommendations />
        </div>
    )
}