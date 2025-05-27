import React, { useState } from 'react';
import api from '../routes/api';

export default function Home() {
  type Role = 1 | 2 | 3 | string;

  const [open, setOpen] = useState(false);
  const [employees, setEmployees] = useState<any[]>([]);
  const [showEmployees, setShowEmployees] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
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
        <button className="w-full text-left px-4 py-2 mt-1 text-white rounded hover:bg-violet-700">
          ตารางเงินเดือน
        </button>
      </div>
      
  </>
  )}
   {/* ถ้า role คือ admin แสดงปุ่ม "จัดการบุคลากร" */}
  {getRoleName(user?.tb_user_role) === 'admin' &&  (
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
            <span className="text-base">จัดการบุคลากร</span>
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
        <button
          className="w-full text-left px-4 py-2 mt-1 text-white rounded hover:bg-violet-700"
          onClick={() => {
            setShowAddEmployee(true);
            setShowEmployees(false);
          }}
        >
          เพิ่มบุคลากร
        </button>
      </div>
  </>
  )}
  {/* ถ้า role คือ superadmin แสดงปุ่ม "จัดการบุคลากร" */}
  {getRoleName(user?.tb_user_role) === 'superadmin' &&  (
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
            <span className="text-base">จัดการบุคลากร</span>
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
        <button
          className="w-full text-left px-4 py-2 mt-1 text-white rounded hover:bg-violet-700"
          onClick={async () => {
            // เมื่อคลิก "แสดงบุคลากร" ให้ปิดฟอร์มเพิ่มบุคลากร (ถ้าเปิดอยู่) และซ่อนโปรไฟล์ทันที
            setShowAddEmployee(false);
            setShowEmployees(true); // ซ่อนโปรไฟล์ก่อน fetch
            try {
              const res = await api.get('/show');
              const data = Array.isArray(res.data.users) ? res.data.users : [];
              setEmployees(data);
            } catch (err) {
              alert('ไม่สามารถดึงข้อมูลบุคลากรได้');
            }
          }}
        >
          แสดงบุคลากร
        </button>
        <button
          className="w-full text-left px-4 py-2 mt-1 text-white rounded hover:bg-violet-700"
          onClick={() => {
            setShowAddEmployee(true);
            setShowEmployees(false);
          }}
        >
          เพิ่มบุคลากร
        </button>
      </div>
  </>
  )}
      
  </div>

  {/* Main Content */}
 
  <div className="flex-1 bg-white p-10">
    
    <h1 className="text-4xl font-semibold text-black mb-8">
      {getRoleName(user?.tb_user_role)}
    </h1>

 {!showEmployees && !showAddEmployee && (
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
  )}
    {/* ตารางแสดงข้อมูลบุคลากร */}
    {showEmployees && !showAddEmployee && (
      <div className="mt-10 w-full">
        <h2 className="text-2xl font-bold mb-4">รายชื่อบุคลากร</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border">ชื่อ</th>
                <th className="px-4 py-2 border">นามสกุล</th>
                <th className="px-4 py-2 border">ตำแหน่ง</th>
                <th className="px-4 py-2 border">แผนก</th>
                <th className="px-4 py-2 border">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2 border">{emp.tb_firstname || '-'}</td>
                  <td className="px-4 py-2 border">{emp.tb_lastname || '-'}</td>
                  <td className="px-4 py-2 border">{emp.tb_position || '-'}</td>
                  <td className="px-4 py-2 border">{emp.tb_department || '-'}</td>
                  <td className="px-4 py-2 border">
                    <button 
                      onClick={() => {
                        // TODO: เพิ่ม logic แก้ไขข้อมูล
                        alert('กำลังพัฒนา...');
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      แก้ไข
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
    {showAddEmployee && (               //Register
      <div className="mt-10 w-full">
        <h2 className="text-2xl font-bold mb-4">เพิ่มบุคลากร</h2>
        {/* ฟอร์มลงทะเบียนบุคลากรใหม่ */}
        <form
          className="space-y-4 max-w-lg"
          onSubmit={async e => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const payload = {
              tb_email: formData.get('email'),
              tb_password: formData.get('password'),
              tb_firstname: formData.get('firstname'),
              tb_lastname: formData.get('lastname'),
              tb_national_id: formData.get('national_id'),
              tb_bank_account_number: formData.get('bank_account_number'),
              tb_bank_name: formData.get('bank_name'),
              tb_job_group: formData.get('job_group'),
              tb_department: formData.get('department'),
              tb_division: formData.get('division'),
              tb_position: formData.get('position'),
              tb_level: formData.get('level'),
              tb_personnel_type: formData.get('personnel_type'),
            };
            try {
              await api.post('/register', payload);
              alert('เพิ่มบุคลากรสำเร็จ');
              setShowAddEmployee(false);
              // อัปเดตรายชื่อบุคลากรทันที (optional)
              const res = await api.get('/show');
              const data = Array.isArray(res.data.users) ? res.data.users : [];
              setEmployees(data);
              setShowEmployees(true);
            } catch (err: any) {
              let msg =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                'เกิดข้อผิดพลาดในการเพิ่มบุคลากร';

              // รองรับ errors ใน key อื่นๆ
              const errorData = err?.response?.data;
              if (errorData) {
                // Laravel/Lumen: errors ใน errors
                if (errorData.errors) {
                  const errors = errorData.errors;
                  if (Array.isArray(errors)) {
                    msg = errors.join('\n');
                  } else if (typeof errors === 'object') {
                    msg = Object.values(errors)
                      .map((v) => (Array.isArray(v) ? v.join('\n') : v))
                      .join('\n');
                  }
                } else {
                  // กรณี errors อยู่ใน root (เช่น tb_username, tb_password)
                  const fieldErrors = Object.values(errorData)
                    .filter((v) => Array.isArray(v))
                    .map((v) => (Array.isArray(v) ? v.join('\n') : v))
                    .join('\n');
                  if (fieldErrors) msg = fieldErrors;
                }
              }
              alert(msg);
            }
          }}
        >
          <div>
            <label className="block mb-1 font-medium">email</label>
            <input type="text" name="email" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">password</label>
            <input type="text" name="password" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">ชื่อ</label>
            <input type="text" name="firstname" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">นามสกุล</label>
            <input type="text" name="lastname" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">เลขบัตรประชาชน</label>
            <input type="text" name="national_id" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">เลขบัญชี</label>
            <input type="text" name="bank_account_number" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">ธนาคาร</label>
            <input type="text" name="bank_name" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">กลุ่มงาน</label>
            <input type="text" name="job_group" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">ฝ่าย/แผนก</label>
            <input type="text" name="department" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">หน่วยงาน</label>
            <input type="text" name="division" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">ตำแหน่ง </label>
            <input type="text" name="position" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">ระดับ </label>
            <input type="text" name="level" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">ประเภทบุคคลากร </label>
            <input type="text" name="personnel_type" className="w-full border rounded px-3 py-2" required />
          </div>
          <div className="flex gap-2 mt-6">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">บันทึก</button>
            <button type="button" className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500" onClick={() => setShowAddEmployee(false)}>ยกเลิก</button>
          </div>
        </form>
      </div>
    )}
  </div>
</div>

  );
}
