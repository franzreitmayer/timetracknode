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

router.get("/trackings/edit/:id?", function(req, res) {
  const id = req.params.id;
  console.log(`ID: ${id}`);
  const tracking = model.getById(id);
  console.log(tracking);
  res.render(__dirname + "/trackings/view/form.pug", { tracking });
});



module.exports =
  router ;