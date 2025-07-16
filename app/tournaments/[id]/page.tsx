// /app/uservenues/[venueId]/page.tsx

import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import Link from 'next/link'
export default async function  TournamentDetails({ params }: { params:Promise< { id: string }> }) {
  const {id} = await params;
  const tournament = await db.tournament.findUnique({
    
    where: { id:id},
  });

  if (!tournament) {
    notFound();
  }
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{tournament.name}</h1>
      <p>{tournament.description}</p>
      <Link href='/tournament/registration'>
      <button> Register your Team</button>
      </Link>
    </div>
  );
}
