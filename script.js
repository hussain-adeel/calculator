const wrapper = document.getElementById("wrapper");

function evaluate(operator, value, value2)
{
    if (operator == "+")
        return +value + +value2;
    else if (operator == "-")
        return +value - +value2;
    else if (operator == "/")
        return +value / +value2;
    else if (operator == "*")
        return +value * +value2;
    

    return 0;
}
function isOperator(content) 
{
    if (content == '+' || content == '-' || content == '/' || content == "*")
        return true;
    return false;
}

wrapper.addEventListener('click', (event) => 
{
    // check if clicking background
    if (event.target.value == undefined) 
        return;

    let curr = event.target.value;

    switch (curr)
    {
        case "+":
        case "-":
        case "*":
        case "/":
            if (nums.length == 0 && lastNum != null)
            {
                nums.unshift(lastNum);
                nums.unshift(event.target.id);

                document.getElementById(event.target.id).classList.add("selected");

                lastNum = null;
            }
            else if (nums.length == 1)
            {
                decFlag = false; 
                nums.unshift(event.target.id);
                document.getElementById(event.target.id).classList.add("selected");
            }
            else if (isOperator(nums[0]) && !isOperator(event.target.value))
            {
                decFlag = false;
                document.getElementById(nums[0]).classList.remove("selected");
                let result = evaluate(nums.shift(), nums.shift(), lastNum);
                nums.unshift(result);
                nums.unshift(event.target.id);
                document.getElementById(nums[0]).classList.add("selected");
                display.textContent = result;
                lastNum = null;
            }
            console.log(nums);
            break;
        case "=":
            if (nums.length != 2)
                break;
            else if (lastNum != null)
            {
                decFlag = false;
                document.getElementById(nums[0]).classList.remove("selected");
                let result = evaluate(nums.shift(), nums.shift(), lastNum);
                nums.unshift(result);
                display.textContent = result;
                lastNum = null;
            }
            break;
        case "AC":
            while (nums.pop()) {}
            display.textContent = '0';
            lastNum = null;
            break;
        case "B":
            let result = display.textContent.substr(0, display.textContent.length - 1)
            display.textContent = result;
            if (!isNaN(nums[0]))
            {
                nums.shift();
                nums.unshift(result);
            }
            if (display.textContent == "")
            {
                display.textContent = '0';
            }
            lastNum = display.textContent.substr(0, display.textContent.length - 1);
            break;
        case ".":
            if (decFlag || lastNum == null)
                break;
            
            lastNum += curr;
            display.textContent = lastNum;
            decFlag = true;
            break;
        default:
            if (lastNum == null)
                lastNum = curr;
            else
                lastNum += curr;
            
            display.textContent = lastNum;
            break;
    }
});

let nums = [];
let lastNum = null;
const display = document.getElementById("display");
let decFlag = false;