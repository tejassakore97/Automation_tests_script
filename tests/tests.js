import { Selector } from "testcafe";

fixture `first test case with testcafe`
 .page `https://beta.deepthought.education/login`


//case 1 : Test successful login with valid credentials.		
 test('valid login test', async (test) => {

    await 
    test.typeText(Selector('#username'),"tejas_sakore")
         .wait(500)
         .typeText(Selector('#password'),'tejomay')
         .wait(500)
         .click('#login')  
 })

 //case 2 : Test unsuccessful login attempts with invalid credentials.		
 test('invalid login test', async (test) => {

        await 
        test.typeText(Selector('#username'),"tejas sakore")
             .wait(500)
             .typeText(Selector('#password'),'tejomay11')
             .wait(500)
             .click('#login')
       
})

//case 3 : Validate that appropriate error messages are displayed for invalid login attempts.		
test('error messages test', async (test) => {

        await 
        test.typeText(Selector('#username'),"tejas sakore")
             .wait(500)
             .typeText(Selector('#password'),'tejomay11')
             .wait(500)
             .click('#login')
             .expect(Selector('strong').innerText).eql('Login Unsuccessful')
             .expect(Selector('p').innerText).eql('Invalid login credentials')
       
})

//case 4 : On successful login, validate that the user is redirected to the dashboard screen.		
test('dashboard redirecting test', async (test) => {

        await 
        test.typeText(Selector('#username'),"tejas_sakore")
             .wait(500)
             .typeText(Selector('#password'),'tejomay')
             .wait(500)
             .click('#login')
             .expect(Selector('H5').innerText).eql('Welcome to DeepThought')
       
     })
     
;