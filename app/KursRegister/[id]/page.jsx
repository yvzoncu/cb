import KursRegisterForm from '@/app/(components)/KursRegisterForm';

function KursRegister({ params }) {
  return (
    <div>
      <KursRegisterForm id={params.id} />
    </div>
  );
}

export default KursRegister;
