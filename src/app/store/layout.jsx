import NavbarStore from 'src/components/ui/NavbarStore'

export const metadata = {
  title: 'Online Store - Richxrx page',
  description: 'My online store from my page',
  keywords: ['store', 'products', 'services', 'market'],
}

export default function StoreLayout({ children }) {
  return (
    <>
      <h1>Online Store</h1>
      <NavbarStore />

      {children}
    </>
  )
}
