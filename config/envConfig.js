import dotenv from 'dotenv';

dotenv.config();

export const ENV = {

    BASE_URL: process.env.BASE_URL,
    BASE_URL1: process.env.BASE_URL1,
    BASE_URL2: process.env.BASE_URL2,

    APP_USERNAME: process.env.APP_USERNAME,

    APP_PASSWORD: process.env.APP_PASSWORD


};