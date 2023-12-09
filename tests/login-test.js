import Page from '../src/pages/login-page';
import users from  '../testdata/users';

const page = new Page();

fixture `Login functionality`.page('../index.html').beforeEach(async t => {
    await t.maximizeWindow();
});

test('Login Test - Successful Login',async t=>{
    await page.loginUser(t,users[0].validEmail,users[0].validPassword);
    await t.expect((page.homeBtn).visible).ok();
})

test('Login Test - Invalid Login',async t=>{
    await page.loginUser(t,users[1].invalidEmail,users[1].invalidPassword);
    await t.expect((page.homeBtn).visible).notOk();
})

test('Logout Test - Logout successfully',async t=>{
    await page.loginUser(t,users[0].validEmail,users[0].validPassword);
    await page.logoutUser(t);
    await t.expect((page.username).visible).ok();
})