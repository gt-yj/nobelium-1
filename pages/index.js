import Container from '@/components/Container'
import Image from 'next/image'

const blog = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex sm:flex-row justify-between w-full">
          <div className="flex flex-col pr-2 justify-start">
            <h1 className="font-semibold text-2xl tracking-tight text-black dark:text-white">
              Yash Jain
            </h1>
            <h2 className="text-gray-600 dark:text-gray-400 text-base font-medium">
              Founder, Designer <br />& No-Code Developer.
            </h2>
          </div>
          <div className="w-[82px] w-min-[82px]">
            <Image
              alt="Yash Jain"
              height={82}
              width={82}
              src="/avatar.png"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-medium text-lg md:text-xl tracking-tight mb-4 mt-20 text-black dark:text-white w-full">
        What I'm doing now?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        I'm building with{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bubble.io"
          className="underline"
        >bubble,</a>{' '}A No-Code App Builder. I focus on fit and finish to solve problems and create seamless experiences with No-Code Tools.< br /> < br/> Apart from that, you can call me a comedian, a bookworm, a traveller, a philosopher, or a human who stares at a black screen 24/7.< br /> < br/> If You'd like to collaborate on Cracking No-Code projects, hit me up at yash@yashjaing.com</p>
        <span className="h-8" />
      </div>
    </Container>
  )
}
export default blog
