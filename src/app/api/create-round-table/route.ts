import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS Round ( Number int, Title varchar(255), Date varchar(255), TeamRugs varchar(255), TeamRiches varchar(255), WinsRugs int, BNBRugs decimal(10,5), WinsRiches int, BNBRiches decimal(10,5) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
