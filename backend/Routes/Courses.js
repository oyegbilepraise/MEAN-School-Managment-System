const router = require("express").Router();
const Courses = require('../Models/courseschema')

router.post('/addcourse', async (req, res) => {
    console.log(req.body);
    try{
        const course = new Courses({
            coursecode: req.body.coursecode,
            courseunit: req.body.courseunit,
            coursetitle: req.body.coursetitle
        })
        // Create new course and send responce
        const regCourse = await course.save()
        res.status(200).json(regCourse)
    }catch(err){
        res.status(500).json(err)
    }
})

// fetch all courses
router.get('/allcourses', (req, res) => {
    try {
        Courses.find().then(response => {
            res.status(200).json(response)
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete courses
// router.delete('/delete', (req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

module.exports = router