import { createContext, useEffect, useState } from 'react'

type Theme = string

interface AppContextProps {
  theme?: Theme
  changeTheme?: () => void
}

interface AppProviderProps {
  children: React.ReactNode
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState('')

  function changeTheme() {
    const newTheme = theme === '' ? 'dark' : ''

    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const value = '' + localStorage.getItem('theme')

    setTheme(value)
  }, [])

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
