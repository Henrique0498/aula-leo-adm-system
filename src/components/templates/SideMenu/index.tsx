import useAuth from '../../../data/hook/useAuth'
import {
  IconHome,
  IconLogout,
  IconNotification,
  IconSettings
} from '../../icons'
import Logo from '../Logo'
import MenuItem from '../MenuItem'

const LateralMenu = () => {
  const { logout } = useAuth()

  return (
    <aside
      className={`flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900`}
    >
      <div
        className={`h-20 w-20
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800`}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" text="Inicio" icon={IconHome} />
        <MenuItem url="/settings" text="Ajustes" icon={IconSettings} />
        <MenuItem
          url="/notification"
          text="Notificação"
          icon={IconNotification}
        />
      </ul>
      <ul>
        <MenuItem
          text="Sair"
          icon={IconLogout}
          className={`text-red-600
            hover:bg-red-400 hover:text-white
            dark:text-red-400 dark:hover:text-white`}
          onClick={logout}
        />
      </ul>
    </aside>
  )
}

export default LateralMenu
