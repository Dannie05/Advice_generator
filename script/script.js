const advice = document.querySelector('.advice');
const adviceBtn = document.querySelector('.adviceBtn');


adviceBtn.addEventListener('click', fetchAdvice);

function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(data => {
            return data.json();
        })
        .then(adviceText => {
            const adviceID = document.querySelector('.adviceID')
            adviceID.innerHTML = `Advice #${adviceText.slip.id}`;
            const typed = new Typed(advice, {
                strings: ["", `"${adviceText.slip.advice}"`],
                typeSpeed: 100,
                BackSpeed: 60,
                showCursor: false,
                loop: false,
            });
            // advice.innerHTML='"' + adviceText.slip.advice + '."';       

        })

}
// const typed = new Typed(advice, {
//     strings: ["", '"hello"', '"world"', '"image"', '"lorem"'],
//     typeSpeed: 100,
//     BackSpeed: 60,
//     loop: false,
//     showCursor: false,
// });


fetchAdvice();
setInterval(fetchAdvice, 12000)


