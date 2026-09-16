/* =====================================================
   ملف JavaScript - معرض النخبة للسيارات
   ===================================================== */

/* ========== 1) بيانات السيارات (مصفوفة + كائنات) ==========
   مصفوفة "cars" هي قلب المعرض: كل عنصر داخلها = سيارة واحدة.
   الحقول داخل كل كائن:
   - id    : رقم فريد يميز السيارة (يُستخدم في البحث والسلة والنافذة)
   - brand : اسم الشركة بحروف لاتينية صغيرة (مطابق لأزرار الفلترة)
   - name  : اسم السيارة الظاهر للزائر بالعربية
   - price : السعر بالدولار (يُعرض تلقائياً بفواصل الآلاف)
   - image : رابط الصورة الحقيقية من ويكيميديا كومنز
   - desc  : وصف قصير يظهر تحت اسم السيارة
   ========================================================== */
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
  /* --- لكزس: IS 350 و RX 350 --- */
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
  /* --- تويوتا: كورولا و هايلكس --- */
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
  /* --- BMW: X5 و M4 --- */
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
  /* --- مرسيدس: E-Class و GLE --- */
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
  /* --- أودي: A4 و Q7 --- */
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
  /* --- فورد (4 موديلات): موستانغ، F-150، إكسبلورر، إكسبديشن --- */
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
  /* --- بورش (4 موديلات): 911، كايين، باناميرا، ماكان --- */
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
  /* --- هيونداي (4 موديلات): إلنترا، توسان، سوناتا، سانتا في --- */
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
  /* --- هوندا (4 موديلات): سيفيك، أكورد، CR-V، سيتي --- */
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
  /* --- نيسان (4 موديلات): باترول، التيما، سنترا، إكس-تريل --- */
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
  /* --- شفرولية (4 موديلات): تاهو، كامارو، سيلفرادو، ماليبو --- */
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
  /* --- ميتسوبيشي (4 موديلات): باجيرو، لانسر، أوتلاندر، إكليبس --- */
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
  /* --- كاديلاك (4 موديلات): إسكاليد، CT5، XT5، XT4 --- */
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
  /* --- جي ام سي (4 موديلات): يوكون، سييرا، أكاديا، تيرين --- */
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
  /* --- سوبارو (4 موديلات): أوتباك، فورستر، WRX، ليجاسي --- */
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

  /* متغير لتجميع بطاقات HTML قبل حقنها دفعة واحدة */
  let html = "";

  /* حلقة forEach للمرور على كل سيارة */
  carList.forEach(function (car, index) {
    /* بناء بطاقة HTML مع تأخير متدرج للأنيميشن:
       card-anim = أنيميشن الدخول، animation-delay = الترتيب × 0.08 ث
       الصورة: lazy = تُحمّل عند الاقتراب منها فقط، أبعاد صريحة تمنع القفز
       الاسم والوصف والسعر (toLocaleString تضيف فواصل الآلاف)
       زرّان: "احجز الآن" يستدعي addToCart و"التفاصيل" يفتح النافذة */
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

/* ========== 3) البحث ==========
   بحث فوري: كل حرف تكتبه يعيد بناء الشبكة بالنتائج المطابقة */
const searchInput = document.getElementById("searchInput"); /* حقل الكتابة */
const searchBtn = document.getElementById("searchBtn"); /* زر "بحث" */

/* دالة البحث: تستقبل الكلمة وتعرض السيارات المطابقة فقط */
function searchCars(keyword) {
  /* تحويل الكلمة لأحرف صغيرة لتوحيد المقارنة */
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
  /* البحث الفوري مع كل حرف يُكتب */
  searchInput.addEventListener("input", function () {
    searchCars(searchInput.value);
  });
  /* البحث عند الضغط على زر "بحث" */
  searchBtn.addEventListener("click", function () {
    searchCars(searchInput.value);
  });
}

/* ========== 4) الفلترة حسب العلامة ==========
   كل زر يحمل data-brand؛ عند الضغط تُعرض سيارات تلك الشركة فقط */
const filterBtns = document.querySelectorAll(".filter-btn"); /* جميع الأزرار */

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    /* إزالة التنشيط من جميع الأزرار */
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    /* تنشيط الزر الحالي */
    btn.classList.add("active");

    /* قراءة اسم الشركة من خاصية data-brand للزر المضغوط */
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

/* ========== 5) السلايدر ==========
   عرض الشرائح تلقائياً كل 5 ثوانٍ مع أزرار تنقل يدوية */
const slides = document.querySelectorAll(".slide"); /* كل الشرائح */
const nextBtn = document.getElementById("nextSlide"); /* زر التالي */
const prevBtn = document.getElementById("prevSlide"); /* زر السابق */

let currentSlide = 0; /* رقم الشريحة المعروضة حالياً */
let slideInterval; /* مؤقّت التبديل التلقائي */

/* عرض شريحة محددة مع الالتفاف الدائري (بعد الأخير يعود للأول) */
function showSlide(index) {
  /* تجاوز الحدود: حل بين الشرائح ذهاباً وإياباً */
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  /* إخفاء كل الشرائح ثم إظهار الشريحة المطلوبة فقط */
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[currentSlide].classList.add("active");
}

/* بدء التبديل التلقائي: شريحة جديدة كل 5 ثوانٍ */
function startAutoSlide() {
  slideInterval = setInterval(function () {
    showSlide(currentSlide + 1);
  }, 5000);
}

/* إيقاف التبديل التلقائي (قبل النقر اليدوي) */
function stopAutoSlide() {
  clearInterval(slideInterval);
}

/* حماية: تشغيل السلايدر فقط إذا وُجد في الصفحة */
if (nextBtn && prevBtn) {
  /* زر التالي: أوقف التلقائي، انتقل، ثم أعده */
  nextBtn.addEventListener("click", function () {
    stopAutoSlide();
    showSlide(currentSlide + 1);
    startAutoSlide();
  });

  /* زر السابق: نفس السلوك بالاتجاه المعاكس */
  prevBtn.addEventListener("click", function () {
    stopAutoSlide();
    showSlide(currentSlide - 1);
    startAutoSlide();
  });

  /* بدء التشغيل التلقائي عند دخول الصفحة */
  startAutoSlide();
}

/* ========== 6) الوضع الليلي ==========
   يُحفظ الاختيار في المتصفح ويُطبَّق فوراً في كل زيارة */
const darkModeBtn = document.getElementById("darkModeBtn"); /* زر التبديل */
const savedDarkMode = localStorage.getItem("darkMode"); /* الاختيار المحفوظ */
let isDarkMode = savedDarkMode === "true"; /* الحالة الحالية */

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
const backToTopBtn = document.getElementById("backToTop"); /* زر العودة للأعلى */
const navbarEl = document.querySelector(".navbar"); /* شريط التنقل (للزجاجية) */

/* شريط تقدم القراءة الذهبي (يُنشأ تلقائياً) */
let scrollProgress = document.getElementById("scrollProgress");
if (!scrollProgress) {
  scrollProgress = document.createElement("div");
  scrollProgress.id = "scrollProgress";
  document.body.appendChild(scrollProgress);
}

/* دالة تُنفَّذ مع كل حركة تمرير (مُحسّنة بوضع passive) */
function onScroll() {
  const y = window.scrollY; /* مقدار التمرير الحالي بالبكسل */

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

/* ربط الدالة بحدث التمرير (passive: لا توقف التمرير = أداء أفضل) */
window.addEventListener("scroll", onScroll, { passive: true });
/* تنفيذ أول مرة لضبط الحالة عند تحميل الصفحة */
onScroll();

/* عند الضغط: عودة لأعلى الصفحة بحركة سلسة */
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ========== 8) السلة ==========
   كل عنصر بالسلة: { id, name, price, quantity } */
let cart = []; /* السلة تبدأ فارغة */

/* إضافة سيارة للسلة حسب رقمها (يُستدعى من زر "احجز الآن") */
function addToCart(carId) {
  /* البحث عن السيارة في مصفوفة cars لجلب بياناتها الكاملة */
  const car = cars.find(function (c) {
    return c.id === carId;
  });

  /* هل السيارة موجودة في السلة مسبقاً؟ */
  const existing = cart.find(function (item) {
    return item.id === carId;
  });

  /* موجود؟ ارفع الكمية، غير موجود؟ أضفه كعنصر جديد */
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

  /* تحديث الشارة + الحفظ في المتصفح + إشعار نجاح */
  updateCartCount();
  saveCart();
  showNotification("✅ تمت الحجز: " + car.name);
}

/* تحديث رقم الشارة الصغيرة على أيقونة السلة */
function updateCartCount() {
  const countEl = document.getElementById("cartCount");
  if (!countEl) return;

  /* جمع كميات كل العناصر = العدد الكلي */
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

/* حساب المجموع الكلي: (السعر × الكمية) لكل عنصر ثم الجمع */
function calculateTotal() {
  return cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
}

/* عند الضغط على أيقونة السلة: افتح نافذة السلة */
const cartBtn = document.getElementById("cartBtn");

if (cartBtn) {
  cartBtn.addEventListener("click", openCartModal);
}

/* ========== 9) حفظ السلة في ذاكرة المتصفح (localStorage) ========== */

/* تحويل السلة لنص JSON وتخزينها (تبقى حتى بعد إغلاق المتصفح) */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* استرجاع السلة المحفوظة عند فتح الموقع من جديد */
function loadCart() {
  const saved = localStorage.getItem("cart");
  if (saved) {
    try {
      /* تحويل النص مرة أخرى لمصفوفة كائنات */
      cart = JSON.parse(saved);
    } catch (e) {
      /* بيانات تالفة؟ ابدأ بسلة فارغة */
      cart = [];
    }
  }
  updateCartCount();
}

/* استرجاع السلة فور تحميل السكربت */
loadCart();

/* ========== 10) الإشعارات (Toast) ==========
   رسالة صغيرة تظهر أسفل الشاشة وتختفي تلقائياً */
function showNotification(message, type) {
  /* جلب حاوية الإشعارات الموجودة في الصفحة */
  const container = document.getElementById("toastContainer");
  if (!container) return;

  /* إنشاء عنصر الإشعار الجديد */
  const toast = document.createElement("div");
  toast.className = "toast";

  /* النوع "خطأ"؟ أضف صنف التلوين الأحمر */
  if (type === "error") {
    toast.classList.add("error");
  }

  /* إضافة النص وإدخال الإشعار داخل الحاوية */
  toast.textContent = message;
  container.appendChild(toast);

  /* بعد 10 ميلي ثانية: أظهر الإشعار (حركة الدخول) */
  setTimeout(function () {
    toast.classList.add("show");
  }, 10);

  /* بعد 3 ثوانٍ: أخفه ثم احذفه من الصفحة كلياً */
  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () {
      toast.remove();
    }, 300);
  }, 3000);
}

/* ========== 11) المؤقت التنازلي ==========
   عرض ينتهي بعد 3 أيام من أول زيارة (يُحفظ في المتصفح) */
const savedEndDate = localStorage.getItem("offerEndDate"); /* النهاية المحفوظة */
let offerEndDate;

/* أول زيارة؟ أنشئ موعد نهاية بعد 3 أيام وخزّنه */
if (!savedEndDate) {
  offerEndDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  localStorage.setItem("offerEndDate", offerEndDate.getTime());
} else {
  /* زيارات لاحقة؟ استرجع الموعد نفسه */
  offerEndDate = new Date(Number(savedEndDate));
}

/* حساب المتبقي وتحديث الأرقام الأربعة (يوم/ساعة/دقيقة/ثانية) */
function updateCountdown() {
  const now = new Date();
  const diff = offerEndDate - now; /* المتبقي بالميلي ثانية */

  /* انتهى العرض؟ أوقف المؤقت نهائياً */
  if (diff <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  /* تحويل المتبقي لأيام وساعات ودقائق وثوانٍ */
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

let countdownInterval; /* مرجع المؤقت لإيقافه لاحقاً */

/* شغّل المؤقت فقط في الصفحات التي تحوي العدّاد */
if (document.getElementById("days")) {
  countdownInterval = setInterval(updateCountdown, 1000); /* كل ثانية */
  updateCountdown(); /* تنفيذ فوري دون انتظار الثانية الأولى */
}

/* ========== 12) النافذة المنبثقة (تفاصيل السيارة) ========== */
const modal = document.getElementById("carModal"); /* الخلفية المعتمة */
const closeModal = document.querySelector(".close-modal"); /* زر × */
const modalImage = document.getElementById("modalImage"); /* صورة السيارة */
const modalName = document.getElementById("modalName"); /* الاسم */
const modalBrand = document.getElementById("modalBrand"); /* الوصف */
const modalDesc = document.getElementById("modalDesc"); /* الوصف المفصل */
const modalPrice = document.getElementById("modalPrice"); /* السعر */
const modalAddToCart = document.getElementById("modalAddToCart"); /* زر الحجز */

let currentModalId = null; /* السيارة المعروضة حالياً في النافذة */

/* فتح نافذة التفاصيل وتعبئتها ببيانات السيارة المختارة */
function openModal(carId) {
  /* البحث عن السيارة حسب الرقم */
  const car = cars.find(function (c) {
    return c.id === carId;
  });

  if (!car) return;

  /* تعبئة كل حقول النافذة ببيانات السيارة */
  currentModalId = carId;
  modalImage.src = car.image;
  modalName.textContent = car.name;
  modalBrand.textContent = car.desc;
  modalDesc.textContent = car.desc;
  modalPrice.textContent = "$" + car.price.toLocaleString();

  /* إظهار النافذة (الصنف show يفعّل الأنيميشن) */
  modal.classList.add("show");
}

/* إغلاق النافذة وإفراغ السيارة الحالية */
function closeMyModal() {
  modal.classList.remove("show");
  currentModalId = null;
}

/* إغلاق بزر × */
if (closeModal) {
  closeModal.addEventListener("click", closeMyModal);
}

/* إغلاق بالنقر على الخلفية المعتمة (خارج المحتوى) */
if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeMyModal();
    }
  });
}

/* زر الحجز داخل النافذة: أضف السيارة ثم أغلق */
if (modalAddToCart) {
  modalAddToCart.addEventListener("click", function () {
    if (currentModalId !== null) {
      addToCart(currentModalId);
      closeMyModal();
    }
  });
}

/* ========== 13) نافذة السلة (تُبنى برمجياً في كل الصفحات) ========== */

/* إنشاء نافذة السلة وإضافتها للصفحة مرة واحدة */
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

/* إنشاء النافذة فور تحميل السكربت */
const cartModal = createCartModal();

/* فتح نافذة السلة وبناء محتواها حسب الحالة */
function openCartModal() {
  const container = document.getElementById("cartItems"); /* حاوية العناصر */
  const totalEl = document.getElementById("cartTotal");
  const clearBtn = document.getElementById("clearCartBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  /* السلة فارغة؟ اعرض رسالة وأخفِ أزرار التنفيذ */
  if (cart.length === 0) {
    container.innerHTML = "<p> سلتك فارغة</p>";
    clearBtn.style.display = "none";
    checkoutBtn.style.display = "none";
  } else {
    /* بناء سطر لكل عنصر: الاسم × الكمية = السعر */
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

  /* تحديث الإجمالي وإظهار النافذة */
  totalEl.textContent = "$" + calculateTotal().toLocaleString();
  cartModal.classList.add("show");
}

/* إغلاق نافذة السلة بزر × */
document
  .getElementById("closeCartModal")
  .addEventListener("click", function () {
    cartModal.classList.remove("show");
  });

/* إغلاق بالنقر على الخلفية المعتمة */
cartModal.addEventListener("click", function (e) {
  if (e.target === cartModal) {
    cartModal.classList.remove("show");
  }
});

/* زر إلغاء: تفريغ السلة كلياً وتحديث كل شيء */
document.getElementById("clearCartBtn").addEventListener("click", function () {
  cart = [];
  saveCart();
  updateCartCount();
  showNotification("🗑️ تم إلغاء الحجز");
  openCartModal();
});

/* زر إتمام الحجز: احفظ الطلب ثم أفرغ السلة */
document.getElementById("checkoutBtn").addEventListener("click", function () {
  /* حماية: لا يمكن إتمام سلة فارغة */
  if (cart.length === 0) {
    showNotification("🚗 أضف سيارات أولاً", "error");
    return;
  }

  /* حفظ ملخص الطلب (المجموع + التاريخ) في المتصفح */
  const total = calculateTotal();
  localStorage.setItem(
    "lastOrder",
    JSON.stringify({
      total: total,
      date: new Date().toLocaleString("ar-YE"),
    }),
  );

  /* تفريغ السلة وإغلاق النافذة مع إشعار نجاح */
  cart = [];
  saveCart();
  updateCartCount();
  cartModal.classList.remove("show");
  showNotification("✅ تم الحجز بنجاح! الإجمالي: $" + total.toLocaleString());
});
/* ========== 14) صفحة من نحن: الساعة الحية + عرض المزيد ========== */
const liveTime = document.getElementById("liveTime"); /* عنصر الوقت */
const liveDate = document.getElementById("liveDate"); /* عنصر التاريخ */

/* حماية: تشغيل الساعة فقط إذا وُجدت في الصفحة */
if (liveTime && liveDate) {
  /* تحديث الوقت والتاريخ بالتنسيق العربي */
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

  updateClock(); /* تنفيذ فوري عند الفتح */
  setInterval(updateClock, 1000); /* ثم التحديث كل ثانية */
}

/* زر عرض المزيد: يظهر/يخفي الفقرات الإضافية */
const showMoreBtn = document.getElementById("showMoreBtn");
const moreContent = document.getElementById("moreContent");

if (showMoreBtn && moreContent) {
  showMoreBtn.addEventListener("click", function () {
    /* تبديل الإظهار والإخفاء */
    moreContent.classList.toggle("show");

    /* تغيير نص الزر حسب الحالة الجديدة */
    if (moreContent.classList.contains("show")) {
      showMoreBtn.textContent = "🙈 إخفاء";
    } else {
      showMoreBtn.textContent = "👁️ عرض المزيد";
    }
  });
}

/* تأثير الماوس على بطاقات الإحصائيات
   انتقل إلى CSS (.stat-card:hover في style.css)
   لأن الـ JS القديم كان يخفي الرقم: خلفية حمراء + رقم أحمر */

/* ========== 15) صفحة اتصل بنا: التحقق من النموذج ========== */
/* جلب نموذج التواصل — إن لم يوجد فالصفحة الحالية ليست contact.html */
/* الحصول على نموذج التواصل (null في الصفحات الأخرى) */
/* كل الكود التالي يعمل فقط في صفحة اتصل بنا */
const contactForm = document.getElementById("contactForm");

/* جلب حقول الإدخال الأربعة */
/* يعمل هذا القسم فقط في صفحة "اتصل بنا" (حيث يوجد النموذج) */
/* عناصر الحقول الأربعة في نموذج التواصل */
if (contactForm) {
  /* جلب حقول النموذج الأربعة: الاسم، البريد، الهاتف، الرسالة */
  const nameInput = document.getElementById("name");
/* دالة مساعدة: كتابة رسالة الخطأ أسفل الحقل */
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
/* دالة مساعدة: كتابة نص الخطأ أسفل الحقل */
  const messageInput = document.getElementById("message");

  /* دالة مساعدة: كتابة رسالة الخطأ داخل العنصر */
  function showError(el, msg) {
/* دالة مساعدة: تفريغ رسالة الخطأ (عند صحة الحقل) */
/* التحقق من حقل الاسم: مطلوب و3 أحرف على الأقل */
    el.textContent = msg;
  }

  /* دالة مساعدة: تفريغ رسالة الخطأ عند صحة القيمة */
/* دالة التحقق من الاسم: مطلوب و3 أحرف على الأقل */
  function clearError(el) {
    el.textContent = "";
  }

  /* التحقق من الاسم: مطلوب و3 أحرف على الأقل */
  function validateName() {
    const value = nameInput.value.trim(); /* trim لإزالة الفراغات الزائدة */
    const errorEl = document.getElementById("nameError");
    /* حقل فارغ؟ */
    if (value === "") {
/* التحقق من البريد الإلكتروني: مطلوب ومطابق لنمط البريد */
      showError(errorEl, "⚠️ الاسم مطلوب");
      return false;
    }
    /* أقل من 3 أحرف؟ */
    if (value.length < 3) {
/* دالة التحقق من البريد: مطلوب ومطابق لصيغة البريد الإلكتروني */
      showError(errorEl, "⚠️ الاسم 3 أحرف على الأقل");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  /* التحقق من البريد: مطلوب ومطابق لنمط البريد الصحيح */
  function validateEmail() {
    const value = emailInput.value.trim();
/* التحقق من الهاتف: مطلوب وأرقام فقط بين 7 و15 خانة */
    const errorEl = document.getElementById("emailError");
    /* تعبير نمطي: نص + @ + نطاق + . + امتداد */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /* حقل فارغ؟ */
    if (value === "") {
      showError(errorEl, "⚠️ البريد مطلوب");
/* دالة التحقق من الهاتف: أرقام فقط بين 7 و15 خانة */
      return false;
    }
    /* صيغة البريد غير صحيحة؟ */
    if (!emailRegex.test(value)) {
      showError(errorEl, "⚠️ البريد غير صحيح");
      return false;
    }
    clearError(errorEl);
    return true;
/* التحقق من الرسالة: مطلوبة و10 أحرف على الأقل */
  }

  /* التحقق من الهاتف: مطلوب وأرقام فقط من 7 إلى 15 رقماً */
  function validatePhone() {
    const value = phoneInput.value.trim();
    const errorEl = document.getElementById("phoneError");
    const phoneRegex = /^[0-9]{7,15}$/; /* أرقام فقط بهذا الطول */
/* دالة التحقق من الرسالة: مطلوبة و10 أحرف على الأقل */
    /* حقل فارغ؟ */
    if (value === "") {
      showError(errorEl, "⚠️ الهاتف مطلوب");
      return false;
    }
    /* صيغة الرقم غير صحيحة؟ */
    if (!phoneRegex.test(value)) {
/* عند الضغط على زر الإرسال */
      showError(errorEl, "⚠️ أدخل رقم هاتف صحيح");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  /* التحقق من نص الرسالة: مطلوبة و10 أحرف على الأقل */
/* دالة معالج الإرسال: تُنفّذ عند الضغط على زر "إرسال" */
  function validateMessage() {
    const value = messageInput.value.trim();
    const errorEl = document.getElementById("messageError");
    /* حقل فارغ؟ */
    if (value === "") {
      showError(errorEl, "⚠️ الرسالة مطلوبة");
      return false;
    }
    /* أقل من 10 أحرف؟ */
    if (value.length < 10) {
      showError(errorEl, "⚠️ الرسالة 10 أحرف على الأقل");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  /* عند إرسال النموذج: تحقق من كل الحقول ثم اعرض النتيجة */
  contactForm.addEventListener("submit", function (event) {
    /* منع السلوك الافتراضي (إعادة تحميل الصفحة) */
    event.preventDefault();

    /* تشغيل التحققات الأربعة جميعها لتظهر كل الأخطاء معاً */
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    /* كل الحقول صحيحة: إشعار نجاح + تفريغ النموذج */
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      showNotification("✅ تم إرسال رسالتك بنجاح!");
      contactForm.reset();
    } else {
      /* يوجد خطأ: إشعار خطأ بلون نبيذي */
      showNotification("❌ يرجى تصحيح الحقول", "error");
    }
  });
}

/* ========== 16) صفحة السيارات: الفرز ==========
   يرتب القائمة المعروضة حالياً (بعد البحث أو الفلترة) */
let currentCars = cars; /* القائمة الحالية المعروضة */

const sortSelect = document.getElementById("sortSelect"); /* قائمة الفرز */

if (sortSelect) {
  sortSelect.addEventListener("change", function () {
    /* نسخة من القائمة حتى لا نعدّل الأصل */
    const sorted = currentCars.slice();
    const value = sortSelect.value; /* نوع الفرز المختار */

    /* الفرز حسب السعر: من الأرخص للأغلى */
    if (value === "price-asc") {
      sorted.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (value === "price-desc") {
      /* الفرز حسب السعر: من الأغلى للأرخص */
      sorted.sort(function (a, b) {
        return b.price - a.price;
      });
    } else if (value === "name") {
      /* الفرز أبجدياً حسب الاسم العربي */
      sorted.sort(function (a, b) {
        return a.name.localeCompare(b.name, "ar");
      });
    }

    /* إعادة عرض القائمة بعد الترتيب */
    displayCars(sorted);
  });
}

/* حفظ نسخة من الدالة الأصلية قبل تزيينها */
const originalDisplayCars = displayCars;

/* تغليف displayCars: كل عرض جديد يحدّث currentCars
   ليفرز هذا القسم ما يظهر فعلاً على الشاشة */
displayCars = function (carList) {
  /* حفظ آخر قائمة معروضة لتعمل السلة والنافذة والفرز عليها */
  currentCars = carList;
  originalDisplayCars(carList);
};

/* ========== 17) عرض اسم المستخدم في الشريط ========== */
/* قراءة اسم المستخدم المحفوظ في localStorage بعد تسجيل الدخول */
const savedUserName = localStorage.getItem("userName");

/* إذا كان المستخدم مسجلاً دخوله: نضيف العناصر المناسبة */
if (savedUserName) {
  /* إضافة شريحة (chip) باسم المستخدم داخل أزرار الشريط */
  const navActions = document.querySelector(".nav-actions");
  if (navActions) {
    /* إنشاء شريحة (chip) تحمل اسم المستخدم وإضافتها للشريط */
    const userChip = document.createElement("span");
    userChip.className = "user-chip";
    userChip.textContent = "👋 مرحباً، " + savedUserName;
    navActions.appendChild(userChip);
  }

  /* تحويل رابط "تسجيل الدخول" إلى "خروج" بعد تسجيل الدخول */
  const loginLink = document.querySelector('.nav-links a[href="login.php"]');
  if (loginLink) {
    loginLink.textContent = "خروج 🚪";
    /* تغيير المسار إلى سكربت الخروج حتى ينهي الجلسة */
    loginLink.href = "php/logout.php";
  }

  /* في صفحة تسجيل الدخول: إظهار رسالة الترحيب بعودة المستخدم */
  const welcomeBack = document.getElementById("welcomeBack");
  if (welcomeBack) {
    welcomeBack.textContent = "مرحباً بعودتك، " + savedUserName + "! 👋";
  }

  /* قراءة معامل login من الرابط لعرض إشعار الترحيب بعد الدخول */
  const nowParams = new URLSearchParams(window.location.search);
  /* إن كان الرابط يحتوي ?login=1 (قادم من تسجيل الدخول): إشعار ترحيب */
  if (nowParams.get("login") === "1") {
    showNotification("✅ تم تسجيل الدخول! مرحباً " + savedUserName);
  }
}

/* =====================================================
   18) الحركة: شاشة التحميل + الظهور عند التمرير
   ===================================================== */

/* ---------- شاشة التحميل السينمائية (تُنشأ تلقائياً) ---------- */
(function initPreloader() {
  /* إنشاء عنصر شاشة التحميل (شعار + اسم + شريط) وإضافته أول الصفحة */
  const pre = document.createElement("div");
  pre.id = "preloader";
  pre.innerHTML =
    '<div class="preloader-logo">🏎️</div>' +
    '<div class="preloader-text">معرض النخبة</div>' +
    '<div class="preloader-bar"><span></span></div>';
  document.body.prepend(pre);

  /* علم يمنع تنفيذ الإخفاء أكثر من مرة واحدة */
  let hidden = false;
  /* دالة إخفاء شاشة التحميل ثم حذفها نهائياً من الصفحة */
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
    /* الحصول على نسخة الـ Service Worker النشطة */
    const sw = registration.active;
    if (!sw) return;

    /* جمع روابط صور السيارات (60 صورة) من مصفوفة cars */
    const urls = cars.map(function (c) {
      return c.image;
    });
    /* إضافة روابط صور السلايدر الثلاث */
    document.querySelectorAll(".slide img").forEach(function (img) {
      const src = img.currentSrc || img.src;
      if (src) urls.push(src);
    });

    /* إرسال القائمة إلى الـ Service Worker ليخزّنها في الكاش */
    sw.postMessage({ type: "PRECACHE_IMAGES", urls: urls });
  }

  /* التسجيل بعد اكتمال تحميل الصفحة (حتى لا يعطّل عرض الموقع) */
  window.addEventListener("load", function () {
    /* تسجيل ملف الـ Service Worker الموجود في جذر المشروع */
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
