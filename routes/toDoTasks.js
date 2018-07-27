const express = require('express');
const router = express.Router();
const Task = require('../models/task');


router.get('/tasks', (req, res, next)=>{
    Task.find()
    .then((allTheTasks)=>{
        res.json(allTheTasks)
    })
    .catch((err)=>{
        res.json(err)
    })
});

//Create Tasks

router.post('/tasks/create', (req, res, next)=>{
    Task.create({
        title: req.body.title,
        description: req.body.description,
        doneyet: req.body.doneyet
    })
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
})


// router.get('/task/:id/edit',(req, res ,next)=>{
//     Task.findById(req.params.id)
//     .then((theTask)=>{
//         res.json(theTask)
//         })
//     .catch((err)=>{
//         res.json(theTask)
//     })
// })


//Edit Route Tasks

router.post('/tasks/:id/update', (req, res, next)=>{
    Task.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.author,
        doneyet: req.body.description
    })

    .then((theTask)=>{
        res.json('/task/'+ theTask._id)
    })
    .catch((err)=>{
        res.json(err);
    })  
})


//Delete Task Task

router.post('/tasks/:id/delete', (req, res, next)=>{
    Task.findByIdAndRemove(req.params.id)
    .then((reponse)=>{
        res.json('/tasks');
    })
    .catch((err)=>{
        res.json(err);
    })
})


//Task Details Route

router.get('/tasks/:id/details', (req, res, next)=>{
    const id = req.params.id

    Task.findById(id)
        .then((theTask)=>{
            res.json(theTask)
    })
        .catch((err)=>{
        res.json(err)
    })
})



module.exports = router;