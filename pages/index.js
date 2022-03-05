import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex sm:flex-row justify-between w-full">
          <div className="flex flex-col pr-2 justify-start">
            <h1 className="font-semibold text-2xl tracking-tight text-black dark:text-white">
              Yash Jain
            </h1>
            <h2 className="text-gray-600 dark:text-gray-400 text-base font-medium">
              Thinker, Designer <br />& Developer, He/him.
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
        <p className="text-gray-600 dark:text-gray-400 mb-4">I share my ideas almost every day. I mainly hangout on Twitter. But 
        this is my favourite place. Every now and then I write and share my thoughts Here.
        <br /> <br />
        Apart from that, Currenly I'm building Favy. It is on early development stage and we are excited for it. The journey is fabulous.
        <br /><br />
        Currenly I'm also reading{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://minimalistentrepreneur.com/book"
          className="text-blue-500 leading-7 rounded-lg font-medium underline transition-all h-6"
        >
          the Minimalist Entrepreneur
      
        </a>
        {' '}by Sahil Lavingia. I'm loving it.
        <br /><br />
        <Link href="/blog">
        <a className="text-blue-500 leading-7 rounded-lg font-medium underline transition-all h-6">Here</a></Link>
        {' '}are all Articles I've written so far. Have fun Navigating around this small garden.
        </p>
        
        <span className="h-8" />
      </div>
    </Container>
  );
}

    
