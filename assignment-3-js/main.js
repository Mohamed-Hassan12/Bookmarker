var nameBook = document.getElementById("BookName");
var websiteUrl = document.getElementById("UrlInput");
var BookContainer;



if (localStorage.getItem("informationBook") == null) {
    BookContainer = [];
}
else {
    BookContainer = JSON.parse(localStorage.getItem("informationBook"))
    desplayBook()
}


function addBook() {
    var book = {
        name: nameBook.value,
        url: websiteUrl.value
    }

    BookContainer.push(book)
    localStorage.setItem("informationBook", JSON.stringify(BookContainer))
    desplayBook()
    clearBook()
}

function desplayBook() {
    var box = "";
    for (var i = 0; i < BookContainer.length; i++) {
        box += `<tr>
        <td >${i + 1}</td>
        <td >${BookContainer[i].name}</td>
        <td ><button type="button" class="btn btn-primary" ><a href="${BookContainer[i].url}" target="_blank" class="text-white text-decoration-none">visit</a></button></td>
        <td><button type="button" class="btn btn-danger" onclick="DeleteBook(${i})">Delete</button></td>
    </tr>`
    }
    document.getElementById("body").innerHTML = box;
}


function DeleteBook(i) {
    BookContainer.splice(i, 1);
    localStorage.setItem("informationBook", JSON.stringify(BookContainer))

    desplayBook()
}

function clearBook() {
    nameBook.value = "";
    websiteUrl.value = "";
}

