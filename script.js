const wrapper = document.getElementById("wrapper");

function evaluate(operator, value, value2) 
{
    if (operator == "+")
    {
        return +value + +value2;
    }
    if (operator == "-")
    {
        return +value - +value2;
    }
    if (operator == "/")
    {
        return +value / +value2;
    }
    if (operator == "*")
    {
        return +value * +value2;
    }

    return 0;
}
function validate(content) {
    if (isNaN(display.textContent) || display.textContent == '0')
        return false;
    return true;
}
function isOperator(content) {
    if (content == '+' || content == '-' || content == '/' || content == "*")
        return true;
    return false;
}

wrapper.addEventListener('click', (event) => 
{
    if (event.target.value == undefined) 
        return;
    

    console.log(event.target.value); // <

    const display = document.getElementById("display");
    let decFlag = false;

    switch (event.target.value)
    {
        case "+":
            if (!validate(event.target.value))
                break;
            nums.unshift(display.textContent);
            console.table(nums)
            display.textContent = '+';
            break;
        case "-":
            if (!validate(event.target.value))
                break;
            nums.unshift(display.textContent);
            console.table(nums)
            display.textContent = '-';
            break;
        case "AC":
            while (nums.pop()) { }
            display.textContent = '0';
            console.table(nums);
            break;
        case "B":
            if (isOperator(display.textContent))
                break;
            display.textContent = display.textContent.substr(0, display.textContent.length - 1);
            if (display.textContent == "")
                display.textContent = '0';
            break;
        default:
            if (isOperator(display.textContent))
            {
                display.textContent = evaluate(display.textContent, event.target.value, nums.pop());
            }
            else if (display.innerHTML == '0')
                display.textContent = event.target.value;
            else if (display.innerHTML >= 9999999999999999)
                break;
            else 
            {
                let textNode = document.createTextNode(event.target.value);
                display.appendChild(textNode);
            }

            break;
    }
});

let nums = [];