"use client"

import { useGetAllBlogsQuery } from '@/components/redux/slices/blogApiSlice'
import Banner from '@/components/ui/Banner'
import Header from '@/components/ui/Header'
import PostCard from '@/components/ui/PostCard'
import {blog} from '@/components/model/blogModel'

const styles = {
  postsList: 'flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3',
  container: 'max-w-7xl flex-1',
  main: 'flex justify-center',
  wrapper: 'mx-auto'
}

export default function Home() {
  const { data: blogList } = useGetAllBlogsQuery({})
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postsList}>
            {
              blogList && blogList.map((blog: blog) => (
                <PostCard blog={blog} key={blog._id}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
