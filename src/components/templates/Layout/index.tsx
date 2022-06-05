import React from 'react'
import useAppData from '../../../data/hook/useAppData'
import forceAuth from '../../../functions/forceAuth'
import Content from '../Content'
import SideMenu from '../SideMenu'
import TopBar from '../TopBar'

interface LayoutProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { theme } = useAppData()

  return forceAuth(
    <div className={`${theme} flex h-screen w-screen`}>
      <SideMenu />
      <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
        <TopBar title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  )
}

export default Layout
