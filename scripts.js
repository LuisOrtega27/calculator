'use strict'

const CALC_BTNS = document.querySelectorAll('.calc-btn')

const CALC_SCREEN = document.querySelector('#calc-screen')

const CALCULATOR = document.querySelector('.calculator')


const  PATTERN = /(\s?[0-9 \s \+ \- \* \/ = .]*\s?)/


const addToScreen = (value)=> CALC_SCREEN.value += value



const doSomeMath = (value)=>{

    
    // "calcular" el valor 
    if(value === '=' || value === 'keyless'){
        
        let currentValue = CALC_SCREEN.value

        
        if(!PATTERN.test(currentValue)) return console.log(currentValue)

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

CALCULATOR.addEventListener('submit', (event)=>{
    event.preventDefault()
    doSomeMath('keyless')
})

CALC_BTNS.forEach( btn => {

    btn.addEventListener( 'click', (event)=>{

        if(event.target.value === '=' || event.target.value === '<<') 
            return doSomeMath(event.target.value)

        addToScreen(event.target.value)
        
    } )
    
} )