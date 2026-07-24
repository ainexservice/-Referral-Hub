// ==========================================
// Referral Hub
// script.js
// PART 1
// ==========================================

// Loader

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

setTimeout(() => {

loader.style.display = "none";

},500);

},800);

});

// ==========================================
// Services Database
// ==========================================

const services=[

{

name:"Google Pay",

category:"UPI",

logo:"logo/googlepay.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"PhonePe",

category:"UPI",

logo:"logo/phonepe.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"Paytm",

category:"UPI",

logo:"logo/paytm.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"BHIM",

category:"UPI",

logo:"logo/bhim.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


{

name:"Navi",

category:"UPI",

logo:"logo/navi.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


{

name:"Mobikwik",

category:"UPI",

logo:"logo/mobikwik.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


{

name:"Amazon Pay",

category:"UPI",

logo:"logo/amazonpay.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


{

name:"Groww",

category:"Investment",

logo:"logo/groww.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"Angel One (AINEX)",

category:"Investment",

logo:"logo/angelone.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"Zerodha (AINEX)",

category:"Investment",

logo:"logo/zerodha.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"Upstox",

category:"Investment",

logo:"logo/upstox.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"m.Stock",

category:"Investment",

logo:"logo/mstock.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


{

name:"JIO LOTTERY (AINEX)",

category:"Gaming",

logo:"logo/jio.png",

link:"https://www.jioaskfahvmao.com/#/pages/login/register?invitationCode=9514006241&regSourceFlag=1",

details:"#",

support:"https://wa.me/919236414171"

},



{

name:"DAMMAN GAMES (AINEX)",

category:"Gaming",

logo:"logo/damman.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},



{

name:"GOA GAMES (AINEX)",

category:"Gaming",

logo:"logo/goa.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},



{

name:"82 LOTTERY (AINEX)",

category:"Gaming",

logo:"logo/82.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},



{

name:"BDG WIN (AINEX)",

category:"Gaming",

logo:"logo/bdgwin.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},



{

name:"BIG MUMBAI (AINEX)",

category:"Gaming",

logo:"logo/bigmumbai.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},



{

name:"TC LOTTERY (AINEX)",

category:"Gaming",

logo:"logo/tc.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},



{

name:"TIRANGA (AINEX)",

category:"Gaming",

logo:"logo/tiranga.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},



{

name:"SBI",

category:"Banking",

logo:"logo/sbi.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"HDFC Bank",

category:"Banking",

logo:"logo/hdfc.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"ICICI Bank",

category:"Banking",

logo:"logo/icici.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"Axis Bank",

category:"Banking",

logo:"logo/axis.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},

{

name:"Angel One (AADITYA)",

category:"Investment",

logo:"logo/angelone.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


{

name:"Angel One (MAHESH)",

category:"Investment",

logo:"logo/angelone.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


{

name:"Angel One (GOVIND)",

category:"Investment",

logo:"logo/angelone.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


{

name:"Angel One (ANKIT)",

category:"Investment",

logo:"logo/angelone.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


{

name:"Groww (AADITYA)",

category:"Investment",

logo:"logo/groww.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},
{

name:"Groww (MAHESH)",

category:"Investment",

logo:"logo/groww.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},
{

name:"Groww (GOVIND)",

category:"Investment",

logo:"logo/groww.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},
{

name:"Groww (ANKIT)",

category:"Investment",

logo:"logo/groww.png",

link:"#",

details:"#",

support:"https://wa.me/919236414171"

},


];

// ==========================================
// DOM
// ==========================================

const appList=document.getElementById("appList");

const search=document.getElementById("search");

const categoryButtons=document.querySelectorAll(".categories button");

// ==========================================
// script.js
// PART 2
// Render Cards + Search + Category Filter
// ==========================================

// Render Cards

function renderCards(data) {
  
  appList.innerHTML = "";
  
  if (data.length === 0) {
    
    appList.innerHTML = `

<div class="no-result">

<h2>No Service Found</h2>

<p>Please search another keyword.</p>

</div>

`;
    
    return;
    
  }
  
  data.forEach(service => {
    
    appList.innerHTML += `

<div class="card fade-up">

<div class="top">

<img
src="${service.logo}"
alt="${service.name}"
loading="lazy">

<div>

<h3>${service.name}</h3>

<p>${service.category}</p>

</div>

</div>

<div class="btns">

<a
href="${service.link}"
target="_blank"
class="green">

Visit

</a>

<a
href="${service.details}"
target="_blank"
class="blue">

Details

</a>

<a
href="${service.support}"
target="_blank"
class="purple">

Support

</a>

</div>

</div>

`;
    
  });
  
}

// First Load

renderCards(services);

// ==========================================
// Search
// ==========================================

search.addEventListener("keyup", function() {
  
  const value = this.value.toLowerCase().trim();
  
  const result = services.filter(service => {
    
    return (
      
      service.name.toLowerCase().includes(value) ||
      
      service.category.toLowerCase().includes(value)
      
    );
    
  });
  
  renderCards(result);
  
});

// ==========================================
// Category Filter
// ==========================================

categoryButtons.forEach(button => {
  
  button.addEventListener("click", () => {
    
    categoryButtons.forEach(btn => {
      
      btn.classList.remove("active");
      
    });
    
    button.classList.add("active");
    
    let category = button.innerText
      .replace(/[^\w\s]/g, "")
      .trim()
      .toLowerCase();
    
    if (category === "trending") {
      
      renderCards(services);
      
      return;
      
    }
    
    const filtered = services.filter(service =>
      
      service.category.toLowerCase() === category
      
    );
    
    renderCards(filtered);
    
  });
  
});

// ==========================================
// script.js
// PART 3
// Header + Back To Top + Loader + Animation
// ==========================================

// Header Shadow

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 30) {
    
    header.classList.add("shadow");
    
  } else {
    
    header.classList.remove("shadow");
    
  }
  
});

// ==========================================
// Back To Top Button
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 400) {
    
    topBtn.style.display = "flex";
    
  } else {
    
    topBtn.style.display = "none";
    
  }
  
});

topBtn.addEventListener("click", () => {
  
  window.scrollTo({
    
    top: 0,
    
    behavior: "smooth"
    
  });
  
});

// ==========================================
// Scroll Animation
// ==========================================

const observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        entry.target.classList.add("fade-up");
        
      }
      
    });
    
  },
  
  {
    
    threshold: .15
    
  }
  
);

document.querySelectorAll(
  
  ".card,.category-card,.feature-card,.stat-box,.contact-card,.faq-item,.about-box"
  
).forEach(item => {
  
  observer.observe(item);
  
});

// ==========================================
// Newsletter
// ==========================================

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {
  
  newsletter.addEventListener("submit", (e) => {
    
    e.preventDefault();
    
    const email = newsletter.querySelector("input").value.trim();
    
    if (email === "") {
      
      alert("Please enter your email.");
      
      return;
      
    }
    
    alert("Thank you for subscribing!");
    
    newsletter.reset();
    
  });
  
}

// ==========================================
// Mobile Menu
// ==========================================

const menuBtn = document.querySelector(".menu-btn");

const desktopMenu = document.querySelector(".desktop-menu");

if (menuBtn) {
  
  menuBtn.addEventListener("click", () => {
    
    desktopMenu.classList.toggle("show");
    
  });
  
}

// ==========================================
// Current Year
// ==========================================

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {
  
  footerYear.innerHTML =
    
    `© ${new Date().getFullYear()} Referral Hub. All Rights Reserved.`;
  
}

// ==========================================
// Console
// ==========================================

console.log(
  
  "Referral Hub Loaded Successfully 🚀"
  
);
// ==========================================
// script.js
// PART 4 (FINAL)
// Production Features
// ==========================================

// ==========================================
// Active Navigation
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".desktop-menu a");

window.addEventListener("scroll", () => {
  
  let current = "";
  
  sections.forEach(section => {
    
    const top = section.offsetTop - 120;
    
    const height = section.offsetHeight;
    
    if (window.scrollY >= top) {
      
      current = section.getAttribute("id");
      
    }
    
  });
  
  navLinks.forEach(link => {
    
    link.classList.remove("active");
    
    if (link.getAttribute("href") === "#" + current) {
      
      link.classList.add("active");
      
    }
    
  });
  
});

// ==========================================
// Card Counter
// ==========================================

function updateCardCount() {
  
  const total = document.querySelectorAll("#appList .card").length;
  
  const counter = document.getElementById("cardCount");
  
  if (counter) {
    
    counter.innerHTML = `${total} Services Available`;
    
  }
  
}

updateCardCount();

// Update Counter after Render

const oldRenderCards = renderCards;

renderCards = function(data) {
  
  oldRenderCards(data);
  
  updateCardCount();
  
  observeCards();
  
};

// ==========================================
// Lazy Loading Images
// ==========================================

function observeCards() {
  
  const images = document.querySelectorAll("img");
  
  const imgObserver = new IntersectionObserver((entries, observer) => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        const img = entry.target;
        
        img.src = img.dataset.src || img.src;
        
        img.classList.add("loaded");
        
        observer.unobserve(img);
        
      }
      
    });
    
  });
  
  images.forEach(img => imgObserver.observe(img));
  
}

observeCards();

// ==========================================
// Smooth Anchor Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  
  anchor.addEventListener("click", function(e) {
    
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      
      e.preventDefault();
      
      window.scrollTo({
        
        top: target.offsetTop - 70,
        
        behavior: "smooth"
        
      });
      
    }
    
  });
  
});

// ==========================================
// Search Clear
// ==========================================

if (search) {
  
  search.addEventListener("search", () => {
    
    renderCards(services);
    
  });
  
}

// ==========================================
// Keyboard Shortcut
// Press "/"
// ==========================================

document.addEventListener("keydown", (e) => {
  
  if (e.key === "/") {
    
    e.preventDefault();
    
    search.focus();
    
  }
  
});

// ==========================================
// Copy Referral Link
// ==========================================

document.addEventListener("click", (e) => {
  
  if (e.target.classList.contains("copy-btn")) {
    
    const link = e.target.dataset.link;
    
    navigator.clipboard.writeText(link);
    
    e.target.innerHTML = "Copied ✓";
    
    setTimeout(() => {
      
      e.target.innerHTML = "Copy";
      
    }, 1500);
    
  }
  
});

// ==========================================
// Offline Detection
// ==========================================

window.addEventListener("offline", () => {
  
  alert("⚠ Internet connection lost.");
  
});

window.addEventListener("online", () => {
  
  alert("✅ Internet connection restored.");
  
});

// ==========================================
// Disable Right Click (Optional)
// ==========================================

// document.addEventListener("contextmenu",(e)=>{
// e.preventDefault();
// });

// ==========================================
// Disable F12 (Optional)
// ==========================================

// document.addEventListener("keydown",(e)=>{
//
// if(
// e.key==="F12"||
// (e.ctrlKey&&e.shiftKey&&e.key==="I")||
// (e.ctrlKey&&e.shiftKey&&e.key==="J")||
// (e.ctrlKey&&e.key==="U")
// ){
//
// e.preventDefault();
//
// }
//
// });

// ==========================================
// Finished
// ==========================================

console.log("🚀 Referral Hub v1.0 Loaded Successfully");