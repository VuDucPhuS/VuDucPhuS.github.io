var jSONContainer = document.getElementById("jSON-info");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();


function renderHTML(data) {
    var htmlString = "";
    for(i = 0; i < data.length; i++) {
        htmlString += "<p>" + "id: " + data[i].id + "<br>"
                        + "name: " + data[i].name + "<br>"
                        + "username: " + data[i].username + "<br>"
                        + "email: " + data[i].email + "<br>" 
                        + "address: { " + "<br>" 
                        + "     street: " + data[i].address.street + "<br>"
                        + "suite: " + data[i].address.suite + "<br>"
                        + "city: " + data[i].address.city + "<br>"
                        + "zipcode: " + data[i].address.zipcode + "<br>"
                        + "geo: { " + "<br>"
                        + "lat: " + data[i].address.geo.lat + "<br>"
                        + "lng: " + data[i].address.geo.lng + "<br>"
                        + "}" + "<br>"
                        + "phone: " + data[i].phone + "<br>" 
                        + "website: " + data[i].website + "<br>" 
                        + "company: { " + "<br>" 
                        + "name: " + data[i].company.name + "<br>" 
                        + "catchPhrase: " + data[i].company.catchPhrase + "<br>"
                        + "br: " + data[i].company.bs + "<br>"
                        + "}" + "<br>"
                        +  "</p>";
           
    }
    jSONContainer.insertAdjacentHTML('beforeend', htmlString);
}