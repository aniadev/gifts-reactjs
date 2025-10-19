// Cấu trúc data cho menu các quán (Menu Data Construction)
// Structure: Store -> Category -> Products

export type MenuItem = {
  imgUrl: string;
  name: string;
  price: string;
};

export type Category = {
  title: string;
  items: MenuItem[];
};

export type Store = {
  name: string;
  items: Category[];
};

export const menuData: Store[] = [
  {
    name: "Highland Coffee",
    items: [
      {
        title: "MENU NGUYÊN BẢN",
        items: [
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Tra_Thanh_Dao.jpg",
            name: "Trà Thanh Đào",
            price: "59,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Freeze_Caramel.jpg",
            name: "Caramel Phin Freeze",
            price: "69,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Tra_Thach_Dao.jpg",
            name: "Trà Thạch Đào",
            price: "59,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_KemDi.jpg",
            name: "KemDi",
            price: "39,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Cappuccino.jpg",
            name: "Cappucino",
            price: "99,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Latte.jpg",
            name: "Latte",
            price: "99,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Chanh_Da_Vien.jpg",
            name: "Chanh Đá Viên",
            price: "55,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Tac_Da_Vien.jpg",
            name: "Tắc Đá Viên",
            price: "55,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Freeze_Cookie___Cream.jpg",
            name: "Cookies & Cream",
            price: "69,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Chanh_Da_Xay.jpg",
            name: "Chanh Đá Xay",
            price: "55,000 VNĐ"
          }
        ]
      },
      {
        title: "TINH HOA TRÀ HIGHLANDS",
        items: [
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/2_SPECIALTY_TEA/thumbs/270_crop_Hot_Tea_Set.jpg",
            name: "Set Trà Cao Cấp (Tùy Chọn Trà)",
            price: "159,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/2_SPECIALTY_TEA/thumbs/270_crop_Tra_Qua_Mong_Anh_Dao.jpg",
            name: "TRÀ QUẢ MỌNG ANH ĐÀO",
            price: "79,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/2_SPECIALTY_TEA/thumbs/270_crop_Tra_Oi_Hong.jpg",
            name: "TRÀ ỔI HỒNG",
            price: "79,000 VNĐ"
          }
        ]
      },
      {
        title: "DÒNG CÀ PHÊ ĐẶC BIỆT",
        items: [
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/1_SPECIALTY_COFFEE/thumbs/270_crop_Cold_Brew_Milk_Foam.jpg",
            name: "Cold Brew Milk Foam",
            price: "79,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/1_SPECIALTY_COFFEE/thumbs/270_crop_Cold_Brew_Peach.jpg",
            name: "Cold Brew Đào",
            price: "79,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/1_SPECIALTY_COFFEE/thumbs/270_crop_Cold_Brew.jpg",
            name: "Cold Brew",
            price: "69,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Bac_Xiu.jpg",
            name: "Bạc Xỉu Culi",
            price: "55,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Phin_Sua_Da.jpg",
            name: "Phin Culi Sữa Đá",
            price: "55,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Phin_Den_Da.jpg",
            name: "Phin Culi Đen Đá",
            price: "49,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/1_SPECIALTY_COFFEE/thumbs/270_crop_Citrus_Cafe_De_Tonic.jpg",
            name: "Citrus coffee detonic",
            price: "89,000 VNĐ"
          }
        ]
      },
      {
        title: "Freeze",
        items: [
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/thumbs/270_crop_HLC_New_logo_5.1_Products__FREEZE_TRA_XANH.jpg",
            name: "Freeze Trà Xanh",
            price: "55,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/thumbs/270_crop_HLC_New_logo_5.1_Products__COOKIES_FREEZE.jpg",
            name: "Cookies & Cream",
            price: "55,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/New_product/thumbs/270_crop_HLC_New_logo_5.1_Products__FREEZE_CHOCO.jpg",
            name: "Freeze Sô-cô-la",
            price: "55,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/thumbs/270_crop_HLC_New_logo_5.1_Products__CARAMEL_FREEZE_PHINDI.jpg",
            name: "Caramel Phin Freeze",
            price: "55,000 VNĐ"
          },
          {
            imgUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/thumbs/270_crop_HLC_New_logo_5.1_Products__CLASSIC_FREEZE_PHINDI.jpg",
            name: "Classic Phin Freeze",
            price: "55,000 VNĐ"
          }
        ]
      }
    ]
  },
  {
    name: "Phúc Long",
    items: [
      {
        title: "TRÀ SỮA",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144go6eb14q4a@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Phúc Long",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lqxjuvxpf16s60@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà Sữa",
            price: "50.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144h22nyy628d@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Ô Long",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lvdc9bn07i3o54@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Matcha",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144hjqc4qd7d4@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Lài",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lxj2zt4klhwb16@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Ô Long Lài Thạch Konjac",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144ir5alit6ae@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Nhãn Sen",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144ih735pq2b2@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Socola",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lr068cwx1ehle5@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Ô Long Quế Hoa",
            price: "50.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144huoc45fe25@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Sen",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lvdc1pnp58y5ba@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Bá Tước",
            price: "50.000đ"
          }
        ]
      },
      {
        title: "TRÀ TRÁI CÂY",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mf9vo77khk3z55@resize_ss400x400!@crop_w400_h400_cT",
            name: "Ông Kẹ",
            price: "69.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mf9v1tgvo6x5d1@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bà Kẹ",
            price: "69.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lqxjcb5k3k5g13@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà Đào Sữa Thạch Konjac",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-m00gbz5hfozxc0@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Vải Lài",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-m00foc0iz0wd75@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà Đào",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144jpt2cg3f22@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Lài Đác Thơm",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-m00g3h9h2frh72@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Nhãn Sen",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-m00fzgiew78hc5@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Nhãn Lài",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-m00fs8ipd02p4d@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Thảo Mộc",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lvdc0njwwp5web@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Lài Mãng Cầu",
            price: "65.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-m00gekx47vdt0f@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Vải Sen",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-m00g7jin1i6lc4@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Ô Long Đào Cam",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144j7nwfed78f@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà Chanh",
            price: "40.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m0szdhcf0t0tdf@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Bưởi Ô Long Lài",
            price: "65.000đ"
          }
        ]
      },
      {
        title: "TRÀ NGUYÊN CHẤT",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m0t0k4qxod7x5f@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Ô Long Lài",
            price: "45.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m0szjhwllr712b@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Phúc Long",
            price: "45.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m0t00y3cbtsf86@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sen",
            price: "45.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m0t0cykpfxt9a1@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Ô Long Quế Hoa",
            price: "40.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m2jp41vo2she25@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà",
            price: "45.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m0szo7zeprl90f@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Ô Long",
            price: "45.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m0szunbi6lt9fb@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Lài",
            price: "45.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m2jp5epz1704f2@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Bá Tước",
            price: "40.000đ"
          }
        ]
      },
      {
        title: "TRÀ LATTE",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m6ut9a3oigkne8@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà Latte Mây",
            price: "65.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m6utc5i5733b58@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà Latte Nguyên Vị",
            price: "65.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m6utewyjoymw6b@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà Latte Mây (Nóng)",
            price: "65.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m6utginx919d70@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà Latte Nguyên Vị (Nóng)",
            price: "65.000đ"
          }
        ]
      },
      {
        title: "MATCHA",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-md0ih1cdm8bx43@resize_ss400x400!@crop_w400_h400_cT",
            name: "Matcha Latte Oatside Nguyên Vị (L)",
            price: "69.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-md0ioqa8e05b11@resize_ss400x400!@crop_w400_h400_cT",
            name: "Matcha Oatside Tuyết Lạnh (L)",
            price: "69.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m0sz3h85tehbb8@resize_ss400x400!@crop_w400_h400_cT",
            name: "Matcha Đá Xay",
            price: "69.000đ"
          }
        ]
      },
      {
        title: "TRÀ SILKY",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lr09qizq99y121@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Phúc Long Kem Silky",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lr068cafyaisd5@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Silky Ô Long Quế Hoa",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lr0rsiipvs0paf@resize_ss400x400!@crop_w400_h400_cT",
            name: "Hồng Trà Kem Silky",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lr0rshxcr1l00e@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Ô Long Kem Silky",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lr0rsj0r5dxg82@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sen Kem Silky",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lxig1hhco8uxcc@resize_ss400x400!@crop_w400_h400_cT",
            name: "Silky Ô Long Lài",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lsbhsshql315a0@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Bá Tước Kem Silky",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lr0q0bck02hlfb@resize_ss400x400!@crop_w400_h400_cT",
            name: "Silky Cà Phê Sữa",
            price: "55.000đ"
          }
        ]
      },
      {
        title: "CÀ PHÊ",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144kvk2s322dc@resize_ss400x400!@crop_w400_h400_cT",
            name: "Cà phê sữa",
            price: "39.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144kfzvjvcq32@resize_ss400x400!@crop_w400_h400_cT",
            name: "Cà phê đen",
            price: "35.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lqzy20arwgxw21@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bạc Xỉu",
            price: "39.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m144l9cglp4rcb@resize_ss400x400!@crop_w400_h400_cT",
            name: "Americano",
            price: "50.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m6f7fsfwm6w78c@resize_ss400x400!@crop_w400_h400_cT",
            name: "Latte",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m6f7hwpexodd41@resize_ss400x400!@crop_w400_h400_cT",
            name: "Cappuccino",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m67rky4bael307@resize_ss400x400!@crop_w400_h400_cT",
            name: "Mocha",
            price: "55.000đ"
          }
        ]
      },
      {
        title: "BÁNH & KHÁC",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m6utl3akapi978@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bánh Chuối Hạt Dinh Dưỡng",
            price: "39.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lqyoh13taksk6f@resize_ss400x400!@crop_w400_h400_cT",
            name: "Tiramisu/Bánh Phomai",
            price: "38.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lwqxcigvxwij77@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bánh Su Kem",
            price: "28.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m67rrvr3zd141e@resize_ss400x400!@crop_w400_h400_cT",
            name: "Pure Butter Croissant",
            price: "25.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lqxcgbckuyzde6@resize_ss400x400!@crop_w400_h400_cT",
            name: "Cappuccino Đá Xay",
            price: "69.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-m14478083tyz43@resize_ss400x400!@crop_w400_h400_cT",
            name: "Chanh Đá Xay",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lr01bhz4a6qha3@resize_ss400x400!@crop_w400_h400_cT",
            name: "Oreo Kem Đá Xay",
            price: "69.000đ"
          }
        ]
      }
    ]
  },
  {
    name: "Phê La",
    items: [
      {
        title: "CÀ PHÊ",
        items: [
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/07/Phe-Xiu-Vani.jpg",
            name: "PHÊ XỈU VANI",
            price: "50.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/6.-Phe-Ame-hat-Colom-Ethi-scaled.jpg",
            name: "PHÊ ESPRESSO (Hạt Colom, Ethi)",
            price: "50.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/6.-Phe-Ame-hat-Colom-Ethi-scaled.jpg",
            name: "PHÊ ESPRESSO (Hạt Ro, Ara)",
            price: "45.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/8.-Phe-Cappu-hat-Colom-Ethi-Da-scaled.jpg",
            name: "PHÊ LATTE (Hạt Colom, Ethi)",
            price: "59.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/8.-Phe-Cappu-hat-Colom-Ethi-Da-scaled.jpg",
            name: "PHÊ LATTE (Hạt Ro, Ara)",
            price: "54.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/9.-Phe-Cappu-hat-Colom-Ethi-Nong-scaled.jpg",
            name: "PHÊ CAPPU (Hạt Ro, Ara)",
            price: "54.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/9.-Phe-Cappu-hat-Colom-Ethi-Nong-scaled.jpg",
            name: "PHÊ CAPPU (Hạt Colom, Ethi)",
            price: "59.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/6.-Phe-Ame-hat-Colom-Ethi-scaled.jpg",
            name: "PHÊ AME (Hạt Ro, Ara)",
            price: "45.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/6.-Phe-Ame-hat-Colom-Ethi-scaled.jpg",
            name: "PHÊ AME (Hạt Colom, Ethi)",
            price: "50.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-03.jpg",
            name: "PHÊ NÂU",
            price: "39.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-01.jpg",
            name: "PHÊ ĐEN",
            price: "39.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/07/14761.jpg",
            name: "ĐÀ LẠT",
            price: "45.000₫"
          }
        ]
      },
      {
        title: "SYPHON",
        items: [
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/Phong-Lan-size-La.jpg",
            name: "Phong Lan (size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/O-Long-Nhai-Sua-size-La.jpg",
            name: "Ô Long Nhài Sữa (size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/O-Long-Sua-Phe-La-size-La.jpg",
            name: "Ô Long Sữa Phê La (size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2023/11/PHONG-LAN-scaled.jpg",
            name: "Phong Lan (Ô Long Vani Sữa)",
            price: "54.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/07/14369.jpg",
            name: "Ô LONG SỮA PHÊ LA",
            price: "54.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/07/14287.jpg",
            name: "Ô LONG NHÀI SỮA",
            price: "54.000₫"
          }
        ]
      },
      {
        title: "FRENCH PRESS",
        items: [
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/10/Ver-03-Lua-Dao-Phien-ban-Dong-Chill-yeu-thich-size-LAAA.jpg",
            name: "LỤA ĐÀO - Phiên bản Đồng Chill yêu thích (size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/10/Ver-03-Lua-Dao-Phien-ban-Dong-Chill-yeu-thich-size-Phe.jpg",
            name: "LỤA ĐÀO - Phiên bản Đồng Chill yêu thích (size Phê)",
            price: "54.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/8-Tra-Vo-Ca-Phe.jpg",
            name: "Trà Vỏ Cà Phê (size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/Resize-AppFood-KV-OLongDaoHong-2-03-scaled.jpg",
            name: "Ô LONG ĐÀO HỒNG (Size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/6-Gam-tra-trai-cay-1.jpg",
            name: "Gấm (size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/07/14913.jpg",
            name: "GẤM",
            price: "54.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/07/14941.jpg",
            name: "TRÀ VỎ CÀ PHÊ",
            price: "54.000₫"
          }
        ]
      },
      {
        title: "MOKA POT",
        items: [
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/3-Tam.jpg",
            name: "Tấm (size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/4-Khoi-B_Lao.jpg",
            name: "Khói B'Lao (size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2022/07/14410.jpg",
            name: "KHÓI B'LAO",
            price: "54.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/07/14614.jpg",
            name: "TẤM",
            price: "54.000₫"
          }
        ]
      },
      {
        title: "COLD BREW",
        items: [
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/09/Sua-Chua-Bong-Buoi-menu-scaled.jpg",
            name: "SỮA CHUA BÒNG BƯỞI",
            price: "Liên hệ"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/05/Bong-Buoi-scaled.jpg",
            name: "BÒNG BƯỞI - Ô LONG BƯỞI NHA ĐAM",
            price: "64.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/07/14265.jpg",
            name: "Lang Biang (size La)",
            price: "69.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/Si-Mo-Cold-Brew-O-Long-Mo-Dao.jpg",
            name: "SI MƠ - COLD BREW Ô LONG MƠ ĐÀO (size La)",
            price: "64.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/07/14265.jpg",
            name: "LANG BIANG",
            price: "54.000₫"
          }
        ]
      },
      {
        title: "Ô LONG MATCHA",
        items: [
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/04/Matcha-Phan-Xi-Pang-da-xay-MOI-scaled.jpg",
            name: "MATCHA PHAN XI PĂNG",
            price: "64.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2023/05/ảnh-vuông-sp-matcha-latte_.jpg",
            name: "MATCHA COCO LATTE",
            price: "59.000₫"
          }
        ]
      },
      {
        title: "TOPPING",
        items: [
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/09/Thach-Tra-Chanh-Vang-scaled.jpg",
            name: "THẠCH TRÀ CHANH VÀNG",
            price: "Liên hệ"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/07/Thach-Xiu-Vani.jpg",
            name: "THẠCH XỈU VANI",
            price: "Liên hệ"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/06/Resize-AppFood-KV-OLongDaoHong-2-09-scaled.jpg",
            name: "THẠCH TRÀ ĐÀO HỒNG",
            price: "15.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/04/Thach-O-Long-Matcha-MOI-scaled.jpg",
            name: "THẠCH Ô LONG MATCHA",
            price: "15.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/07/Thach-Tra-Vo-scaled.jpg",
            name: "THẠCH TRÀ VỎ",
            price: "15.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/3.-Tran-Chau-Phong-Lan-scaled.jpg",
            name: "TRÂN CHÂU PHONG LAN",
            price: "10.000₫"
          },
          {
            imgUrl: "",
            name: "Trân Châu Ô Long",
            price: "10.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/10/14489.jpg",
            name: "TRÂN CHÂU GẠO RANG",
            price: "10.000₫"
          }
        ]
      },
      {
        title: "PLUS - LON/CHAI TIỆN LỢI",
        items: [
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/12/Plus-KhoiBlao.jpg",
            name: "PLUS - KHÓI B'LAO",
            price: "108.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/12/Plus-Matcha-Coco-Latte.jpg",
            name: "PLUS - MATCHA COCO LATTE",
            price: "108.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/10/Plus-Lua-Dao-moi-1.jpg",
            name: "PLUS - LỤA ĐÀO",
            price: "108.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2023/11/PHONG-LAN-PLUS.jpg",
            name: "PLUS - PHONG LAN",
            price: "108.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/08/1.-Plus-Cold-Brew.jpg",
            name: "PLUS - COLD BREW",
            price: "98.182₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/08/2.-Plus-Da-Lat.jpg",
            name: "PLUS - ĐÀ LẠT",
            price: "137.455₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/08/3.-Plus-Dinh-Phu-Van.jpg",
            name: "PLUS - ĐỈNH PHÙ VÂN",
            price: "137.455₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/08/7.-Plus-Tam.jpg",
            name: "PLUS - TẤM",
            price: "108.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/08/4.-Plus-O-Long-Nhai-Sua.jpg",
            name: "PLUS - Ô LONG NHÀI SỮA",
            price: "108.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/08/5.-Plus-O-Long-Sua-Phe-La.jpg",
            name: "PLUS - Ô LONG SỮA PHÊ LA",
            price: "108.000₫"
          }
        ]
      },
      {
        title: "MANG PHÊ LA VỀ NHÀ",
        items: [
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/08/DSC01741-scaled.jpg",
            name: "Dây đeo Đồng Lòng Đi Chill",
            price: "Liên hệ"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/07/Ava-Combo-XXLD-scaled.jpg",
            name: "Combo Xúng Xính Lụa Đào",
            price: "130.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/07/Ava-Khan-Lua-Dao-Phien-ban-moi-scaled.jpg",
            name: "Khăn Lụa Đào - Phiên bản mới",
            price: "99.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-scaled.jpg",
            name: "Bọt biển Phê La - Ô Long Sữa Phê La",
            price: "25.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-Phe-Latte-scaled.jpg",
            name: "Bọt biển Phê La - Phê Latte",
            price: "25.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-Tran-Chau-Gao-Rang.jpg",
            name: "Bọt biển Phê La - Trân Châu Gạo Rang",
            price: "25.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-Phe-Nau-scaled.jpg",
            name: "Bọt biển Phê La - Phê Nâu",
            price: "25.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-Xe-Van-scaled.jpg",
            name: "Bọt biển Phê La - Xe Van",
            price: "25.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/02/Tui-Tote-Happpy-Chill-Day-–-Dai-Tron-scaled.jpg",
            name: "Túi Tote Happy Chill Day - Đai Trơn",
            price: "148.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/02/Tui-Tote-Happpy-Chill-Day-–-Dai-Khuong-Nhac-scaled.jpg",
            name: "Túi Tote Happy Chill Day - Đai Khuông Nhạc",
            price: "148.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/01/DSC07207-scaled.jpg",
            name: "Cà Phê Phin Giấy - Phê Đặc Sản",
            price: "442.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/01/DSC07203-Edit-1-scaled.jpg",
            name: "Cà Phê Phin Giấy - Phê Nguyên Bản",
            price: "197.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2025/01/DSC07210-scaled.jpg",
            name: "Cà Phê Phin Giấy - Phê Truffle",
            price: "Liên hệ"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/DSC08409-Edit-scaled.jpg",
            name: "Hộp Quà Trà Sữa Tiện Lợi - Hộp 06 ly, 04 loại",
            price: "177.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/DSC03766-scaled.jpg",
            name: "Hộp Quà Đĩa Nhạc - Hộp 04 loại (03 Trà Hạt, 01 Cà Phê Phin)",
            price: "737.000₫"
          },
          {
            imgUrl: "",
            name: "Hộp Quà Phin Giấy - Hộp 02 loại Ô Long Sữa/ Ô Long Nhài",
            price: "590.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/Nguyen-Ban.jpg",
            name: "Phê Phin Nguyên Bản - Túi 200gr",
            price: "108.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/9.-Phe-Geisha-Tui-150gr-1.jpg",
            name: "Phê Geisha - Túi 150gr",
            price: "418.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/8.-Phe-Ethiopia-Tui-150gr-2.jpg",
            name: "Phê Ethiopia - Túi 150gr",
            price: "246.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/7.-Phe-Kenya-Tui-150gr-2.jpg",
            name: "Phê Kenya - Túi 150gr",
            price: "270.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/6.-Phe-Colombia-Tui-150gr-1.jpg",
            name: "Phê Colombia - Túi 150gr",
            price: "295.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2024/02/5.-O-Long-Mua-Xuan-Dac-San-Tui-150gr-3.jpg",
            name: "Ô Long Mùa Xuân Đặc Sản - Túi 150gr",
            price: "344.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/12/1.-Phin-Giay-O-Long-Nhai-Sua-scaled.jpg",
            name: "Ô LONG NHÀI SỮA PHIN GIẤY PHÊ LA",
            price: "374.000₫"
          },
          {
            imgUrl: "https://phela.vn/wp-content/uploads/2021/12/2.-Phin-Giay-O-Long-Sua-Phe-La-scaled.jpg",
            name: "Ô LONG SỮA PHIN GIẤY PHÊ LA",
            price: "374.000₫"
          }
        ]
      }
    ]
  },
  {
    name: "Katinat",
    items: [
      {
        title: "COMBO ĐẶC BIỆT",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m97nybg779mv20@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bơ Già Dừa Non (size L)",
            price: "69.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxxoksnozo91@resize_ss400x400!@crop_w400_h400_cT",
            name: "Iki Matcha Tàu Hủ",
            price: "69.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxk5v6wfusda@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bơ Già Dừa Non (size S)",
            price: "55.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfmtg2jb3yfe26@resize_ss400x400!@crop_w400_h400_cT",
            name: "MUA 1 TẶNG 1 - MUA CHÔM TẶNG BƠ (20/10)",
            price: "114.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfmt5wd6vtai57@resize_ss400x400!@crop_w400_h400_cT",
            name: "MUA 1 TẶNG 1 - MUA CHÔM TẶNG CHÔM (20/10)",
            price: "118.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfmtatcv3img5e@resize_ss400x400!@crop_w400_h400_cT",
            name: "MUA 1 TẶNG 1 - MUA CHÔM TẶNG MATCHA LATTE (20/10)",
            price: "118.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfjxdt6kbymh25@resize_ss400x400!@crop_w400_h400_cT",
            name: "MUA 1 TẶNG 1 - MUA CHÔM TẶNG CÓC (20/10)",
            price: "128.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfmtbnwf2olq88@resize_ss400x400!@crop_w400_h400_cT",
            name: "MUA 1 TẶNG 1 - MUA MATCHA ĐẬU HŨ TẶNG TS THANH HƯƠNG (20/10)",
            price: "134.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mg0h46v5t0ct18@resize_ss400x400!@crop_w400_h400_cT",
            name: "Combo Quạt Hoa Hồng 4 món (Tháng 10)",
            price: "182.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfy6mguj39xp0d@resize_ss400x400!@crop_w400_h400_cT",
            name: "M2T2: MUA 2 CHÔM TẶNG 2 BƠ",
            price: "228.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfy5y8elp2x923@resize_ss400x400!@crop_w400_h400_cT",
            name: "BỘ TỨ BEST-SELLERS: CHÔM BƠ MATCHA CAMELLIA",
            price: "248.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfjz643wtts867@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bộ Tam Best Seller (2 Chôm + 1 Bơ)",
            price: "187.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfneh3siha8eff@resize_ss400x400!@crop_w400_h400_cT",
            name: "Combo Hoa Trà Camellia",
            price: "160.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfjxy8dg6ioa9f@resize_ss400x400!@crop_w400_h400_cT",
            name: "Combo Quạt Hoa Hồng 20/10",
            price: "182.000đ"
          }
        ]
      },
      {
        title: "TRÀ SỮA",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxoh1xsvhqfe@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Sữa Chôm Chôm",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m97o0fxr9rpj76@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Oolong Nướng Sữa (SPF)",
            price: "42.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-mb3brdojjttt49@resize_ss400x400!@crop_w400_h400_cT",
            name: "Thanh Hương Camellia",
            price: "50.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-me9kkp63t4oz10@resize_ss400x400!@crop_w400_h400_cT",
            name: "Thanh Hương Camellia (Size L)",
            price: "65.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxpgdu3ngi5e@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Oolong Nướng Sữa",
            price: "42.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxqhkvo2um00@resize_ss400x400!@crop_w400_h400_cT",
            name: "OOLONG BA LÁ",
            price: "42.000đ"
          }
        ]
      },
      {
        title: "TRÀ TRÁI CÂY",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-mdcwmzp5ih7xfe@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Mít Miệt Vườn (size L)",
            price: "69.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-mbroi9dr7yxaee@resize_ss400x400!@crop_w400_h400_cT",
            name: "Cóc Cóc Cóc",
            price: "64.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxluu7oais92@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Vải (Size L)",
            price: "54.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxl8qg0rjib8@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trà Đào Hồng Đài",
            price: "64.000đ"
          }
        ]
      },
      {
        title: "MATCHA",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxxx02buy62a@resize_ss400x400!@crop_w400_h400_cT",
            name: "Iki Matcha Latte",
            price: "59.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxerr8yetjd0@resize_ss400x400!@crop_w400_h400_cT",
            name: "Sô-Cô-La KATINAT (Lạnh) (Socola Lạnh)",
            price: "54.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7r98o-lqyw3v0est5l0d@resize_ss400x400!@crop_w400_h400_cT",
            name: "Sô-Cô-La Katinat (Nóng - Size S) (Socola Nóng)",
            price: "44.000đ"
          }
        ]
      },
      {
        title: "CÀ PHÊ VIỆT NAM",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxhv7nuruq71@resize_ss400x400!@crop_w400_h400_cT",
            name: "Mê Dừa Non",
            price: "49.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxhbtu7ybm80@resize_ss400x400!@crop_w400_h400_cT",
            name: "Mê Xỉu (lạnh)",
            price: "39.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxfxodlze630@resize_ss400x400!@crop_w400_h400_cT",
            name: "Mê Sữa Đá",
            price: "39.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxgdxjtnk7a0@resize_ss400x400!@crop_w400_h400_cT",
            name: "Mê Đen Đá",
            price: "35.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxhoedtnyf31@resize_ss400x400!@crop_w400_h400_cT",
            name: "Mê Xỉu (Nóng)",
            price: "39.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxg7fxbjam1a@resize_ss400x400!@crop_w400_h400_cT",
            name: "Mê Sữa Đá (Nóng)",
            price: "39.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxgs88xv1q70@resize_ss400x400!@crop_w400_h400_cT",
            name: "Mê Đen Đá (Nóng)",
            price: "35.000đ"
          }
        ]
      },
      {
        title: "CÀ PHÊ ESPRESSO",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxfos6mjrbed@resize_ss400x400!@crop_w400_h400_cT",
            name: "Latte Nguyên Bản",
            price: "52.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxebfuu0xw23@resize_ss400x400!@crop_w400_h400_cT",
            name: "Americano",
            price: "34.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m9sbgmu7qplmce@resize_ss400x400!@crop_w400_h400_cT",
            name: "Espresso Bạc Xỉu (Lạnh)",
            price: "34.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxct2mfltwd1@resize_ss400x400!@crop_w400_h400_cT",
            name: "Espresso Sữa Đá (Lạnh)",
            price: "35.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxe25if9f25d@resize_ss400x400!@crop_w400_h400_cT",
            name: "Espresso Đen Đá",
            price: "32.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxdi3jrrlzdb@resize_ss400x400!@crop_w400_h400_cT",
            name: "Espresso Sữa Đá (Nóng)",
            price: "35.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m9sbebjnms046f@resize_ss400x400!@crop_w400_h400_cT",
            name: "Espresso Bạc Xỉu (Nóng)",
            price: "34.000đ"
          }
        ]
      },
      {
        title: "BÁNH TRÁNG",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfjw67s8qv4b11@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bánh Tráng Trộn Vị Trứng Muối",
            price: "19.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfjw4dpeu0i33f@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bánh Tráng Trộn Vị Muối Tỏi",
            price: "19.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfjw6u8mdma0b2@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bánh Tráng Trộn Muối Ghiền",
            price: "19.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfjw7yucy9e269@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bánh Tráng Nướng Vị Mắm Ruốc",
            price: "25.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfjw7ex8sdmw41@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bánh Tráng Nướng Vị Xốt Tôm",
            price: "25.000đ"
          }
        ]
      },
      {
        title: "PHỤ KIỆN & QUÀ TẶNG",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxw368z1pqa7@resize_ss400x400!@crop_w400_h400_cT",
            name: "Ly Ngàn Sao Màu Ngẫu Nhiên Hồng/Xanh 2 Lớp – 700ml",
            price: "159.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxwtf099c712@resize_ss400x400!@crop_w400_h400_cT",
            name: "Cà Phê Phin Mê Nguyên Bản",
            price: "115.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxx2tsixs233@resize_ss400x400!@crop_w400_h400_cT",
            name: "Túi Nhung Tăm Cổ Điển",
            price: "285.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxxbu5avlub7@resize_ss400x400!@crop_w400_h400_cT",
            name: "Túi Dã Ngoại Giữ Nhiệt",
            price: "185.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ras8-mdq0z2c9151hcb@resize_ss400x400!@crop_w400_h400_cT",
            name: "Túi Tote Matcha",
            price: "199.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxwcocr62v85@resize_ss400x400!@crop_w400_h400_cT",
            name: "Túi Phúng Phính",
            price: "265.000đ"
          }
        ]
      },
      {
        title: "TOPPING",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m9sbldpbpcoyb4@resize_ss400x400!@crop_w400_h400_cT",
            name: "Huyền Châu",
            price: "15.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m9sbkayiehs257@resize_ss400x400!@crop_w400_h400_cT",
            name: "Trân Châu Trắng",
            price: "10.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfktespolyx97a@resize_ss400x400!@crop_w400_h400_cT",
            name: "Thạch Hồng Đài",
            price: "12.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfktdda9qia1a2@resize_ss400x400!@crop_w400_h400_cT",
            name: "Kem Sữa Phô Mai",
            price: "15.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-820l4-mfktb4anpibx7c@resize_ss400x400!@crop_w400_h400_cT",
            name: "Tàu Hủ",
            price: "15.000đ"
          }
        ]
      },
      {
        title: "BÁNH NGỌT",
        items: [
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxvheyjgcnc4@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bánh Hạnh Nhân Lát",
            price: "69.000đ"
          },
          {
            imgUrl: "https://mms.img.susercontent.com/vn-11134517-7ra0g-m8fxv3huvcku32@resize_ss400x400!@crop_w400_h400_cT",
            name: "Bánh Hạnh Nhân Bơ",
            price: "69.000đ"
          }
        ]
      }
    ]
  }
];
