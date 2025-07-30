// @desc       Get goals
// @route      GET /api/goals
// @access     Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "goalController: Getting goals" });
};

// @desc       Create goal
// @route      POST /api/goals
// @access     Private
const createGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(201).json({ message: "goalController: Goal created" });
};

// @desc       Update goal
// @route      PUT /api/goals/:id
// @access     Private
const updateGoal = (req, res) => {
  res
    .status(200)
    .json({ message: `goalController: Goal with ID ${req.params.id} updated` });
};

// @desc       Delete goal
// @route      DELETE /api/goals/:id
// @access     Private
const deleteGoal = (req, res) => {
  res
    .status(200)
    .json({ message: `goalController: Goal with ID ${req.params.id} deleted` });
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
