class UI{
    static addFilmToUI=function(newFilm){
   
    const filmList=document.getElementById("films");
  
    filmList.innerHTML+=`
    
    <tr>
      <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
      <td>${newFilm.title}</td>
      <td>${newFilm.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    
     `;
  
     
  }
  static clearInputs=function(element1,element2,element3){
      element1.value="";
      element2.value="";
      element3.value="";
      
     }
  static displayMessages=function(content,type){
  const cardBody=document.querySelector(".card-body");
  
  const div=document.createElement("div");
  
  div.className=`alert alert-${type}`
  div.textContent=content;
  
  cardBody.appendChild(div);
  
  setTimeout(() => {
      div.remove();
  }, 1000);
  }
  
  static deleteFilmFromUI=function(element){
  
    element.parentElement.parentElement.remove();
  }
  static clearAllFilmsFromUI=function(){
    const filmList=document.getElementById("films");
  
        while(filmList.firstElementChild!==null){
          filmList.firstElementChild.remove();
        }
  }

}

