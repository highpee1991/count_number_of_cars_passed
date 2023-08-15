const displayNameinprev = document.querySelector(".prevName");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const counter = document.querySelector(".counter");

// save name in prev page
const savedName = () => {
  const retrievedata = JSON.parse(localStorage.getItem("savedInfo"));

  if (retrievedata) {
    retrievedata.forEach((item, ind) => {
      // parent div
      const itemDiv = document.createElement("div");

      // counter div
      const countHolder = document.createElement("div");
      countHolder.textContent = `Number oF Counted Cars: ${item.count}`;
      countHolder.classList.add("counter-holder");


      // date div
      const dateHolder = document.createElement("div");
      dateHolder.textContent = `Date: ${item.date}`;
      dateHolder.classList.add("date-holder");

      // time div
      const timeHolder = document.createElement("div");
      timeHolder.textContent = `Time: ${item.time}`;
      timeHolder.classList.add("time-holder");

      // name holder
      const nameHolder = document.createElement("div");
      nameHolder.textContent = `Name: ${item.name}`;
      nameHolder.classList.add("name-holder");

      // nest each div to its parent 
      itemDiv.appendChild(nameHolder);
      itemDiv.appendChild(dateHolder);
      itemDiv.appendChild(timeHolder);
      itemDiv.appendChild(countHolder);
      countHolder.classList.add("counter-item");
      itemDiv.classList.add(`savedItems`);

      //   add del button t each element
      const delBtn = document.createElement("button");
      delBtn.textContent = "Del";
      delBtn.addEventListener("click", () => deleteItem(ind));
      itemDiv.appendChild(delBtn);
      delBtn.classList.add("del-btn");
      displayNameinprev.appendChild(itemDiv);
    });
  }
};
document.addEventListener("DOMContentLoaded", savedName);

// function to trigger delete
const deleteItem = (ind) => {
  const savedData = JSON.parse(localStorage.getItem("savedInfo"));
  if (savedData && ind >= 0 && ind < savedData.length) {
    savedData.splice(ind, 1); // remove the item selected
    localStorage.setItem("savedInfo", JSON.stringify(savedData));
    location.reload(); // refresh the page to effect chnage
  }
};
