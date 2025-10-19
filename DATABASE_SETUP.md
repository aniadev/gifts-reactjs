# Hướng dẫn cài đặt Database

Bạn cần chạy 2 migrations (di chuyển database) trên Supabase Dashboard:

## Bước 1: Fix RLS Policies (CHO PHÉP XEM DỮ LIỆU)

**Vấn đề**: Orders page trả về rỗng mặc dù có dữ liệu trong database.  
**Nguyên nhân**: Row Level Security (RLS) bật nhưng chỉ có policy INSERT, thiếu SELECT/UPDATE/DELETE.

### Cách chạy:

1. Vào [Supabase Dashboard](https://supabase.com/dashboard)
2. Chọn project của bạn
3. Vào **SQL Editor** (bên trái menu)
4. Click **New Query**
5. Copy & paste SQL từ file: `supabase/migrations/20251019_add_select_policy.sql`
6. Click **Run** để thực thi
7. Kiểm tra: Vào **Database** > **Tables** > **orders** > tab **Policies**
   - Phải thấy 4 policies: INSERT, SELECT, UPDATE, DELETE

### SQL Code:
```sql
-- Allow SELECT operations (cho phép đọc dữ liệu)
CREATE POLICY "Anyone can view orders"
ON public.orders
FOR SELECT
USING (true);

-- Allow UPDATE operations (cho phép cập nhật)
CREATE POLICY "Anyone can update orders"
ON public.orders
FOR UPDATE
USING (true);

-- Allow DELETE operations (cho phép xóa)
CREATE POLICY "Anyone can delete orders"
ON public.orders
FOR DELETE
USING (true);
```

---

## Bước 2: Thêm cột product_id (LƯU ID SẢN PHẨM)

**Mục đích**: Lưu ID của sản phẩm để tracking được sản phẩm nào được đặt hàng.

### Cách chạy:

1. Vào [Supabase Dashboard](https://supabase.com/dashboard)
2. Chọn project của bạn
3. Vào **SQL Editor**
4. Click **New Query**
5. Copy & paste SQL từ file: `supabase/migrations/20251019_add_product_id_column.sql`
6. Click **Run**
7. Kiểm tra: Vào **Database** > **Tables** > **orders**
   - Phải thấy cột mới `product_id` (type: TEXT)

### SQL Code:
```sql
-- Add product_id column to orders table
ALTER TABLE public.orders 
ADD COLUMN product_id TEXT;

-- Add index for faster queries on product_id
CREATE INDEX idx_orders_product_id 
ON public.orders(product_id);

-- Add comment to describe the column
COMMENT ON COLUMN public.orders.product_id IS 'Unique slug-based identifier for the product (format: store-category-product)';
```

---

## Kiểm tra sau khi chạy xong

1. **Test Orders Page**:
   - Mở `/orders` trong app
   - Phải thấy các đơn hàng hiện có (không còn rỗng)
   - Thử search, delete, export CSV

2. **Test Submit Order với Product ID**:
   - Vào trang chủ (`/`)
   - Chọn 1 sản phẩm
   - Điền form và submit
   - Vào `/orders` xem đơn vừa tạo
   - Vào Supabase Dashboard > Database > orders
   - Check cột `product_id` phải có giá trị (ví dụ: `phuc-long-tra-sua-tra-sua-phuc-long`)

---

## Lưu ý bảo mật

⚠️ **Hiện tại policies đang để public (USING true)** - tức là ai cũng có thể xem/sửa/xóa.

Khi deploy production, bạn nên:
1. Enable authentication (Supabase Auth)
2. Đổi policies thành:
   ```sql
   USING (auth.uid() IS NOT NULL)  -- Chỉ user đã login
   ```
3. Hoặc thêm role-based access control (RBAC)

---

## Troubleshooting

### Orders page vẫn trống sau khi chạy migration?
- F5 refresh lại page
- Mở DevTools (F12) > Console tab
- Phải thấy: `✅ Orders fetched successfully: X records`
- Nếu thấy `❌ Error`: check lại policies trong Supabase

### Lỗi "column product_id does not exist"?
- Migration bước 2 chưa chạy
- Vào SQL Editor chạy lại migration `20251019_add_product_id_column.sql`

### Lỗi TypeScript "Property product_id does not exist"?
- File `src/integrations/supabase/types.ts` đã được update
- Restart TypeScript server: Ctrl+Shift+P > "TypeScript: Restart TS Server"
