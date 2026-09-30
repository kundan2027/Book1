const API_URL = "http://localhost:8080/Book1";


// GET ALL BOOKS
function getBooks() {

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {

            const tableBody = document.getElementById("bookTableBody");

            tableBody.innerHTML = "";

            data.forEach(book => {

                const row = `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                    </tr>
                `;

                tableBody.innerHTML += row;

            });

        })
        .catch(error => {
            console.log("Error:", error);
        });
}


// ADD BOOK
function addBook() {

    const name = document.getElementById("bookName").value;
    const author = document.getElementById("author").value;

    const book = {
        name: name,
        author: author
    };

    fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(book)

    })
    .then(response => response.json())
    .then(data => {

        console.log("Book added:", data);

        document.getElementById("bookName").value = "";
        document.getElementById("author").value = "";

        getBooks();

    })
    .catch(error => {
        console.log("Error:", error);
    });
}


// PAGE LOAD HOTE HI BOOKS LAO
getBooks();