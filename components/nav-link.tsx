import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NavLink({
  href,
  as,
  children
}: {
  href?: string,
  as?: string,
  children: Function | React.ReactNode
}) {
  const { asPath } = useRouter()
  const active = asPath === href.toString() || asPath === as
  const resolvedChildren = (typeof children === 'function' ? children({ active }) : children) as
    | React.ReactElement
    | React.ReactElement[]

  return (
    <Link href={href}>
      {resolvedChildren}
    </Link>
  )
}
