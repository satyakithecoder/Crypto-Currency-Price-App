window.addEventListener("DOMContentLoaded", () => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true')
        .then(response => {
            if (!response.ok) {
                throw new Error("An Error Occurred")
            }
            return response.json()
        })
        .then(data => {
            document.querySelector('.container').innerHTML = `<div class="${data.bitcoin.usd_24h_change.toFixed(4) < 0 ? "falling" : "bitcoin"}">
            <div class="box1">
                <img src="images/bitcoin.png" alt="Bitcoin">
                <p>
                <h2>Bitcoin</h2><span>/USD</span></p>
            </div>
            <div class="box2">
                <p class="p1">${data.bitcoin.usd}</p>
                <p class="p2">${data.bitcoin.usd_24h_change.toFixed(4)}</p>
            </div>
        </div>
        <div class="${data.cardano.usd_24h_change.toFixed(4) < 0 ? "falling" : "cardano"}">
            <div class="box1">
                <img src="images/cardano.png" alt="Cardano">
                <p>
                <h2>cardano</h2><span>/USD</span></p>
            </div>
            <div class="box2">
                <p class="p1">${data.cardano.usd}</p>
                <p class="p2">${data.cardano.usd_24h_change.toFixed(4)}</p>
            </div>
        </div>
        <div class="${data.dogecoin.usd_24h_change.toFixed(4) < 0 ? "falling" : "dogecoin"}">
            <div class="box1">
                <img src="images/dogecoin.png" alt="Dogecoin">
                <p>
                <h2>dogecoin</h2><span>/USD</span></p>
            </div>
            <div class="box2">
                <p class="p1">${data.dogecoin.usd}</p>
                <p class="p2">${data.dogecoin.usd_24h_change.toFixed(4)}</p>
            </div>
        </div>
        <div class="${data.ethereum.usd_24h_change.toFixed(4) < 0 ? "falling" : "ethereum"}">
            <div class="box1">
                <img src="images/ethereum.png" alt="Ethereum">
                <p>
                <h2>ethereum</h2><span>/USD</span></p>
            </div>
            <div class="box2">
                <p class="p1">${data.ethereum.usd}</p>
                <p class="p2">${data.ethereum.usd_24h_change.toFixed(4)}</p>
            </div>
        </div>
        <div class="${data.
            litecoin.usd_24h_change.toFixed(4) < 0 ? "falling" : "litecoin"}">
            <div class="box1">
                <img src="images/litecoin.png" alt="Litecoin">
                <p>
                <h2>litecoin</h2><span>/USD</span></p>
            </div>
            <div class="box2">
                <p class="p1">${data.litecoin.usd}</p>
                <p class="p2">${data.litecoin.usd_24h_change.toFixed(4)}</p>
            </div>
        </div>
        <div class="${data.tether.usd_24h_change.toFixed(4) < 0 ? "falling" : "tether"}">
            <div class="box1">
                <img src="images/tether.png" alt="Tether">
                <p>
                <h2>tether</h2><span>/USD</span></p>
            </div>
            <div class="box2">
                <p class="p1">${data.tether.usd}</p>
                <p class="p2">${data.tether.usd_24h_change.toFixed(4)}</p>
            </div>
        </div>`
        })
        .catch(error => console.error(error))
})
