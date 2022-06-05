import useAppData from '../../../data/hook/useAppData'
import ButtonTheme from '../../ButtonTheme'
import PhotoUser from '../../PhotoUser'
import Title from '../Title'

interface TopBarProps {
  title: string
  subtitle: string
}

const TopBar = (props: TopBarProps) => {
  const { theme, changeTheme } = useAppData()

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonTheme theme={theme} changeTheme={changeTheme} />
        <PhotoUser className="ml-3" />
      </div>
    </div>
  )
}

export default TopBar
