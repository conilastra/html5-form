// show alert: document.getElementById("alert").style.display = "block";


const validForm = document.getElementById('form');
validForm.addEventListener('submit', function (e){
    e.preventDefault();
    let card = document.getElementById('cardNumber');
    let cardValue = card.value;
    let validCard = (validator.isCreditCard(cardValue)) ? true : (card.classList.add('missing-field'));

    let cvc = document.getElementById('cardCVC');
    let cvcValue = cvc.value;
    let validCVC = (validator.isNumeric(cvcValue) && (cvcValue.length == 3)) ? true : (cvc.classList.add('missing-field'));

    let amount = document.getElementById('amount');
    let amountValue = amount.value;
    let validAmount = (validator.isCurrency(amountValue)) ? true : (amount.classList.add('missing-field'));

    let name = document.getElementById('firstName');
    let nameValue = name.value;
    let validName = (validator.isAlpha(nameValue)) ? true : (name.classList.add('missing-field'));

    let lastName = document.getElementById('lastName');
    let lastNameValue = lastName.value;
    let validLastName = (validator.isAlpha(lastNameValue)) ? true : (lastName.classList.add('missing-field'));

    let city = document.getElementById('inputCity');
    let cityValue = city.value;
    let validCity = (validator.isAlpha(cityValue)) ? true : (city.classList.add('missing-field'));

    let state = document.getElementById('inputState');
    let stateValue = state.value;
    let validState = (stateValue !== "") ? true : (postalCode.classList.add('missing-field'));

    let postalCode = document.getElementById('inputZip');
    let postalCodeValue = postalCode.value;
    let validPostalCode = (validator.isPostalCode(postalCodeValue, 'any')) ? true : (postalCode.classList.add('missing-field'));

    let validation = (!validCard || !validCVC || !validAmount || !validLastName || !validName || !validCity || !validPostalCode) ? (document.getElementById("alert").style.display = "block") : e.target.submit();
});





