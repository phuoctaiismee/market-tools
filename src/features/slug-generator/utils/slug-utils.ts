export const slugify = (value: string): string => {
  if (!value) return "";

  return value
    .toLowerCase()
    .normalize("NFD")              // Chuyển về dạng tổ hợp để tách dấu
    .replace(/[\u0300-\u036f]/g, "") // Xóa các dấu sau khi tách
    .replace(/[đĐ]/g, "d")          // Xử lý riêng chữ đ
    .replace(/[^a-z0-9\s-]/g, "")   // Xóa ký tự đặc biệt (giữ lại khoảng trắng và gạch ngang)
    .trim()                         // Xóa khoảng trắng 2 đầu
    .replace(/\s+/g, "-")           // Thay khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, "-")            // Tránh trường hợp nhiều dấu gạch ngang liên tiếp (--)
    .replace(/^-+|-+$/g, "");       // Xóa dấu gạch ngang ở đầu và cuối
};