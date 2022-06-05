import Link from 'next/link'

interface MenuItemProps {
  url?: string
  text: string
  icon: React.ReactNode
  className?: string
  onClick?: <T>(event: T) => void
}

const MenuItem = (props: MenuItemProps) => {
  function renderContent() {
    return (
      <a
        className={`flex flex-col justify-center items-center
          w-full h-20
          dark:text-gray-400
          ${props.className}`}
      >
        {props.icon}
        <span className={`text-xs font-light`}>{props.text}</span>
      </a>
    )
  }

  return (
    <li
      onClick={props.onClick}
      className={`cursor-pointer
        hover:bg-gray-100
          dark:hover:bg-gray-800`}
    >
      {props.url ? (
        <Link href={props.url}>{renderContent()}</Link>
      ) : (
        renderContent()
      )}
    </li>
  )
}

export default MenuItem
