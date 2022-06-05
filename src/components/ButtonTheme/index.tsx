import { IconMoon, IconSun } from '../icons'

interface ButtonThemeProps {
  theme?: string
  changeTheme?: () => void
}

const ButtonTheme = (props: ButtonThemeProps) => {
  return props.theme === 'dark' ? (
    <button
      onClick={props.changeTheme}
      className={`
        w-14 lg:w-24 h-8 p-1 rounded-full
        hidden sm:flex items-center justify-end
        bg-gradient-to-r from-gray-500 to-gray-900
      `}
    >
      <div
        className={`
          hidden lg:flex items-center mr-2 text-gray-300
        `}
      >
        <span>Escuro</span>
      </div>
      <div
        className={`
        w-6 h-6 rounded-full
        flex items-center justify-center
        bg-black text-yellow-300
      `}
      >
        {IconMoon(4)}
      </div>
    </button>
  ) : (
    <button
      onClick={props.changeTheme}
      className={`
        w-14 lg:w-24 h-8 p-1 rounded-full
        hidden sm:flex items-center
        bg-gradient-to-r from-yellow-300 to-yellow-600
      `}
    >
      <div
        className={`
        w-6 h-6 rounded-full
        flex items-center justify-center
        bg-white text-yellow-600
      `}
      >
        {IconSun(4)}
      </div>
      <div
        className={`
        hidden lg:flex items-center ml-3 text-white
      `}
      >
        <span>Claro</span>
      </div>
    </button>
  )
}

export default ButtonTheme
