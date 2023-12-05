const inputUah = document.querySelector('#uah');
const inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8' )
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response)
            console.log(data);
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Smt wrong"
        }
    })

    //status
    //statusText
    //response
    //readyState

    //Події обєкта new XMLHttpRequest()
    // readystatechange: відслідковує статус запит в даний момент
    //load: коли запит готовий
})

