// let bar = document.querySelector(".mobile-toggle");
// bar.classList.hide(".fa-bars");

window.addEventListener("scroll", () => {
   const header = document.querySelector("#header");
   const BarNav = document.querySelector("#fa-bars");
   const BarNav2 = document.querySelector(".fa-bars");
   const SMH = document.querySelector(".similar-hover1");
   const SMH2 = document.querySelector(".similar-hover2");
   
   // shorting and filter component
   const ShFil = document.querySelector(".custom-sh-fill");

   if(window.scrollY > 0) {
      header.style.background = "black";
      header.style.transition = "1s ease-out";
      header.style.position = "fixed";
      header.style.width = "100%";
      document.getElementById("logo").style.color = "white";
      BarNav2.style.color = "white";
      BarNav.style.color = "white";
      SMH.style.color = "white";
      SMH2.style.color = "white";

      

      if(window.innerWidth < 900)
      {
         BarNav.style.transform = "translate(20px, -50px)";
         BarNav.style.marginRight = "5px";
         console.log("scroll mobile");
         
      }


   }
   else {
      header.style.background = "white";
      header.style.transition = "0.3s ease-out";
      header.style.position = "relative";
      document.getElementById("logo").style.color = "black";
      BarNav.style.transform = "translate(30px, -50px)";
      BarNav.style.marginRight = "0px";
      BarNav2.style.color = "black";
      BarNav.style.color = "black";
      SMH.style.color = "black";
      SMH2.style.color = "black";

   }


})


// side navigation script


function clickedNav()
{
   document.getElementById("Sidenav").style.width = "0";
}

function openNav() {
   document.getElementById("Sidenav").style.width = "400px";
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
 
function closeNav() {
   document.getElementById("Sidenav").style.width = "0";
   document.body.style.backgroundColor = "#ffff";
}

// open nav mobile
function OpenNavMobile()
{
   document.getElementById("Sidenav").style.width = "100%";
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


