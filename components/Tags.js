import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <div className="tag-container">
      <ul className="flex max-w-full mt-4 overflow-x-auto">
        {Object.keys(tags).map(key => {
          const selected = key === currentTag
          return (
            <li
              key={key}
              className={`mr-3 font-small border whitespace-nowrap dark:text-gray-100  ${
                selected
                  ? 'mr-1 rounded-md px-2 py-1 border leading-none text-sm dark:border-gray-600 dark:bg-gray-800 dark:border-gray bg-gray-300 text-gray-900 border-gray-400'
                  : 'mr-1 rounded-md px-2 py-1 border leading-none text-sm dark:border-gray-600'
              }`}
            >
              <Link
                key={key}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
              >
                <a className="px-2 py-1 block">
                  {`${key} (${tags[key]})`}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tags
