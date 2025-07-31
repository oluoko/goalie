const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc       Get goals
// @route      GET /api/goals
// @access     Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ goals, message: " Successfully got goals" });
});

// @desc       Create goal
// @route      POST /api/goals
// @access     Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res
    .status(201)
    .json({ goal, message: { text: `Goal with ID: '${goal._id}' created` } });
});

// @desc       Update goal
// @route      PUT /api/goals/:id
// @access     Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    {
      text: req.body.text,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    updatedGoal,
    message: ` Goal with ID: '${req.params.id}' updated`,
  });
});

// @desc       Delete goal
// @route      DELETE /api/goals/:id
// @access     Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json({
    id: req.params.id,
    message: ` Goal with ID: '${req.params.id}' deleted`,
  });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
