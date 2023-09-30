import Users from 'src/components/Users'

export const metadata = {
  title: 'My special page',
}

function HomePage() {
  // Server component
  return (
    <section>
      <h1>Richxrx Page 1:32:13</h1>
      {/* Client component */}
      <Users />
    </section>
  )
}

export default HomePage
