import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import Image from 'next/image'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}
export function Home() {
  return (
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex sm:flex-row justify-between w-full">
          <div className="flex flex-col pr-2 justify-start">
            <h1 className="font-semibold text-2xl tracking-tight text-black dark:text-white">
              Yash Jain
            </h1>
            <h2 className="text-gray-600 dark:text-gray-400 text-base font-medium">
              Thinker, Designer <br /> Developer, He/him.
            </h2>
            
          </div>
          <div className="w-[82px] w-min-[82px]">
            <Image
              alt="Yash Jain"
              height={82}
              width={82}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
      </div>
  );
}

const blog = ({ postsToShow, page, showNext }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      {postsToShow.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} />}
    </Container>
  )
}

export default blog
