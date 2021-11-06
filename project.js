const form=document.getElementById("film-form");
const titleElement=document.getElementById("title");
const urlElement=document.getElementById("url");
const directorElement=document.getElementById("director");
const cardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");



eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmFromStorage();
        films.forEach(film => {
            UI.addFilmToUI(film);
        });  
    })
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearFilms);
}
function addFilm(e){
    
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title==="" || director==="" || url===""){
        UI.displayMessages("Bir şeyi eksik girdiniz","danger");
    }
    else{
        const newFilm=new Film(title,director,url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film başarıyla eklendi","success");
    }
    UI.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
    
}
function deleteFilm(e){

    if(e.target.id==="delete-film"){
       UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
    UI.displayMessages("Film Başarıyla silindi","success");
}

function clearFilms(){
    if(confirm("Emin misiniz?")){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    }
}