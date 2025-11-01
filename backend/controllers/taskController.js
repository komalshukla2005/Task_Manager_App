import Task from "../models/Task.js";

// getting all tasks 
export const getTasks = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = status && status !== "all" ? { status } : {};
    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    if (tasks.length === 0) {
      return res.status(200).json({
        success: true,
        count: 0,
        message: "There is no task, please create one first.",
        data: [],
      });
    }
    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

// creating the task
export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }

    const task = await Task.create({ title, description });
    res.status(201).json({
      success: true,
      message: "Task created successfully!",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

//updating the task 
export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const task = await Task.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    let message = "Task updated successfully!";
    if (status && status !== task.status) {
      message = "Task status updated successfully!";
    }

    res.status(200).json({
      success: true,
      message,
      data: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};

// deleting the task 
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    await task.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};
