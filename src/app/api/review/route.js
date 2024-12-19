// app/api/rating/route.js
import { createConnection } from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, value } = body;

    const db = await createConnection();
    const sql = 'INSERT INTO rating (id, value) VALUES (?, ?)';
    const [post] = await db.execute(sql, [id.pid, value]);

    return NextResponse.json({ message: 'Rating inserted successfully', result: post  , test:[id , value]});
  } catch (error) {
    console.error('Database insertion error:', error);
    return NextResponse.json({ message: 'Error inserting rating', error: error.message }, { status: 500 });
  }
}
