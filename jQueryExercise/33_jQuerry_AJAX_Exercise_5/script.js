var pageCounter = 1;
var jsonContainer = document.getElementById("json-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=' + pageCounter);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
});

function renderHTML(data) {
    var htmlString = "";
    for(i = 0; i < data.length; i++) {
        htmlString += "<p>" + "postId: " + data[i].postId + "<br>" 
                            + "id: " + data[i].id + "<br>" 
                            + "name: " + data[i].name + "<br>" 
                            + "email: " + data[i].email + "<br>" 
                            + "body: " + data[i].body + "</p>"
    }
    
    jsonContainer.insertAdjacentHTML('beforeend', htmlString);
}