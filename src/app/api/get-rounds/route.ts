import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  let rounds: QueryResult<QueryResultRow>;
  try {
    rounds = await sql`SELECT * FROM Rounds;`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const rows = rounds.rows;
  return NextResponse.json({ rows }, { status: 200 });
}

// INSERT INTO Rounds (number, title, date, teamrugs, teamriches, winsrugs, bnbrugs, winsriches, bnbriches, completed ) VALUES ( 1, 'Hello', '4/22', 'Rugs', 'Riches', 1, 2.3, 3, 4.3, false );
