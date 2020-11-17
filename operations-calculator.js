const contentButton = document.querySelectorAll('button');
const contentInput = document.querySelector('input');

for (let content of contentButton){
    content.addEventListener('click', () => {
        // suppress 0
        if(contentInput.value == '0'){
            contentInput.value = '';
        } 

        contentInput.value += content.textContent;

        // reset to 0
        if(content.textContent == 'AC'){
            contentInput.value = '0';
        }

        // result
        if(content.textContent == '='){
            function safeEval(str){
                return Function('return ' + str());
            };
        }
    })
}
