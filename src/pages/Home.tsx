import React, { useState } from 'react';

export default function Home() {
  type Role = 1 | 2 | 3 | string;

  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // ตรวจสอบสิทธิ์ user
  const getRoleName = (role: Role): string => {
  return {
    1: 'client',
    2: 'admin',
    3: 'superadmin',
  }[Number(role)] || '-';
};


  return (
        <div className="flex min-h-screen">
  {/* Sidebar */}
   <div className="w-75 bg-gradient-to-b from-purple-800 via-violet-700 to-pink-600 text-white p-6 relative">
 {getRoleName(user?.tb_user_role) === 'client' && (
    <>
 <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
            </svg>
            <span className="text-base">ระบบเงินเดือน</span>
          </div>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ml-20 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 14 8"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
          </svg>
        </div>
      </button>

      {/* ปุ่มย่อย แสดงเมื่อเปิด */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-40 mt-2' : 'max-h-0'}`}
      >
        <button className="w-full text-left px-4 py-2 mt-1 bg-white text-black rounded hover:bg-gray-200">
          ตารางเงินเดือน
        </button>
      </div>
  </>
  )}
   {/* ถ้า role คือ admin แสดงปุ่ม "จัดการบุคลากร" */}
  {getRoleName(user?.tb_user_role) === 'admin' &&  (
    <button className="w-full text-left px-4 py-2 mt-4 bg-white text-black rounded hover:bg-gray-200">
      จัดการบุคลากร
    </button>
  )}
      
  </div>

  {/* Main Content */}
  <div className="flex-1 bg-white p-10">
      <h1 className="text-4xl font-semibold text-black mb-8">
       {getRoleName(user?.tb_user_role)}
     </h1>

    <div className="flex flex-col items-start ml-10">
      {/* Profile image */}
      <img
        src="https://placehold.co/170x253"
        alt="User"
        className="rounded-lg w-44 h-64 object-cover mb-6"
      />

      {/* Info list */}
      <div className="text-sm text-gray-800 space-y-2">
        <p><span className="font-medium">ชื่อ:</span> {user.tb_firstname || '-'} {user.tb_lastname || '-'}</p>
        <p><span className="font-medium">ตำแหน่ง:</span> {user.tb_position || '-'}</p>
        <p><span className="font-medium">แผนก:</span> {user.tb_department || '-'}</p>
        <p><span className="font-medium">เลขบัญชี:</span> {user.tb_bank_account_number || '-'} {user.tb_bank_name || ''}</p>
      </div>
    </div>
  </div>
</div>

  );
}
