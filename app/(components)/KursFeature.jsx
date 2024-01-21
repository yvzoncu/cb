import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function KursFeature({ kurs }) {
  return (
    <div className="m-10 p-5 border-2 rounded-lg border-slate-100 ">
      <div className="flex flex-col items-center text-center space-y-6 md:flex-row md:space-x-6 md:space-y-0 md:text-left">
        <div>
          <Image
            src={kurs.kurs_picture}
            width={200}
            height={200}
            alt="Computer"
          />
        </div>
        <div className="flex flex-col text-xl">
          <h4 className="max-w-md text-black-700 mb-1">{kurs.kurs_name}</h4>
          <p className="max-w-md text-gray-700">{kurs.kurs_type}</p>
          <p className="max-w-md text-gray-700">{kurs.kurs_date}</p>
          <div className="mt-4">
            <Link
              href={{
                pathname: `/KursRegister/${kurs.kurs_id}`,
              }}
              style={{ display: 'contents' }}
            >
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4  rounded">
                Register now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KursFeature;
