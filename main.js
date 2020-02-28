getClickEvent();

function getClickEvent() {
    document.querySelector("#submit-button").addEventListener('click', action => {
        let value = document.querySelector("#input").value;

        consumeApi(getUrl(value));

    });
}

function getUrl(user) {
    let url = 'https://api.github.com/users/' + user + '/repos';
    return url;
};

function consumeApi(url) {
    axios.get(url)
        .then(function (response) {
            addList(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};

function addList(data) {

    let ulElement = document.createElement('ul');

    data.forEach((element, index) => {
        let liElement = document.createElement('li');
        liElement.innerHTML = data[index].name;
        ulElement.appendChild(liElement);
    });

    document.querySelector("#form").appendChild(ulElement);
}