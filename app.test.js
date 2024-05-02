// import request from "supertest";
import router from "./routes/adminRoutes";

const request = require('supertest');
// const { app } = require('./server.js'); // Assuming your Express app is defined in app.js
const Admin = require('./models/Admin'); // Assuming this is your Admin model
const Guest = require('./models/Guest'); // Assuming this is your Guest model

jest.mock('./models/Admin'); // Mocking the Admin model
jest.mock('./models/Guest'); // Mocking the Guest model

describe('adminGuestlist route', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    it('should fetch all guests from the database', async () => {
        const mockGuests = [{ name: 'Guest 1' ,email:'guest1@gmail.com'}, { name: 'Guest 2' ,email:'guest2@gmail.com'}];
        Guest.find.mockResolvedValue(mockGuests);

        await request(router)
            .get('/guestList') // Ensure the route matches your adminGuestlist route
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(mockGuests);
                expect(Guest.find).toHaveBeenCalledTimes(1);
            });
    });

    // Add more test cases for other scenarios...
});
