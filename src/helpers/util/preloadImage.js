export default async function usePreload(src) {
  const img = new Image(); // สร้าง image instance
  return new Promise((resolve, reject) => { // สร้าง promise แล้ว return ออกไป
    img.src = src; // กำหนดค่า src ให้กับ image instance เพื่อโหลดรูปภาพ
    img.onload = function() { // พอโหลดรูปเสร็จ function นี้จะถูกเรียกใช้งาน
      resolve(src);// เรียก function resolve เพื่อ บอก promise ให้ทำเสร็จสิ้นการทำงาน
    };
    img.onerror = function() {
      reject(); // ยกเลิกการทำงาน เนื่องจาก โหลดรูปไม่ได้ มันจะ throw new Error ออกไปให้เรา ดังนั้น ใส่ try catch ครอบด้วยนะครับ
    };
  });
}