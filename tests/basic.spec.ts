import { test } from '@playwright/test';

test('Basic actions', async ({ page }) => {
    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/")
    });

    await test.step('Click Bai hoc 1', async () => {
        await page.locator("//a[text()= 'Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step('Step 3', async () => {
        // code test
    });
});
