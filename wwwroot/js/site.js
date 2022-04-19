// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//produkterna/annonserna
const annonser = [
    { id: 1, title: "Tavla", category: "Konst", description: "En väldigt unik tavla från Antwerp", price: 123, url: "https://cdn.newport.se/gallery/4142/goc-fageltavla-laura-2__fullsize.jpg" },
    { id: 2, title: "Volvo XC40", category: "Fordon", description: "En robust och pålitlig bil", price: 450000, url: "https://images.ctfassets.net/x7m88j6y655h/4GtEYKDIZQDFBXQTXIX6Xi/2f914f12f1ed3b2cf1e657539ee2bf21/volvo.jpg" },
    { id: 3, title: "Villa", category: "Fastighet", description: "En nybyggd villa i modern stil", price: 4000000, url: "https://www.trivselhus.se/imagevault/publishedmedia/p5nyji3581eajlmtwv1t/trivselhus_hemma_hos_villa_mariestad_0758.jpg" },
];
//skall användas för att spara strängen till databasen


//skapar en annons för alla produkterna
for (let i = 0; i < annonser.length; i++) {
    document.getElementById("annonser").innerHTML +=
        "<a class='card' href='#!'><div id='kort" + annonser[i].id + "Front' class='front'><h3>" + annonser[i].title + "</h3><p>" + annonser[i].category + "</p><br> <p class='olle'>" + annonser[i].price + "kr</p></div><div class='back'><div id='kort" + annonser[i].id + "Back'><p>" + annonser[i].description + "</p> </div> <button>KÖP</button>";
    document.getElementById('kort' + annonser[i].id + 'Front').style.backgroundImage = "url(" + annonser[i].url + ")";

}
//id:t på annonskortet
let idNumber = 6;
function newAd() {
    idNumber += 1;
    let annonsDisplay = document.getElementById('annons')
    if (annonsDisplay.style.display === "none") {
        annonsDisplay.style.display = "block";
    } else {
        annonsDisplay.style.display = "none";
    }

    /*document.getElementById("annonser").innerHTML += 
    "<a class='card' href='#!'><div id='kort"+idNumber+"Front' class='front'><p>Klicka på knappen högst upp</p></div><div class='back'><div id='kort"+idNumber+"Back'><p>Klicka på knappen högst upp</p></div>";
    */


}

let denNyaAnnonsensIndex = annonser.length;
function newAdForm() {
    let annonsDisplay = document.getElementById('annons');
    if (annonsDisplay.style.display === "none") {
        annonsDisplay.style.display = "block";
    } else {
        annonsDisplay.style.display = "none";
    }

    let titleInput = document.getElementById('titleId').value;
    let categoryInput = document.getElementById('kategoriId').value;
    let priceInput = document.getElementById('priceId').value;
    let beskrivningInput = document.getElementById('beskrivningId').value;
    let imageInput = document.getElementById('bildId').value;
    //sätter nya id:et
    idNewAnnons = annonser.length + 1;
    //lägger till en ny produkt i annons arrayen
    annonser.push({ id: idNewAnnons, title: titleInput, category: categoryInput, description: beskrivningInput, price: priceInput, url: imageInput })

    /* for(let i = 0; i<annonser.length; i++){
         document.getElementById("annonser").innerHTML += 
         "<a class='card' href='#!'><div id='kort"+annonser[i].id +"Front' class='front'><h3>"+annonser[i].title+"</h3><p>"+annonser[i].category+"</p><br> <p class='olle'>"+annonser[i].price+"kr</p></div><div class='back'><div id='kort"+annonser[i].id+"Back'><p>"+annonser[i].description+"</p> </div> <button>KÖP</button>";
         document.getElementById('kort'+annonser[i].id+'Front').style.backgroundImage = "url("+annonser[i].url+")";
         
     }
     */
    //visar den nya annonsen
    document.getElementById("annonser").innerHTML +=
        "<a class='card' href='#!'><div id='kort" + annonser[denNyaAnnonsensIndex].id + "Front' class='front'><h3>" + annonser[denNyaAnnonsensIndex].title + "</h3><p>" + annonser[denNyaAnnonsensIndex].category + "</p><br> <p class='olle'>" + annonser[denNyaAnnonsensIndex].price + "kr</p></div><div class='back'><div id='kort" + annonser[denNyaAnnonsensIndex].id + "Back'><p>" + annonser[denNyaAnnonsensIndex].description + "</p> </div> <button>KÖP</button>";
    document.getElementById('kort' + annonser[denNyaAnnonsensIndex].id + 'Front').style.backgroundImage = "url(" + annonser[denNyaAnnonsensIndex].url + ")";



}

//skall bytas ut mot en annna api pga tomt innehåll
function testApi() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

    xhr.responseType = "json";

    xhr.send();

    xhr.onload = function () {


        console.log(xhr.response);

        //lägger in bilden från api:n som bakgrund för annonserna
        for (let i = 0; i < annonser.length; i++) {

            document.getElementById('kort' + annonser[i].id + 'Front').style.backgroundImage = "url(" + xhr.response[i].url + ")";

        }


    }

}


//låter oss skapa en URL av våran fil vi laddar upp  
//Använder nu URL istället
/*
function loadFile() {
    var annonsBild = document.getElementById('kort1Front');
    annonsBild.style.backgroundImage = "url("+URL.createObjectURL(event.target.files[0])+")";
   
  };
  */





