/**
 * @swagger
 * components:
 *   schemas:
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
 */


/**
 * @swagger
 * components:
 *   schemas:
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


/**
 * @swagger
 * components:
 *   schemas:
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
 */




const express=require("express");
const router=express.Router();
const adminController=require("../controllers/adminController");
// const passport=require("passport");



/**
 * @swagger
 * /homepage:
 *   get:
 *     summary: Get listings for admin homepage
 *     description: Retrieve listings to display on the admin homepage.
 *     responses:
 *       '200':
 *         description: Successful response with listings data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Listing'
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating the cause of the internal server error.
 */
router.get("/homepage", adminController.adminHomePage);

/**
 * @swagger
 * /guestList:
 *   get:
 *     summary: Get list of guests
 *     description: Retrieve the list of guests for the admin dashboard.
 *     responses:
 *       '200':
 *         description: Successful response with guest list data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Guest'
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating the cause of the internal server error.
 */
router.get("/guestList", adminController.adminGuestlist);

/**
 * @swagger
 * /hostList:
 *   get:
 *     summary: Get list of hosts
 *     description: Retrieve the list of hosts for the admin dashboard.
 *     responses:
 *       '200':
 *         description: Successful response with host list data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Host'
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating the cause of the internal server error.
 */
router.get("/hostList", adminController.adminHostlist);

/**
 * @swagger
 * /reports:
 *   get:
 *     summary: Get list of reports
 *     description: Retrieve the list of reports for the admin dashboard.
 *     responses:
 *       '200':
 *         description: Successful response with report list data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Report'
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating the cause of the internal server error.
 */
router.get("/reports", adminController.adminReports);

/**
 * @swagger
 * /reports/{id}:
 *   get:
 *     summary: Get a specific report
 *     description: Retrieve details of a specific report along with associated guest information.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the report to retrieve
 *     responses:
 *       '200':
 *         description: Successful response with report and guest data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 report:
 *                   $ref: '#/components/schemas/Report'
 *                 guest:
 *                   $ref: '#/components/schemas/Guest'
 *       '404':
 *         description: Report or guest not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the report or guest was not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating an internal server error occurred
 */
router.get("/reports/:id", adminController.adminGetReport);



// middleware=passport.authenticate('local')->local strategy
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate admin user
 *     description: Authenticate admin user using email and password.
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
 *                     description: Admin user's email address.
 *                   password:
 *                     type: string
 *                     format: password
 *                     description: Admin user's password.
 *             example:
 *               formvalues:
 *                 email: admin@example.com
 *                 password: admin123
 *     responses:
 *       '200':
 *         description: Authentication successful. Admin user is logged in.
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
 *                   nullable: true
 *                   description: Error message if authentication fails.
 *                 user:
 *                   type: object
 *                   description: Details of the authenticated admin user.
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique identifier of the admin user.
 *                     Email:
 *                       type: string
 *                       description: The email address of the admin user.
 *                     
 *       '500':
 *         description: Internal Server Error. An unexpected error occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating the cause of the failure.
 */
router.post("/login", adminController.adminLoginPost);

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register new admin user
 *     description: Register a new admin user with username, email, phone, and password.
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
 *                     description: Admin user's username.
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: Admin user's email address.
 *                   phone:
 *                     type: string
 *                     description: Admin user's phone number.
 *                   password:
 *                     type: string
 *                     format: password
 *                     description: Admin user's password.
 *             example:
 *               formvalues:
 *                 username: adminuser
 *                 email: admin@example.com
 *                 phone: "+1234567890"
 *                 password: admin123
 *     responses:
 *       '200':
 *         description: Registration successful. Admin user is registered.
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
 *                   nullable: true
 *                   description: Error message if registration fails.
 *                 user:
 *                   type: object
 *                   description: Details of the registered admin user.
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique identifier of the admin user.
 *                     UserName:
 *                       type: string
 *                       description: The username of the admin user.
 *                     Email:
 *                       type: string
 *                       description: The email address of the admin user.
 *                     PhoneNumber:
 *                       type: string
 *                       description: The phone number of the admin user.
 *                     
 *       '500':
 *         description: Internal Server Error. An unexpected error occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating the cause of the failure.
 */
router.post("/register", adminController.adminRegisterPost);

/**
 * @swagger
 * /delete/{option}:
 *   post:
 *     summary: Delete an item
 *     description: Delete a listing, guest, host, or report based on the provided ID and item type.
 *     parameters:
 *       - in: path
 *         name: option
 *         required: true
 *         description: The type of item to delete (listing, guest, host, report)
 *         schema:
 *           type: string
 *       - in: body
 *         name: id
 *         required: true
 *         description: The ID of the item to delete
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *     responses:
 *       '200':
 *         description: Item deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: null
 *                   description: Null indicating no error occurred during deletion
 *                 msg:
 *                   type: string
 *                   description: Message indicating the item has been successfully deleted
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   description: Error message indicating an internal server error occurred during deletion
 */
router.post("/delete/:option", adminController.adminDelete);

/**
 * @swagger
 * /delete/report/{id}:
 *   delete:
 *     summary: Delete a report
 *     description: Delete a specific report by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the report to delete
 *     responses:
 *       '200':
 *         description: Successful response indicating the report was deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message indicating the report was deleted successfully
 *       '404':
 *         description: Report not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the report was not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating an internal server error occurred
 */
router.delete("/delete/report/:id", adminController.adminDeleteReport);

/**
 * @swagger
 * /verify/guest:
 *   post:
 *     summary: Verify a guest
 *     description: Update the verification status of a guest based on the provided guest ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the guest to be verified
 *     responses:
 *       '200':
 *         description: Guest verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the guest was successfully verified
 *                 message:
 *                   type: string
 *                   description: Message indicating the result of the verification process
 *       '404':
 *         description: No guest found with the provided ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates that no guest was found with the provided ID
 *                 message:
 *                   type: string
 *                   description: Message indicating the absence of a guest with the provided ID
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates that an error occurred during the verification process
 *                 message:
 *                   type: string
 *                   description: Message indicating an internal server error
 */
router.post("/verify/guest", adminController.adminVerifyGuest);

/**
 * @swagger
 * /verify/host:
 *   post:
 *     summary: Verify a host
 *     description: Update the verification status of a host based on the provided host ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the host to be verified
 *     responses:
 *       '200':
 *         description: Host verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the host was successfully verified
 *                 message:
 *                   type: string
 *                   description: Message indicating the result of the verification process
 *       '404':
 *         description: No host found with the provided ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates that no host was found with the provided ID
 *                 message:
 *                   type: string
 *                   description: Message indicating the absence of a host with the provided ID
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates that an error occurred during the verification process
 *                 message:
 *                   type: string
 *                   description: Message indicating an internal server error
 */
router.post("/verify/host", adminController.adminVerifyHost);

/**
 * @swagger
 * /verify/listing:
 *   post:
 *     summary: Verify a listing
 *     description: Update the verification status of a listing based on the provided listing ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the listing to be verified
 *     responses:
 *       '200':
 *         description: Listing verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the listing was successfully verified
 *                 message:
 *                   type: string
 *                   description: Message indicating the result of the verification process
 *       '404':
 *         description: No listing found with the provided ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates that no listing was found with the provided ID
 *                 message:
 *                   type: string
 *                   description: Message indicating the absence of a listing with the provided ID
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates that an error occurred during the verification process
 *                 message:
 *                   type: string
 *                   description: Message indicating an internal server error
 */
router.post("/verify/listing", adminController.adminVerifyListing);

/**
 * @swagger
 * /listing/search:
 *   post:
 *     summary: Search for listings
 *     description: Search for listings based on a given search term.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               searchTerm:
 *                 type: string
 *                 description: The search term to look for in listing titles
 *     responses:
 *       '200':
 *         description: Successful response with matching listing results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   description: An array of listing objects matching the search term
 *                   items:
 *                     $ref: '#/components/schemas/Listing'
 *       '404':
 *         description: No listings found matching the search term
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: null
 *                   description: Null indicating no matching listings found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating an internal server error occurred
 */
router.post("/listing/search", adminController.adminSearchListing);

/**
 * @swagger
 * /guest/search:
 *   post:
 *     summary: Search for guests
 *     description: Search for guests based on a given search term.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               searchterm:
 *                 type: string
 *                 description: The search term to look for in guest usernames
 *     responses:
 *       '200':
 *         description: Successful response with matching guest results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   description: An array of guest objects matching the search term
 *                   items:
 *                     $ref: '#/components/schemas/Guest'
 *       '404':
 *         description: No guests found matching the search term
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: null
 *                   description: Null indicating no matching guests found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating an internal server error occurred
 */
router.post("/guest/search", adminController.adminSearchGuest);
/**
 * @swagger
 * /host/search:
 *   post:
 *     summary: Search for hosts
 *     description: Search for hosts based on a given search term.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               searchterm:
 *                 type: string
 *                 description: The search term to look for in host usernames
 *     responses:
 *       '200':
 *         description: Successful response with matching host results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   description: An array of host objects matching the search term
 *                   items:
 *                     $ref: '#/components/schemas/Host'
 *       '404':
 *         description: No hosts found matching the search term
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: null
 *                   description: Null indicating no matching hosts found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating an internal server error occurred
 */
router.post("/host/search", adminController.adminSearchHost);

/**
 * @swagger
 * /report/search:
 *   post:
 *     summary: Search for reports
 *     description: Search for reports based on a given search term.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               searchterm:
 *                 type: string
 *                 description: The search term to look for in report descriptions
 *     responses:
 *       '200':
 *         description: Successful response with matching report results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   description: An array of report objects matching the search term
 *                   items:
 *                     $ref: '#/components/schemas/Report'
 *       '404':
 *         description: No reports found matching the search term
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: null
 *                   description: Null indicating no matching reports found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating an internal server error occurred
 */
router.post("/report/search", adminController.adminSearchReport);

/**
 * @swagger
 * /editPass:
 *   post:
 *     summary: Update admin user password
 *     description: Update the password of an admin user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: The current password of the admin user.
 *               newPassword:
 *                 type: string
 *                 format: password
 *                 description: The new password to be set for the admin user.
 *               id:
 *                 type: string
 *                 description: The ID of the admin user.
 *     responses:
 *       '200':
 *         description: Password updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the password was updated successfully.
 *                 message:
 *                   type: string
 *                   description: A message confirming the success of the password update operation.
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the user was not found.
 *                 message:
 *                   type: string
 *                   description: Error message indicating that the user was not found.
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if an internal server error occurred.
 *                 message:
 *                   type: string
 *                   description: Error message indicating the cause of the internal server error.
 */
router.post("/editPass", adminController.adminEditPass);

// router.post("/delete/:user",adminController.adminDeleteUser);


module.exports=router;