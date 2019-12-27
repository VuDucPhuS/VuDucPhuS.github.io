
var jsonContainer = document.getElementById("json-info")
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
}
ourRequest.send();

function renderHTML(data){
    var htmlString = "";
    for(i = 0; i < data.length; i++) {
        htmlString += "<p>" + "postId: " + data[i].postId + "<br>" 
                            + "id: " + data[i].id + "<br>" 
                            + "name: " + data[i].name + "<br>" 
                            + "email: " + data[i].email + "<br>" 
                            + "body: " + data[i].body + "<br>" + "</p>";
    }
    jsonContainer.insertAdjacentHTML('beforeend', htmlString);
}