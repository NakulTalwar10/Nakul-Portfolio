const addSkills = require("../models/addSkills")

exports.addSkills = async (req, resp) => {
    try {
        const { skills, rating } = req.body

        const skill = new addSkills({
            skills,
            rating
        })
        const savedSkill = await skill.save()
        resp.status(201).json(savedSkill)

    } catch (error) {
        resp.status(500).json({ error: 'An error occurred while creating the skill' })
    }
}

exports.getSkills=async(req,resp)=>{
    try{
        const skills= await addSkills.find()
        resp.status(200).json(skills)
    }catch(error){
        resp.status(500).json({error:'skills were not retrieved'})
    }
    
}