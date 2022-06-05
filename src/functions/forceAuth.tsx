import router from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import ImageLoading from '../../public/image/loading.gif'
import useAuth from '../data/hook/useAuth'
import React from 'react'

// interface ForceAuthProps {
//   children: React.ReactNode
// }

const ForceAuth = (props: React.ReactNode) => {
  const { user, loading } = useAuth()

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if(!document.cookie?.includes('admin-template-cod3r-auth')){
                  window.location.href = '/login'
                }
              `
            }}
          />
        </Head>
        {props}
      </>
    )
  }

  function renderLoading() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={ImageLoading} />
      </div>
    )
  }

  if (!loading && user?.email) {
    return renderContent()
  } else if (loading) {
    return renderLoading()
  } else {
    router.push('/login')
    return null
  }
}

export default ForceAuth
