const counter = document.querySelector(".counting");
const btnplus = document.querySelector(".add-btn");
const btndecrease = document.querySelector(".minus-btn");
const resetbtn = document.querySelector(".reset-btn");
const save = document.querySelector(".save");
const displayError = document.querySelector(".error");
const input = document.querySelector("#nameInput");
const dateElement = document.querySelector(".date");
const timeElement = document.querySelector(".time");
const prevElement = document.querySelector(".prev-saved");

let countHolder = 0;
// increament the number
increament = () => {
  countHolder++;
  counter.textContent = countHolder;
};
// attach the increament funtion to a button so it can count
btnplus.addEventListener("click", increament);

// decrement the counter funtion
decrease = () => {
  if (countHolder != 0) {
    countHolder--;
    counter.textContent = `${countHolder}`;
  }
};
// attach the decrease the the decrease btn
btndecrease.addEventListener("click", decrease);

let date, time;
// handle date
const handledateandTime = () => {
  const option = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  date = new Date().toLocaleString("en", option);
  time = new Date().toLocaleTimeString();

  dateElement.textContent = date;
  timeElement.textContent = time;
};

// update seconds
document.addEventListener("DOMContentLoaded", handledateandTime);
handledateandTime();
setInterval(handledateandTime, 1000);

const savedInfoKey = "savedInfo";

// handle save button
const saveData = () => {
  const name = input.value.trim();
  if (name) {
    const existingSavedData =
      JSON.parse(localStorage.getItem(savedInfoKey)) || [];
    const infoSaved = {
      date: date,
      time: time,
      name: name,
      count: countHolder,
    };

    // add new saved data to array
    existingSavedData.push(infoSaved);

    // save the updated array in local storage
    localStorage.setItem(savedInfoKey, JSON.stringify(existingSavedData));

    // call reset count to reset input and count
    resetCount();

    // if all information is filled
    displayError.textContent = "Succesfully Saved";
    displayError.style.backgroundColor = "green";
    displayError.style.padding = "0.5rem";
    displayError.style.borderRadius = "0.3rem";
  } else {
    displayError.textContent = "Please enter your Name";
    displayError.style.backgroundColor = "red";
    displayError.style.padding = "0.5rem";
    displayError.style.borderRadius = "0.3rem";
  }
};
// attach the saveData() to eventhandler (button)
save.addEventListener("click", saveData);

// Reset counter
resetCount = () => {
  countHolder = 0;
  counter.textContent = `${countHolder}`;
  input.value = "";
};
// attach reset to button
resetbtn.addEventListener("click", resetCount);
