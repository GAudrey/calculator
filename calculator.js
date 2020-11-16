const buttonsArr = [
    ['(', ')', '%', 'AC'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', 'X'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
];

// calculator

    // main
    const newMain = document.createElement('main');
    newMain.className = 'container';
    
    document.body.appendChild(newMain);

    // div columns & card (calculator)
    const divColumns = document.createElement('div');
    divColumns.className = 'section columns is-centered';

    const divCard = document.createElement('div');
    divCard.className = 'card column is-one-fifth';

    newMain.appendChild(divColumns);
    divColumns.appendChild(divCard);

    // input
    const sectionInput = document.createElement('section');
    sectionInput.className = 'control';

    const inputArea = document.createElement('input');
    inputArea.className = 'input has-text-right';
    inputArea.type = 'text';
    inputArea.value = '0';
    inputArea.readOnly = true;

    divCard.appendChild(sectionInput);
    sectionInput.appendChild(inputArea);

    // section buttons
    const sectionButtons = document.createElement('section');
    sectionButtons.className = 'is-centered';

    divCard.appendChild(sectionButtons);
        
        // div buttons
        for (let i = 0; i < buttonsArr.length; i ++){
            const divButtons = document.createElement('div');
            divButtons.className = 'p-1';

            sectionButtons.appendChild(divButtons);

            // buttons
            for (let ib = 0; ib < buttonsArr[i].length; ib ++){
                const button = document.createElement('button');
                button.className = 'button';
                button.textContent = buttonsArr[i][ib];

                divButtons.appendChild(button);
            };
    };
