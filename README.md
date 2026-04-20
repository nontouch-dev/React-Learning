# 🚀 React Enterprise Stack - Learning Project

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BA5?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

## 📝 เกี่ยวกับโปรเจกต์ (About)
โปรเจกต์นี้ถูกสร้างขึ้นเพื่อ **ศึกษา ทำความเข้าใจ และทบทวน** การเขียนแอปพลิเคชันด้วย React ในระดับโครงสร้างที่ใช้กันในองค์กร (Enterprise Architecture)

เนื้อหาในโปรเจกต์เน้นไปที่การแก้ปัญหาคลาสสิกของการทำ Frontend เช่น การจัดการสถานะ (State Management), การป้องกันหน้าเว็บ (Route Guard), การดึงและจำข้อมูลจาก API (Data Fetching & Caching) และการจัดการฟอร์มที่มีประสิทธิภาพ

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)
โปรเจกต์นี้รวบรวมเครื่องมือ (Libraries) ยอดนิยมที่สายงาน Frontend Developer มักใช้งานจริง:

* **[React Router DOM](https://reactrouter.com/)**: จัดการระบบ Routing, การทำ Layout ซ้อนกัน และการทำ `<ProtectedRoute>` เพื่อกั้นผู้ใช้ที่ยังไม่ได้เข้าสู่ระบบ
* **[Zustand](https://github.com/pmndrs/zustand)**: จัดการ Global State สำหรับระบบ Authentication พร้อมใช้งาน Middleware `persist` เพื่อบันทึก Token ลง `localStorage` ไม่ให้หายเมื่อรีเฟรชหน้า
* **[React Query (@tanstack/react-query)](https://tanstack.com/query/latest)**: หัวใจหลักในการจัดการ Server State ควบคุมสถานะ Loading/Error, การทำ Caching ข้อมูลพนักงาน และการทำลายแคช (Invalidation) เมื่อมีการเพิ่มข้อมูลใหม่
* **[React Hook Form](https://react-hook-form.com/)**: จัดการฟอร์มแบบ Uncontrolled เพื่อลดการรีเรนเดอร์ของหน้าจอ พร้อมระบบ Validation ตรวจสอบความถูกต้องของอีเมลและรหัสผ่าน
* **Tailwind CSS & HeroUI**: จัดการ UI และ Layout ให้มีความสวยงาม ทันสมัย และรองรับการทำ Responsive Design

## ✨ ฟีเจอร์หลัก (Key Features)
- [x] **Authentication System**: ระบบ Login พร้อมตรวจสอบรูปแบบข้อมูล (Email & Password)
- [x] **Protected Routes**: ป้องกันการเข้าถึงหน้า Dashboard หากไม่มี Token
- [x] **Custom Fetch Wrapper**: ด่านตรวจ API ที่ทำหน้าที่แทรก `Authorization: Bearer <token>` อัตโนมัติทุกครั้งที่ดึงข้อมูล
- [x] **Data Table with Caching**: ตารางแสดงรายชื่อพนักงานที่มีระบบ Caching ช่วยให้ไม่ต้องดึงข้อมูลใหม่โดยไม่จำเป็น พร้อมปุ่ม Manual Refetch
- [x] **Form Mutation**: ระบบเพิ่มรายชื่อพนักงานผ่าน Modal ที่เมื่อเพิ่มสำเร็จจะสั่งรีเฟรชตารางอัตโนมัติ

## ⚙️ การติดตั้งและรันโปรเจกต์ (Getting Started)

1. Clone โปรเจกต์นี้ลงมาที่เครื่องของคุณ
```bash
git clone [https://github.com/nontouch-dev/React-Learning.git](https://github.com/nontouch-dev/React-Learning.git)
