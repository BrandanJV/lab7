const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Task = require('../model/task');


router.get('/', async function(req,res){
  let tasks = await Task.find();
  res.render('index', {tasks});
});

router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.get("/delete/:id", async function(req, res){
  let id = req.params.id
  await Task.remove({_id:id})
  res.redirect("/");
})

router.get("/edit/:id", async function(req, res){
  let id = req.params.id
  let task = await Task.findById(id)
  res.render("edit", {task});
})

router.post('/newPost', async function(req, res){

  let task = new Task(req.body);
  task 
  await task.save();
  res.redirect("/");
})

router.post("/edit/:id", async function(req, res){
  let id = req.params.id    

  /* let task = await Task.findById(id)
   task.title = req.body.title
   task.description = req.body.description*/

  await   Task.updateOne({_id: id},req.body)
  res.redirect("/")
})





module.exports = router;