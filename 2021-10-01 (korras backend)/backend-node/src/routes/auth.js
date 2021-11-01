const router = require("express").Router()
const authController = require("../controllers/auth")
const validationMiddleware = require('../middleware/validationMiddleware');
const { check } = require("express-validator");

router.post("/login", [
    check("email")
        .isEmail()
        .withMessage("Must be correctly formatted e-mail"),
    // Passwordi pole vaja kontrollida, sest muidu ei saaks registreerudagi?
], validationMiddleware, authController.login)


router.post("/signup", [
    check("firstName")
        // Voib olla ka lyhemaid nimesid
        //.isLength({min: 3})
        //.withMessage("Must be at least 3 characters long")
        .trim()
        .exists()
        .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
        .withMessage("Must be alphabetic"),
    check("lastName")
        // Voib olla ka lyhemaid nimesid
        //.isLength({min: 3})
        //.withMessage("Must be at least 3 characters long")
        .trim()
        .exists()
        .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
        .withMessage("Must be alphabetic"),
    check("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Must be correctly formatted e-mail"),
    check("password")
        .isLength({min: 6})
        .withMessage("Must be at least 6 characters long")
        .isStrongPassword
        //.withMessage("Must be at least 8 characters long, have one uppercase letter, one number and one symbol")
], validationMiddleware, authController.signup)

module.exports = router