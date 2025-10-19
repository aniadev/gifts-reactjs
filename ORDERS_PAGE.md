# Orders Page - Trang Quản Lý Đơn Hàng

## 📋 Tổng quan

Trang `/orders` cho phép xem và quản lý tất cả đơn hàng đã được lưu vào Supabase.

## ✨ Tính năng

### 1. Hiển thị danh sách đơn hàng
- ✅ Hiển thị tất cả đơn hàng từ Supabase
- ✅ Sắp xếp theo thời gian mới nhất
- ✅ Format ngày tháng theo tiếng Việt
- ✅ Hiển thị đầy đủ thông tin: tên, SĐT, địa chỉ, sản phẩm, ghi chú

### 2. Tìm kiếm (Search)
- 🔍 Tìm theo tên khách hàng
- 🔍 Tìm theo số điện thoại
- 🔍 Tìm theo tên sản phẩm
- ⚡ Real-time filtering

### 3. Thống kê
- 📊 Tổng số đơn hàng
- 📊 Số đơn hàng hôm nay
- 📊 Kết quả tìm kiếm

### 4. Export dữ liệu
- 📥 Xuất danh sách đơn hàng ra file CSV
- 📥 Bao gồm BOM cho UTF-8 (hỗ trợ Excel)
- 📥 Format chuẩn với timestamp

### 5. Xóa đơn hàng
- 🗑️ Xóa từng đơn hàng
- ⚠️ Có xác nhận trước khi xóa
- 🔄 Tự động refresh sau khi xóa

### 6. Làm mới dữ liệu
- 🔄 Button refresh để load lại data
- ⚡ Real-time update với React Query

## 🎨 UI/UX Features

- **Responsive Design**: Hoạt động tốt trên mobile và desktop
- **Loading States**: Skeleton loading cho trải nghiệm tốt
- **Empty States**: Thông báo khi chưa có đơn hàng
- **Error Handling**: Hiển thị lỗi rõ ràng
- **Toast Notifications**: Thông báo các hành động thành công/thất bại
- **Sticky Header**: Header cố định khi scroll
- **Color Coding**: Màu sắc phân biệt rõ ràng các phần

## 🔗 Navigation

### Từ trang chủ (`/`)
- Nhấn button "Xem đơn hàng" (icon Package) ở header

### Từ trang Orders (`/orders`)
- Nhấn button "Quay lại" (icon ArrowLeft) để về trang chủ

## 🛠️ Tech Stack

- **React Query**: Data fetching và caching
- **Supabase**: Database backend
- **date-fns**: Format ngày tháng
- **Lucide Icons**: Icons đẹp và nhất quán
- **shadcn/ui**: Component library
- **TailwindCSS**: Styling

## 📊 Database Schema

Table: `orders`
```typescript
{
  id: string (uuid, primary key)
  created_at: string (timestamp)
  customer_name: string
  phone_number: string
  shipping_address: string
  selected_product: string
  notes: string | null
}
```

## 🚀 Cách sử dụng

1. Mở app và điền form đặt hàng ở trang chủ
2. Submit form → Dữ liệu lưu vào Supabase
3. Nhấn "Xem đơn hàng" ở header
4. Xem, tìm kiếm, xuất hoặc xóa đơn hàng

## 📱 Screenshots

### Desktop View
- Header với search bar và action buttons
- Cards hiển thị chi tiết từng đơn hàng
- Stats cards ở đầu trang

### Mobile View
- Responsive layout
- Buttons ẩn text, chỉ hiện icon
- Touch-friendly UI

## 🔐 Permissions

Hiện tại chưa có authentication. Cần implement:
- [ ] Authentication với Supabase Auth
- [ ] Role-based access control
- [ ] RLS (Row Level Security) policies

## 📝 TODO / Future Improvements

- [ ] Thêm filter theo ngày
- [ ] Thêm sorting options (tên, ngày, sản phẩm)
- [ ] Pagination cho danh sách dài
- [ ] Bulk actions (xóa nhiều, export nhiều)
- [ ] Print individual orders
- [ ] Order status tracking
- [ ] Email notifications
- [ ] Analytics dashboard

## 🐛 Known Issues

- CSV export không preserve Vietnamese characters trong Excel (đã fix với BOM)
- Real-time updates cần manual refresh (có button refresh)

## 💡 Tips

1. Dùng search để tìm nhanh đơn hàng
2. Export CSV thường xuyên để backup
3. Xóa đơn hàng cũ để giữ database gọn nhẹ
4. Check stats cards để theo dõi số lượng đơn

---

**Created**: October 19, 2025  
**Last Updated**: October 19, 2025  
**Version**: 1.0.0
