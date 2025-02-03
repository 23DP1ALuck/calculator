const BUTTONS = document.querySelectorAll('.calc-button');
const EQUALS = document.getElementById('equals');
const CLEAR = document.getElementById('AC')
let output = document.getElementById('input-log');
const SIGNS = ["-", "+", "/", "*", "=", "."];

BUTTONS.forEach((button)=>{
    button.addEventListener('click', function(){
        let lastChar = output.textContent.slice(-1);
        // check for adding few signs together
        if (SIGNS.includes(button.textContent)){
            if(SIGNS.includes(lastChar)){
                return;
            }
        }
        output.textContent += button.textContent;
    })
})
EQUALS.addEventListener('click', function(){
    // check for divisision by zero exception etc.
    try{
        let exception_test = output.textContent;
        // Comment priekš Renāra. Šeit izmantoju regex, lai uzķert / 0 except. 
        // Vajadzēja ieguglēt, kā ar to Regex strādāt, kko sapratu, bet ar palidzību!
        if(/\/0([^.\d]|$)/.test(exception_test)){
            throw new Error("Cannot divide by zero!")
        }
        output.textContent = eval(exception_test);
    }catch(error){
        console.error("Invalid expression. There are some errors: ", error);
        output.textContent = 'Error!    ';
    }
})
CLEAR.addEventListener('click', function(){
    output.textContent = '';
})
