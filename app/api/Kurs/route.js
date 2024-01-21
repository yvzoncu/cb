import Kurs from '../../(models)/Kurs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const kursData = body.formData;
    await Kurs.create(kursData);

    return NextResponse.json(
      { message: 'Kurs created', kursData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const courses = await Kurs.find();
    return NextResponse.json({ courses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
