import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const roundName = searchParams.get("roundName");
  console.log(`DROP TABLE ${roundName};`);
  try {
    if (roundName == null) throw new Error("Round name required");
    const result = await sql`DROP TABLE Rounds;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
