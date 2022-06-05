import { useState } from 'react'
import AuthInput from '../components/Auth/AuthInput'
import Image from 'next/image'
import { IconWarn } from '../components/icons'
import useAuth from '../data/hook/useAuth'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [idTime, setIdTime] = useState<number>(0)
  const [error, setError] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const { login, register, loginGoogle } = useAuth()

  async function submit(e) {
    e.preventDefault()
    idTime && clearTimeout(idTime)

    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        await register(email, password)
      }
    } catch (er) {
      alertError(er?.message ?? 'error desconhecido')
    }
  }

  function alertError(message: string, time = 5) {
    setError(message)
    setIdTime(window.setTimeout(() => setError(''), time * 1000))
  }

  return (
    <div className={`flex justify-center h-screen items-center`}>
      <div className={`w-1/2 h-full relative`}>
        <Image
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de Autenticação"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`w-1/2 m-10`}>
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'login'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>

        {error && (
          <div
            className={`bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg flex items-center
          `}
          >
            {IconWarn()}
            <span className={`ml-3`}>{error}</span>
          </div>
        )}

        <form action="" onSubmit={submit}>
          <AuthInput
            label="Email"
            value={email}
            onChange={setEmail}
            type="email"
            required
          />
          <AuthInput
            label="Senha"
            value={password}
            onChange={setPassword}
            type="password"
            required
          />
          <button
            className={`w-full bg-indigo-500 hover:bg-indigo-400 text-right rounded-lg px-4 py-3 mt-6
        flex justify-center items-center`}
          >
            {mode === 'login' ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>

        <hr className={`my-6 border-gray-300 w-fulls`} />

        <button
          onClick={loginGoogle}
          type="submit"
          className={`w-full bg-red-500 hover:bg-red-400 text-right rounded-lg px-4 py-3
        flex justify-center items-center`}
        >
          Entrar com Google
        </button>

        {mode === 'login' ? (
          <p className={`mt-8`}>
            Novo por aqui?
            <a
              onClick={() => setMode('register')}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {' '}
              Crie uma Conta Gratuitamente
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setMode('login')}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {' '}
              Entre com suas Credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
