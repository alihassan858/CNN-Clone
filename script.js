// CNN News Clone

const articles = document.querySelectorAll("article");

articles.forEach((article) => {
    article.addEventListener("click", function () {
        console.log("News article selected");
    });
});
