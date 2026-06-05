import { test, expect } from '@playwright/test';

test('Get Users API', async ({ request }) => {

    const response = await request.get(
    'https://reqres.in/api/users?page=2'
);

console.log("Status:", response.status());

const body = await response.json();

console.log(body);
});

test('Create User', async ({ request }) => {

    const response = await request.post(
        'https://reqres.in/api/users',
        {
            data: {
                name: 'Isha',
                job: 'QA Engineer'
            }
        }
    );

    console.log("Status:", response.status());

const body = await response.json();

console.log(body);

});