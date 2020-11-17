import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NavLink(props) {
  const { asPath } = useRouter()
  const active = asPath === props.href || asPath === props.as

  return (
    <Link href={props.href}>
      {props.children({active})}
    </Link>
  )
}
