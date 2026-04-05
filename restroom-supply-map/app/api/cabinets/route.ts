import { NextResponse } from 'next/server'
import supabase from '../../../lib/supabaseAdmin'

export async function GET() {
  const { data, error } = await supabase
    .from('cabinets')
    .select('*')

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json(data)
}