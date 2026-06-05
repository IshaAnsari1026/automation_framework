 export class BasePage {

    constructor(page){
        this.page = page;
    }

    async click(locator){
        await locator.click();
    }

    async fill(locator,value){
        await locator.fill(value);
    }

    async select(locator,value){
        await locator.selectOption(value);
    }

    async check(locator){
        await locator.check();
    }
    async wait(locator){
    await locator.waitFor();
}

async getText(locator){
    return await locator.textContent();
}

async isVisible(locator){
    return await locator.isVisible();
}
}
