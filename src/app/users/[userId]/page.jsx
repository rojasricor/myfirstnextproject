'use client'

import { useParams } from 'next/navigation'

function UserPage() {
  const params = useParams()
  console.log(params)

  return (
    <div>
      <button onClick={() => alert('Works')}>Click</button>
    </div>
  )
}

export default UserPage
