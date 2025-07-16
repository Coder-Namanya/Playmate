// app/api/getalltournaments/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
)  {
  const {id} = await params
  try {
    // Fetch all tournaments
    const tournament = await db.tournament.findUnique({
      where :{id:id}

    });

    return NextResponse.json({ tournament });
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    return NextResponse.json({ error: 'Failed to fetch tournaments' }, { status: 500 });
  }
}
