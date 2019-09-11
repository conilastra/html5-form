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

    let validation = (validCard || validCVC == true) ? true : (document.getElementById("alert").style.display = "block");
});





