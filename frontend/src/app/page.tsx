"use client"
import Banner from '@/components/ui/Banner'
import Header from '@/components/ui/Header'
import PostCard from '@/components/ui/PostCard'
import { useGetUserDetailQuery } from '@/components/redux/slices/userApiSlice'

const styles = {
  postsList: 'flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3',
  container: 'max-w-7xl flex-1',
  main: 'flex justify-center',
  wrapper: 'mx-auto'
}

export default function Home() {
  const { data, isLoading, error } = useGetUserDetailQuery({id: "0x528EF2ED44d714893106234CCb6FFD98C03Bf266"});
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postsList}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  )
}
