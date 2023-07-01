const addProjects=require('../models/addProject')

exports.addProjects=async(req,resp)=>{
try{
    const{title,image,link,description,category}=req.body
    const project=new addProjects({
        title,
        image,
        link,
        description,
        category
    })

    const newProject= await project.save()
    resp.status(201).json(newProject)
}catch (error){
    resp.status(500).json({ error: 'An error occurred while creating the project' });
}
}

exports.getProjects = async (req, resp) => {
    try {
      const projects = await addProjects.find();
      resp.status(200).json(projects);
    } catch (error) {
      resp.status(500).json({ error: 'An error occurred while retrieving projects' });
    }
  };