const buttonsArr = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

// calculator

    // main
    const newMain = document.createElement('main');
    newMain.className = 'grid';
    
    document.body.appendChild(newMain);

    // input
    const divInput = document.createElement('div');
    divInput.className = 'input-zone';

    const newInput = document.createElement('input');
    newInput.className = 'input-screen';
    newInput.type = 'text';
    newInput.value = '';
    newInput.readOnly = true;

    newMain.appendChild(divInput);
    divInput.appendChild(newInput);

    // buttons
    for (let i = 0; i < buttonsArr.length; i ++){
        const buttons = document.createElement('button');
        buttons.className = 'btn';
        buttons.textContent = buttonsArr[i];

        newMain.appendChild(buttons);
    };