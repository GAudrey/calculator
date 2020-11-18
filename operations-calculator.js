/* éviter la répétition en suivant du même opérateur et de la virgule, vider l'input après avoir eu la solution*/

function safeEval(str){
    return Function('return ' + str)()
}

const contentButton = document.getElementsByClassName('btn');
const contentInput = document.querySelector('input');

for (let content of contentButton){
    content.addEventListener('click', () => {
        
        // si différent de AC et différent de =
        if(content.textContent !== 'AC' && content.textContent != '='){
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
            content.disabled = false;
        }

        // result
        else{
            contentInput.value = safeEval(contentInput.value);
            console.log('result')
                if(content.textContent !== 'AC'){
                    content.disabled = true;
                    console.log('disabled true')
                }
                else{
                    content.disabled = false;
                    console.log('disabled false')
                }
        }
    })
}