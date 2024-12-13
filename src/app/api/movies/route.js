'use server' ;

import { NextResponse } from "next/server";

export async function GET(params) {
  return NextResponse.json(
    {
      messgae : 'aha aha hahhahhahaha 😂😂😂'
    }
  )
}