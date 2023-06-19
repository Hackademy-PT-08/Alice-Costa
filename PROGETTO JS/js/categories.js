const categories = [
  {
    name: "Abbigliamento",
    icon: `fa-solid fa-shirt`,
    announcementsCount: 321,
    link: "#",
  },
  {
    name: "Auto",
    icon: `fa-solid fa-car-rear`,
    announcementsCount: 123,
    link: "#",
  },
  {
    name: "Casa",
    icon: `fa-solid fa-house-chimney`,
    announcementsCount: 134,
    link: "#",
  },
  {
    name: "Cucina",
    icon: `fa-solid fa-fire-burner`,
    announcementsCount: 176,
    link: "#",
  },
  {
    name: "Elettronica",
    icon: `fa-solid fa-laptop`,
    announcementsCount: 564,
    link: "#",
  },
  {
    name: "Giardinaggio",
    icon: `fa-solid fa-leaf`,
    announcementsCount: 50,
    link: "#",
  },
  {
    name: "Moto",
    icon: `fa-solid fa-motorcycle`,
    announcementsCount: 230,
    link: "#",
  },
  {
    name: "Sport",
    icon: `fa-solid fa-person-running`,
    announcementsCount: 90,
    link: "#",
  },
 
];

/*Creo il menu delle categorie
*/
const createMenuCategories = (target, categories) => {

        categories.forEach(category => {
            let li = document.createElement("li");
            let anchor = document.createElement("a");

            anchor.classList.add("dropdown-item");
            anchor.setAttribute("href", category.link);
            anchor.textContent = category.name;

            li.appendChild(anchor);
            target.appendChild(li);

            //console.log(category);
        });
};

/*Creo il menu della searchbar in homepage
*/
const createOptionsSelectCategories = (target, categories) => {

    categories.forEach((category) => {
        let option = document.createElement("option");
        option.value = category.name;
        option.textContent = category.name;
        target.appendChild(option);
    });
}

/*Creazione Cards homepage
*/
const createCardsCategories = (target, categories) => {
    categories.forEach(category => {
        let cardCol = document.createElement("div");
        cardCol.classList.add("col-12", "col-md-4", "col-lg-3", "mb-4");

        let cardTemplate = `
        <div class="card category-card">
            <div class="card-body py-5 text-center">
            <i class="${category.icon} fa-2xl text-primary"></i>
            <p class="mb-0 mt-3 mb-2 h4">${category.name}</p>
            <p class="my-0"><b class="text-primary"> ${category.announcementsCount}</b> annunci </p>
            </div>
        </div>`
        ;

        cardCol.innerHTML = cardTemplate;

        cardCol.addEventListener("click", () => {
          alert(category.name); //in PHP andremo ad inserire window.location.href= "nostrastringa"+category-link
        }) 
        
        target.appendChild(cardCol);
    });
}
