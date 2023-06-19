//inseriamo la FETCH in una funzione che ci darà gli ultimi annunci
const getLastAnnouncements = (count = 6, target) => {

fetch("./data/annunci.json") 
// method:GET non serve indicarlo perché default
    .then((res) => res.json())
    .then((announcements) => {
        announcements.forEach((element, index) => {
            if (index < count) {
                createAnnouncementsCard(element, target);
            }
        })
    })    
    .catch((error) => {
        console.log(error);
    });
  
}

const createAnnouncementsCard = (element, target) => {
   
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");

    let cardTemplate = `
    <div class="card shadow-lg announcement-card">
                    <div id="carousel-${element.id}" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="https://picsum.photos/200" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="https://picsum.photos/200" class="d-block w-100" alt="...">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${element.id}" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${element.id}" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    <div class="card-body">
                        <p class="h2 fw-bold text-primary">
                            ${parseFloat(element.price).toFixed(2)} € 
                        </p>
                        <p class="h2">
                            ${element.name} 
                        </p>
                        <p class="h6">Descrizione dell'annuncio</p>
                    </div>
                    <div class="card-footer">
                       <div class="row">
                        <div class="col-6">
                            <p class="mb-0 text-primary">
                                <i class="fa-solid fa-tag"></i>
                                ${element.category}
                            </p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0 text-primary">
                                <i class="fa-solid fa-calendar-day"></i>
                                Data
                            </p>
                        </div>
                       </div> 
                    </div>
                    <p class="h5 m-0">
                        <span class="badge ${element.type === "sell" ? "bg-success" : "bg-danger"}">
                            ${element.type === "sell" ? "Vendo" : "Cerco"}
                        </span>
                    </p>
                  </div>
`;

cardDiv.innerHTML = cardTemplate;

target.appendChild(cardDiv);

}