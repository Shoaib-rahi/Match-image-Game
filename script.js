let cardsArray = [
    {
        name:"HTML",
        img:"images/html.png"
    },
    {
        name:"CSS",
        img:"images/css.png"
    },
    {
        name:"Javascript",
        img:"images/javascript.png"
    },
    {
        name:"Node js",
        img:"images/node.png"
    },
    {
        name:"MongoDb",
        img:"images/mongodb.png"
    },
    {
        name:"Php",
        img:"images/php.png"
    },
    {
        name:"java",
        img:"images/java.png"
    },
    {
        name:"my SQL",
        img:"images/mysql.png"
    },

]


const parentDiv = document.querySelector("#cart-section");



const gameCard = cardsArray.concat(cardsArray);



const shuffleCard = Array.from(gameCard).sort(() => .5  - Math.random())
let cickCount  =0;
let firstCard ="";
let secondCard = "";

const card_matches = () => {
    let card_selectd =  document.querySelectorAll(".cart-selected")
    card_selectd.forEach((currElem) => {
        currElem.classList.add("cart-match")
    })
}

const reset = () => {
    cickCount = 0;
    firstCard = "";
    secondCard = ""
    let card_selectd =  document.querySelectorAll(".cart-selected")
    card_selectd.forEach((currElem) => {
        currElem.classList.remove("cart-selected")
    })
}


parentDiv.addEventListener("click",function(event){
    let curCard = event.target;
    if(curCard.id === "cart-section"){ return false}
cickCount++;
if(cickCount < 3){
if(cickCount === 1){

    firstCard = curCard.parentNode.dataset.name;
    curCard.parentNode.classList.add("cart-selected")
}else{
    
    secondCard = curCard.parentNode.dataset.name;
    curCard.parentNode.classList.add("cart-selected")
}
if(firstCard !== "" && secondCard !== ""){
    if(firstCard === secondCard){
        // curCard.classList.add("cart-match");
      setTimeout(() => {
        card_matches()
        reset()
      },1000)
    }else{
        setTimeout(() => {
            reset()
          },1000)
    }
}
}




})



for(let i = 0;i < shuffleCard.length;i++){
    const childDiv = document.createElement("div");
    childDiv.classList.add("cart");
    childDiv.dataset.name = shuffleCard[i].name;
    // childDiv.style.backgroundImage = `url(${shuffleCard[i].img})`

    const front_div = document.createElement("div");
    front_div.classList.add("front-cart");


    const back_div = document.createElement("div");
    back_div.classList.add("back-cart");
    back_div.style.backgroundImage = `url(${shuffleCard[i].img})`

    parentDiv.appendChild(childDiv)
    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}