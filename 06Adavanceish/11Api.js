fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("Daata is " + data);
        var joke = data.value;
        console.log("Joke" + joke);
    })
    .catch();

    //https://api.coindesk.com/v1/bpi/currentprice.json
    //https://api.chucknorris.io/jokes/random