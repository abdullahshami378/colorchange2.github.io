const getcolor =()=>{
    const randomnumber=Math.floor( Math.random() * 16777215);
    const randomCode="#" +randomnumber.toString(16);
    console.log(randomnumber,randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText = randomCode;


    navigator.clipboard.writeText(randomCode)
}


document.getElementById("btn").addEventListener(
    "click",
    getcolor

)
getcolor();