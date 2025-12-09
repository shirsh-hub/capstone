
let navLinks = document.querySelectorAll("nav a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {

 
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }

 
    this.classList.add("active");
  });
}


let form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill all required fields");
    } else {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
}
