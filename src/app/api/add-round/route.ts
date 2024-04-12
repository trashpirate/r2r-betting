import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  if (request.method !== "POST") {
    return NextResponse.json(
      { message: "Only POST requests allowed" },
      { status: 405 }
    );
  }

  const body = await request.json();

  const num = Number(body.num);
  const title = body.title;
  const date = body.date;
  const teamrugs = body.teamrugs;
  const teamriches = body.teamriches;
  const winsrugs = Number(body.winsrugs);
  const bnbrugs = Number(body.bnbrugs);
  const winsriches = Number(body.winsriches);
  const bnbriches = Number(body.bnbriches);
  const completed = Boolean(body.completed == "true");
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

  const rounds = await sql`SELECT * FROM Rounds;`;
  return NextResponse.json({ rounds }, { status: 200 });
}

// INSERT INTO Rounds (number, title, date, teamrugs, teamriches, winsrugs, bnbrugs, winsriches, bnbriches, completed ) VALUES ( 1, 'Hello', '4/22', 'Rugs', 'Riches', 1, 2.3, 3, 4.3, false );
