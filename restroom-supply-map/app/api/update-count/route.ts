import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../lib/supabaseAdmin'

export async function POST(req: Request) {
  const { cabinetId, pads, tampons } = await req.json()

  const status = pads + tampons === 0 ? 'empty'
    : pads + tampons < 5 ? 'low'
    : 'stocked'

  const { error } = await supabaseAdmin
    .from('cabinets')
    .update({ pads_count: pads, tampons_count: tampons, status, updated_at: new Date() })
    .eq('id', cabinetId)

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ success: true })
}