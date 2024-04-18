const header = document.getElementById("header");
header.innerHTML = `
<a href="/index.html" id="main-index">main</a>

<div class="dropdown">
<a class="dropdown-button">Mini proyects</a>
  <div class="content">
    <a href="/random-color/randomColor.html">Random Color</a>
    <a href="/color-rgb/color-rgb.html">Color RGB</a>
    <a href="">hola</a>
    <a href="">Hola</a>
  </div>
</div>

`;

//  <button type="button" class="dropdown-button">Mini proyects</button>

/**
 * 
 *   class="dropdown-button"  ->   .dropdown-button 
 * 
 *  */ 
























/*


const profile = document.querySelector('.profile');
const dropdown = document.querySelector('.dropdown__wrapper');

profile.addEventListener('click', () => {
    dropdown.classList.remove('none');
    dropdown.classList.toggle('hide');
})


document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isProfileClicked = profile.contains(event.target);

    if (!isClickInsideDropdown && !isProfileClicked) {
        dropdown.classList.add('hide');
        dropdown.classList.add('dropdown__wrapper--fade-in');
    }
});






<style>
div {background-color: green;}
div a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 15px;
  display:inline-block;
}
ul {
  display: inline;
  margin: 0;
  padding: 0;
}
ul li {display: inline-block;}
ul li:hover {background: #555;}
ul li:hover ul {display: block;}
ul li ul {
  position: absolute;
  width: 200px;
  display: none;
}
ul li ul li { 
  background: #555; 
  display: block; 
}
ul li ul li a {display:block !important;} 
ul li ul li:hover {background: #666;}
</style>
</head>
<body>



//////////////////////////////////////////////
<div>
  <a href="#">Useless Link</a>
  <ul>
    <li>
      <a href="#">Dropdown Link</a>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </li>
  </ul>
</div>


<span class="navigation__group">
<img class="icon" src="assets/message.svg" alt="Message">
<img class="icon" src="assets/notification.svg" alt="Notification">
<img class="profile" src="assets/joe-doe-profile.png" alt="Joe Doe Picture">
</span>
<div class="dropdown__wrapper hide dropdown__wrapper--fade-in none">
<div class="dropdown__group">
    <div class="user-name">Joe Doe</div>
    <div class="email">joe.doe@atheros.ai</div>
</div>
<hr class="divider">
<nav>
    <ul>
        <li>
            <img src="assets/profile.svg" alt="Profile"> My Profile
        </li>
        <li>
            <img src="assets/settings.svg" alt="Settings"> Settings
        </li>
    </ul>
    <hr class="divider">
    <ul>
        <li>
            <img src="assets/tutorials.svg" alt="Tutorials"> Tutorials
        </li>
        <li>
            <img src="assets/help.svg" alt="Help"> Help Center
        </li>
    </ul>
    <hr class="divider">
    <ul>
        <li>
            <img src="assets/premium.svg" alt="Premium">Go Premium
        </li>
        <li style="color: #E3452F;">
            <img src="assets/logout.svg" alt="Log Out">Log out
        </li>
    </ul>
</nav>
</div>*/