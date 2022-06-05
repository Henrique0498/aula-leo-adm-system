import Head from 'next/head'
import Layout from '../components/templates/Layout'

const Settings = () => {
  return (
    <div>
      <Head>
        <title>AdmSystem</title>
        <meta name="description" content="Sistema de gerenciamento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout
          title="Configurações"
          subtitle="Aqui você encontra suas configurações!"
        >
          Conteudo!!!
        </Layout>
      </main>
    </div>
  )
}

export default Settings
