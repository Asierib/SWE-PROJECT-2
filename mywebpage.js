const createbutton = function(name){
    let textcontent = `<input type= "button" value=${name} class="btn1page"> `;
    document.querySelector(".btns1").innerHTML += textcontent;
}
/*
const firstpage_selectdj = function(){
        let btn = document.getElementById("")
        addEventListener("click",function(e){
        this.document.getElementById("firstpage").style.display = "none";
    }
    )} */
        

const createbutton2 = function(name, odd_even, text){
    let textcontent = `<section class = "button-container_${odd_even}">
    <input type= "button" value=${name} class="btn2page${odd_even}">
    <br><h2> ${name} </h2> <br> <p> ${text} </p> </section> `;
    document.querySelector(".btns2").innerHTML += textcontent;

}

