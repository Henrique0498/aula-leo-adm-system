import Head from 'next/head'
import Layout from '../components/templates/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AdmSystem</title>
        <meta name="description" content="Sistema de gerenciamento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout title="Inicio" subtitle="Aqui você encontra o inicio!">
          Conteudo!!!
        </Layout>
      </main>
    </div>
  )
}
