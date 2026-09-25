// ig-user-agents.js — User-Agent aplikasi Instagram, semua format, per model.
// Diperbarui 25 September 2026 (versi 2 — hanya angka terverifikasi).
//
// Empat format:
//   1. iOS app (API native)      Instagram <versi> (<model>; iOS <os>; <locale>; <bahasa>; scale=<s>; <WxH>; <build>)
//   2. iOS in-app browser (IAB)  <UA WebKit> Mobile/<build-ios> Instagram <versi> (... ; IABMV/1)
//   3. Android app (API native)  Instagram <versi> Android (<api>/<rilis>; <dpi>; <WxH>; <merek>; <model>; <device>; <chipset>; <locale>; <versionCode>)
//   4. Android IAB (WebView)     <UA WebView ; wv> Instagram <versi> Android (... ; IABMV/1)
//
// Status verifikasi (25 Sep 2026):
//   TERVERIFIKASI : Instagram iOS 448.0.0 (App Store), Android 448.0.0.52.84 +
//                   versionCode per varian (APKMirror), build iOS 27.0 = 24A437,
//                   26.7 = 23H24, 18.7.10 = 22H374, identifier & resolusi iPhone,
//                   format IAB iOS (dari capture asli Anda).
//   TIDAK BISA DIVERIFIKASI tanpa perangkat: versi internal + build number iOS
//                   untuk format app/API, serta dpi/codename/chipset/Build ID
//                   tiap HP Android. Kolom itu ditandai `verified: false` —
//                   isi dari hasil capture (tools/ua-capture.html).

// ---------------------------------------------------------------------------
// Versi aplikasi
// ---------------------------------------------------------------------------

export const IG_VERSION = {
  ios: '448.0.0',             // App Store, rilis 23 Sep 2026 — dipakai IAB iOS
  iosApp: null,               // versi internal format app/API (mis. 448.0.0.x.x) — isi dari capture
  iosBuild: null,             // build number format app/API — isi dari capture
  android: '448.0.0.52.84',   // Google Play stabil
  // versionCode berbeda per varian APK yang terpasang (arsitektur + dpi):
  androidCode: {
    'arm64-240-480dpi': '385412020',
    'arm64-480dpi': '385412025',
    'arm64-480-640dpi': '385412061',
    'armv7-320dpi': '385412019',
    'armv7-480dpi': '385412024'
  },
  webview: '154.0.8037.57'    // Chrome stabil terbaru; WebView biasanya bernomor sama
};

// ---------------------------------------------------------------------------
// Versi iOS: [versi untuk UA, build]
// Sejak iOS 26, bagian "CPU iPhone OS" dibekukan ke 18_6 oleh WebKit;
// versi asli tetap muncul di blok Instagram.
// ---------------------------------------------------------------------------

const IOS = {
  '27.0':   { ua: '27_0',   build: '24A437' },  // iOS 27 publik, 14 Sep 2026
  '26.7':   { ua: '26_7',   build: '23H24' },   // iOS 26.7, 14 Sep 2026
  '18.7.10':{ ua: '18_7_10',build: '22H374' },  // hanya XS/XS Max/XR
  '18.7.8': { ua: '18_7_8', build: '22H352' }   // iOS 18 terakhir untuk iPhone 11+ (build dari capture Anda)
};

// ---------------------------------------------------------------------------
// Model iPhone (identifier, skala, resolusi layar dalam piksel)
// ---------------------------------------------------------------------------

export const IOS_DEVICES = [
  { name: 'iPhone 17 Pro Max', id: 'iPhone18,2', scale: '3.00', res: '1320x2868', os: '27.0' },
  { name: 'iPhone 17 Pro',     id: 'iPhone18,1', scale: '3.00', res: '1206x2622', os: '27.0' },
  { name: 'iPhone 17',         id: 'iPhone18,3', scale: '3.00', res: '1206x2622', os: '27.0' },
  { name: 'iPhone Air',        id: 'iPhone18,4', scale: '3.00', res: '1260x2736', os: '27.0' },
  { name: 'iPhone 16 Pro Max', id: 'iPhone17,2', scale: '3.00', res: '1320x2868', os: '27.0' },
  { name: 'iPhone 16 Pro',     id: 'iPhone17,1', scale: '3.00', res: '1206x2622', os: '27.0' },
  { name: 'iPhone 16',         id: 'iPhone17,3', scale: '3.00', res: '1179x2556', os: '27.0' },
  { name: 'iPhone 16e',        id: 'iPhone17,5', scale: '3.00', res: '1170x2532', os: '27.0' },
  { name: 'iPhone 15 Pro Max', id: 'iPhone16,2', scale: '3.00', res: '1290x2796', os: '27.0' },
  { name: 'iPhone 15 Pro',     id: 'iPhone16,1', scale: '3.00', res: '1179x2556', os: '27.0' },
  { name: 'iPhone 15',         id: 'iPhone15,4', scale: '3.00', res: '1179x2556', os: '27.0' },
  { name: 'iPhone 14 Pro',     id: 'iPhone15,2', scale: '3.00', res: '1179x2556', os: '27.0' },
  { name: 'iPhone 14',         id: 'iPhone14,7', scale: '3.00', res: '1170x2532', os: '26.7' }, // masih di 26
  { name: 'iPhone 13',         id: 'iPhone14,5', scale: '3.00', res: '1170x2532', os: '26.7' },
  { name: 'iPhone 11',         id: 'iPhone12,1', scale: '2.00', res: '828x1792',  os: '18.7.8' }, // capture Anda
  { name: 'iPhone XR',         id: 'iPhone11,8', scale: '2.00', res: '828x1792',  os: '18.7.10' } // maks iOS 18
];

// ---------------------------------------------------------------------------
// Model Android. Nama, merek, model, API/rilis Android dan resolusi umum.
// dpi, device (codename), chipset dan Build ID TIDAK terverifikasi — nilainya
// berubah menurut firmware/region/setelan tampilan. Ganti dengan capture.
// ---------------------------------------------------------------------------

export const ANDROID_DEVICES = [
  {
    name: 'Samsung Galaxy S25 Ultra', api: 36, release: '16', dpi: 450, res: '1080x2340',
    verified: false,
    brand: 'samsung', model: 'SM-S938B', device: 'pa3q', chipset: 'qcom', build: 'BP2A.250605.031.A3'
  },
  {
    name: 'Samsung Galaxy S24', api: 36, release: '16', dpi: 450, res: '1080x2340',
    brand: 'samsung', verified: false, model: 'SM-S921B', device: 'e1s', chipset: 's5e9945', build: 'BP2A.250605.031.A3'
  },
  {
    name: 'Samsung Galaxy A55', api: 36, release: '16', dpi: 450, res: '1080x2340',
    brand: 'samsung', verified: false, model: 'SM-A556E', device: 'a55x', chipset: 's5e8845', build: 'BP2A.250605.031.A3'
  },
  {
    name: 'Samsung Galaxy A15', api: 35, release: '15', dpi: 450, res: '1080x2340',
    brand: 'samsung', verified: false, model: 'SM-A155F', device: 'a15', chipset: 'mt6789', build: 'AP3A.240905.015.A2'
  },
  {
    name: 'Google Pixel 9', api: 36, release: '16', dpi: 420, res: '1080x2424',
    brand: 'Google', verified: false, model: 'Pixel 9', device: 'tokay', chipset: 'tokay', build: 'BP3A.250905.014'
  },
  {
    name: 'Redmi Note 13 4G', api: 35, release: '15', dpi: 440, res: '1080x2400',
    brand: 'Xiaomi', verified: false, model: '23129RAA4G', device: 'sapphire', chipset: 'qcom', build: 'AQ3A.240829.003'
  }
];

// ---------------------------------------------------------------------------
// Pembentuk string
// ---------------------------------------------------------------------------

const DEFAULT_LOCALE = { locale: 'id_ID', lang: 'id' };

/** 1. iOS app — dipakai request API dari aplikasi native. Butuh iosApp/iosBuild dari capture. */
export function igIosApp(d, { locale, lang } = DEFAULT_LOCALE) {
  if (!IG_VERSION.iosApp || !IG_VERSION.iosBuild) return null;
  const os = IOS[d.os];
  return (
    `Instagram ${IG_VERSION.iosApp} (${d.id}; iOS ${os.ua}; ${locale}; ${lang}; ` +
    `scale=${d.scale}; ${d.res}; ${IG_VERSION.iosBuild})`
  );
}

/**
 * 2. iOS in-app browser — format persis seperti capture asli Anda:
 * versi app pendek, locale + bahasa BCP-47, IABMV/1, diakhiri Safari/604.1.
 */
export function igIosIab(d, { locale = 'id_ID', bcp47 = 'id-ID' } = {}) {
  const os = IOS[d.os];
  // iOS 26+ membekukan versi di bagian WebKit ke 18_6 (verifikasi dengan capture iOS 26/27).
  const webkitOs = Number(d.os.split('.')[0]) >= 26 ? '18_6' : os.ua;
  return (
    `Mozilla/5.0 (iPhone; CPU iPhone OS ${webkitOs} like Mac OS X) ` +
    `AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/${os.build} ` +
    `Instagram ${IG_VERSION.ios} (${d.id}; iOS ${os.ua}; ${locale}; ${bcp47}; ` +
    `scale=${d.scale}; ${d.res}; IABMV/1) Safari/604.1`
  );
}

/** 3. Android app — dipakai request API dari aplikasi native. */
function androidCode(d) {
  return d.dpi > 480 ? IG_VERSION.androidCode['arm64-480-640dpi'] : IG_VERSION.androidCode['arm64-240-480dpi'];
}

export function igAndroidApp(d, { locale } = DEFAULT_LOCALE) {
  return (
    `Instagram ${IG_VERSION.android} Android (${d.api}/${d.release}; ${d.dpi}dpi; ` +
    `${d.res}; ${d.brand}; ${d.model}; ${d.device}; ${d.chipset}; ${locale}; ` +
    `${androidCode(d)})`
  );
}

/** 4. Android in-app browser — Android System WebView (token "; wv"). */
export function igAndroidIab(d, { locale } = DEFAULT_LOCALE) {
  return (
    `Mozilla/5.0 (Linux; Android ${d.release}; ${d.model} Build/${d.build}; wv) ` +
    `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/${IG_VERSION.webview} ` +
    `Mobile Safari/537.36 Instagram ${IG_VERSION.android} Android (${d.api}/${d.release}; ` +
    `${d.dpi}dpi; ${d.res}; ${d.brand}; ${d.model}; ${d.device}; ${d.chipset}; ` +
    `${locale}; ${androidCode(d)}; IABMV/1)`
  );
}

// ---------------------------------------------------------------------------
// Semua kombinasi siap pakai (format iOS app muncul setelah iosApp/iosBuild diisi)
// ---------------------------------------------------------------------------

export const ALL_IG_USER_AGENTS = [
  ...IOS_DEVICES.flatMap((d) => [
    { device: d.name, platform: 'ios', format: 'app', ua: igIosApp(d) },
    { device: d.name, platform: 'ios', format: 'iab', ua: igIosIab(d) }
  ]).filter((x) => x.ua),
  ...ANDROID_DEVICES.flatMap((d) => [
    { device: d.name, platform: 'android', format: 'app', ua: igAndroidApp(d) },
    { device: d.name, platform: 'android', format: 'iab', ua: igAndroidIab(d) }
  ])
];

/** Ambil satu UA acak, opsional difilter platform/format. */
export function randomIgUserAgent({ platform, format } = {}) {
  const pool = ALL_IG_USER_AGENTS.filter(
    (x) => (!platform || x.platform === platform) && (!format || x.format === format)
  );
  return pool[Math.floor(Math.random() * pool.length)].ua;
}
