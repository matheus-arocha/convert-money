const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras Moedas

    console.log(currencySelect.value)

    const dolarToday = 5.81
    const euroToday = 6.09
    const libraToday = 7.32
    const pesoToday = 0.28


    if (currencySelect.value == "dolar") {
        // se o select estiver selecionado em dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        // se o select estiver selecionado em euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if (currencySelect.value == "libra") {
        // se o select estiver selecionado em libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)