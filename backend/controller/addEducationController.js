const addEducation = require("../models/addEducation")

exports.addEducation = async (req, resp) => {
    try {
        const { session, school, description, course } = req.body

        const Education = new addEducation({
            session,
            school,
            description,
            course
        })

        const newEducation = await Education.save()
        resp.status(201).json(newEducation)

    } catch (error) {
        resp.status(500).json({ error: 'An error occurred while creating the education' });
    }
}

exports.getEducation = async (req, resp) => {
    try {
        const education = await addEducation.find()
        resp.status(200).json(education)
    } catch (error) {
        console.log("Error in geting data", error);
    }

}