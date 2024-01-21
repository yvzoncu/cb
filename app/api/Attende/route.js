import Attende from '@/app/(models)/Attende';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const attendeData = body.formData;

    await Attende.create(attendeData);

    return NextResponse.json({ message: 'Attendee Created' }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}
