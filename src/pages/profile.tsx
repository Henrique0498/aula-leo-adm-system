import Head from 'next/head'
import Layout from '../components/templates/Layout'

const Profile = () => {
  return (
    <div>
      <Head>
        <title>AdmSystem</title>
        <meta name="description" content="Sistema de gerenciamento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout title="Perfil" subtitle="Aqui você encontra o seu perfil!">
          Conteudo!!!
        </Layout>
      </main>
    </div>
  )
}

export default Profile
