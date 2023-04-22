let rating_btns = document.querySelectorAll('.rating-btn');
let ratingStatus = document.querySelector('.rating-status');
let ratingBox = document.querySelector('.rating-box')
let thankyouBox = document.querySelector('.thankyou-box')
let submitBtn = document.querySelector('.submit-btn')


rating_btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        removeALl()
        btn.classList.add('active');

    })

})

rating_btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        submitBtn.addEventListener('click', () => {
            activeTnxPage(index + 1)
        })
    })
})

function removeALl() {
    rating_btns.forEach((btn, index) => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        }
    })
};
function activeTnxPage(data) {
    ratingBox.classList.add('hidden-box')
    thankyouBox.classList.add('activeTnx')
    ratingStatus.innerText = data;
}