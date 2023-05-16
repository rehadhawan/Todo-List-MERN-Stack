import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    Taskno: Number,
    Taskname: String,
    Subject: String,
    ETC: {
        type : String, 
        default : '0'
    }
    

});

const task = mongoose.model('task', taskSchema);

export default task;

