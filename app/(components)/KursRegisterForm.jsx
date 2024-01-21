import KursForm from './KursForm';

const getKursById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Kurs/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('failed.');
  }

  return res.json();
};

async function KursRegisterForm({ id }) {
  const kursData = await getKursById(id);
  const course = kursData.foundKurs;

  return (
    <div className="max-w-4xl mx-auto mt-20 px-10 pt-16 pb-16 border-2  rounded-lg border-slate-100">
      <KursForm kurs={course} />
    </div>
  );
}

export default KursRegisterForm;
