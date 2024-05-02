// const express=require("express");
// const router=express.Router();
// const hostController=require("../controllers/hostController");

// // router.get("/congo",hostController.saveListing);
// // router.get("/getUserListings",hostController.getUserListings);
// router.get("/allaccommodations",hostController.hostAccommodations);
// // router.get("/accommodation",hostController.hostAccGet);

// // router.get("")

// router.post("/login",hostController.hostLoginPost);
// router.post("/register",hostController.hostRegisterPost);
// router.post("/newaccommodation",hostController.hostAccsPost);
// router.post("/report",hostController.hostReportPost);
// // router.post("/congo",hostController.saveListing);
// // router.post("/uploadimages",hostController.uploadimages);
// router.post("/editpass",hostController.hostEditPass);
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
 *       host:
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
 *       Desc1:
 *           type: string
 *       Desc2:
 *           type: string
 *       MaxGuests:
 *           type: integer
 *       CostPerN:
 *           type: integer
 *       Bedrooms:
 *           type: integer
 *       Bathrooms:
 *           type: integer
 *       PropertyType:
 *           type: string
 *       RoomType:
 *           type: string
 *       AvgRating:
 *           type: number
 *       Facilities:
 *           type: array
 *           items:
 *               type: string
 *       Verified:
 *           type: boolean
 *       Ratings:
 *           type: array
 *           items:
 *               type: number
 *       Reviews:
 *           type: array
 *           items:
 *               type: string
 *       createdAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Host:
 *       type: object
 *       properties:
 *         UserType:
 *           type: string
 *           default: Host
 *           readOnly: true
 *         UserName:
 *           type: string
 *         PhoneNumber:
 *           type: integer
 *         Email:
 *           type: string
 *         password:
 *           type: string
 *         listings:
 *           type: array
 *           items:
 *             type: object
 *         bookings:
 *           type: array
 *           items:
 *             type: object
 *         Verified:
 *           type: boolean
 */

const express=require("express");
const router=express.Router();
const hostController=require("../controllers/hostController");

/**
 * @swagger
 * /congo:
 *   get:
 *     summary: Save a new listing
 *     description: Save a new listing to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               listingData:
 *                 type: object
 *                 description: Data of the listing to be saved.
 *     responses:
 *       '201':
 *         description: Success. The listing has been saved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming that the listing has been saved successfully.
 *                 data:
 *                   type: object
 *                   description: Details of the saved listing.
 *       '500':
 *         description: Server error. Failed to save the listing.
 */
router.post("/congo", hostController.saveListing);

/**
 * @swagger
 * /getUserListings:
 *   get:
 *     summary: Get listings of a specific host
 *     description: Retrieve listings associated with a specific host using their email.
 *     responses:
 *       '200':
 *         description: Success. Returns the listings associated with the specified host.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 houseinfo:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       // Define properties of the listing object here
 *       '404':
 *         description: User not found. The specified user email does not exist.
 *       '500':
 *         description: Server error. Failed to fetch user listings.
 */
router.get("/getUserListings", hostController.getUserListings);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate a host
 *     description: Authenticate a host using email and password.
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
 *                   password:
 *                     type: string
 *     responses:
 *       '200':
 *         description: Success. Returns auth status and user data if authentication is successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exists:
 *                   type: boolean
 *                   description: Indicates if the user with the provided email exists.
 *                 auth:
 *                   type: boolean
 *                   description: Indicates if the authentication was successful.
 *                 error:
 *                   type: string
 *                   description: Error message if authentication failed.
 *                 user:
 *                   type: object
 *                   description: Details of the authenticated user.
 *       '500':
 *         description: Server error. Failed to authenticate the host.
 */
router.post("/login", hostController.hostLoginPost);


/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new host
 *     description: Register a new host with the provided username, email, phone, and password.
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
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   password:
 *                     type: string
 *     responses:
 *       '200':
 *         description: Success. Returns auth status and user data if registration is successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exists:
 *                   type: boolean
 *                   description: Indicates if the email already exists.
 *                 auth:
 *                   type: boolean
 *                   description: Indicates if the registration was successful.
 *                 error:
 *                   type: string
 *                   description: Error message if registration failed.
 *                 user:
 *                   type: object
 *                   description: Details of the registered user.
 *       '500':
 *         description: Server error. Failed to register the host.
 */
router.post("/register",hostController.hostRegisterPost);
/**
 * @swagger
 * /uploadimages:
 *   post:
 *     summary: Upload images
 *     description: Upload images to the server.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of images to upload (up to 5 images).
 *     responses:
 *       '200':
 *         description: Success. The images have been uploaded successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message confirming that the images have been uploaded successfully.
 *       '500':
 *         description: Server error. Failed to upload images.
 */
router.post("/uploadimages", hostController.uploadimages);

/**
 * @swagger
 * /pass:
 *   post:
 *     summary: Update host password
 *     description: Update the password of a host.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: The current password of the host.
 *               newPassword:
 *                 type: string
 *                 description: The new password to set for the host.
 *               id:
 *                 type: string
 *                 description: The ID of the host whose password is being updated.
 *     responses:
 *       '200':
 *         description: Success. The password has been updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the password update was successful.
 *                 message:
 *                   type: string
 *                   description: A message confirming that the password has been updated successfully.
 *       '404':
 *         description: User not found. The specified host ID does not exist.
 *       '500':
 *         description: Server error. Failed to update the password.
 */
router.post("/pass", hostController.hostEditPass);

/**
 * @swagger
 * /approveBooking:
 *   post:
 *     summary: Approve a booking
 *     description: Update the status of a booking to "approved".
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the booking to approve.
 *     responses:
 *       '200':
 *         description: Success. The booking status has been updated to "approved".
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the booking approval was successful.
 *                 message:
 *                   type: string
 *                   description: A message confirming that the booking has been approved.
 *       '404':
 *         description: Booking not found. The specified booking ID does not exist.
 */
router.post("/approveBooking", hostController.approveListing);


module.exports=router;