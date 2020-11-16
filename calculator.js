const buttons = [
    ['(', ')', '%', 'AC'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', 'X'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
];

// calculator
    // inside body
    const body = document.querySelector('body');

    // main
    const newMain = document.createElement('main');
    newMain.className = 'container';

    // div columns & card (calculator)
    const divColumns = document.createElement('div');
    divColumns.className = 'section columns is-centered';

    const divCard = document.createElement('div');
    divCard.className = 'card column is-one-fifth';

    // input
    const sectionInput = document.createElement('section');
    sectionInput.className = 'control';

    const inputArea = document.createElement('input');
    inputArea.className = 'input has-text-right';
    inputArea.type = 'text';
    inputArea.value = '0';
    inputArea.readOnly = true;

    // buttons
    const sectionButtons = document.createElement('section');
    sectionButtons.className = 'is-centered';
        // div
        for (){

    };
    

    // arborescence
        // main
        body.appendChild(newMain);
        // calculator
        newMain.appendChild(divColumns);
        divColumns.appendChild(divCard);
        // input
        divCard.appendChild(sectionInput);
        sectionInput.appendChild(inputArea);
        // buttons
        divCard.appendChild(sectionButtons);