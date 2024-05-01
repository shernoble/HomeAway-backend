import request from "supertest";
import router from "./routes/adminRoutes";

// describe("POST /register",() => {

//     describe("given username and password",() => {
//         // hash the password
//         // should save username and pass in database
//         // respond back with the json object containing the user
//         test("respond with status 200",async() => {
//             const response=(await request(router).post("/register")).send({
//                 UserName:"kavya",
//                 Email:"kavyalolla@gmail.com",
//                 PhoneNumber:9483672949,
//                 password:"Kavya123#"
//             })
//             // expect(response.statusCode).toBe(200);
//             expect(response.body.exists).toBe(false);
//         })
//         // specify json in content type header
//     })

//     describe("when the username and pass is missing",() => {

//     })

// })

describe('GET /guestlist', () => {
    test('retrieves user data by id', async () => {
        // const userId = 1;

        const response = await request(router).get(`/guestList`);

        expect(response.statusCode).toBe(200);
        // expect(response.body.id).toBe(userId);
    });

    // test('responds with 404 if user is not found', async () => {
    //     const userId = 999; // Assuming this user ID doesn't exist

    //     const response = await request(app).get(`/user/${userId}`);

    //     expect(response.statusCode).toBe(404);
    //     // expect(response.body.error).toBe('User not found');
    // });
});