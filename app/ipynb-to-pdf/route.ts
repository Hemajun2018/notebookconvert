import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.redirect('https://notebookconvert.com/', { status: 301 });
}
