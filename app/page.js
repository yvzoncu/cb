import React from 'react';
import KursFeature from './(components)/KursFeature';

const page_header = 'MOSO Kurskalender';
const page_msj =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.';

const getKurses = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Kurs', {
      cache: 'no-store',
    });
    return res.json();
  } catch {
    console.log('Error', error);
  }
};

async function Kurs() {
  const { courses } = await getKurses();
  console.log(courses);

  return (
    <div className="max-w-4xl mx-auto text-center mb-20 mt-20 px-10 pt-16">
      <h3 className="mt-10">{page_header}</h3>
      <p className=" mt-10 text-2xl">{page_msj}</p>
      {courses.map((course, ind) => (
        <KursFeature key={ind} kurs={course} />
      ))}
    </div>
  );
}

export default Kurs;
