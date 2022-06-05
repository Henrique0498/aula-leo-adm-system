import Head from 'next/head'
import Layout from '../components/templates/Layout'

const Notification = () => {
  return (
    <div>
      <Head>
        <title>AdmSystem</title>
        <meta name="description" content="Sistema de gerenciamento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout
          title="Notificações"
          subtitle="Aqui você encontra suas notificações!"
        >
          Conteudo!!!
        </Layout>
      </main>
    </div>
  )
}

export default Notification
