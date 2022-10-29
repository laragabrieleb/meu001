

    //quantos dias faltam para o natal
    //data do natal 25/12/ano-atual
    //data de hoje
    //data do natal menos a data de hoje
    //transformar pra dias


    window.onload = function(){
        
    var hoje = new Date();

    var natal = new Date(`${hoje.getFullYear()}-12-25`);

    var milisegundosFaltantesProNatal = natal - hoje;

    var diasFaltantesProNatal = milisegundosFaltantesProNatal * 1.1574074074067E-8;

    diasFaltantesProNatal = parseInt(diasFaltantesProNatal + 1);

    var span = document.getElementById('timer-text');

    var text = document.createTextNode(`Faltam ${diasFaltantesProNatal} dias para o Natal !`);

    if(diasFaltantesProNatal == 0)
    {
        text = document.createTextNode(`Feliz Natal !`);
    }

    
    
    span.appendChild(text);

    }


   

