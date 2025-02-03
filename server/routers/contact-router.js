const express = require("express")
const router = express.Router()

router.post("/contact",require("../controllers/contact-controller"))

module.exports=router;