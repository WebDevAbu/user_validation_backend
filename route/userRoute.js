const express = require("express");
const router = express.Router();
const controller = require("../controller/userController");

router.get("/user/get/:id", controller.findOne);

router.get("/user/get", controller.findAll);

router.post("/user/post", controller.addData);

router.delete("/user/delete/:id", controller.deleteData);

router.put("/user/update/:id", controller.updateData);

router.get("/user/getCountry", controller.findAllCountry);

router.get("/user/getCountry/:code", controller.findOneCountry);

router.get("/user/getState/:code", controller.findState);

router.post("/user/getCity", controller.findCity);

module.exports = router;
