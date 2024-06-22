
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
  document.querySelector("title").innerHTML = "CREATE ACCOUNT";
  document.querySelector('link[rel="icon"]').href =
    "Logo/Logo for create account.webp";
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
  document.querySelector("title").innerHTML = "SIGN IN";
  document.querySelector('link[rel="icon"]').href =
    "Logo/Logo for sign in.webp";
});

let newName = document.getElementById("name");
let newEmail = document.getElementById("email");
let newPW = document.getElementById("password");
let create_account = document.getElementById("create_account");

create_account.addEventListener("click", () => {
  let name = newName.value;
  let email = newEmail.value;
  let password = newPW.value;
  localStorage.setItem("Name", name);
  localStorage.setItem("Email", email);
  localStorage.setItem("Password", password);
  if (name == "" || email == "" || password == "") {
    alert("Please fill all the fields");
  } else {
    alert("Account created successfully");
    window.location.href = "Dashboard/Dashboard.html";
  }
});

let check_email = document.getElementById("check_email");
let check_password = document.getElementById("check_password");
let signin_btn = document.getElementById("sign-in_btn");

signin_btn.addEventListener("click", () => {
  let email = check_email.value;
  let password = check_password.value;
  if (email == "" || password == "") {
    alert("Please fill all the fields");
  } else {
    if (localStorage.getItem("Email") == email) {
      if (localStorage.getItem("Password") == password) {
        alert("Sign in successfully");
        window.location.href = "Dashboard/Dashboard.html";
      } else {
        alert("Wrong password");
      }
    } else if (
      localStorage.getItem(email) !== email &&
      localStorage.getItem("Password") !== password
    ) {
      alert("Please create a account");
      container.classList.add("active");
    } else {
      alert("Wrong email");
    }
  }
});

//     Forget Password

//  styling

let FP = document.getElementById("fp");
let FF = document.getElementById("FF");

FP.addEventListener("click", () => {
  document.querySelector("title").innerHTML = "FORGET PASSWORD";
  document.querySelector('link[rel="icon"]').href =
    "Logo/Logo for forget password.webp";
  container.style.opacity = "0%";
  FF.style.opacity = "100%";
  currentPassword.innerHTML = " ";
  newPassword.innerHTML = " ";
  reenterPassword.innerHTML = " ";
});

//   Change Password

let currentPassword = document.getElementById("cpass");
let newPassword = document.getElementById("npass");
let reenterPassword = document.getElementById("cnpass");
let confirms = document.getElementById("forget_btn");

confirms.addEventListener("click", () => {
  let Current = currentPassword.value;
  let New = newPassword.value;
  let re_enter = reenterPassword.value;

  if (Current == "" || New == "" || re_enter == "") {
    alert("Please fill all the fields");
  } else {
    if (localStorage.getItem("Password") == Current) {
      if (New == re_enter) {
        localStorage.setItem("Password", New);
        alert("Password changed successfully");
        let ok = document.getElementById("okay");
        ok.style.top = "-50px";
        ok.style.left = "-50px";
        ok.style.width = "400px";
        ok.style.height = "500px";
        ok.style.borderRadius = "30px";

        //    animation

        var start = 100;
        var mid = 145;
        var end = 250;
        var width = 20;
        var leftX = start;
        var leftY = start;
        var rightX = mid - width / 2.7;
        var rightY = mid + width / 2.7;
        var animationSpeed = 20;

        var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
        ctx.lineWidth = width;
        ctx.strokeStyle = "rgba(0, 150, 0, 1)";

        for (i = start; i < mid; i++) {
          var drawLeft = window.setTimeout(function () {
            ctx.beginPath();
            ctx.moveTo(start, start);
            ctx.lineTo(leftX, leftY);
            ctx.stroke();
            leftX++;
            leftY++;
          }, 1 + (i * animationSpeed) / 3);
        }

        for (i = mid; i < end; i++) {
          var drawRight = window.setTimeout(function () {
            ctx.beginPath();
            ctx.moveTo(leftX, leftY);
            ctx.lineTo(rightX, rightY);
            ctx.stroke();
            rightX++;
            rightY--;
          }, 1 + (i * animationSpeed) / 3);
        }
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Wrong password");
    }
  }
  currentPassword.innerHTML = " ";
  newPassword.innerHTML = " ";
  reenterPassword.innerHTML = " ";
});

let okaybtn = document.getElementById("okaybtn")

okaybtn.addEventListener("click", ()=>{
  container.style.opacity = "100%"
  FF.style.opacity = "0%"
})
