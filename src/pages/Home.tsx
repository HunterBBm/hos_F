import React from 'react';

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">
          ยินดีต้อนรับ, {user.tb_username || 'Guest'}!
        </h1>

        <p className="text-gray-700 mt-2"><strong>อีเมล:</strong> {user.tb_email || '-'}</p>
        <p className="text-gray-700 mt-2"><strong>ชื่อ:</strong> {user.tb_firstname || '-'}</p>
        <p className="text-gray-700 mt-2"><strong>นามสกุล:</strong> {user.tb_lastname || '-'}</p>
        <p className="text-gray-700 mt-2"><strong>เลขบัตรประชาชน:</strong> {user.tb_national_id || '-'}</p>
        <p className="text-gray-700 mt-2"><strong>เลขบัญชี:</strong> {user.tb_bank_account_number || '-'}</p>
        <p className="text-gray-700 mt-2"><strong>ชื่อธนาคาร:</strong> {user.tb_bank_name || '-'}</p>
        <p className="text-gray-700 mt-2"><strong>กลุ่มงาน:</strong> {user.tb_job_group || '-'}</p>
        <p className="text-gray-700 mt-2"><strong>ฝ่าย/แผนก:</strong> {user.tb_department || '-'}</p>
      </div>
    </div>
  );
}
