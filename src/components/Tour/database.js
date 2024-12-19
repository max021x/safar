const tourdetails = [
  {
    id: 1,
    detail: {
      city: 'تهران',
      img: 'http://localhost/images/list_cities/tehran.jpg',
      fee: '500,000 تومان',
      days: '3',
      places: 'برج میلاد, مجموعه سعدآباد, پارک جمشیدیه, موزه ملی ایران',
      date: '2024-11-30',
      information: 'رفت: پرواز شماره 123 از فرودگاه امام خمینی, برگشت: پرواز شماره 124 ب  ه فرودگاه مهرآباد',
      tourCode: 'T001',   
      hotel: 'هتل استقلال'
    }
  },
  {
    id: 2,
    detail: {
      city: 'اصفهان',
      img: 'http://localhost/images/list_cities/esfahan.jpg',
      fee: '450,000 تومان',
      days: '4',
      places: 'میدان نقش جهان, پل خواجو, سی و سه پل, کاخ چهلستون',
      date: '2024-11-30',
      information: 'رفت: قطار سریع‌السیر شماره 456 از ایستگاه راه آهن تهران, برگشت: قطار سریع‌السیر شماره 457 به ایستگاه راه آهن اصفهان',
      tourCode: 'T002',
      hotel: 'هتل عباسی'
    }
  },
  {
    id: 3,
    detail: {
      city: 'شیراز',
      img: 'http://localhost/images/list_cities/shiraz.webp',
      fee: '400,000 تومان',
      days: '3',
      places: 'آرامگاه حافظ, آرامگاه سعدی, باغ ارم, تخت جمشید',
      date: '2024-11-30',
      information: 'رفت: پرواز شماره 789 از فرودگاه مهرآباد, برگشت: پرواز شماره 790 به فرودگاه شیراز',
      tourCode: 'T003',
      hotel: 'هتل بزرگ شیراز'
    }
  },
  {
    id: 4,
    detail: {
      city: 'مشهد',
      img: 'http://localhost/images/list_cities/mashhad.jpg',
      fee: '550,000 تومان',
      days: '5',
      places: 'حرم امام رضا (ع), بازار رضا, پارک کوهسنگی, آرامگاه فردوسی',
      date: '2024-11-30',
      information: 'رفت: پرواز شماره 101 از فرودگاه امام خمینی, برگشت: پرواز شماره 102 به فرودگاه مشهد',
      tourCode: 'T004',
      hotel: 'هتل درویشی'
    }
  },
  {
    id: 5,
    detail: {
      city: 'تبریز',
      img: 'http://localhost/images/list_cities/tabriz.jpg',
      fee: '480,000 تومان',
      days: '4',
      places: 'بازار تبریز, پارک ائل‌گلی, مسجد کبود, کلیسای سنت استپانوس',
      date: '2024-11-30',
      information: 'رفت: اتوبوس VIP شماره 555 از ترمینال آزادی, برگشت: اتوبوس VIP شماره 556 به ترمینال تبریز',
      tourCode: 'T005',
      hotel: 'هتل شهریار'
    }
  },
  {
    id: 6,
    detail: {
      city: 'یزد',
      img: 'http://localhost/images/list_cities/yazd.jpg',
      fee: '420,000 تومان',
      days: '3',
      places: 'باغ دولت‌آباد, مسجد جامع یزد, برج خاموشان, آتشکده یزد',
      date: '2024-11-30',
      information: 'رفت: قطار شماره 202 از ایستگاه راه آهن تهران, برگشت: قطار شماره 203 به ایستگاه راه آهن یزد',
      tourCode: 'T006',
      hotel: 'هتل صفائیه'
    }
  },
  {
    id: 7,
    detail: {
      city: 'کیش',
      img: 'http://localhost/images/list_cities/kish.webp',
      fee: '600,000 تومان',
      days: '4',
      places: 'ساحل مرجان, شهر حریره, کشتی یونانی, پارک دلفین‌ها',
      date: '2024-11-30',
      information: 'رفت: پرواز شماره 333 از فرودگاه مهرآباد, برگشت: پرواز شماره 334 به فرودگاه کیش',
      tourCode: 'T007',
      hotel: 'هتل داریوش'
    }
  },
  {
    id: 8,
    detail: {
      city: 'قم',
      img: 'http://localhost/images/list_cities/qom.webp',
      fee: '350,000 تومان',
      days: '2',
      places: 'حرم حضرت معصومه (س), مسجد جمکران, بازار بزرگ قم, کاروانسرای دیرگچین',
      date: '2024-11-30',
      information: 'رفت: اتوبوس VIP شماره 111 از ترمینال جنوب, برگشت: اتوبوس VIP شماره 112 به ترمینال قم',
      tourCode: 'T008',
      hotel: 'هتل کریمه'
    }
  },
  {
    id: 9,
    detail: {
      city: 'کاشان',
      img: 'http://localhost/images/list_cities/kashan.jpg',
      fee: '400,000 تومان',
      days: '3',
      places: 'باغ فین, بازار کاشان, حمام سلطان امیر احمد, خانه بروجردی‌ها',
      date: '2024-11-30',
      information: 'رفت: قطار شماره 404 از ایستگاه راه آهن تهران, برگشت: قطار شماره 405 به ایستگاه راه آهن کاشان',
      tourCode: 'T009',
      hotel: 'هتل امیرکبیر'
    }
  },
  {
    id: 10,
    detail: {
      city: 'همدان',
      img: 'http://localhost/images/list_cities/hamedan.jpg',
      fee: '380,000 تومان',
      days: '3',
      places: 'آرامگاه بوعلی سینا, غار علیصدر, مجموعه هگمتانه, گنجنامه',
      date: '2024-11-30',
      information: 'رفت: اتوبوس VIP شماره 777 از ترمینال غرب, برگشت: اتوبوس VIP شماره 778 به ترمینال همدان',
      tourCode: 'T010',
      hotel: 'هتل باباطاهر'
    }
  },
  {
    id: 11,
    detail: {
      city: 'کرمان',
      img: 'http://localhost/images/list_cities/kerman.jpg',
      fee: '420,000 تومان',
      days: '4',
      places: 'باغ شاهزاده ماهان, ارگ بم, مجموعه گنجعلی‌خان, باغ شازده',
      date: '2024-11-30',
      information: 'رفت: پرواز شماره 555 از فرودگاه مهرآباد, برگشت: پرواز شماره 556 به فرودگاه کرمان',
      tourCode: 'T011',
      hotel: 'هتل پارس'
    }
  }
];
