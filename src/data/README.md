# Menu Data Structure (Cấu trúc dữ liệu Menu)

## Overview / Tổng quan

File `menuData.ts` chứa cấu trúc dữ liệu (data construction) cho menu của các quán cà phê/trà.

## Data Structure / Cấu trúc dữ liệu

```typescript
Store (Quán)
  └── Category (Danh mục)
        └── MenuItem (Sản phẩm)
```

### Type Definitions

#### MenuItem
Đại diện cho một món trong menu
```typescript
{
  imgUrl: string;  // Link hình ảnh món
  name: string;    // Tên món
  price: string;   // Giá (có thể là "Call" hoặc "X,XXX VNĐ")
}
```

#### Category
Đại diện cho một danh mục món (ví dụ: FOOD MENU, Freeze, etc.)
```typescript
{
  title: string;      // Tên danh mục
  items: MenuItem[];  // Danh sách món trong danh mục
}
```

#### Store
Đại diện cho một quán
```typescript
{
  name: string;        // Tên quán (ví dụ: "Highland Coffee")
  items: Category[];   // Danh sách các danh mục
}
```

## Usage / Cách sử dụng

### Import
```typescript
import { menuData, type MenuItem, type Category, type Store } from "@/data/menuData";
```

### Example / Ví dụ

**Lấy tất cả quán:**
```typescript
const stores = menuData; // Array of Store
```

**Lấy danh mục của một quán:**
```typescript
const highlandStore = menuData.find(s => s.name === "Highland Coffee");
const categories = highlandStore?.items; // Array of Category
```

**Lấy sản phẩm của một danh mục:**
```typescript
const freezeCategory = categories?.find(c => c.title === "Freeze");
const products = freezeCategory?.items; // Array of MenuItem
```

## Adding New Data / Thêm dữ liệu mới

### Thêm quán mới:
```typescript
{
  name: "Tên Quán Mới",
  items: [
    // Các category ở đây
  ]
}
```

### Thêm danh mục mới vào quán:
```typescript
{
  title: "TÊN DANH MỤC MỚI",
  items: [
    // Các món ở đây
  ]
}
```

### Thêm món mới vào danh mục:
```typescript
{
  imgUrl: "https://link-to-image.jpg",
  name: "Tên Món",
  price: "XX,XXX VNĐ"
}
```

## Current Data / Dữ liệu hiện tại

### Highland Coffee
- THỰC ĐƠN MÓN ĂN KHÁC (FOOD MENU): 4 món
- MENU NGUYÊN BẢN: 10 món
- TINH HOA TRÀ HIGHLANDS: 3 món
- DÒNG CÀ PHÊ ĐẶC BIỆT: 7 món
- Freeze: 5 món

### Phúc Long
- Chưa có dữ liệu (items: [])

## Notes / Ghi chú

- Khi thêm dữ liệu mới, đảm bảo format đúng theo structure trên
- Image URL nên là link trực tiếp đến ảnh
- Price có thể là "Call" hoặc "X,XXX VNĐ" format
- Nếu quán chưa có data, để `items: []`
