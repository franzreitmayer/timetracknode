const router = require("express").Router();
const model = require("./trackings/model");


console.log('frontend/index.js');

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.get("/trackings/list", (req, res) => {
  const trackings = model.getAll();
  res.render(__dirname + "/trackings/view/list.pug", { trackings }); 
  }
);



module.exports =
  router ;