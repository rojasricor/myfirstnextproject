import { NextResponse } from 'next/server'

export function GET() {
  console.log({ token: process.env.TOKEN })

  return NextResponse.json({
    message: 'Getting data',
  })
}

export async function POST(req) {
  const data = await req.json()
  console.log(data)

  return NextResponse.json({
    message: 'Posting data',
  })
}

export function PUT() {
  return NextResponse.json({
    message: 'Updating data',
  })
}

export function DELETE() {
  return NextResponse.json({
    message: 'Deleting data',
  })
}
