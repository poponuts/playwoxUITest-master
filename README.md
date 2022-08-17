## This repo contains tests written with [Playwright](https://playwright.dev/) to test demo UI tests of [sauce labs](https://www.saucedemo.com/) website

## To Get Started :

[Prereqisites]: Node + git. are installed

1. Clone this repo 
```
git clone git@github.com:Yogi1917/playwoxUITest-master.git
```

2. cd into the cloned repo
```
cd playwoxUITest-master
```

3. Install the node_modules 
```
npm install
```

4. To run the tests in browser
```
npx playwright test --headed
``` 

5. To run the tests in headless mode 
```
npx playwright test
```

6. To run the tests at slower rate, increase time `slowMo` in playwright.config.js file
