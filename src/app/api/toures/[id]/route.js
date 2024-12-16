import { createConnection } from "../../../../../lib/db.js";
import { NextResponse , NextRequest } from "next/server";


export async function GET(req) {
  try {
    const pathname = req.url ;
    const pathNameItems = pathname.toString().split('/') ;
    const  id = pathNameItems[pathNameItems.length -1 ];
    const db  = await createConnection();
    const sql = `SELECT * FROM toures WHERE id = ?`;
    const [post] = await db.query(sql , [id]);
    return NextResponse.json(post);
  } catch (error) {
    console.log(error , 'err');
    return NextResponse.json({error:error.message})
  }
}