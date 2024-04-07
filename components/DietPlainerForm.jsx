import React, { useState } from "react";
import axios from "axios";

const DietPlannerForm = () => {
  const [weight, setWeight] = useState("");
  const [targetCalories, setTargetCalories] = useState("");
  const [scoreData, setScoreData] = useState("");
  const [nameData, setNameData] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("weight", weight);
      formdata.append("target_calories", targetCalories);
      if (!file) {
        return;
      }
      formdata.append("image", file);

      const res = await axios.post(
        "http://localhost:4000/plan_diet",
        formdata
      );
      const { name, score } = res.data;
      setScoreData(score);
      setNameData(name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Weight (in kg)
          </label>
          <input
            id="weight"
            name="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="target_calories" className="block text-sm font-medium text-gray-700">
            Target Calories
          </label>
          <input
            id="target_calories"
            name="target_calories"
            type="text"
            value={targetCalories}
            onChange={(e) => setTargetCalories(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
