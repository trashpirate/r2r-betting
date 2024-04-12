import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  let latest: QueryResult<QueryResultRow>;
  try {
    const latestNum = await sql`SELECT MAX(number) FROM Rounds;`;
    console.log(latestNum);
    latest =
      await sql`SELECT * FROM Rounds WHERE number = ${latestNum.rows[0].max};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const rows = latest.rows[0];
  // const json = JSONS;
  return NextResponse.json({ rows }, { status: 200 });
}

// INSERT INTO Rounds (number, title, date, teamrugs, teamriches, winsrugs, bnbrugs, winsriches, bnbriches, completed ) VALUES ( 1, 'Hello', '4/22', 'Rugs', 'Riches', 1, 2.3, 3, 4.3, false );
