import Link from 'next/link'

function NavbarStore() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/store/products">products</Link>
        </li>
        <li>
          <Link href="/store/services">services</Link>
        </li>
        <li>
          <Link href="/store/market">market</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarStore
