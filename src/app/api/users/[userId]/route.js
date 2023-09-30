import { NextResponse } from 'next/server'

export async function GET(req, res) {
  const { searchParams } = new URL(req.url)
  console.log(searchParams)
  console.log(searchParams.get('firstname'))
  console.log(searchParams.get('lastname'))

  return NextResponse.json({
    message: 'Hola',
    data: res.params,
  })
}
