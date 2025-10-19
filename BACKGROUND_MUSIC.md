# Background Music Setup

## 🎵 Hướng dẫn thêm nhạc nền

App đã được cấu hình để tự động phát nhạc nền khi user vào trang chủ.

### Cách thêm file nhạc:

1. **Chuẩn bị file nhạc**:
   - Format: MP3 (khuyên dùng)
   - Tên file: `background-music.mp3`
   - Kích thước: < 5MB (để tải nhanh)
   - Độ dài: 2-3 phút (vì có loop)

2. **Đặt file vào thư mục public**:
   ```
   public/
   └── background-music.mp3
   ```

3. **Restart dev server**:
   ```bash
   npm run dev
   # hoặc
   pnpm dev
   ```

### Features:

✅ **Auto-play**: Nhạc tự động chạy khi vào trang (nếu browser cho phép)
✅ **Loop**: Nhạc lặp lại liên tục
✅ **Volume**: Mặc định 30% để không quá ồn
✅ **Toggle button**: Nút tắt/bật ở góc trên phải
✅ **Icon animation**: Volume2 (đang phát) / VolumeX (đã tắt)
✅ **Cleanup**: Tự động dừng nhạc khi rời trang

### Tùy chỉnh:

#### Thay đổi volume (âm lượng):
```typescript
// Trong Index.tsx, dòng ~28
audioRef.current.volume = 0.3; // 0.0 - 1.0 (30%)
```

#### Đổi file nhạc:
```typescript
// Trong Index.tsx, dòng ~26
audioRef.current = new Audio("/your-music-file.mp3");
```

#### Tắt loop (không lặp lại):
```typescript
// Trong Index.tsx, dòng ~27
audioRef.current.loop = false;
```

### Download nhạc miễn phí:

- [Pixabay Music](https://pixabay.com/music/)
- [Bensound](https://www.bensound.com/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)
- [Free Music Archive](https://freemusicarchive.org/)

### Gợi ý nhạc phù hợp với theme 20/10:

- **Acoustic, Lo-fi**: Nhẹ nhàng, không quá ồn
- **Instrumental**: Không có lời để không làm phiền
- **Happy, Upbeat**: Tạo cảm giác vui vẻ, tích cực
- **Độ dài 2-3 phút**: Đủ dài để không lặp lại quá nhiều

### Troubleshooting:

**Nhạc không tự động chạy?**
- Browser blocking autoplay (Chrome, Safari thường block)
- User cần interact (click) một lần rồi nhạc sẽ chạy
- Giải pháp: Click nút Volume icon để bật nhạc thủ công

**Nhạc bị lag hoặc tải chậm?**
- Giảm kích thước file (nén MP3)
- Giảm bitrate (128kbps là đủ cho nhạc nền)
- Host file trên CDN thay vì local

**Muốn thêm nhiều bài nhạc?**
```typescript
const playlist = [
  "/music1.mp3",
  "/music2.mp3",
  "/music3.mp3"
];
// Implement random shuffle hoặc play next
```

### Browser Compatibility:

✅ Chrome, Edge, Firefox, Safari
✅ Mobile browsers (iOS Safari, Chrome Mobile)
⚠️ Autoplay có thể bị block - cần user interaction

---

**Note**: Đảm bảo bạn có quyền sử dụng nhạc (copyright free / royalty free) trước khi deploy production!
