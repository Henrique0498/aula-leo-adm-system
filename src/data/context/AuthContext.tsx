import router from 'next/dist/client/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import User from '../../model/User'
import firebase from './../../firebase/config'

interface AuthContextProps {
  user?: User
  loading?: boolean
  login?: (email: string, password: string) => Promise<void>
  register?: (email: string, password: string) => Promise<void>
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>({})

async function userNormalized(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken()

  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provide: userFirebase.providerData[0]?.providerId,
    imageUrl: userFirebase.photoURL
  }
}

function manageCookie(login: boolean) {
  if (login) {
    Cookies.set('admin-template-cod3r-auth', `${login}`, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-cod3r-auth')
  }
}

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<boolean>(true)

  async function configSection(userFirebase) {
    if (userFirebase?.email) {
      const user = await userNormalized(userFirebase)

      setUser(user)
      manageCookie(true)
      setLoading(false)

      return user.email
    } else {
      setUser(undefined)
      manageCookie(false)
      setLoading(false)

      return false
    }
  }

  async function login(email: string, password: string) {
    try {
      setLoading(true)

      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

      await configSection(resp.user)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function register(email: string, password: string) {
    try {
      setLoading(true)

      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      await configSection(resp.user)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true)

      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())

      await configSection(resp.user)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function logout() {
    try {
      setLoading(true)

      await firebase.auth().signOut()
      await configSection(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configSection)

      return () => cancel()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        loginGoogle,
        logout,
        register
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
