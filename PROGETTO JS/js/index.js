const dropdownMenu = document.querySelector("#dropdownMenu");
const categorySelect = document.getElementById("categorySelect");
const categoriesRow = document.getElementById("categoriesRow");
const feedbackForm = document.getElementById("feedbackForm");
const lastAnnouncementsRow = document.getElementById("lastAnnouncementsRow");


//esecuzione
createMenuCategories(dropdownMenu, categories);
createOptionsSelectCategories(categorySelect, categories);
createCardsCategories(categoriesRow, categories);
getLastAnnouncements(6, lastAnnouncementsRow);

feedbackForm.addEventListener("submit", submitForm);


fullnameInput.addEventListener("input", () =>{
    console.log(fullnameInput.value);
})

fullnameInput.addEventListener("blur", () =>{
    console.log(fullnameInput.value);
})


//dichiarazione della funzione
function submitForm(event) {
    event.preventDefault();

    let data ={};

    // const fullnameInput = document.getElementById("fullnameInput");
    // const emailInput = document.getElementById("emailInput");
    // const messageInput = document.getElementById("messageInput");

    data.fullname = fullnameInput.value;
    data.email = emailInput.value;
    data.message = messageInput.value;

    console.log(data);    

    // const messageInput = document.getElementById("messageInput");
    fullnameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    const confirmModal = new bootstrap.Modal ("#confirmModal", {});
    confirmModal.show();
}

