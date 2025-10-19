# Canvas to Data - Gift Management System 🎁

Ứng dụng quản lý chương trình tặng quà/đồ uống cho chị em. Chị em chọn đồ uống yêu thích và điền thông tin, admin sẽ kiểm tra và gửi quà tặng.

## 🚀 Tính năng

- ✅ **Chọn đồ uống**: Grid hiển thị các loại đồ uống từ nhiều cửa hàng, danh mục
- ✅ **Đăng ký nhận quà**: Form điền thông tin người nhận với validation
- ✅ **Quản lý danh sách**: Admin xem, tìm kiếm, xóa, export danh sách đăng ký
- ✅ **Thống kê**: Tổng số đăng ký, đăng ký hôm nay, kết quả tìm kiếm
- ✅ **Product ID tracking**: Lưu ID đồ uống để theo dõi chi tiết

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI**: TailwindCSS, shadcn/ui components
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Database**: Supabase (PostgreSQL)
- **Form**: react-hook-form + zod validation
- **Date**: date-fns (Vietnamese locale)
- **Icons**: Lucide React

## 📦 Cài đặt

### 1. Clone repository

\`\`\`bash
git clone https://github.com/aniadev/gifts-reactjs
cd gifts-reactjs
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
# hoặc
pnpm install
# hoặc
bun install
\`\`\`

### 3. Setup Supabase Database

#### 3.1. Tạo project Supabase mới

1. Vào [supabase.com](https://supabase.com/dashboard)
2. Click **"New Project"**
3. Điền thông tin:
   - **Name**: Canvas To Data (hoặc tên bạn muốn)
   - **Database Password**: Tạo password mạnh (lưu lại!)
   - **Region**: Chọn gần bạn nhất (Southeast Asia)
4. Click **"Create new project"** (đợi ~2 phút)

#### 3.2. Lấy credentials

Sau khi project được tạo:

1. Vào **Settings** (icon ⚙️ góc dưới bên trái)
2. Chọn **API**
3. Copy các thông tin:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **Project API keys** > **anon public**: `eyJhbGci...`
   - **Project ref**: `xxxxx` (trong URL)

#### 3.3. Cấu hình file `.env`

Tạo file `.env` ở thư mục root của project:

\`\`\`bash
# Copy từ .env.example hoặc tạo mới
VITE_SUPABASE_PROJECT_ID="your-project-ref"
VITE_SUPABASE_URL="https://your-project-ref.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
\`\`\`

**Thay thế các giá trị**:
- `your-project-ref`: Thay bằng project ref của bạn
- `https://your-project-ref.supabase.co`: Thay bằng Project URL
- `eyJhbGci...`: Thay bằng anon public key

#### 3.3b. Cấu hình file `supabase/config.toml`

Tạo hoặc cập nhật file `supabase/config.toml`:

\`\`\`toml
project_id = "your-project-ref"
\`\`\`

**Thay thế**:
- `your-project-ref`: Thay bằng project ref giống như trong `.env`
- Ví dụ: `project_id = "glooneimrxgwbeakubij"`

> 💡 **Lưu ý**: File này cần thiết nếu bạn sử dụng Supabase CLI để push migrations tự động. Nếu chỉ dùng Dashboard thì có thể bỏ qua.

#### 3.4. Chạn migrations để tạo database

**Option 1: Sử dụng Supabase Dashboard (Khuyên dùng)**

1. Vào [Supabase Dashboard](https://supabase.com/dashboard)
2. Chọn project vừa tạo
3. Vào **SQL Editor** (menu bên trái)
4. Click **"New Query"**

**Chạy lần lượt 3 migrations:**

##### Migration 1: Tạo bảng orders
\`\`\`sql
-- Copy nội dung từ: supabase/migrations/20251019103023_11504804-d5ca-44e7-8cc1-13f57cc68b3d.sql
-- Paste vào SQL Editor và Run
\`\`\`

##### Migration 2: Thêm RLS policies (cho phép truy cập dữ liệu)
\`\`\`sql
-- Copy nội dung từ: supabase/migrations/20251019_add_select_policy.sql
-- Paste vào SQL Editor và Run
\`\`\`

##### Migration 3: Thêm cột product_id
\`\`\`sql
-- Copy nội dung từ: supabase/migrations/20251019_add_product_id_column.sql
-- Paste vào SQL Editor và Run
\`\`\`

**Option 2: Sử dụng Supabase CLI**

\`\`\`bash
# Install Supabase CLI (nếu chưa có)
npm install -g supabase

# Login
supabase login

# Link project (thay your-project-ref)
supabase link --project-ref your-project-ref

# Push migrations lên database
supabase db push
\`\`\`

#### 3.5. Kiểm tra database

1. Vào **Database** > **Tables** (menu bên trái)
2. Phải thấy bảng **orders** với các cột:
   - `id` (uuid, primary key)
   - `created_at` (timestamp)
   - `customer_name` (text)
   - `shipping_address` (text)
   - `phone_number` (text)
   - `notes` (text, nullable)
   - `selected_product` (text)
   - `product_id` (text, nullable) ✨ **MỚI**

3. Vào **Policies** tab, phải thấy 4 policies:
   - ✅ Anyone can insert orders (INSERT)
   - ✅ Anyone can view orders (SELECT)
   - ✅ Anyone can update orders (UPDATE)
   - ✅ Anyone can delete orders (DELETE)

## 🏃 Chạy ứng dụng

### Development mode

\`\`\`bash
npm run dev
# Mở http://localhost:8080
\`\`\`

### Build production

\`\`\`bash
npm run build
npm run preview
\`\`\`

## 📱 Sử dụng

### 1. Trang cho chị em (/) - Public
- Xem danh sách đồ uống theo cửa hàng & danh mục
- Click chọn đồ uống yêu thích (highlight màu cam)
- Điền form thông tin để nhận quà:
  - Tên của bạn (bắt buộc)
  - Địa chỉ nhận quà (bắt buộc)
  - Số điện thoại (bắt buộc, format Việt Nam)
  - Ghi chú (tùy chọn) - có thể gửi lời nhắn
- Click **"Gửi đơn hàng"** để đăng ký

### 2. Trang quản lý (/orders) - Admin Only
- **Xem danh sách**: Tất cả đăng ký nhận quà với thông tin đầy đủ
- **Tìm kiếm**: Tìm theo tên, số điện thoại, tên đồ uống
- **Thống kê**: 
  - Tổng số đăng ký
  - Đăng ký hôm nay
  - Kết quả tìm kiếm
- **Xóa**: Click icon 🗑️ để xóa đăng ký trùng/spam
- **Export CSV**: Click "Xuất Excel" để tải danh sách, chuẩn bị gửi quà
- **Refresh**: Click icon 🔄 để cập nhật danh sách mới nhất

### 💡 Use Case
1. **Chị em**: Vào trang chủ, chọn đồ uống yêu thích, điền thông tin
2. **Admin (bạn)**: Vào `/orders`, kiểm tra danh sách đăng ký
3. **Admin**: Export CSV để có danh sách địa chỉ, số điện thoại
4. **Admin**: Gửi quà tặng đồ uống cho chị em 🎁

## 🗂️ Cấu trúc thư mục

\`\`\`
canvas-to-data/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── OrderForm.tsx   # Form đăng ký nhận quà
│   │   └── ProductGrid.tsx # Grid hiển thị đồ uống
│   ├── pages/              # React Router pages
│   │   ├── Index.tsx       # Trang chủ (public - cho chị em)
│   │   ├── Orders.tsx      # Trang quản lý (admin - kiểm tra đăng ký)
│   │   └── NotFound.tsx    # 404 page
│   ├── integrations/       # Third-party integrations
│   │   └── supabase/       # Supabase client & types
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   └── App.tsx             # Main app component
├── supabase/
│   ├── migrations/         # Database migrations
│   └── config.toml         # Supabase config
├── public/                 # Static assets
├── vercel.json            # Vercel deployment config
├── .env                   # Environment variables (local)
└── package.json
\`\`\`

## 🚀 Deploy lên Vercel

### 1. Push code lên GitHub

\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

### 2. Deploy trên Vercel

1. Vào [vercel.com](https://vercel.com)
2. Click **"Import Project"**
3. Chọn repository GitHub của bạn
4. Thêm **Environment Variables**:
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
5. Click **"Deploy"**

File `vercel.json` đã được cấu hình sẵn để fix lỗi 404 với React Router.

## 🔐 Bảo mật

⚠️ **Lưu ý**: Hiện tại database đang để **public access** (RLS policies với `USING (true)`).

**Cho production**, bạn nên:

1. **Enable Authentication**:
   \`\`\`bash
   # Vào Supabase Dashboard > Authentication
   # Enable Email provider hoặc Google/GitHub OAuth
   \`\`\`

2. **Update RLS Policies**:
   \`\`\`sql
   -- Chỉ cho phép user đã login
   DROP POLICY IF EXISTS "Anyone can view orders" ON public.orders;
   
   CREATE POLICY "Authenticated users can view orders"
   ON public.orders
   FOR SELECT
   USING (auth.uid() IS NOT NULL);
   
   -- Tương tự cho INSERT, UPDATE, DELETE
   \`\`\`

3. **Rate limiting**: Enable trên Supabase Settings

## 🐛 Troubleshooting

### Lỗi: "Failed to fetch orders" hoặc danh sách đăng ký trống

**Nguyên nhân**: RLS policies chưa được tạo

**Giải pháp**:
1. Vào Supabase Dashboard > SQL Editor
2. Chạy migration `20251019_add_select_policy.sql`
3. Kiểm tra Database > Tables > orders > Policies (phải có 4 policies)

### Lỗi: "column product_id does not exist"

**Nguyên nhân**: Migration `20251019_add_product_id_column.sql` chưa chạy

**Giải pháp**:
1. Vào Supabase Dashboard > SQL Editor
2. Chạy migration `20251019_add_product_id_column.sql`

### Lỗi 404 khi deploy Vercel

**Nguyên nhân**: Thiếu file `vercel.json`

**Giải pháp**: File đã có sẵn, đảm bảo đã commit và push lên Git

### TypeScript error: "Property product_id does not exist"

**Giải pháp**:
\`\`\`bash
# Restart TypeScript server
# VS Code: Ctrl+Shift+P > "TypeScript: Restart TS Server"
\`\`\`

## 📚 Tài liệu tham khảo

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TailwindCSS Documentation](https://tailwindcss.com)

## 📝 Chi tiết migrations

Chi tiết về các migrations và troubleshooting xem trong:
- `DATABASE_SETUP.md` - Hướng dẫn setup database
- `ORDERS_PAGE.md` - Documentation về trang Orders
- `FIX_RLS_POLICIES.md` - Hướng dẫn fix RLS issues

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

MIT

---

**Made with ❤️ by Ania**
