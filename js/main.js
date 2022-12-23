function pswFunction() {
    var x = document.getElementById("pswInput");
    var e = document.getElementById("eye1");
    e.classList.toggle("eye2");
    if (x.type === "text") {
        x.type = "password";

    } else {
        x.type = "text";
    }
  }


  function inputTouch(){
    var element = document.getElementById("eye1")
    element.style.opacity = "1";

  }






