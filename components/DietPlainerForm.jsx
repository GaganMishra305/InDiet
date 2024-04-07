import React, { useState } from "react";
import axios from "axios";

const DietPlannerForm = () => {
  const [weight, setWeight] = useState("");
  const [targetCalories, setTargetCalories] = useState("");
  const [scoreData, setScoreData] = useState("");
  const [nameData, setNameData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        "weight": weight,
        "target_calories": targetCalories,
      }
      const res = await axios.post(
        "http://localhost:4000/plan_diet",
        json.stringfy(data),
       
      );
     console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-32 ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-200">
            Weight (in kg)
          </label>
          <input
            id="weight"
            name="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 px-6 block w-full border-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg h-12"
          />
        </div>
        <div>
          <label htmlFor="target_calories" className="block text-sm font-medium text-gray-200">
            Target Calories
          </label>
          <input
            id="target_calories"
            name="target_calories"
            type="text"
            value={targetCalories}
            onChange={(e) => setTargetCalories(e.target.value)}
            className="mt-1 block px-6 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg h-12"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 text-lg px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display Results */}
      {nameData && scoreData && (
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Result</h2>
          <p className="mt-2 text-sm text-gray-500">Name: {nameData}</p>
          <p className="mt-1 text-sm text-gray-500">Score: {scoreData}</p>
        </div>
      )}
    </div>
  );
};

export default DietPlannerForm;
