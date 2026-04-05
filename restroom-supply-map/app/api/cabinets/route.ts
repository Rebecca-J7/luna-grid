import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../lib/supabaseAdmin'

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('cabinets')
    .select('*')

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json(data)
}