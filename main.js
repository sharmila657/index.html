let helloText = document.getElementById("helloText")
let helloText2 = helloText.innerHTML
let mybutton = document.getElementById("button")
  mybutton.addEventListener("click", function () {
    console.log("Clicked on button");
    helloText.innerHTML = "hello Sharmila"
  });
 
let newbutton = document.getElementById("new")
  newbutton.addEventListener("click", function(){
    helloText.innerHTML = helloText2
  })

  
