const express=require("express");
const router=express.Router();
const adminController=require("../controllers/adminController");
// const passport=require("passport");



router.get("/homepage",adminController.adminHomePage);
router.get("/guestList",adminController.adminGuestlist);
router.get("/hostList",adminController.adminHostlist);
router.get("/reports",adminController.adminReports);
router.get("/reports/:id",adminController.adminGetReport);


// middleware=passport.authenticate('local')->local strategy

/**
   * @swagger
   * /admin/login:
   *   put:
   *     summary: login admin
   *     description: Endpoint to login admin
   *     tags: [Admin]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 description: email of admin
   *               password:
   *                 type: string
   *                 description: password of admin
   *     responses:
   *       '200':
   *         description: Admin logged in
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: integer
   *                   description: HTTP status code
   *                 message:
   *                   type: string
   *                   description: Response message
   */
router.post("/login",adminController.adminLoginPost);
router.post("/register",adminController.adminRegisterPost);
/**
   * @swagger
   * /admin/delete/:option:
   *   put:
   *     summary: Delete a user(guest/host) or a listing
   *     description: Endpoint to delete option specified
   *     tags: [Admin]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *                 description: ID of the option to delete
   *     responses:
   *       '200':
   *         description: Item deleted successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: integer
   *                   description: HTTP status code
   *                 message:
   *                   type: string
   *                   description: Response message
   */

router.post("/delete/:option",adminController.adminDelete);
router.post("/delete/report",adminController.adminDeleteReport);
/**
   * @swagger
   * /admin/verify/guest:
   *   put:
   *     summary: verify guest
   *     description: Endpoint to verify guest
   *     tags: [Admin]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *                 description: ID of the guest to verify
   *     responses:
   *       '200':
   *         description: Host verified successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: integer
   *                   description: HTTP status code
   *                 message:
   *                   type: string
   *                   description: Response message
   */
router.post("/verify/guest",adminController.adminVerifyGuest);
/**
   * @swagger
   * /admin/verify/host:
   *   put:
   *     summary: verify host
   *     description: Endpoint to verify host
   *     tags: [Admin]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *                 description: ID of the host to verify
   *     responses:
   *       '200':
   *         description: Host verified successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: integer
   *                   description: HTTP status code
   *                 message:
   *                   type: string
   *                   description: Response message
   */
router.post("/verify/host",adminController.adminVerifyHost);
/**
   * @swagger
   * /admin/verify/listing:
   *   put:
   *     summary: verify listing
   *     description: Endpoint to verify listing
   *     tags: [Admin]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *                 description: ID of the listing to verify
   *     responses:
   *       '200':
   *         description: Listing verified successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: integer
   *                   description: HTTP status code
   *                 message:
   *                   type: string
   *                   description: Response message
   */
router.post("/verify/listing",adminController.adminVerifyListing);
router.post("/listing/search",adminController.adminSearchListing);
router.post("/guest/search",adminController.adminSearchGuest);
router.post("/host/search",adminController.adminSearchHost);
router.post("/report/search",adminController.adminSearchReport);
router.post("/editPass",adminController.adminEditPass);
// router.post("/delete/:user",adminController.adminDeleteUser);




module.exports=router;