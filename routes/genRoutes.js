const express=require("express");
const router=express.Router();
const genController=require("../controllers/genController");

/**
 * @swagger
 * /:
 *   get:
 *     summary: Render the first page for user interaction
 *     description: Renders the first page where users can make a choice or take an action.
 *     responses:
 *       '200':
 *         description: Success. The first page is rendered successfully.
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: HTML content of the first page.
 *       '500':
 *         description: Internal Server Error. An unexpected error occurred while rendering the page.
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: HTML content of the error page.
 */
router.get("/", genController.firstPage);

/**
 * @swagger
 * /contactus:
 *   get:
 *     summary: Render the contact page for user interaction
 *     description: Renders the contact page where users can find contact information or send messages.
 *     responses:
 *       '200':
 *         description: Success. The contact page is rendered successfully.
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: HTML content of the contact page.
 *       '500':
 *         description: Internal Server Error. An unexpected error occurred while rendering the page.
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: HTML content of the error page.
 */
router.get('/contactus', genController.contactPage);

/**
 * @swagger
 * /aboutus:
 *   get:
 *     summary: Render the About Us page for user reference
 *     description: Renders the About Us page to provide users with information about the application or company.
 *     responses:
 *       '200':
 *         description: Success. The About Us page is rendered successfully.
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: HTML content of the About Us page.
 *       '500':
 *         description: Internal Server Error. An unexpected error occurred while rendering the page.
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: HTML content of the error page.
 */
router.get('/aboutus', genController.aboutPage);

/**
 * @swagger
 * /faqs:
 *   get:
 *     summary: Render the FAQs page for user reference
 *     description: Renders the Frequently Asked Questions (FAQs) page to provide users with answers to common queries.
 *     responses:
 *       '200':
 *         description: Success. The FAQs page is rendered successfully.
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: HTML content of the FAQs page.
 *       '500':
 *         description: Internal Server Error. An unexpected error occurred while rendering the page.
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: HTML content of the error page.
 */
router.get('/faqs', genController.faqsPage);



module.exports=router;