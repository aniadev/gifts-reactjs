# 🔧 Fix: Query trả về trống mặc dù có data

## ❌ Vấn đề

Database Supabase có data (như trong screenshot) nhưng khi query từ React app thì trả về mảng rỗng `[]`.

## 🔍 Nguyên nhân

**Row Level Security (RLS)** đã được bật cho table `orders` nhưng chỉ có policy cho **INSERT**, không có policy cho **SELECT**.

### Migration hiện tại (chỉ có INSERT policy):
```sql
-- Enable Row Level Security
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- ✅ Có policy này (nên INSERT works)
CREATE POLICY "Anyone can submit orders"
  ON public.orders
  FOR INSERT
  TO public
  WITH CHECK (true);

-- ❌ THIẾU policy cho SELECT (nên không đọc được data)
```

## ✅ Giải pháp

Thêm policies cho SELECT, UPDATE, và DELETE.

### Cách 1: Chạy SQL trực tiếp trên Supabase Dashboard (KHUYẾN NGHỊ) ⚡

1. Mở [Supabase Dashboard](https://supabase.com/dashboard)
2. Chọn project của bạn
3. Vào **SQL Editor** (icon ⚡ ở sidebar)
4. Nhấn **New Query**
5. Copy & paste đoạn SQL sau:

```sql
-- Add SELECT policy to allow reading orders
CREATE POLICY "Anyone can view orders"
  ON public.orders
  FOR SELECT
  TO public
  USING (true);

-- Add UPDATE policy (cho chức năng edit sau này)
CREATE POLICY "Anyone can update orders"
  ON public.orders
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Add DELETE policy (cho button xóa đơn hàng)
CREATE POLICY "Anyone can delete orders"
  ON public.orders
  FOR DELETE
  TO public
  USING (true);
```

6. Nhấn **Run** (hoặc Ctrl + Enter)
7. Đợi thông báo "Success"

### Cách 2: Sử dụng Supabase CLI 🖥️

Nếu bạn đã setup Supabase CLI:

```bash
cd e:\Code\ReactJs\canvas-to-data
supabase migration up
```

Migration file đã được tạo tại:
```
supabase/migrations/20251019_add_select_policy.sql
```

## 🧪 Kiểm tra

Sau khi chạy migration:

1. **Mở browser console** (F12)
2. **Refresh trang `/orders`**
3. **Xem logs**:
   ```
   🔍 Fetching orders from Supabase...
   ✅ Orders fetched successfully: 2 records
   📦 Data: [{...}, {...}]
   ```

4. **Kiểm tra UI**: Các đơn hàng sẽ hiển thị ra

## 📊 Verify Policies trên Supabase Dashboard

1. Vào **Database** → **Tables** → **orders**
2. Chọn tab **Policies**
3. Bạn sẽ thấy 4 policies:
   - ✅ "Anyone can submit orders" (INSERT)
   - ✅ "Anyone can view orders" (SELECT) ← **MỚI**
   - ✅ "Anyone can update orders" (UPDATE) ← **MỚI**
   - ✅ "Anyone can delete orders" (DELETE) ← **MỚI**

## 🔐 Bảo mật (Security Note)

⚠️ **Hiện tại**: Policies này cho phép **ANYONE** (bất kỳ ai) có thể:
- Xem tất cả đơn hàng
- Xóa đơn hàng
- Sửa đơn hàng

Đây là OK cho **development** hoặc **internal tool**, nhưng cho **production** bạn nên:

### 📝 TODO cho Production:

1. **Thêm Authentication**:
   ```typescript
   // Require user login
   import { supabase } from "@/integrations/supabase/client";
   
   const { data: { user } } = await supabase.auth.getUser();
   if (!user) {
     // Redirect to login
   }
   ```

2. **Update RLS Policies** để chỉ cho phép authenticated users:
   ```sql
   -- Chỉ cho phép user đã đăng nhập xem orders
   CREATE POLICY "Authenticated users can view orders"
     ON public.orders
     FOR SELECT
     TO authenticated
     USING (true);
   
   -- Chỉ admin mới xóa được
   CREATE POLICY "Only admins can delete orders"
     ON public.orders
     FOR DELETE
     TO authenticated
     USING (auth.jwt() ->> 'role' = 'admin');
   ```

3. **Thêm user roles** trong Supabase Auth

## 🎯 Expected Result

Sau khi fix:
- ✅ Trang `/orders` sẽ hiển thị đầy đủ đơn hàng
- ✅ Search hoạt động
- ✅ Export CSV hoạt động
- ✅ Delete hoạt động
- ✅ Stats hiển thị đúng số lượng

## 🐛 Troubleshooting

### Vẫn không thấy data?

1. **Check browser console** xem có error gì
2. **Check Supabase logs**:
   - Vào Dashboard → Logs → API Logs
   - Xem có request nào failed không
3. **Verify policies đã tạo**:
   - Database → Tables → orders → Policies tab
4. **Test query trực tiếp**:
   ```sql
   SELECT * FROM orders ORDER BY created_at DESC;
   ```
   Chạy trong SQL Editor xem có data không

### Error "permission denied for table orders"?

→ RLS policy chưa được apply. Chạy lại migration.

### Error "relation public.orders does not exist"?

→ Table chưa được tạo. Chạy migration đầu tiên:
```bash
supabase migration up
```

## 📞 Support

Nếu vẫn gặp vấn đề, check:
1. Supabase project URL trong `.env`
2. Anon key đúng chưa
3. Internet connection
4. Supabase service status

---

**Created**: October 19, 2025  
**Issue**: RLS policies missing for SELECT  
**Solution**: Add SELECT, UPDATE, DELETE policies  
**Status**: ✅ Fixed
