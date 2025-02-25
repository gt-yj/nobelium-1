import Link from 'next/link'
const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)
const footer = () => {
  return (

    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full px-4 mt-5">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/tags">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Topics
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink>
        <ExternalLink href="https://instagram.com/yashjaing">Instagram</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
        <ExternalLink href="https://oku.club/user/yashjain">Oku</ExternalLink>
          <Link href="mailto:yash@yashjaing.com">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Mail
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
export default footer
