import axios from "axios";

const API_URL = "/api/goals/";

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const getGoals = async (token) => {
  const response = await axios.get(API_URL, getConfig(token));
  return response.data;
};

const createGoal = async (goalData, token) => {
  const response = await axios.post(API_URL, goalData, getConfig(token));

  return response.data;
};

const updateGoal = async (goalId, goalData, token) => {
  const response = await axios.put(
    `${API_URL}${goalId}`,
    goalData,
    getConfig(token)
  );
  return response.data;
};

const deleteGoal = async (goalId, token) => {
  const response = await axios.delete(`${API_URL}${goalId}`, getConfig(token));
  return response.data;
};

const goalService = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};

export default goalService;
