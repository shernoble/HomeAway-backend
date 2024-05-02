// /* stylelint-disable */
// const express=require("express");
// const router=express.Router();
// const guestController=require("../controllers/guestController");
// const stripe=require('stripe')(process.env.SECRET_KEY)


// router.get('/homepage',guestController.guestHomePage);
// router.get('/homepagefull',guestController.guestHomePageFull);
// router.get('/reserve/:id',guestController.guestReserve);
// router.get('/booking/:id',guestController.guestGetBooking);
// router.get('/getBookings',guestController.getBookings);




// router.post("/login",guestController.guestLoginPost);
// router.post("/register",guestController.guestRegisterPost);
// router.post("/startingPage",guestController.guestStartingPagePost);
// router.post('/reserve/:id',guestController.guestReservePost);
// router.post('/confirmBooking',guestController.guestConfirmBookingPost);
// router.post('/search',guestController.guestSearch);
// // router.post('/filter',guestController.guestFilter);
// router.post('/report',guestController.guestReportPost);
// router.post('/editPass',guestController.guestEditPass);
// router.post('/review',guestController.guestReviewPost);
// router.post('/cancelBooking',guestController.guestCancelBooking);
// router.post('/create-checkout-session',guestController.guestCheckoutSession);



// module.exports=router;


/**
 * @swagger
 * components:
 *   schemas:
 *     Listing:
 *       type: object
 *       properties:
 *         img_url1:
 *           type: string
 *         img_url2:
 *           type: string
 *         img_url3:
 *           type: string
 *         img_url4:
 *           type: string
 *         img_url5:
 *           type: string
 *         Title:
 *           type: string
 *         Address:
 *           type: object
 *           properties:
 *             Line1:
 *               type: string
 *             Line2:
 *               type: string
 *             District:
 *               type: string
 *             State:
 *               type: string
 *             Pincode:
 *               type: integer
 *         host:
 *           type: object
 *           properties:
 *             hostID:
 *               type: string
 *             hostUserName:
 *               type: string
 *             hostEmail:
 *               type: string
 *             hostPhone:
 *               type: integer
 *         Desc1:
 *           type: string
 *         Desc2:
 *           type: string
 *         MaxGuests:
 *           type: integer
 *         CostPerN:
 *           type: integer
 *         Bedrooms:
 *           type: integer
 *         Bathrooms:
 *           type: integer
 *         PropertyType:
 *           type: string
 *         RoomType:
 *           type: string
 *         AvgRating:
 *           type: number
 *         Facilities:
 *           type: array
 *           items:
 *             type: string
 *         Verified:
 *           type: boolean
 *         Ratings:
 *           type: array
 *           items:
 *             type: number
 *         Reviews:
 *           type: array
 *           items:
 *             type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *     Guest:
 *       type: object
 *       properties:
 *         UserType:
 *           type: string
 *           default: Guest
 *           readOnly: true
 *         UserName:
 *           type: string
 *         PhoneNumber:
 *           type: integer
 *         Email:
 *           type: string
 *         password:
 *           type: string
 *         Bookings:
 *           type: array
 *           items:
 *             type: object
 *         Reviews:
 *           type: array
 *           items:
 *             type: string
 *         Bookmarks:
 *           type: array
 *           items:
 *             type: string
 *         Verified:
 *           type: boolean
 *     Booking:
 *       type: object
 *       properties:
 *         ListingID:
 *           type: string
 *         GuestID:
 *           type: string
 *         HostID:
 *           type: string
 *         FromDate:
 *           type: string
 *           format: date-time
 *         ToDate:
 *           type: string
 *           format: date-time
 *         NumGuests:
 *           type: integer
 *         Status:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *     Report:
 *       type: object
 *       properties:
 *         guestID:
 *           type: string
 *         category:
 *           type: string
 *         subject:
 *           type: string
 *         description:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 *     Admin:
 *       type: object
 *       properties:
 *         UserType:
 *           type: string
 *           default: Admin
 *           readOnly: true
 *         UserName:
 *           type: string
 *         PhoneNumber:
 *           type: integer
 *         Email:
 *           type: string
 *         password:
 *           type: string
 */
const express=require("express");
const router=express.Router();
const guestController=require("../controllers/guestController");
const stripe=require('stripe')(process.env.SECRET_KEY)
const Listing = require('../models/Listing')

/**
 * @swagger
 * /homepage:
 *   get:
 *     summary: Get listings for guest homepage
 *     description: Retrieve listings based on the provided location, number of guests, and optionally property type.
 *     parameters:
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         required: true
 *         description: The location where the listings are located.
 *       - in: query
 *         name: guests
 *         schema:
 *           type: integer
 *         required: true
 *         description: The number of guests the listings can accommodate.
 *       - in: query
 *         name: property
 *         schema:
 *           type: string
 *         description: The type of property to filter by (e.g., house, apartment).
 *     responses:
 *       '200':
 *         description: Success. Returns the listings matching the provided criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Listing'
 *       '500':
 *         description: Server error. Failed to fetch listings.
 */
router.get('/homepage', guestController.guestHomePage);

/**
 * @swagger
 * /homepagefull:
 *   get:
 *     summary: Get full guest homepage
 *     description: Retrieve the full guest homepage with all listings or filtered by property type.
 *     parameters:
 *       - in: query
 *         name: property
 *         schema:
 *           type: string
 *         description: Filter listings by property type (e.g., "Apartment", "House", "Villa").
 *     responses:
 *       '200':
 *         description: Success. Returns the full guest homepage with listings.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Listing'
 *       '500':
 *         description: Server error. Failed to retrieve the guest homepage.
 */
router.get('/homepagefull', guestController.guestHomePageFull);

/**
 * @swagger
 * /reserve/{id}:
 *   get:
 *     summary: Get listing details for reservation
 *     description: Retrieve details of a specific listing by its ID for reservation purposes.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the listing to retrieve.
 *     responses:
 *       '200':
 *         description: Success. Returns details of the listing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Listing'
 *       '404':
 *         description: Listing not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating listing not found.
 *       '500':
 *         description: Server error. Failed to retrieve listing details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating server error.
 */
router.get('/reserve/:id', guestController.guestReserve);

/**
 * @swagger
 * /booking/{id}:
 *   get:
 *     summary: Get booking information
 *     description: Retrieve booking information based on the provided booking ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the booking to retrieve.
 *     responses:
 *       '200':
 *         description: Success. Returns the booking information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful.
 *                 listing:
 *                   $ref: '#/components/schemas/Listing'
 *       '500':
 *         description: Server error. Failed to retrieve booking information.
 */
router.get('/booking/:id', guestController.guestGetBooking);
/**
 * @swagger
 * /getBookings:
 *   get:
 *     summary: Get user bookings
 *     description: Retrieve bookings associated with the provided user ID.
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user whose bookings are to be retrieved.
 *     responses:
 *       '200':
 *         description: Success. Returns the user's bookings.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bookings:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Booking'
 *       '500':
 *         description: Server error. Failed to retrieve user bookings.
 */
router.get('/getBookings', guestController.getBookings);





/**
 * @swagger
 * /login:
 *   post:
 *     summary: Guest login
 *     description: Verify guest login credentials based on the provided email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               formvalues:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                     description: The email address of the guest.
 *                   password:
 *                     type: string
 *                     description: The password of the guest.
 *     responses:
 *       '200':
 *         description: Success. Returns authentication status and user information if credentials are correct.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exists:
 *                   type: boolean
 *                   description: Indicates if the user exists.
 *                 auth:
 *                   type: boolean
 *                   description: Indicates if authentication was successful.
 *                 error:
 *                   type: string
 *                   description: Error message if authentication failed.
 *                 user:
 *                   $ref: '#/components/schemas/Guest'
 *       '500':
 *         description: Server error. Failed to verify login credentials.
 */
router.post("/login", guestController.guestLoginPost);

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new guest
 *     description: Register a new guest with their username, email, phone number, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               formvalues:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     description: The username of the guest.
 *                   email:
 *                     type: string
 *                     description: The email address of the guest.
 *                   phone:
 *                     type: string
 *                     description: The phone number of the guest.
 *                   password:
 *                     type: string
 *                     description: The password of the guest.
 *     responses:
 *       '200':
 *         description: Success. Returns authentication status and user information if registration was successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exists:
 *                   type: boolean
 *                   description: Indicates if the email already exists in the database.
 *                 auth:
 *                   type: boolean
 *                   description: Indicates if registration was successful and the user is authenticated.
 *                 error:
 *                   type: string
 *                   description: Error message if registration failed.
 *                 user:
 *                   $ref: '#/components/schemas/Guest'
 *       '500':
 *         description: Server error. Failed to register the guest.
 */
router.post("/register", guestController.guestRegisterPost);

/**
 * @swagger
 * /startingPage:
 *   post:
 *     summary: Redirect to guest homepage
 *     description: Redirect to the guest homepage based on the specified location and number of guests.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               formvalues:
 *                 type: object
 *                 properties:
 *                   location:
 *                     type: string
 *                     description: The location for the guest homepage.
 *                   guests:
 *                     type: integer
 *                     description: The number of guests for the guest homepage.
 *     responses:
 *       '302':
 *         description: Redirect. Redirects to the guest homepage with the specified location and number of guests.
 */
router.post("/startingPage", guestController.guestStartingPagePost);

/**
 * @swagger
 * /reserve/{id}:
 *   post:
 *     summary: Make a reservation
 *     description: Make a reservation for a specific listing by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the listing to make a reservation for.
 *       - in: body
 *         name: reservationDetails
 *         required: true
 *         description: Object containing reservation details.
 *         schema:
 *           type: object
 *           properties:
 *             fromDate:
 *               type: string
 *               format: date
 *               description: The start date of the reservation (YYYY-MM-DD).
 *             toDate:
 *               type: string
 *               format: date
 *               description: The end date of the reservation (YYYY-MM-DD).
 *     responses:
 *       '200':
 *         description: Success. Reservation is made successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message indicating reservation is made successfully.
 *       '500':
 *         description: Server error. Failed to make reservation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating server error.
 */
router.post('/reserve/:id', guestController.guestReservePost);

/**
 * @swagger
 * /confirmBooking:
 *   post:
 *     summary: Confirm a booking
 *     description: Confirm a booking made by a guest for a specific listing.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               listing:
 *                 type: string
 *                 description: The JSON string representation of the listing object.
 *               checkin:
 *                 type: string
 *                 format: date
 *                 description: The check-in date of the reservation (YYYY-MM-DD).
 *               checkout:
 *                 type: string
 *                 format: date
 *                 description: The check-out date of the reservation (YYYY-MM-DD).
 *               user:
 *                 type: string
 *                 description: The JSON string representation of the user object.
 *     responses:
 *       '200':
 *         description: Success. Booking is confirmed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 booking:
 *                   type: object
 *                   description: The confirmed booking object.
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful.
 *       '400':
 *         description: Bad request. Error occurred while processing the request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   description: Error message indicating the cause of the failure.
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful.
 */
router.post('/confirmBooking', guestController.guestConfirmBookingPost);

/**
 * @swagger
 * /search:
 *   post:
 *     summary: Search listings
 *     description: Search for listings based on a search term.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               searchterm:
 *                 type: string
 *                 description: The search term used to find listings.
 *     responses:
 *       '200':
 *         description: Success. Returns search results.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the search was successful.
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Listing'
 *       '404':
 *         description: No results found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the search was successful.
 *                 message:
 *                   type: string
 *                   description: Error message indicating no results found.
 *       '500':
 *         description: Server error. Failed to search listings.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the search was successful.
 *                 message:
 *                   type: string
 *                   description: Error message indicating server error.
 */
router.post('/search', guestController.guestSearch);

// router.post('/filter',guestController.guestFilter);
/**
 * @swagger
 * /report:
 *   post:
 *     summary: Submit a report
 *     description: Allows guests to submit a report regarding an issue or concern.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               report:
 *                 type: object
 *                 description: The report object containing details of the report.
 *               user:
 *                 type: object
 *                 description: The user object representing the guest submitting the report.
 *     responses:
 *       '200':
 *         description: Success. Report submitted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful.
 *                 error:
 *                   type: null
 *                   description: Null if no error occurred.
 *       '400':
 *         description: Bad request. Error occurred while processing the request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful.
 *                 err:
 *                   type: string
 *                   description: Error message indicating the cause of the failure.
 */
router.post('/report', guestController.guestReportPost);

/**
 * @swagger
 * /editPass:
 *   post:
 *     summary: Edit guest password
 *     description: Update the password for a guest user based on the provided user ID and old and new passwords.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the guest user.
 *               oldPassword:
 *                 type: string
 *                 description: The old password of the guest user.
 *               newPassword:
 *                 type: string
 *                 description: The new password to set for the guest user.
 *     responses:
 *       '200':
 *         description: Success. Returns a message confirming the password update.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful.
 *                 message:
 *                   type: string
 *                   description: A message confirming that the password has been updated successfully.
 *       '404':
 *         description: Not found. The provided user ID was not found.
 *       '500':
 *         description: Server error. Failed to update the password.
 */
router.post('/editPass', guestController.guestEditPass);

/**
 * @swagger
 * /review:
 *   post:
 *     summary: Submit a review
 *     description: Allows guests to submit a review for a specific listing.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               review:
 *                 type: string
 *                 description: The review content.
 *               rating:
 *                 type: number
 *                 description: The rating given by the guest (out of 5).
 *               listing:
 *                 type: string
 *                 description: The ID of the listing being reviewed.
 *     responses:
 *       '200':
 *         description: Success. Review added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the operation.
 *                 listing:
 *                   $ref: '#/components/schemas/Listing'
 *       '404':
 *         description: Not found. The specified listing was not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating that the listing was not found.
 *       '500':
 *         description: Internal Server Error. An unexpected error occurred while processing the request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the cause of the failure.
 */
router.post('/review', guestController.guestReviewPost);

/**
 * @swagger
 * /cancelBooking:
 *   post:
 *     summary: Cancel booking
 *     description: Cancel a booking based on the provided booking ID and user information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the booking to cancel.
 *               user:
 *                 $ref: '#/components/schemas/Guest'
 *                 description: The user information associated with the booking.
 *     responses:
 *       '200':
 *         description: Success. Returns a message confirming the cancellation and updated booking details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming that the booking has been cancelled successfully.
 *                 booking:
 *                   $ref: '#/components/schemas/Booking'
 *                 user:
 *                   $ref: '#/components/schemas/Guest'
 *       '404':
 *         description: Not found. The provided booking ID was not found.
 *       '500':
 *         description: Server error. Failed to cancel the booking.
 */
router.post('/cancelBooking', guestController.guestCancelBooking);

/**
 * @swagger
 * /create-checkout-session:
 *   post:
 *     summary: Create a checkout session for payment
 *     description: Generates a checkout session for making a payment using Stripe.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               listing:
 *                 type: object
 *                 description: The details of the listing for which the payment is being made.
 *               num_days:
 *                 type: number
 *                 description: The number of days for which the listing is booked.
 *     responses:
 *       '200':
 *         description: Success. Checkout session created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the created checkout session.
 *       '500':
 *         description: Internal Server Error. An unexpected error occurred while processing the request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the cause of the failure.
 */
router.post('/create-checkout-session', guestController.guestCheckoutSession);



module.exports=router;