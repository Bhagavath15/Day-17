function name(){
    one()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>Happy Independence Day</h3>`
    },11000)
    
}
function one(){
    two()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>1</h3>`
    },10000)
    
}
function two(){
    three()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>2</h3>`
    },9000)
    
}
function three(){
    four()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>3</h3>`
    },8000)
    
}
function four(){
    five()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>4</h3>`
    },7000)
    
}
function five(){
    six()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>5</h3>`
    },6000)
    
}
function six(){
    seven()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>6</h3>`
    },5000)
    
}
function seven(){
    eight()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>7</h3>`
    },4000)
    
}
function eight(){
    nine()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>8</h3>`
    },3000)
}
function nine(){
    ten()
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>9</h3>`
    },2000)
}
function ten(){
    
    setTimeout(()=>{
        document.querySelector('.timer').innerHTML = `<h3>10</h3>`
    },1000)
}
name()
