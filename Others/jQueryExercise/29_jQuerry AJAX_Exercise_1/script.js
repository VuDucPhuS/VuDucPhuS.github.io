var jSONContainer = document.getElementById("jSON-info");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();


function renderHTML(data) {
    var htmlString = "";
    for(i = 0; i < data.length; i++) {
        htmlString += "<p>" + "userID: " + data[i].userId + "<br>"
                        + "id:" + data[i].id + "<br>"
                        + "title" + data[i].title + "<br>" +
                        + "body" + data[i].body + "<br>" +  ".</p>";
           
    }
    jSONContainer.insertAdjacentHTML('beforeend', htmlString);
}