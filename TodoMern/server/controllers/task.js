

import taskData from '../models/task.js';

export const showtasks = async(req, res) => {
    try {
        const alltasks = await taskData.find();

        res.status(200).json(alltasks);
    } catch (error) {
        res.status(404).json({ message : error.message})
    }
   
}

export const createtask = async(req, res) => {
    const task = req.body;

    const newtask = new taskData(task);

    try {
        await newtask.save();
        res.status(201).json(newtask);

    } catch (error) {
        res.status(409).json({message : error.message})
        
    }
}


export const deletetask = async(req, res) => {
    const id = req.params.id;
  

    try {
        await taskData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted')
       

    } catch (error) {
        console.log(error);
        
    }
}


