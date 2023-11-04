// add a require statement-pull funct-ty from node module

const {Builder, By, Key} = require("selenium-webdriver");
//add Node js assertion
const assert = require("assert");

// add chai assertion
var should = require("chai").should();

//create Node assertion
let clickOnBtn = await driver.findElement(By.id("menuButton")).click();
assert.strictEqual(clickOnBtn, "Learn JS");

//create Chai assertion
clickOnBtn.should.equal("Learn JS");
//create af unction
async function exampleF(){
//launch the browser
let driver = await new Builder().forBrowser('firefox').build();
//navigate to the app
await driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_html");
//click on the button
await driver.findElement(By.id("menuButton")).click();
await driver.quit();


}
exampleF();