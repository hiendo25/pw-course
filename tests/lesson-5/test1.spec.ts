import { test } from '@playwright/test';

test('register_with_valid_information', async ({ page }) => {
    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click Register Page lesson', async () => {
        await page.locator("//a[text()= 'Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step('Fill out the registration form', async () => {
        await page.locator("//input[@id='username']").fill('hiendo');
        await page.locator("//input[@id='email']").pressSequentially('dothanhhien2409@gmail.com');
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='cooking']").check();
        await page.locator("//select[@id='interests']").selectOption('music');
        await page.locator("//select[@id='country']").selectOption('uk');
        await page.locator("//input[@id='dob']").pressSequentially('01011999');
        await page.locator("//input[@type='file']").setInputFiles('C:/Users/dotha/Downloads/578979D9.key');
        await page.locator("//textarea[@id='bio']").pressSequentially('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
        await page.locator("//input[@type='range']").click();
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("//label[@for='toggleOption']").click();
        await page.locator("//label[@for='starRating']").click();
        await page.locator("//input[@id='customDate']").pressSequentially('12102025');
    });

    await test.step('Click Register button', async () => {
        await page.locator("//button[@type='submit']").click();
    });

});