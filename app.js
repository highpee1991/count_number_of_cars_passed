const counter = document.querySelector(".counter");
const btnplus = document.querySelector(".add-btn");
const btndecrease = document.querySelector(".minus-btn");
const resetbtn = document.querySelector(".reset-btn");



let countHolder = 0;
// increament the number
increament = () => 
{
    countHolder++;
    counter.textContent = `Number Cars Passed: ${countHolder}`;
}
// attach the increament funtion to a button so it can count
btnplus.addEventListener("click", increament);

// decrement the counter funtion
decrease = () =>
{
    if (countHolder != 0)
    {
        countHolder--;
        counter.textContent = `Number Cars Passed: ${countHolder}`;
    }
}
// attach the decrease the the decrease btn
btndecrease.addEventListener("click", decrease);


// Reset counter
resetCount = () => 
{
    countHolder = 0;
    counter.textContent = `Number Cars Passed: ${countHolder}`;
}
// attach reset to button
resetbtn.addEventListener("click", resetCount)