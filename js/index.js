const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation Bar
let navigationBar = document.querySelectorAll("a");
navigationBar.forEach((element, i) => {
  element.textContent = siteContent["nav"][`nav-item-${[i]}`];
})

const newLink = document.createElement('a');
newLink.textContent = "End";
newLink.style.color = "green";
newLink.style.cursor = "pointer";
newLink.style.backgroundColor = "lightblue";

const parentElement = document.querySelector("nav");
parentElement.appendChild(newLink);

const newLink2 = document.createElement('a');
newLink2.textContent = "Start";
newLink2.style.color = "green";
newLink2.style.cursor = "pointer";
newLink2.style.backgroundColor = "lightblue";

const parentElement2 = document.querySelector("nav");
parentElement2.prepend(newLink2);

navigationBar.forEach(element => {
  element.style.color = 'green';
  element.style.backgroundColor = "lightblue";
});

//Body

let bodyImg = document.getElementById("cta-img");
bodyImg.setAttribute('src', siteContent["cta"]["img-src"]);

let domText = document.querySelector("h1");
domText.textContent = siteContent["cta"]["h1"];

let button1 = document.querySelector("button");
button1.textContent = siteContent["cta"]["button"];

//Top Content
let topContent = document.querySelectorAll("h4");
topContent[0].textContent = siteContent["main-content"]["features-h4"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];
topContent[2].textContent = siteContent["main-content"]["services-h4"];
topContent[3].textContent = siteContent["main-content"]["product-h4"];
topContent[4].textContent = siteContent["main-content"]["vision-h4"];
topContent[5].textContent = siteContent["contact"]["contact-h4"];

topContent.forEach(element => {
  element.style.color = "green";
});

let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let pContent = document.querySelectorAll("p");
pContent[0].textContent = siteContent["main-content"]["features-content"];
pContent[1].textContent = siteContent["main-content"]["about-content"];
pContent[2].textContent = siteContent["main-content"]["services-content"];
pContent[3].textContent = siteContent["main-content"]["product-content"];
pContent[4].textContent = siteContent["main-content"]["vision-content"];

//Contact
pContent[5].textContent = siteContent["contact"]["address"];
pContent[6].textContent = siteContent["contact"]["phone"];
pContent[7].textContent = siteContent["contact"]["email"];

//footer
pContent[8].textContent = siteContent["footer"]["copyright"];

pContent.forEach(element => {
  element.style.color = "grey";
  element.style.backgroundColor = "lightblue";
});


