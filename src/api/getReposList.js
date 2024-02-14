const url = "https://api.github.com/users/yehonatal/repos?page=";
const mainUrl = "https://api.github.com/users/yehonatal";
let titlesList = [];
let numOfPublicRepos = 0;

fetch(mainUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        numOfPublicRepos += data.public_repos;
    });

let limit = Math.floor(numOfPublicRepos / 30) + 1;
let page = 1;

while (page < limit) {
    let currentUrl = `${url}${page}`;
    fetch(currentUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            data.forEach((item) => {
                titlesList.push(item.name);
            });
            console.log(titlesList);
        })
        .catch((error) => {
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
        });
    page++;
}
