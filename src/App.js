import React, { useState } from "react";
import "./styles.css";
var foodDictionary = {
  "🥞": "Pancakes",
  "🍞": "Bread",
  "🍄": "Mushroom",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🥚": "Egg",
  "🍣": "Sushi",
  "🍦": "Ice Cream",
  "🍫": "Chocolate Bar"
};

var foodWeHave = Object.keys(foodDictionary);

export default function App() {
  const [food, setFood] = useState("");
  function foodInputHandler(event) {
    var userInput = event.target.value;
    var food = foodDictionary[userInput];

    if (userInput in foodDictionary) {
      setFood(food);
    } else {
      setFood("Can't intrepret this");
    }
  }

  function foodClickHandler(emoji) {
    var food = foodDictionary[emoji];
    setFood(food);
  }

  return (
    <div className="App">
      <title>Food</title>
      <h1>Are you are foodie?</h1>
      <input
        onChange={foodInputHandler}
        style={{ size: "1rem", width: "80%" }}
      />
      <h2>{food}</h2>
      <h2>Food We Have</h2>
      {foodWeHave.map(function (food) {
        return (
          <span
            onClick={() => foodClickHandler(food)}
            style={{ fontSize: "3rem", padding: "0.5rem" }}
            key={food}
          >
            {food}
          </span>
        );
      })}
    </div>
  );
}
