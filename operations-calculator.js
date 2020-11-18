/* éviter la répétition en suivant du même opérateur et de la virgule, vider l'input après avoir eu la solution*/

function safeEval(str){
    return Function('return ' + str)()
}

const contentButton = document.querySelectorAll('button'); // all buttons
const contentInput = document.querySelector('input');

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