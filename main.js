// let bar = document.querySelector(".mobile-toggle");
// bar.classList.hide(".fa-bars");

window.addEventListener("scroll", () => {
   const header = document.querySelector("#header");
   const BarNav = document.querySelector("#fa-bars");
   const BarNav2 = document.querySelector(".fa-bars");
   const item = document.querySelector(".n-item");

   if(window.scrollY > 0) {
      header.style.background = "black";
      header.style.transition = "1s ease-out";
      header.style.position = "fixed";
      header.style.width = "100%";
      document.getElementById("logo").style.color = "white";
      BarNav2.style.color = "white";
      BarNav.style.color = "white";
      

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
   }
   
})

// function SizeUpdate()
// {
//    window.addEventListener("resize", function() {
//       if(window.innerWidth <= 600)
//       {
//          $(".mobile-navbar").removeClass("hidden").addClass("active");
//          $(".default-toggle").addClass("hidden").removeClass("active");
//          $(".register-component").addClass("hidden").removeClass("active");
//          console.log("Mobile Nav");
//       }
//       else {
//          $(".default-toggle").removeClass("hidden").addClass("active");
//          $(".mobile-navbar").addClass("hidden").removeClass("active");
//          $(".register-component").removeClass("hidden").addClass("active");
//          console.log("Default nav");
//       }
      
//    });
// }


// SizeUpdate()
// window.addEventListener("resize", SizeUpdate)

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


