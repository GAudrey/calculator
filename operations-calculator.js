function safeEval(str){
    return Function('return ' + str)()
}

const contentButton = document.querySelectorAll('button'); // all buttons
const contentInput = document.querySelector('.input-screen');
const contentHist = document.querySelector('.input-screen-hist');

for (let content of contentButton){
    content.addEventListener('click', () => {

        // if not AC and not =
        if(content.textContent !== 'AC' && content.textContent !== '='){
            // percent of
            if(content.textContent == '%'){
                contentInput.value = safeEval(contentInput.value)/100;
            }

            // add each button content but not % and =
            else{
                contentInput.value += content.textContent;
            }
        }
        
        // reset to 0
        else if(content.textContent == 'AC'){
            contentInput.value = '';
            for(let i = 0 ; i < contentButton.length ; i ++){
                contentButton[i].disabled = false;
            }
        }

        // result
        else{
            // add result in another input
            contentHist.value = contentInput.value + '=' + safeEval(contentInput.value);
            // clean input result
            contentInput.value = safeEval(contentInput.value);
            // loop to disable buttons
            for(let i = 0 ; i < contentButton.length ; i ++){
                if(contentButton[i].textContent !== 'AC'){
                    contentButton[i].disabled = true;
                }
                else if(contentButton[i].textContent == 'AC'){
                    contentButton[i].disabled = false;
                }
            }
        }
    })
}