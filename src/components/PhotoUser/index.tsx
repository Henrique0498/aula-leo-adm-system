import Link from 'next/link'
import Image from 'next/dist/client/image'
import useAuth from '../../data/hook/useAuth'

interface PhotoUserProps {
  className?: string
}

const PhotoUser = (props: PhotoUserProps) => {
  const { user } = useAuth()

  return (
    <Link href="/profile">
      <a className={`h-10 w-10 cursor-pointer relative ${props.className}`}>
        <Image
          src={
            user?.imageUrl ??
            'https://images.unsplash.com/photo-1617615857188-32f06ecc2089?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
          }
          alt="Foto de perfil da barra de navegação"
          layout="fill"
          className="rounded-full"
          objectFit="cover"
        />
      </a>
    </Link>
  )
}

export default PhotoUser
