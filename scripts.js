'use strict'

const CALC_BTNS = document.querySelectorAll('.calc-btn')

const CALC_SCREEN = document.querySelector('#calc-screen')


const addToScreen = (value)=>{

    CALC_SCREEN.value += value

}




const doSomeMath = (value)=>{

    
    // "calcular" el valor 
    if(value === '='){
        
        let currentValue = CALC_SCREEN.value

        CALC_SCREEN.value = null
        
        CALC_SCREEN.value = eval(currentValue)

    }


    // borrar ultimo caracter de la pantalla
    if(value === '<<'){

        let currentValue = CALC_SCREEN.value

        currentValue = currentValue.slice( 0, currentValue.length-1)
        
        CALC_SCREEN.value = null
        
        CALC_SCREEN.value = currentValue
                
    }

}



CALC_BTNS.forEach( btn => {

    btn.addEventListener( 'click', (event)=>{

        if(event.target.value === '=' || event.target.value === '<<') 
            return doSomeMath(event.target.value)

        addToScreen(event.target.value)
        
    } )
    
} )