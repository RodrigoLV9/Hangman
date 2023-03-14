const words=["HORCA","BALLENA","CODIGO","MARMOTA","DINOSAURIO","GOMA","PAPEL","TIJERA","PAJAROS","ANFIBIO","MAMIFERO","ORCA","CUADERNO","ESPECTRO","BOTELLA","HABAS"];
const num1=words.length
let num2=Math.round(Math.random()*num1)
let word=(words[num2]).split("")
let numLetters=word.length + 1

const gameLetters=document.getElementById('game__letters')
word.forEach(()=>{
    const containerLetter=document.createElement('DIV')
    const line=document.createElement('DIV')
    gameLetters.appendChild(containerLetter)
    containerLetter.appendChild(line)
    containerLetter.classList.add('container-letter')
    line.classList.add('line')

})

const gameLettersContainer = document.querySelector(".game__letters");
const childElements = [...gameLettersContainer.querySelectorAll(".container-letter")];
let num4=0
const abc=document.getElementById('abc')
abc.addEventListener('click',(e)=>{
    if(e.target && e.target.classList.contains('abc__items')){
        let letra=e.target.textContent
        let found=false
        word.forEach((i,index)=>{
            if(i==letra){
                childElements[index].textContent=letra
                e.target.classList.add("abc__items-correct")
                found=true
            }
        })
        if(!found){
            e.target.classList.add("abc__items-incorrect")
            if(num4>=6){
                console.log(num4)
                location.reload()
            }
            stickman.children[num4].style.scale=1
            num4++
        }
    }
})

console.log(words[num2])
const stickman=document.getElementById('stickman')
const buttonCompleted=document.getElementById('button-completed')
const buttonNext=document.getElementById('button-next')
let wordCompleted

buttonCompleted.addEventListener('click',()=>{
    const elements=[]
    childElements.forEach((element,id)=>{
        elements.push(element.textContent)
        wordCompleted=elements.join("")
    })
    console.log(word.join(""))
    if(wordCompleted==word.join("")){
        location.reload() 
    }
})

buttonNext.addEventListener('click',()=>{
    location.reload()
})



