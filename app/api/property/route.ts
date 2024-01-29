import { NextResponse, NextRequest } from 'next/server';
import { fetchProperties } from '@/lib/db';

export async function GET(request:NextRequest){
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');
  const items = await fetchProperties(keyword?keyword:'');
  return NextResponse.json(items);
}
