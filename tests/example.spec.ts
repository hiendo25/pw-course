import { chromium } from 'playwright';

(async () => {
  const url = 'https://thuvienphapluat.vn/phap-luat-doanh-nghiep/bai-viet/07-nghi-dinh-co-hieu-luc-trong-thang-9-ma-doanh-nghiep-can-biet-14601.html';
  const delay = 5000; // 2s
  const duration = 300 * 60 * 1000; // 1h
  const startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < duration) {
    const browser = await chromium.launch({ headless: true }); 
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 0 });
    count++;
    console.log(`Click ${count} at`, new Date().toLocaleTimeString());

    // Scroll xuống dưới cùng
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // Nếu có popup (ví dụ nút đóng .close hoặc .popup-close), thì tắt nó
    try {
      await page.click('.popup-close, .close', { timeout: 3000 });
      console.log('Popup closed');
    } catch {
      // không có popup thì thôi
    }

    await page.waitForTimeout(delay);
    await browser.close();
  }
})();
