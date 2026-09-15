/* =====================================================
   ملف JavaScript - معرض النخبة للسيارات
   ===================================================== */

/* ========== 1) بيانات السيارات (مصفوفة + كائنات) ========== */
const cars = [
  {
    id: 1,
    brand: "lexus",
    name: "لكزس LX 600",
    price: 95000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Lexus_LX_600_%22EXECUTIVE%22_%283BA-VJA310W-GKULZ%29_front.jpg/960px-Lexus_LX_600_%22EXECUTIVE%22_%283BA-VJA310W-GKULZ%29_front.jpg",
    desc: "سيارة فاخرة SUV",
  },
  {
    id: 2,
    brand: "toyota",
    name: "تويوتا كامري",
    price: 32000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/2021_Toyota_Camry_2.5AT_white_front_view_in_Brunei.jpg/960px-2021_Toyota_Camry_2.5AT_white_front_view_in_Brunei.jpg",
    desc: "سيدان عائلية",
  },
  {
    id: 3,
    brand: "bmw",
    name: "BMW M5",
    price: 110000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/BMW_M5_%28F90%29_sedan.jpg/960px-BMW_M5_%28F90%29_sedan.jpg",
    desc: "رياضية فاخرة",
  },
  {
    id: 4,
    brand: "mercedes",
    name: "مرسيدس S-Class",
    price: 120000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Mercedes-Benz_S-Class_W223_black.jpg/960px-Mercedes-Benz_S-Class_W223_black.jpg",
    desc: "فخامة ألمانية",
  },
  {
    id: 5,
    brand: "audi",
    name: "أودي A8",
    price: 95000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Audi_A8_D5_%282021%29_1X7A6342.jpg/960px-Audi_A8_D5_%282021%29_1X7A6342.jpg",
    desc: "تكنولوجيا متقدمة",
  },
  {
    id: 6,
    brand: "lexus",
    name: "لكزس ES 350",
    price: 45000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/2022_Lexus_ES_350_%28GSZ10%29_1X7A5794.jpg/960px-2022_Lexus_ES_350_%28GSZ10%29_1X7A5794.jpg",
    desc: "أنيقة وعملية",
  },
  {
    id: 7,
    brand: "toyota",
    name: "تويوتا لاند كروزر",
    price: 85000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Toyota_Land_Cruiser_J300_3.3_ZX_2022_%285%29.jpg/960px-Toyota_Land_Cruiser_J300_3.3_ZX_2022_%285%29.jpg",
    desc: "دفع رباعي",
  },
  {
    id: 8,
    brand: "bmw",
    name: "BMW X7",
    price: 105000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/BMW_X7_G07_black_%281%29.jpg/960px-BMW_X7_G07_black_%281%29.jpg",
    desc: "SUV فاخرة",
  },
  {
    id: 9,
    brand: "mercedes",
    name: "مرسيدس G-Class",
    price: 140000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Mercedes-AMG_G_63_Genf_2018.jpg/960px-Mercedes-AMG_G_63_Genf_2018.jpg",
    desc: "أيقونة الفخامة",
  },
  {
    id: 10,
    brand: "audi",
    name: "أودي Q8",
    price: 75000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Audi_Q8_1X7A6004.jpg/960px-Audi_Q8_1X7A6004.jpg",
    desc: "كوبيه SUV",
  },
  {
    id: 11,
    brand: "lexus",
    name: "لكزس IS 350",
    price: 45000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/2023_Lexus_IS_350_F_Sport_in_Sonic_Iridium%2C_front_left.jpg/960px-2023_Lexus_IS_350_F_Sport_in_Sonic_Iridium%2C_front_left.jpg",
    desc: "سيدان رياضية أنيقة",
  },
  {
    id: 12,
    brand: "lexus",
    name: "لكزس RX 350",
    price: 60000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Lexus_RX_350_front.jpg/960px-Lexus_RX_350_front.jpg",
    desc: "SUV عائلية مريحة",
  },
  {
    id: 13,
    brand: "toyota",
    name: "تويوتا كورولا",
    price: 22000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/2020_Toyota_Corolla_Altis_petrol_version_front.jpg/960px-2020_Toyota_Corolla_Altis_petrol_version_front.jpg",
    desc: "السيدان الأكثر موثوقية",
  },
  {
    id: 14,
    brand: "toyota",
    name: "تويوتا هايلكس",
    price: 32000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Toyota_HiLux_GR_Sport_1X7A7281.jpg/960px-Toyota_HiLux_GR_Sport_1X7A7281.jpg",
    desc: "بيك أب قوي ومتين",
  },
  {
    id: 15,
    brand: "bmw",
    name: "BMW X5",
    price: 68000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/BMW_X5_xDrive35d_%28G05%29_front.jpg/960px-BMW_X5_xDrive35d_%28G05%29_front.jpg",
    desc: "رياضية متعددة الاستخدامات",
  },
  {
    id: 16,
    brand: "bmw",
    name: "BMW M4",
    price: 78000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/BMW_M4_Coupe_%28F82%29_front.JPG/960px-BMW_M4_Coupe_%28F82%29_front.JPG",
    desc: "كوبيه رياضي أسطوري",
  },
  {
    id: 17,
    brand: "mercedes",
    name: "مرسيدس E-Class",
    price: 62000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Mercedes-Benz_E_200_Edition_Exclusive_%28W214%29_front.jpg/960px-Mercedes-Benz_E_200_Edition_Exclusive_%28W214%29_front.jpg",
    desc: "أناقة تنفيذية",
  },
  {
    id: 18,
    brand: "mercedes",
    name: "مرسيدس GLE",
    price: 63000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/2018_Mercedes-Benz_GLE_350d_4MATIC_front.jpg/960px-2018_Mercedes-Benz_GLE_350d_4MATIC_front.jpg",
    desc: "فخامة عائلية",
  },
  {
    id: 19,
    brand: "audi",
    name: "أودي A4",
    price: 40000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/2023_Audi_A4_B9_Avant_Allroad_-_front_view.jpg/960px-2023_Audi_A4_B9_Avant_Allroad_-_front_view.jpg",
    desc: "تقنية وأداء متوازن",
  },
  {
    id: 20,
    brand: "audi",
    name: "أودي Q7",
    price: 60000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/3rd_gen_Audi_Q7_front_-_Autowizja.jpg/960px-3rd_gen_Audi_Q7_front_-_Autowizja.jpg",
    desc: "رحابة وفخامة",
  },
  {
    id: 21,
    brand: "ford",
    name: "فورد موستانغ GT500",
    price: 79000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/2021_Ford_Mustang_Shelby_GT500_%28S550%29_Front_%28Bahrain%29.jpg/960px-2021_Ford_Mustang_Shelby_GT500_%28S550%29_Front_%28Bahrain%29.jpg",
    desc: "أيقونة القوة الأمريكية",
  },
  {
    id: 22,
    brand: "ford",
    name: "فورد F-150",
    price: 45000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/2024_Ford_F-150_Lariat_front_view.jpg/960px-2024_Ford_F-150_Lariat_front_view.jpg",
    desc: "ملك البيك أب",
  },
  {
    id: 23,
    brand: "ford",
    name: "فورد إكسبلورر",
    price: 38000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Ford_Explorer_PHEV_%28front_view%29.jpg/960px-Ford_Explorer_PHEV_%28front_view%29.jpg",
    desc: "SUV عائلية واسعة",
  },
  {
    id: 24,
    brand: "ford",
    name: "فورد إكسبديشن",
    price: 55000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/2025_Ford_Expedition_Tremor%2C_front_NYIAS_2025.jpg/960px-2025_Ford_Expedition_Tremor%2C_front_NYIAS_2025.jpg",
    desc: "قوة عائلية ضخمة",
  },
  {
    id: 25,
    brand: "porsche",
    name: "بورش 911 كاريرا",
    price: 115000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Porsche_911_Carrera_Stratstone.jpg/960px-Porsche_911_Carrera_Stratstone.jpg",
    desc: "أسطورة الرياضية",
  },
  {
    id: 26,
    brand: "porsche",
    name: "بورش كايين",
    price: 75000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Porsche_Cayenne_%282023%E2%80%93%29_IMG_5392.jpg/960px-Porsche_Cayenne_%282023%E2%80%93%29_IMG_5392.jpg",
    desc: "أداء رياضي بروح الـSUV",
  },
  {
    id: 27,
    brand: "porsche",
    name: "بورش باناميرا",
    price: 90000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Porsche_971_Panamera_Turbo_1X7A6497.jpg/960px-Porsche_971_Panamera_Turbo_1X7A6497.jpg",
    desc: "جت فاخرة رياضية",
  },
  {
    id: 28,
    brand: "porsche",
    name: "بورش ماكان",
    price: 60000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Porsche_Macan_%28XAB%29_IMG_2425.jpg/960px-Porsche_Macan_%28XAB%29_IMG_2425.jpg",
    desc: "كومباكت رياضية",
  },
  {
    id: 29,
    brand: "hyundai",
    name: "هيونداي إلنترا",
    price: 21000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/2021_Hyundai_Elantra_Limited_in_Quartz_White%2C_front_right.jpg/960px-2021_Hyundai_Elantra_Limited_in_Quartz_White%2C_front_right.jpg",
    desc: "عملية وعصرية",
  },
  {
    id: 30,
    brand: "hyundai",
    name: "هيونداي توسان",
    price: 27000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Hyundai_Tucson_%28NX4%29_1X7A0424.jpg/960px-Hyundai_Tucson_%28NX4%29_1X7A0424.jpg",
    desc: "تصميم جريء",
  },
  {
    id: 31,
    brand: "hyundai",
    name: "هيونداي سوناتا",
    price: 25000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/2020_Hyundai_Sonata_SEL_%28Quartz_White%29%2C_front_right.jpg/960px-2020_Hyundai_Sonata_SEL_%28Quartz_White%29%2C_front_right.jpg",
    desc: "أناقة كورية",
  },
  {
    id: 32,
    brand: "hyundai",
    name: "هيونداي سانتا في",
    price: 33000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/2024_Hyundai_Santa_Fe_%28MX5%29_IMG_5295.jpg/960px-2024_Hyundai_Santa_Fe_%28MX5%29_IMG_5295.jpg",
    desc: "عائلية واسعة",
  },
  {
    id: 33,
    brand: "honda",
    name: "هوندا سيفيك",
    price: 24000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Honda_Civic_Hybrid_%282022%2C_Europe%29_IAA_2023_1X7A0545_%282%29.jpg/960px-Honda_Civic_Hybrid_%282022%2C_Europe%29_IAA_2023_1X7A0545_%282%29.jpg",
    desc: "رياضية شبابية",
  },
  {
    id: 34,
    brand: "honda",
    name: "هوندا أكورد",
    price: 28000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/2023_Honda_Accord_2.0_front.jpg/960px-2023_Honda_Accord_2.0_front.jpg",
    desc: "سيدان متكاملة",
  },
  {
    id: 35,
    brand: "honda",
    name: "هوندا CR-V",
    price: 30000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Honda_CR-V_Gen5_Front_27082022.jpg/960px-Honda_CR-V_Gen5_Front_27082022.jpg",
    desc: "موثوقية يابانية",
  },
  {
    id: 36,
    brand: "honda",
    name: "هوندا سيتي",
    price: 20000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/2010-2012_Honda_City_front.jpg/960px-2010-2012_Honda_City_front.jpg",
    desc: "كومباكت اقتصادية",
  },
  {
    id: 37,
    brand: "nissan",
    name: "نيسان باترول",
    price: 56000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Nissan_PATROL_%28Y62%29_front.JPG/960px-Nissan_PATROL_%28Y62%29_front.JPG",
    desc: "ملك الصحراء",
  },
  {
    id: 38,
    brand: "nissan",
    name: "نيسان التيما",
    price: 26000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/2024_Nissan_Altima_SR%2C_front_left%2C_05-05-2025.jpg/960px-2024_Nissan_Altima_SR%2C_front_left%2C_05-05-2025.jpg",
    desc: "سيدان أنيقة",
  },
  {
    id: 39,
    brand: "nissan",
    name: "نيسان سنترا",
    price: 21000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/2026_Nissan_Sentra_front_view.jpg/960px-2026_Nissan_Sentra_front_view.jpg",
    desc: "اقتصادية وعصرية",
  },
  {
    id: 40,
    brand: "nissan",
    name: "نيسان إكس-تريل",
    price: 29000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Nissan_X-Trail_%28T33%29_1X7A7179.jpg/960px-Nissan_X-Trail_%28T33%29_1X7A7179.jpg",
    desc: "عائلية متعددة الاستخدامات",
  },
  {
    id: 41,
    brand: "chevrolet",
    name: "شيفروليه تاهو",
    price: 58000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/2015_Chevrolet_Tahoe_LT_5.3L_front_3.24.19.jpg/960px-2015_Chevrolet_Tahoe_LT_5.3L_front_3.24.19.jpg",
    desc: "عملاق الطرق",
  },
  {
    id: 42,
    brand: "chevrolet",
    name: "شيفروليه كامارو",
    price: 27000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/2019_Chevrolet_Camaro_SS_front_NYIAS_2019.jpg/960px-2019_Chevrolet_Camaro_SS_front_NYIAS_2019.jpg",
    desc: "عضلات أمريكية",
  },
  {
    id: 43,
    brand: "chevrolet",
    name: "شيفروليه سيلفرادو",
    price: 40000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/2022_Chevrolet_Silverado_LTZ_front_view.jpg/960px-2022_Chevrolet_Silverado_LTZ_front_view.jpg",
    desc: "قوة الشغل",
  },
  {
    id: 44,
    brand: "chevrolet",
    name: "شيفروليه ماليبو",
    price: 24000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Chevrolet_Malibu_front.jpg/960px-Chevrolet_Malibu_front.jpg",
    desc: "سيدان متزنة",
  },
  {
    id: 45,
    brand: "mitsubishi",
    name: "ميتسوبيشي باجيرو سبورت",
    price: 35000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Mitsubishi_Pajero_Sport_%283rd_generation%29_1X7A0409.jpg/960px-Mitsubishi_Pajero_Sport_%283rd_generation%29_1X7A0409.jpg",
    desc: "أسطورة الطرق الوعرة",
  },
  {
    id: 46,
    brand: "mitsubishi",
    name: "ميتسوبيشي لانسر",
    price: 20000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Mitsubishi_Lancer_Sport_Sedan_%28front_quarter%29.jpg/960px-Mitsubishi_Lancer_Sport_Sedan_%28front_quarter%29.jpg",
    desc: "رياضية اقتصادية",
  },
  {
    id: 47,
    brand: "mitsubishi",
    name: "ميتسوبيشي أوتلاندر",
    price: 27000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Mitsubishi_Outlander_PHEV%2C_Auto_2025%2C_Zurich_%2820251029-P1074527%29.jpg/960px-Mitsubishi_Outlander_PHEV%2C_Auto_2025%2C_Zurich_%2820251029-P1074527%29.jpg",
    desc: "عائلية عملية",
  },
  {
    id: 48,
    brand: "mitsubishi",
    name: "ميتسوبيشي إكليبس كروس",
    price: 25000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Mitsubishi_Eclipse_Cross_PHEV_1X7A6477.jpg/960px-Mitsubishi_Eclipse_Cross_PHEV_1X7A6477.jpg",
    desc: "تصميم كوبيه جريء",
  },
  {
    id: 49,
    brand: "cadillac",
    name: "كاديلاك إسكاليد IQ",
    price: 80000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/2026_Cadillac_Escalade_IQ_1000E4%2C_Front_left%2C_03-01-2026.jpg/960px-2026_Cadillac_Escalade_IQ_1000E4%2C_Front_left%2C_03-01-2026.jpg",
    desc: "قمة الفخامة الأمريكية",
  },
  {
    id: 50,
    brand: "cadillac",
    name: "كاديلاك CT5",
    price: 45000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/2025_Cadillac_CT5.jpg/960px-2025_Cadillac_CT5.jpg",
    desc: "سيدان رياضية فاخرة",
  },
  {
    id: 51,
    brand: "cadillac",
    name: "كاديلاك XT5",
    price: 45000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/2019_Cadillac_XT5_Luxury%2C_front_left%2C_09-10-2023.jpg/960px-2019_Cadillac_XT5_Luxury%2C_front_left%2C_09-10-2023.jpg",
    desc: "SUV فاخرة",
  },
  {
    id: 52,
    brand: "cadillac",
    name: "كاديلاك XT4",
    price: 38000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/2024_Cadillac_XT4_front_view.jpg/960px-2024_Cadillac_XT4_front_view.jpg",
    desc: "كومباكت فاخرة",
  },
  {
    id: 53,
    brand: "gmc",
    name: "GMC يوكون XL",
    price: 60000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/2021_GMC_Yukon_XL_front_view.jpg/960px-2021_GMC_Yukon_XL_front_view.jpg",
    desc: "ضخامة وفخامة",
  },
  {
    id: 54,
    brand: "gmc",
    name: "GMC سييرا AT4",
    price: 40000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/2021_GMC_Sierra_1500_AT4%2C_Front_Left%2C_03-26-2021.jpg/960px-2021_GMC_Sierra_1500_AT4%2C_Front_Left%2C_03-26-2021.jpg",
    desc: "بيك أب فاخر",
  },
  {
    id: 55,
    brand: "gmc",
    name: "GMC أكاديا",
    price: 35000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/2024_GMC_Acadia_Denali_front_view.jpg/960px-2024_GMC_Acadia_Denali_front_view.jpg",
    desc: "عائلية 7 مقاعد",
  },
  {
    id: 56,
    brand: "gmc",
    name: "GMC تيرين",
    price: 30000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/2025_GMC_Terrain_front_view.jpg/960px-2025_GMC_Terrain_front_view.jpg",
    desc: "كروس أوفر متينة",
  },
  {
    id: 57,
    brand: "subaru",
    name: "سوبارو أوتباك",
    price: 29000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Subaru_Outback_%28BT%29_DSC_8814.jpg/960px-Subaru_Outback_%28BT%29_DSC_8814.jpg",
    desc: "دفع رباعي دائم",
  },
  {
    id: 58,
    brand: "subaru",
    name: "سوبارو فورستر",
    price: 28000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Subaru_Forester_%28SL%29_e-BOXER_DSC_8811.jpg/960px-Subaru_Forester_%28SL%29_e-BOXER_DSC_8811.jpg",
    desc: "SUV مغامرات",
  },
  {
    id: 59,
    brand: "subaru",
    name: "سوبارو WRX",
    price: 31000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/2022_Subaru_WRX%2C_front_right%2C_06-19-2023.jpg/960px-2022_Subaru_WRX%2C_front_right%2C_06-19-2023.jpg",
    desc: "رياضية رالي",
  },
  {
    id: 60,
    brand: "subaru",
    name: "سوبارو ليجاسي",
    price: 25000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/2020_Subaru_Legacy%2C_front_10.1.20.jpg/960px-2020_Subaru_Legacy%2C_front_10.1.20.jpg",
    desc: "سيدان متكاملة",
  },
];

/* ========== 2) عرض السيارات ========== */
function displayCars(carList) {
  /* الحصول على شبكة السيارات */
  const grid = document.getElementById("carsGrid");
  /* حماية: الخروج إذا لم توجد الشبكة */
  if (!grid) return;

  let html = "";

  /* حلقة forEach للمرور على كل سيارة */
  carList.forEach(function (car, index) {
    /* بناء بطاقة HTML مع تأخير متدرج للأنيميشن */
    html += `
            <div class="car-card card-anim" style="animation-delay:${(index * 0.08).toFixed(2)}s">
                <img src="${car.image}" alt="${car.name}" width="600" height="400" loading="lazy" decoding="async">
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p class="car-brand">${car.desc}</p>
                    <p class="price">$${car.price.toLocaleString()}</p>
                    <button class="btn-primary" onclick="addToCart(${car.id})">🛒 احجز الآن</button>
                    <button class="filter-btn" onclick="openModal(${car.id})">👁️ التفاصيل</button>
                </div>
            </div>
        `;
  });

  /* عرض البطاقات أو رسالة عدم وجود نتائج */
  if (carList.length === 0) {
    grid.innerHTML =
      "<p style='text-align:center;grid-column:1/-1;'>لا توجد سيارات</p>";
  } else {
    grid.innerHTML = html;
  }
}

/* عرض جميع السيارات عند التحميل */
displayCars(cars);

/* ========== 3) البحث ========== */
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchCars(keyword) {
  const lower = keyword.toLowerCase();
  /* تصفية السيارات حسب الاسم أو الوصف */
  const results = cars.filter(function (car) {
    return (
      car.name.toLowerCase().includes(lower) ||
      car.desc.toLowerCase().includes(lower)
    );
  });
  displayCars(results);
}

/* حماية: تشغيل البحث فقط إذا وجد */
if (searchInput && searchBtn) {
  searchInput.addEventListener("input", function () {
    searchCars(searchInput.value);
  });
  searchBtn.addEventListener("click", function () {
    searchCars(searchInput.value);
  });
}

/* ========== 4) الفلترة حسب العلامة ========== */
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    /* إزالة التنشيط من جميع الأزرار */
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    /* تنشيط الزر الحالي */
    btn.classList.add("active");

    const brand = btn.dataset.brand;

    if (brand === "all") {
      displayCars(cars);
    } else {
      /* تصفية حسب العلامة */
      const filtered = cars.filter(function (car) {
        return car.brand === brand;
      });
      displayCars(filtered);
    }
  });
});

/* ========== 5) السلايدر ========== */
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");

let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[currentSlide].classList.add("active");
}

function startAutoSlide() {
  slideInterval = setInterval(function () {
    showSlide(currentSlide + 1);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

/* حماية: تشغيل السلايدر فقط إذا وجد */
if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", function () {
    stopAutoSlide();
    showSlide(currentSlide + 1);
    startAutoSlide();
  });

  prevBtn.addEventListener("click", function () {
    stopAutoSlide();
    showSlide(currentSlide - 1);
    startAutoSlide();
  });

  startAutoSlide();
}

/* ========== 6) الوضع الليلي ========== */
const darkModeBtn = document.getElementById("darkModeBtn");
const savedDarkMode = localStorage.getItem("darkMode");
let isDarkMode = savedDarkMode === "true";

/* تطبيق/إزالة الوضع الليلي وتحديث الأيقونة والتخزين */
function applyDarkMode(enabled) {
  isDarkMode = enabled;
  document.body.classList.toggle("dark-mode", enabled);
  localStorage.setItem("darkMode", enabled ? "true" : "false");

  if (darkModeBtn) {
    darkModeBtn.textContent = enabled ? "☀️" : "🌙";
    darkModeBtn.setAttribute(
      "aria-label",
      enabled ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي",
    );
  }
}

/* التطبيق الأولي عند تحميل الصفحة (مع حماية إذا لم يوجد الزر) */
applyDarkMode(isDarkMode);
/* إزالة الوميض المؤقت المطبق من head */
document.documentElement.classList.remove("dark-mode-pending");

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", function () {
    applyDarkMode(!isDarkMode);
  });
}

/* ========== 7) شريط التمرير: زر الأعلى + الزجاجية + شريط التقدم ========== */
const backToTopBtn = document.getElementById("backToTop");
const navbarEl = document.querySelector(".navbar");

/* شريط تقدم القراءة الذهبي (يُنشأ تلقائياً) */
let scrollProgress = document.getElementById("scrollProgress");
if (!scrollProgress) {
  scrollProgress = document.createElement("div");
  scrollProgress.id = "scrollProgress";
  document.body.appendChild(scrollProgress);
}

function onScroll() {
  const y = window.scrollY;

  if (backToTopBtn) {
    backToTopBtn.classList.toggle("show", y > 300);
  }

  /* تفعيل الزجاجية على شريط التنقل عند النزول */
  if (navbarEl) {
    navbarEl.classList.toggle("scrolled", y > 30);
  }

  /* تحديث شريط تقدم القراءة */
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = max > 0 ? (y / max) * 100 + "%" : "0%";
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ========== 8) السلة ========== */
let cart = [];

function addToCart(carId) {
  const car = cars.find(function (c) {
    return c.id === carId;
  });

  const existing = cart.find(function (item) {
    return item.id === carId;
  });

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: car.id,
      name: car.name,
      price: car.price,
      quantity: 1,
    });
  }

  updateCartCount();
  saveCart();
  showNotification("✅ تمت الحجز: " + car.name);
}

function updateCartCount() {
  const countEl = document.getElementById("cartCount");
  if (!countEl) return;

  const total = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);

  countEl.textContent = total;

  /* نبضة الشارة وهزّة زر السلة عند الإضافة */
  if (total > 0) {
    countEl.classList.remove("pop");
    void countEl.offsetWidth; /* إعادة تشغيل الأنيميشن */
    countEl.classList.add("pop");

    const cartBtnEl = document.getElementById("cartBtn");
    if (cartBtnEl) {
      cartBtnEl.classList.remove("wiggle");
      void cartBtnEl.offsetWidth;
      cartBtnEl.classList.add("wiggle");
    }
  }
}

function calculateTotal() {
  return cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
}

const cartBtn = document.getElementById("cartBtn");

if (cartBtn) {
  cartBtn.addEventListener("click", openCartModal);
}

/* ========== 9) حفظ السلة ========== */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem("cart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch (e) {
      cart = [];
    }
  }
  updateCartCount();
}

loadCart();

/* ========== 10) الإشعارات ========== */
function showNotification(message, type) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";

  if (type === "error") {
    toast.classList.add("error");
  }

  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(function () {
    toast.classList.add("show");
  }, 10);

  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () {
      toast.remove();
    }, 300);
  }, 3000);
}

/* ========== 11) المؤقت التنازلي ========== */
const savedEndDate = localStorage.getItem("offerEndDate");
let offerEndDate;

if (!savedEndDate) {
  offerEndDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  localStorage.setItem("offerEndDate", offerEndDate.getTime());
} else {
  offerEndDate = new Date(Number(savedEndDate));
}

function updateCountdown() {
  const now = new Date();
  const diff = offerEndDate - now;

  if (diff <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  setCountdownValue("days", String(days).padStart(2, "0"));
  setCountdownValue("hours", String(hours).padStart(2, "0"));
  setCountdownValue("minutes", String(minutes).padStart(2, "0"));
  setCountdownValue("seconds", String(seconds).padStart(2, "0"));
}

/* تحديث قيمة المؤقت مع نبضة مرئية عند تغيّر الرقم */
function setCountdownValue(id, value) {
  const el = document.getElementById(id);
  if (!el || el.textContent === value) return;

  el.textContent = value;
  el.classList.remove("tick");
  void el.offsetWidth; /* إعادة تشغيل الأنيميشن */
  el.classList.add("tick");
}

let countdownInterval;

if (document.getElementById("days")) {
  countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

/* ========== 12) النافذة المنبثقة ========== */
const modal = document.getElementById("carModal");
const closeModal = document.querySelector(".close-modal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalBrand = document.getElementById("modalBrand");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalAddToCart = document.getElementById("modalAddToCart");

let currentModalId = null;

function openModal(carId) {
  const car = cars.find(function (c) {
    return c.id === carId;
  });

  if (!car) return;

  currentModalId = carId;
  modalImage.src = car.image;
  modalName.textContent = car.name;
  modalBrand.textContent = car.desc;
  modalDesc.textContent = car.desc;
  modalPrice.textContent = "$" + car.price.toLocaleString();

  modal.classList.add("show");
}

function closeMyModal() {
  modal.classList.remove("show");
  currentModalId = null;
}

if (closeModal) {
  closeModal.addEventListener("click", closeMyModal);
}

if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeMyModal();
    }
  });
}

if (modalAddToCart) {
  modalAddToCart.addEventListener("click", function () {
    if (currentModalId !== null) {
      addToCart(currentModalId);
      closeMyModal();
    }
  });
}

/* ========== 13) نافذة السلة ========== */
function createCartModal() {
  const cartModal = document.createElement("div");
  cartModal.id = "cartModal";
  cartModal.className = "modal";

  cartModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" id="closeCartModal">&times;</span>
            <h2> حجزك</h2>
            <div id="cartItems" class="cart-items"></div>
            <div class="cart-total">الإجمالي: <span id="cartTotal">$0</span></div>
            <div class="cart-actions">
                <button id="checkoutBtn" class="btn-primary">✅ إتمام الحجز</button>
                <button id="clearCartBtn" class="filter-btn" style="border-color:var(--primary);color:var(--primary);">🗑️ إلغاء</button>
            </div>
        </div>
    `;

  document.body.appendChild(cartModal);
  return cartModal;
}

const cartModal = createCartModal();

function openCartModal() {
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const clearBtn = document.getElementById("clearCartBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (cart.length === 0) {
    container.innerHTML = "<p> سلتك فارغة</p>";
    clearBtn.style.display = "none";
    checkoutBtn.style.display = "none";
  } else {
    let html = "";
    cart.forEach(function (item) {
      html += `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>× ${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toLocaleString()}</span>
                </div>
            `;
    });
    container.innerHTML = html;
    clearBtn.style.display = "inline-block";
    checkoutBtn.style.display = "inline-block";
  }

  totalEl.textContent = "$" + calculateTotal().toLocaleString();
  cartModal.classList.add("show");
}

document
  .getElementById("closeCartModal")
  .addEventListener("click", function () {
    cartModal.classList.remove("show");
  });

cartModal.addEventListener("click", function (e) {
  if (e.target === cartModal) {
    cartModal.classList.remove("show");
  }
});

document.getElementById("clearCartBtn").addEventListener("click", function () {
  cart = [];
  saveCart();
  updateCartCount();
  showNotification("🗑️ تم إلغاء الحجز");
  openCartModal();
});

document.getElementById("checkoutBtn").addEventListener("click", function () {
  if (cart.length === 0) {
    showNotification("🚗 أضف سيارات أولاً", "error");
    return;
  }

  const total = calculateTotal();
  localStorage.setItem(
    "lastOrder",
    JSON.stringify({
      total: total,
      date: new Date().toLocaleString("ar-YE"),
    }),
  );

  cart = [];
  saveCart();
  updateCartCount();
  cartModal.classList.remove("show");
  showNotification("✅ تم الحجز بنجاح! الإجمالي: $" + total.toLocaleString());
});
/* ========== 14) صفحة من نحن: الساعة + عرض المزيد ========== */
const liveTime = document.getElementById("liveTime");
const liveDate = document.getElementById("liveDate");

/* حماية: تشغيل الساعة فقط إذا وُجدت */
if (liveTime && liveDate) {
  function updateClock() {
    const now = new Date();
    liveTime.textContent = now.toLocaleTimeString("ar-YE");
    liveDate.textContent = now.toLocaleDateString("ar-YE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* زر عرض المزيد */
const showMoreBtn = document.getElementById("showMoreBtn");
const moreContent = document.getElementById("moreContent");

if (showMoreBtn && moreContent) {
  showMoreBtn.addEventListener("click", function () {
    moreContent.classList.toggle("show");

    if (moreContent.classList.contains("show")) {
      showMoreBtn.textContent = "🙈 إخفاء";
    } else {
      showMoreBtn.textContent = "👁️ عرض المزيد";
    }
  });
}

/* تأثير الماوس على بطاقات الإحصائيات */
const statCards = document.querySelectorAll(".stat-card");

statCards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    card.style.backgroundColor = "var(--primary)";
    card.style.color = "white";
  });

  card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "";
    card.style.color = "";
  });
});

/* ========== 15) صفحة اتصل بنا: التحقق من النموذج ========== */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  function showError(el, msg) {
    el.textContent = msg;
  }

  function clearError(el) {
    el.textContent = "";
  }

  function validateName() {
    const value = nameInput.value.trim();
    const errorEl = document.getElementById("nameError");
    if (value === "") {
      showError(errorEl, "⚠️ الاسم مطلوب");
      return false;
    }
    if (value.length < 3) {
      showError(errorEl, "⚠️ الاسم 3 أحرف على الأقل");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    const errorEl = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
      showError(errorEl, "⚠️ البريد مطلوب");
      return false;
    }
    if (!emailRegex.test(value)) {
      showError(errorEl, "⚠️ البريد غير صحيح");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    const errorEl = document.getElementById("phoneError");
    const phoneRegex = /^[0-9]{7,15}$/;
    if (value === "") {
      showError(errorEl, "⚠️ الهاتف مطلوب");
      return false;
    }
    if (!phoneRegex.test(value)) {
      showError(errorEl, "⚠️ أدخل رقم هاتف صحيح");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  function validateMessage() {
    const value = messageInput.value.trim();
    const errorEl = document.getElementById("messageError");
    if (value === "") {
      showError(errorEl, "⚠️ الرسالة مطلوبة");
      return false;
    }
    if (value.length < 10) {
      showError(errorEl, "⚠️ الرسالة 10 أحرف على الأقل");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      showNotification("✅ تم إرسال رسالتك بنجاح!");
      contactForm.reset();
    } else {
      showNotification("❌ يرجى تصحيح الحقول", "error");
    }
  });
}

/* ========== 16) صفحة السيارات: الفرز ========== */
let currentCars = cars;

const sortSelect = document.getElementById("sortSelect");

if (sortSelect) {
  sortSelect.addEventListener("change", function () {
    const sorted = currentCars.slice();
    const value = sortSelect.value;

    if (value === "price-asc") {
      sorted.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (value === "price-desc") {
      sorted.sort(function (a, b) {
        return b.price - a.price;
      });
    } else if (value === "name") {
      sorted.sort(function (a, b) {
        return a.name.localeCompare(b.name, "ar");
      });
    }

    displayCars(sorted);
  });
}

/* تحديث currentCars عند الفلترة والبحث */
const originalDisplayCars = displayCars;
displayCars = function (carList) {
  currentCars = carList;
  originalDisplayCars(carList);
};

/* ========== 17) عرض اسم المستخدم في الشريط ========== */
const savedUserName = localStorage.getItem("userName");

if (savedUserName) {
  const navActions = document.querySelector(".nav-actions");
  if (navActions) {
    const userChip = document.createElement("span");
    userChip.className = "user-chip";
    userChip.textContent = "👋 مرحباً، " + savedUserName;
    navActions.appendChild(userChip);
  }

  const loginLink = document.querySelector('.nav-links a[href="login.php"]');
  if (loginLink) {
    loginLink.textContent = "خروج 🚪";
    loginLink.href = "php/logout.php";
  }

  const welcomeBack = document.getElementById("welcomeBack");
  if (welcomeBack) {
    welcomeBack.textContent = "مرحباً بعودتك، " + savedUserName + "! 👋";
  }

  const nowParams = new URLSearchParams(window.location.search);
  if (nowParams.get("login") === "1") {
    showNotification("✅ تم تسجيل الدخول! مرحباً " + savedUserName);
  }
}

/* =====================================================
   18) الحركة: شاشة التحميل + الظهور عند التمرير
   ===================================================== */

/* ---------- شاشة التحميل السينمائية (تُنشأ تلقائياً) ---------- */
(function initPreloader() {
  const pre = document.createElement("div");
  pre.id = "preloader";
  pre.innerHTML =
    '<div class="preloader-logo">🏎️</div>' +
    '<div class="preloader-text">معرض النخبة</div>' +
    '<div class="preloader-bar"><span></span></div>';
  document.body.prepend(pre);

  let hidden = false;
  function hidePreloader() {
    if (hidden) return;
    hidden = true;
    pre.classList.add("done");
    setTimeout(function () {
      pre.remove();
    }, 800);
  }

  /* الإخفاء عند اكتمال التحميل أو بعد 2.5 ثانية كحد أقصى */
  window.addEventListener("load", hidePreloader);
  setTimeout(hidePreloader, 2500);
})();

/* ---------- الظهور التدريجي عند التمرير (Scroll Reveal) ---------- */
(function initReveal() {
  const targets = document.querySelectorAll(
    ".section-title, .search-box, .filter-buttons, .countdown .time-box, " +
      ".stat-card, .contact-card, .contact-form, .login-form, " +
      ".more-content, .footer-col, .copyright, .page-header h1, " +
      ".page-header p, .about-section, .clock-section, .contact-info-section, " +
      ".errors-box, .sort-bar, .welcome-back",
  );

  /* تأخير متدرج للعناصر المتجاورة داخل نفس الحاوية */
  targets.forEach(function (el) {
    const revealedSiblings = Array.prototype.filter.call(
      el.parentElement.children,
      function (child) {
        return child.classList && child.classList.contains("reveal-init");
      },
    );
    el.style.setProperty("--reveal-delay", revealedSiblings.length * 0.09 + "s");
    el.classList.add("reveal-init");
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();

/* =====================================================
   19) كاش المتصفح للصور (Service Worker)
   يخزّن الصور بعد أول زيارة ويفتحها فوراً لاحقاً
   ===================================================== */
(function initImageCache() {
  /* حماية: يتطلب متصفحاً حديثاً وسياقاً آمناً (localhost) */
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol !== "http:" && location.protocol !== "https:") return;

  /* إرسال قائمة الصور للكاش: السيارات + السلايدر */
  function precacheImages(registration) {
    const sw = registration.active;
    if (!sw) return;

    const urls = cars.map(function (c) {
      return c.image;
    });
    document.querySelectorAll(".slide img").forEach(function (img) {
      const src = img.currentSrc || img.src;
      if (src) urls.push(src);
    });

    sw.postMessage({ type: "PRECACHE_IMAGES", urls: urls });
  }

  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("sw.js")
      .then(function (registration) {
        /* تجهيز الصور في الخلفية بعد اكتمال تحميل الصفحة */
        if (registration.active) {
          setTimeout(function () {
            precacheImages(registration);
          }, 2000);
        } else {
          navigator.serviceWorker.addEventListener(
            "controllerchange",
            function () {
              setTimeout(function () {
                precacheImages(registration);
              }, 2000);
            },
          );
        }

        /* إشعار عند اكتمال التجهيز */
        navigator.serviceWorker.addEventListener("message", function (event) {
          if (
            event.data &&
            event.data.type === "PRECACHE_DONE" &&
            event.data.added > 0
          ) {
            showNotification(
              "⚡ تم تجهيز " + event.data.added + " صورة للعرض السريع!",
            );
          }
        });
      })
      .catch(function () {
        /* لا يدعم الخدمة — الموقع يعمل طبيعياً */
      });
  });
})();
