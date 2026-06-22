import { expect } from "@playwright/test";
import { ENV } from '../../config/envConfig.js';
export class FileHandlePage{
    constructor (page){
        this.page = page;
        this.homePage = page.locator(".text-green-300").first();
        this.fileHandleElement = page.locator(".rounded-xl ").nth(10);
        this.uploadInput = page.locator(".file-input").first();
        
    }




    async fileHandle()
    {
        await expect(this.page).toHaveURL(ENV.BASE_URL1);
        await this.fileHandleElement.click();
        await expect(this.page).toHaveURL(ENV.BASE_URL2);
        await this.chooseOption.click();
        await this.uploadInput.setInputFiles(
    "test-data/sample.pdf"
);
        
    }
}