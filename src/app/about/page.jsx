'use client'

import { useRouter } from 'next/navigation'

function AboutPage() {
  const router = useRouter()

  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        totam consequuntur debitis voluptatem maiores explicabo nisi
        necessitatibus laborum unde laboriosam in commodi minima temporibus,
        esse placeat numquam magnam animi cupiditate. Aut accusamus porro illo
        veritatis facere? Obcaecati explicabo at dolorem exercitationem dolorum
        placeat quibusdam nemo aperiam eligendi ipsum. Mollitia in similique
        nisi aliquid tempora accusamus consectetur corporis odit beatae laborum.
        Tenetur consequuntur deleniti voluptate sint exercitationem in,
        reprehenderit quo accusantium ratione corporis facere ipsa magni animi
        placeat officia. Minima dolorem cum blanditiis error veniam magnam
        voluptatibus recusandae quo itaque quisquam!
      </p>

      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          // here we executing more code...

          router.push('/')
        }}
      >
        Click Me
      </button>
    </div>
  )
}

export default AboutPage
