var pageCounter = 1;
var jsonContainer = document.getElementById("json-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + pageCounter);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
});

function renderHTML(data) {
    var htmlString = "";
    
    htmlString += "<p>" + "userId: " + data.userId + "<br>" 
                        + "id: " + data.id + "<br>" 
                        + "title: " + data.title + "<br>" 
                        + "body: " + data.body + "<br>" + ".</p>";
    
    jsonContainer.insertAdjacentHTML('beforeend', htmlString);
}