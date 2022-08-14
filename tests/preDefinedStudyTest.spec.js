// @ts-check
import { test } from '@playwright/test';
import { DemoHomePage } from '../pages/demo-home-page.js';
import { PreDefinedStudy } from '../pages/pre-defined-study-page.js';


// test('user can open a pre-defined motor vehicle accident study in web view', async ({ page }) => {

//   const demoHome = new DemoHomePage(page);
//   const preDefinedStudy = new PreDefinedStudy(page);

//   // Opens the demo website.
//   await demoHome.goto();

   // Check for 'I am human' button
   // await preDefinedStudy.checkButtonExists('I am human');

//   // Click on the pre defined study. 
//   await preDefinedStudy.openPreDefinedStudy('Motor vehicle accident');
 
//   // Checks for 'CXR Findings button'
//   await preDefinedStudy.checkButtonExists(' Show Annalise CXR findings');

//   await preDefinedStudy.goBackToDemoHomePage();
// });

// test('user can open pre defined routine post-op study in web view', async ({ page }) => {

//   const demoHome = new DemoHomePage(page);
//   const preDefinedStudy = new PreDefinedStudy(page);

//   // Opens the demo website.
//   await demoHome.goto();

//   // Click on the pre defined study. 
//   await preDefinedStudy.openPreDefinedStudy('Routine post-op');
 
//   // Checks for 'CXR Findings button'
//   await preDefinedStudy.checkButtonExists(' Show Annalise CXR findings');

//   await preDefinedStudy.goBackToDemoHomePage();
// });