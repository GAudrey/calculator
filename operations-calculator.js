function safeEval(str){
    return Function('return ' + str)()
}

const contentButton = document.querySelectorAll('button');
const contentInput = document.querySelector('input');

for (let content of contentButton){
    content.addEventListener('click', () => {
        // reset to 0
        if(content.textContent == 'AC'){
            contentInput.value = '';
        }

        // result
        else if(content.textContent == '='){
            contentInput.value = safeEval(contentInput.value)
        }

        // add each button content but not =
        else{
            contentInput.value += content.textContent;
        }
    })
}
