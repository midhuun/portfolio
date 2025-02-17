const hamburger = document.getElementById('ham');
const nav = document.getElementById('nav');
const line = document.querySelectorAll('.line');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const navLink = document.querySelectorAll('.nav-a');
  navLink.forEach((link)=>{
    link.addEventListener("click",()=>{
      nav.classList.toggle('active');
    })
  })
  if(nav.classList.contains('active')){
   
  }
const companies = document.querySelectorAll('.company');
const roles = document.querySelectorAll('.role');
let activeCompany = 'Deloitte';

companies.forEach((company) => {
  company.addEventListener('click', function () {
    removeClasses();
    company.classList.add('active');
    const hasActive = company.classList.contains('active');
    if (hasActive) {
      const companyActive = company.getAttribute('data-company');
      setActiveCompany(companyActive); // Set the activeCompany using a custom function
    }
  });
});

function removeClasses() {
  companies.forEach((company) => {
    company.classList.remove('active');
  });
}

function setActiveCompany(newCompany) {
  activeCompany = newCompany;
  updateRoles();
}

function updateRoles() {
  roles.forEach((role) => {
    const company = role.getAttribute('data-company');
    if (company === activeCompany) {
      role.classList.add('active');
    } else {
      role.classList.remove('active');
    }
  });
}
updateRoles();
const elements = document.querySelectorAll('.hidden');
console.log(elements);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('content')) {
        setTimeout(() => {
          entry.target.classList.add("show");    
        }, 1500);
      }
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    } else {
      if (entry.target.classList.contains('content')) {
        setTimeout(() => {
          entry.target.classList.remove("show");
          console.log("Pl");
        }, 2300);
      }
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.1 }); 

elements.forEach(element => observer.observe(element));

document.addEventListener('DOMContentLoaded', () => {
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add("show");
    }
  });
});

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
