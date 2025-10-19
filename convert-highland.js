// Script để convert Highland JSON data sang menuData format
import fs from 'fs';

// Đọc file highland.json
const highlandData = JSON.parse(fs.readFileSync('./src/data/highland.json', 'utf8'));

// Function để format giá
const formatPrice = (priceObj) => {
  if (!priceObj || !priceObj.text) return '0đ';
  return priceObj.text;
};

// Function để lấy URL ảnh 400x400 (size vừa)
const getImageUrl = (photos) => {
  if (!photos || photos.length === 0) return '';
  // Tìm ảnh 400x400 hoặc lấy ảnh đầu tiên
  const img400 = photos.find(p => p.width === 400);
  return img400 ? img400.value : photos[0].value;
};

// Convert data
const highlandMenu = {
  name: "Highland Coffee",
  logo: "/highland-logo.png", // Cần thêm logo vào public folder
  items: []
};

// Group products by category (cần phân loại thủ công hoặc dựa vào tên)
const categories = {
  'Freeze': [],
  'Trà': [],
  'Trà Sữa': [],
  'Cà Phê': [],
  'Combo': [],
  'Khác': []
};

// Track seen product names để lọc trùng
const seenNames = new Set();

// Parse và phân loại sản phẩm
highlandData.forEach(product => {
  if (!product.is_available || product.is_deleted) return;
  
  // Skip nếu tên đã tồn tại (giữ sản phẩm đầu tiên)
  if (seenNames.has(product.name)) {
    console.log(`⚠️ Đã bỏ qua sản phẩm trùng: ${product.name}`);
    return;
  }
  seenNames.add(product.name);
  
  const item = {
    name: product.name,
    price: product.discount_price && product.discount_price.value < product.price.value
      ? formatPrice(product.discount_price)
      : formatPrice(product.price),
    imgUrl: getImageUrl(product.photos),
    description: product.description || ''
  };
  
  // Phân loại dựa vào tên sản phẩm
  const name = product.name.toLowerCase();
  if (name.includes('freeze')) {
    categories['Freeze'].push(item);
  } else if (name.includes('trà sữa')) {
    categories['Trà Sữa'].push(item);
  } else if (name.includes('trà')) {
    categories['Trà'].push(item);
  } else if (name.includes('cà phê') || name.includes('phin') || name.includes('bạc xỉu')) {
    categories['Cà Phê'].push(item);
  } else if (name.includes('combo')) {
    categories['Combo'].push(item);
  } else {
    categories['Khác'].push(item);
  }
});

// Tạo items array với các category không rỗng
for (const [categoryName, items] of Object.entries(categories)) {
  if (items.length > 0) {
    highlandMenu.items.push({
      title: categoryName,
      items: items
    });
  }
}

// In ra kết quả
console.log('=== HIGHLAND MENU DATA ===');
console.log(JSON.stringify(highlandMenu, null, 2));

// Thống kê
console.log('\n=== THỐNG KÊ ===');
console.log(`Tổng số sản phẩm: ${highlandData.length}`);
console.log(`Số sản phẩm available: ${highlandData.filter(p => p.is_available && !p.is_deleted).length}`);
highlandMenu.items.forEach(cat => {
  console.log(`${cat.title}: ${cat.items.length} món`);
});

// Lưu vào file
fs.writeFileSync('./highland-menu-output.json', JSON.stringify(highlandMenu, null, 2));
console.log('\n✅ Đã lưu vào file: highland-menu-output.json');
