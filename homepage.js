const provinces = [
  { fa: "آذربایجان شرقی", en: "East Azerbaijan" },
  { fa: "آذربایجان غربی", en: "West Azerbaijan" },
  { fa: "اردبیل", en: "Ardabil" },
  { fa: "اصفهان", en: "Isfahan" },
  { fa: "البرز", en: "Alborz" },
  { fa: "ایلام", en: "Ilam" },
  { fa: "بوشهر", en: "Bushehr" },
  { fa: "تهران", en: "Tehran" },
  { fa: "چهارمحال و بختیاری", en: "Chaharmahal and Bakhtiari" },
  { fa: "خراسان جنوبی", en: "South Khorasan" },
  { fa: "خراسان رضوی", en: "Razavi Khorasan" },
  { fa: "خراسان شمالی", en: "North Khorasan" },
  { fa: "خوزستان", en: "Khuzestan" },
  { fa: "زنجان", en: "Zanjan" },
  { fa: "سمنان", en: "Semnan" },
  { fa: "سیستان و بلوچستان", en: "Sistan and Baluchestan" },
  { fa: "فارس", en: "Fars" },
  { fa: "قزوین", en: "Qazvin" },
  { fa: "قم", en: "Qom" },
  { fa: "کردستان", en: "Kurdistan" },
  { fa: "کرمان", en: "Kerman" },
  { fa: "کرمانشاه", en: "Kermanshah" },
  { fa: "کهگیلویه و بویراحمد", en: "Kohgiluyeh and Boyer-Ahmad" },
  { fa: "گلستان", en: "Golestan" },
  { fa: "گیلان", en: "Gilan" },
  { fa: "لرستان", en: "Lorestan" },
  { fa: "مازندران", en: "Mazandaran" },
  { fa: "مرکزی", en: "Markazi" },
  { fa: "هرمزگان", en: "Hormozgan" },
  { fa: "همدان", en: "Hamedan" },
  { fa: "یزد", en: "Yazd" }
];

const cities = {
  "آذربایجان شرقی": [
    { fa: "تبریز", en: "Tabriz" }, { fa: "مراغه", en: "Maragheh" }, { fa: "مرند", en: "Marand" }, { fa: "اهر", en: "Ahar" }, { fa: "شبستر", en: "Shabestar" }, { fa: "میانه", en: "Mianeh" }, { fa: "بناب", en: "Bonab" }, { fa: "هشترود", en: "Hashtrud" }, { fa: "سراب", en: "Sarab" }, { fa: "ملکان", en: "Malekan" }, { fa: "چاراویماق", en: "Charuymaq" }, { fa: "جلفا", en: "Jolfa" }, { fa: "ورزقان", en: "Varzaqan" }, { fa: "کلیبر", en: "Kaleybar" }, { fa: "خدا آفرین", en: "Khoda Afarin" }, { fa: "اسکو", en: "Osku" }, { fa: "بستان‌آباد", en: "Bostanabad" }
  ],
  "آذربایجان غربی": [
    { fa: "ارومیه", en: "Urmia" }, { fa: "خوی", en: "Khoy" }, { fa: "بوکان", en: "Bukan" }, { fa: "مهاباد", en: "Mahabad" }, { fa: "میاندوآب", en: "Miandoab" }, { fa: "سلماس", en: "Salmas" }, { fa: "نقده", en: "Naqadeh" }, { fa: "پیرانشهر", en: "Piranshahr" }, { fa: "اشنویه", en: "Oshnavieh" }, { fa: "تکاب", en: "Takab" }, { fa: "سردشت", en: "Sardasht" }, { fa: "شاهین‌دژ", en: "Shahin Dezh" }, { fa: "چالدران", en: "Chaldoran" }, { fa: "چایپاره", en: "Chaypareh" }
  ],
  "اردبیل": [
    { fa: "اردبیل", en: "Ardabil" }, { fa: "مشگین‌شهر", en: "Meshgin Shahr" }, { fa: "پارس‌آباد", en: "Parsabad" }, { fa: "خلخال", en: "Khalkhal" }, { fa: "نمین", en: "Namin" }, { fa: "نیر", en: "Nir" }, { fa: "بیله‌سوار", en: "Bileh Savar" }, { fa: "کوثر", en: "Kosar" }, { fa: "گرمی", en: "Germi" }
  ],
  "اصفهان": [
    { fa: "اصفهان", en: "Isfahan" }, { fa: "کاشان", en: "Kashan" }, { fa: "خمینی‌شهر", en: "Khomeyni Shahr" }, { fa: "نجف‌آباد", en: "Najafabad" }, { fa: "فلاورجان", en: "Falavarjan" }, { fa: "لنجان", en: "Lenjan" }, { fa: "شاهین‌شهر", en: "Shahin Shahr" }, { fa: "گلپایگان", en: "Golpayegan" }, { fa: "خوانسار", en: "Khansar" }, { fa: "نطنز", en: "Natanz" }, { fa: "آران و بیدگل", en: "Aran va Bidgol" }, { fa: "خور و بیابانک", en: "Khur va Biabanak" }, { fa: "سمیرم", en: "Semirom" }, { fa: "چادگان", en: "Chadegan" }, { fa: "بویین‌میاندشت", en: "Buin va Miandasht" }, { fa: "برخوار", en: "Borkhar" }
  ],
  "البرز": [
    { fa: "کرج", en: "Karaj" }, { fa: "فردیس", en: "Fardis" }, { fa: "نظرآباد", en: "Nazarabad" }, { fa: "اشتهارد", en: "Eshtehard" }, { fa: "طالقان", en: "Taleqan" }, { fa: "چهارباغ", en: "Chaharbagh" }
  ],
  "ایلام": [
    { fa: "ایلام", en: "Ilam" }, { fa: "دهلران", en: "Dehloran" }, { fa: "دره‌شهر", en: "Darreh Shahr" }, { fa: "آبدانان", en: "Abdanan" }, { fa: "ایوان", en: "Eyvan" }, { fa: "چرداول", en: "Chardavol" }, { fa: "ملکشاهی", en: "Malekshahi" }, { fa: "مهران", en: "Mehran" }, { fa: "سیروان", en: "Sirvan" }
  ],
  "بوشهر": [
    { fa: "بوشهر", en: "Bushehr" }, { fa: "برازجان", en: "Borazjan" }, { fa: "گناوه", en: "Genaveh" }, { fa: "کنگان", en: "Kangan" }, { fa: "جم", en: "Jam" }, { fa: "عسلویه", en: "Asaluyeh" }, { fa: "خورموج", en: "Khormuj" }, { fa: "دشتی", en: "Dashti" }, { fa: "دیر", en: "Dayyer" }, { fa: "دیلم", en: "Deylam" }, { fa: "تنگستان", en: "Tangestan" }
  ],
  "تهران": [
    { fa: "تهران", en: "Tehran" }, { fa: "ری", en: "Rey" }, { fa: "اسلام‌شهر", en: "Eslamshahr" }, { fa: "قدس", en: "Qods" }, { fa: "شهریار", en: "Shahriar" }, { fa: "پاکدشت", en: "Pakdasht" }, { fa: "ملارد", en: "Malard" }, { fa: "پردیس", en: "Pardis" }, { fa: "ورامین", en: "Varamin" }, { fa: "قرچک", en: "Qarchak" }, { fa: "دماوند", en: "Damavand" }, { fa: "رباط کریم", en: "Robat Karim" }, { fa: "باغستان", en: "Baghestan" }, { fa: "بومهن", en: "Boumehen" }, { fa: "نسیم‌شهر", en: "Nasim Shahr" }, { fa: "فشم", en: "Fasham" }
  ],
  "چهارمحال و بختیاری": [
    { fa: "شهرکرد", en: "Shahrekord" }, { fa: "بروجن", en: "Borujen" }, { fa: "فارسان", en: "Farsan" }, { fa: "لردگان", en: "Lordegan" }, { fa: "کوهرنگ", en: "Koohrang" }, { fa: "سامان", en: "Saman" }, { fa: "کیار", en: "Kiar" }, { fa: "اردل", en: "Ardal" }
  ],
  "خراسان جنوبی": [
    { fa: "بیرجند", en: "Birjand" }, { fa: "قائن", en: "Qaen" }, { fa: "طبس", en: "Tabas" }, { fa: "نهبندان", en: "Nehbandan" }, { fa: "سرایان", en: "Sarayan" }, { fa: "فردوس", en: "Ferdows" }, { fa: "بشرویه", en: "Boshruyeh" }, { fa: "خوسف", en: "Khusf" }
  ],
  "خراسان رضوی": [
    { fa: "مشهد", en: "Mashhad" }, { fa: "نیشابور", en: "Neyshabur" }, { fa: "سبزوار", en: "Sabzevar" }, { fa: "تربت‌حیدریه", en: "Torbat Heydariyeh" }, { fa: "تربت‌جام", en: "Torbat Jam" }, { fa: "قوچان", en: "Quchan" }, { fa: "کاشمر", en: "Kashmar" }, { fa: "گناباد", en: "Gonabad" }, { fa: "چناران", en: "Chenaran" }, { fa: "بردسکن", en: "Bardaskan" }, { fa: "سرخس", en: "Sarakhs" }, { fa: "درگز", en: "Dargaz" }, { fa: "فریمان", en: "Fariman" }, { fa: "طرقبه", en: "Torghabeh" }, { fa: "ملک‌آباد", en: "Malekabad" }
  ],
  "خراسان شمالی": [
    { fa: "بجنورد", en: "Bojnord" }, { fa: "شیروان", en: "Shirvan" }, { fa: "اسفراین", en: "Esfarayen" }, { fa: "جاجرم", en: "Jajarm" }, { fa: "آشخانه", en: "Ashkhaneh" }, { fa: "راز و جرگلان", en: "Raz va Jargalan" }, { fa: "مانه و سملقان", en: "Maneh va Samalqan" }
  ],
  "خوزستان": [
    { fa: "اهواز", en: "Ahvaz" }, { fa: "آبادان", en: "Abadan" }, { fa: "خرمشهر", en: "Khorramshahr" }, { fa: "دزفول", en: "Dezful" }, { fa: "شوشتر", en: "Shushtar" }, { fa: "اندیمشک", en: "Andimeshk" }, { fa: "ماهشهر", en: "Mahshahr" }, { fa: "بهبهان", en: "Behbahan" }, { fa: "ایذه", en: "Izeh" }, { fa: "شادگان", en: "Shadegan" }, { fa: "رامهرمز", en: "Ramhormoz" }, { fa: "حمیدیه", en: "Hamidieh" }, { fa: "کارون", en: "Karun" }, { fa: "هویزه", en: "Hoveyzeh" }, { fa: "مسجدسلیمان", en: "Masjed Soleyman" }
  ],
  "زنجان": [
    { fa: "زنجان", en: "Zanjan" }, { fa: "ابهر", en: "Abhar" }, { fa: "خدابنده", en: "Khodabandeh" }, { fa: "طارم", en: "Tarom" }, { fa: "ماهنشان", en: "Mahneshan" }, { fa: "خرمدره", en: "Khorramdarreh" }
  ],
  "سمنان": [
    { fa: "سمنان", en: "Semnan" }, { fa: "شاهرود", en: "Shahroud" }, { fa: "دامغان", en: "Damghan" }, { fa: "گرمسار", en: "Garmsar" }, { fa: "ایوانکی", en: "Eyvanki" }, { fa: "مهدیشهر", en: "Mahdishahr" }
  ],
  "سیستان و بلوچستان": [
    { fa: "زاهدان", en: "Zahedan" }, { fa: "چابهار", en: "Chabahar" }, { fa: "ایرانشهر", en: "Iranshahr" }, { fa: "زابل", en: "Zabol" }, { fa: "خاش", en: "Khash" }, { fa: "کنارک", en: "Konarak" }, { fa: "سراوان", en: "Saravan" }, { fa: "نیک‌شهر", en: "Nikshahr" }, { fa: "دلگان", en: "Delgan" }, { fa: "قصرقند", en: "Qasr-e Qand" }, { fa: "هامون", en: "Hamun" }
  ],
  "فارس": [
    { fa: "شیراز", en: "Shiraz" }, { fa: "مرودشت", en: "Marvdasht" }, { fa: "کازرون", en: "Kazerun" }, { fa: "جهرم", en: "Jahrom" }, { fa: "لار", en: "Lar" }, { fa: "فسا", en: "Fasa" }, { fa: "داراب", en: "Darab" }, { fa: "اقلید", en: "Eqlid" }, { fa: "آباده", en: "Abadeh" }, { fa: "نی‌ریز", en: "Neyriz" }, { fa: "سرچهان", en: "Sarchehan" }
  ],
  "قزوین": [
    { fa: "قزوین", en: "Qazvin" }, { fa: "البرز", en: "Alborz" }, { fa: "آبیک", en: "Abyek" }, { fa: "تاکستان", en: "Takestan" }, { fa: "بوئین‌زهرا", en: "Buin Zahra" }
  ],
  "قم": [
    { fa: "قم", en: "Qom" }
  ],
  "کردستان": [
    { fa: "سنندج", en: "Sanandaj" }, { fa: "سقز", en: "Saqqez" }, { fa: "بانه", en: "Baneh" }, { fa: "مریوان", en: "Marivan" }, { fa: "قروه", en: "Qorveh" }, { fa: "دیواندره", en: "Divandarreh" }, { fa: "بیجار", en: "Bijar" }, { fa: "کامیاران", en: "Kamyaran" }
  ],
  "کرمان": [
    { fa: "کرمان", en: "Kerman" }, { fa: "رفسنجان", en: "Rafsanjan" }, { fa: "جیرفت", en: "Jiroft" }, { fa: "بم", en: "Bam" }, { fa: "زرند", en: "Zarand" }, { fa: "سیرجان", en: "Sirjan" }, { fa: "بردسیر", en: "Bardsir" }, { fa: "راور", en: "Ravar" }, { fa: "کهنوج", en: "Kahnooj" }, { fa: "ریگان", en: "Rigan" }
  ],
  "کرمانشاه": [
    { fa: "کرمانشاه", en: "Kermanshah" }, { fa: "اسلام‌آباد غرب", en: "Eslamabad-e Gharb" }, { fa: "سنقر", en: "Sonqor" }, { fa: "هرسین", en: "Harsin" }, { fa: "جوانرود", en: "Javanrud" }, { fa: "پاوه", en: "Paveh" }, { fa: "سرپل ذهاب", en: "Sarpol-e Zahab" }, { fa: "قصر شیرین", en: "Qasr-e Shirin" }
  ],
  "کهگیلویه و بویراحمد": [
    { fa: "یاسوج", en: "Yasuj" }, { fa: "گچساران", en: "Gachsaran" }, { fa: "دهدشت", en: "Dehdasht" }, { fa: "باشت", en: "Basht" }, { fa: "لیکک", en: "Likak" }
  ],
  "گلستان": [
    { fa: "گرگان", en: "Gorgan" }, { fa: "گنبدکاووس", en: "Gonbad-e Kavus" }, { fa: "آق‌قلا", en: "Aq Qala" }, { fa: "مینودشت", en: "Minoodasht" }, { fa: "علی‌آباد", en: "Aliabad" }, { fa: "کلاله", en: "Kalaleh" }, { fa: "رامیان", en: "Ramian" }, { fa: "آزادشهر", en: "Azadshahr" }
  ],
  "گیلان": [
    { fa: "رشت", en: "Rasht" }, { fa: "لاهیجان", en: "Lahijan" }, { fa: "لنگرود", en: "Langarud" }, { fa: "آستانه", en: "Astaneh" }, { fa: "رودسر", en: "Roodsar" }, { fa: "انزلی", en: "Bandar-e Anzali" }, { fa: "صومعه‌سرا", en: "Somehsara" }, { fa: "فومن", en: "Fuman" }, { fa: "رودبار", en: "Roodbar" }, { fa: "آستارا", en: "Astara" }, { fa: "ماسال", en: "Masal" }, { fa: "شفت", en: "Shaft" }
  ],
  "لرستان": [
    { fa: "خرم‌آباد", en: "Khorramabad" }, { fa: "بروجرد", en: "Borujerd" }, { fa: "دورود", en: "Dorud" }, { fa: "الیگودرز", en: "Aligoodarz" }, { fa: "کوهدشت", en: "Kuhdasht" }, { fa: "نورآباد", en: "Nurabad" }, { fa: "ازنا", en: "Azna" }, { fa: "پلدختر", en: "Poldokhtar" }
  ],
  "مازندران": [
    { fa: "ساری", en: "Sari" }, { fa: "آمل", en: "Amol" }, { fa: "بابل", en: "Babol" }, { fa: "بابلسر", en: "Babolsar" }, { fa: "نور", en: "Nur" }, { fa: "محمودآباد", en: "Mahmoudabad" }, { fa: "چالوس", en: "Chalus" }, { fa: "تنکابن", en: "Tonekabon" }, { fa: "نکا", en: "Neka" }, { fa: "جویبار", en: "Juybar" }, { fa: "کلاردشت", en: "Kelardasht" }
  ],
  "مرکزی": [
    { fa: "اراک", en: "Arak" }, { fa: "ساوه", en: "Saveh" }, { fa: "خمین", en: "Khomein" }, { fa: "محلات", en: "Mahallat" }, { fa: "دلیجان", en: "Delijan" }, { fa: "شازند", en: "Shazand" }, { fa: "تفرش", en: "Tafresh" }, { fa: "آشتیان", en: "Ashtian" }
  ],
  "هرمزگان": [
    { fa: "بندرعباس", en: "Bandar Abbas" }, { fa: "قشم", en: "Qeshm" }, { fa: "بندر لنگه", en: "Bandar Lengeh" }, { fa: "میناب", en: "Minab" }, { fa: "بستک", en: "Bastak" }, { fa: "حاجی‌آباد", en: "Hajjiabad" }, { fa: "رودان", en: "Rudan" }, { fa: "کیش", en: "Kish" }, { fa: "پارسیان", en: "Parsian" }, { fa: "جاسک", en: "Jask" }
  ],
  "همدان": [
    { fa: "همدان", en: "Hamadan" }, { fa: "ملایر", en: "Malayer" }, { fa: "نهاوند", en: "Nahavand" }, { fa: "تویسرکان", en: "Toyserkan" }, { fa: "بهار", en: "Bahar" }, { fa: "کبودرآهنگ", en: "Kabudarahang" }, { fa: "رزن", en: "Razan" }, { fa: "فامنین", en: "Famenin" }
  ],
  "یزد": [
    { fa: "یزد", en: "Yazd" }, { fa: "میبد", en: "Meybod" }, { fa: "اردکان", en: "Ardakan" }, { fa: "بافق", en: "Bafq" }, { fa: "مهریز", en: "Mehriz" }, { fa: "ابرکوه", en: "Abarkooh" }, { fa: "خضرآباد", en: "Khezrabad" }, { fa: "اشکذر", en: "Ashkezar" }
  ]
};

const provinceSelect = document.getElementById("provider");
const citySelect = document.getElementById("city");
const btn = document.querySelector("button");

let weatherBox = document.createElement("div");
weatherBox.className = "weather-box";
document.body.appendChild(weatherBox);

const API_KEY = "b52e68fba4efb88629169fe7686446a1";

function loadProvinces() {
    provinces.forEach(p => {
        let op = document.createElement("option");
        op.value = p.fa;
        op.textContent = p.fa;
        provinceSelect.appendChild(op);
    });
}

provinceSelect.addEventListener("change", () => {
    const selected = provinceSelect.value;
    citySelect.innerHTML = `<option disabled selected>انتخاب شهر</option>`;
    if (!cities[selected]) return;
    cities[selected].forEach(c => {
        let op = document.createElement("option");
        op.value = c.en;
        op.textContent = c.fa;
        citySelect.appendChild(op);
    });
});

btn.addEventListener("click", async () => {
    const cityFa = citySelect.options[citySelect.selectedIndex]?.text;
    const cityEn = citySelect.value;

    if (!cityEn) {
        alert("لطفاً یک شهر انتخاب کن!");
        return;
    }

    weatherBox.style.display = "block";
    weatherBox.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>دریافت اطلاعات آب و هوای ${cityFa}...</p>
        </div>
    `;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityEn}&appid=${API_KEY}&units=metric&lang=fa`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const temp = Math.round(data.main.temp);
            const feelsLike = Math.round(data.main.feels_like);
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const pressure = data.main.pressure;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            weatherBox.innerHTML = `
                <div class="weather-header">
                    <h2>🌍 ${cityFa}</h2>
                    <img src="${iconUrl}" alt="${description}" class="weather-icon">
                </div>
                <div class="temp-main">${temp}°C</div>
                <div class="description">${description}</div>
                <div class="weather-details">
                    <div class="detail-item">
                        <span class="detail-icon">🌡️</span>
                        <span>احساس دما: ${feelsLike}°C</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">💧</span>
                        <span>رطوبت: ${humidity}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">🌬️</span>
                        <span>سرعت باد: ${windSpeed} m/s</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">🔽</span>
                        <span>فشار: ${pressure} hPa</span>
                    </div>
                </div>
            `;
        } else {
            weatherBox.innerHTML = `
                <div class="error">
                    <span>❌</span>
                    <p>خطا: شهر "${cityFa}" پیدا نشد!</p>
                    <small>لطفاً شهر دیگری را انتخاب کنید</small>
                </div>
            `;
        }
    } catch (error) {
        weatherBox.innerHTML = `
            <div class="error">
                <span>⚠️</span>
                <p>خطا در اتصال به اینترنت!</p>
                <small>لطفاً اتصال خود را بررسی کنید</small>
            </div>
        `;
    }
});

loadProvinces();