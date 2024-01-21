import Kurs from '@/app/(models)/Kurs';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundKurs = await Kurs.findOne({ kurs_id: id });
    return NextResponse.json({ foundKurs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
