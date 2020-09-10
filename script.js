const wrapper = document.getElementById("wrapper");

wrapper.addEventListener('click', (event) => 
{
    if (event.target.value == undefined) 
    {
        return;
    }

    console.log(event.target.value); // <

    let display = document.getElementById("display");

    // operators
    if (event.target.value == "+")
    {
        nums.push(display.innerHTML);
        console.log(nums);
        display.textContent = event.target.value;
    }
    // AC
    else if (event.target.value == "AC") 
    {
        display.textContent = "0";
    }
    // B
    else if (event.target.value == "B")
    {

    }
    else if (event.target.value == "=")
    {
        display.textContent = "RESULT";
    }
    else 
    {
        if (display.innerHTML == "0")
        {
            display.textContent = event.target.value;
            return;
        }
        else {
            let newNode = document.createTextNode(event.target.value);
            display.appendChild(newNode);
        }
    }
});

let nums = [];