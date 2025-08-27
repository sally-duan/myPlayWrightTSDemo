import {test, expect, request } from '@playwright/test';


test("post login test", async({page})=>{

const apiContext = await request.newContext();
const response = await apiContext.post("https://www.examples.com",
   { data: {
        username: "testuser",
        password: "mypasswpord"

    }, headers: {
        'Content-Type': 'application/json'
    }
});

    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');
  
    await page.addInitScript( (token)=>{
    window.localStorage.setItem('auth_token', token)}, responseBody.token);

    await page.goto('https://www.examples.com/dashboard');

  
    await expect(page).toHaveURL(/.*dashboard/);
}
)













