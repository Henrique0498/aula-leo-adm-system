interface ContentProps {
  children: React.ReactNode
}

const Content = (props: ContentProps) => {
  return (
    <div
      className={`
        flex flex-col mt-7
        dark:text-gray-300
      `}
    >
      {props.children}
    </div>
  )
}

export default Content
