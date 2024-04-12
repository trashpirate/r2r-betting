import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (request.url) {
    const { searchParams } = new URL(request.url);
    const num = Number(searchParams.get("num"));
    const title = searchParams.get("title");
    const date = searchParams.get("date");
    const teamrugs = searchParams.get("teamrugs");
    const teamriches = searchParams.get("teamriches");
    const winsrugs = Number(searchParams.get("winsrugs"));
    const bnbrugs = Number(searchParams.get("bnbrugs"));
    const winsriches = Number(searchParams.get("winsriches"));
    const bnbriches = Number(searchParams.get("bnbriches"));
    const completed = Boolean(searchParams.get("completed"));
    const count = await sql`SELECT COUNT(*) FROM Rounds;`;
    const numRounds = Number(count.rows[0].count);

    try {
      if (num <= numRounds) {
        await sql`UPDATE Rounds SET number = ${num}, title = ${title}, date = ${date}, teamrugs = ${teamrugs}, teamriches = ${teamriches}, winsrugs = ${winsrugs}, bnbrugs = ${bnbrugs}, winsriches = ${winsriches}, bnbriches = ${bnbriches}, completed = ${completed} WHERE number = ${num};`;
        console.log("Round updated.");
      } else {
        await sql`INSERT INTO Rounds (number, title, date, teamrugs, teamriches, winsrugs, bnbrugs, winsriches, bnbriches, completed ) VALUES ( ${num}, ${title}, ${date}, ${teamrugs}, ${teamriches}, ${winsriches}, ${bnbrugs}, ${winsriches}, ${bnbriches}, ${completed} );`;
        console.log("Round inserted.");
      }
    } catch (error) {
      console.error("Failed to add round:", num);
    }
  } else {
    console.error("Failed to add round:", request.url);
  }

  const rounds = await sql`SELECT * FROM Rounds;`;
  return NextResponse.json({ rounds }, { status: 200 });
}

// INSERT INTO Rounds (number, title, date, teamrugs, teamriches, winsrugs, bnbrugs, winsriches, bnbriches, completed ) VALUES ( 1, 'Hello', '4/22', 'Rugs', 'Riches', 1, 2.3, 3, 4.3, false );
