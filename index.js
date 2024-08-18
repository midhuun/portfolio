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
    console.log(true);
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
  console.log(activeCompany);
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
