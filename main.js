window.onload=ottieniInformazioni();

function ottieniInformazioni() {
  fetch('https://newsapi.org/v2/top-headlines?country=it&apiKey=eba4f5c92a1242d38a23708e49b86de2')
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(function (data) {
          console.log(data);
          crea_articoli(data);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function crea_articoli(data){
  var output = "";
  for(var i=0;i<data.articles.length;i++){
    var data_pubblicazione = data.articles[i].publishedAt; 
    var data_finale ="";
    data_finale=data_pubblicazione.substr(0,10)+" "+data_pubblicazione.substr(11,8);
    var titolo = data.articles[i].title;
    var parts = titolo.split('-', 2);
    
    output += `<div class='articolo'>
                <div class='immagine_articolo' style='background:url(`+data.articles[i].urlToImage+`) no-repeat center top'>
                  <div class='layer_opaco'>
                    <div class='contenitore_titolo_articolo'>
                      <h1>`+parts[0]+`</h1>
                    </div>
                  </div>
                </div>
                <div class='data'>
                  <p><i><b>`+data_finale+`</p></i></b>
                </div>
                <div class='contenuto'>
                  <p>`+data.articles[i].description+`</p>
                </div>
                <div class='continua_box'>
                  <a href='`+data.articles[i].url+`' class='continua' target='_BLANK'>Continua a leggere</a>
                </div>
               </div>`;

  }
  document.getElementById("contenitore_articoli").innerHTML=output;

}
