var quotes = [
`<div class="card py-4 w-75 mx-auto position-relative">
    <img src="./images/bernard_baruch.jpg" class="card-img-top border object-fit-cover position-absolute translate-middle start-50 top-0" alt="Bernard M. Baruch">
    <div class="card-body pt-5 text-center">
        <p class="card-text px-5">
            “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
        </p>
        <p class="card-text"><small class="text-body-secondary">― Bernard M. Baruch</small></p>
    </div>
</div>`,

`<div class="card py-4 w-75 mx-auto position-relative">
    <img src="./images/elbert_hubbard.jpg" class="card-img-top border object-fit-cover position-absolute translate-middle start-50 top-0" alt="Elbert Hubbard">
    <div class="card-body pt-5 text-center">
        <p class="card-text px-5">
            “A friend is someone who knows all about you and still loves you.”
        </p>
        <p class="card-text"><small class="text-body-secondary">― Elbert Hubbard</small></p>
    </div>
</div>`,

`<div class="card py-4 w-75 mx-auto position-relative">
    <img src="./images/oscar_wilde.jpg" class="card-img-top border object-fit-cover position-absolute translate-middle start-50 top-0" alt="Oscar Wilde">
    <div class="card-body pt-5 text-center">
        <p class="card-text px-5">
            “Be yourself; everyone else is already taken.”
        </p>
        <p class="card-text"><small class="text-body-secondary">― Oscar Wilde</small></p>
    </div>
</div>`,

`<div class="card py-4 w-75 mx-auto position-relative">
    <img src="./images/steve_jobs.jpeg" class="card-img-top border object-fit-cover position-absolute translate-middle start-50 top-0" alt="steve jobs">
    <div class="card-body pt-5 text-center">
        <p class="card-text px-5">
            “Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful... that's what matters to me.”
        </p>
        <p class="card-text"><small class="text-body-secondary">― Steve Jobs</small></p>
    </div>
</div>`,

`<div class="card py-4 w-75 mx-auto position-relative">
    <img src="./images/william_purkey.jpg" class="card-img-top border object-fit-cover position-absolute translate-middle start-50 top-0" alt="William W. Purkey">
    <div class="card-body pt-5 text-center">
        <p class="card-text px-5">
            “Human potential, though not always apparent, is there waiting to be discovered and invited forth.”
        </p>
        <p class="card-text"><small class="text-body-secondary">― William W. Purkey</p>
    </div>
</div>`];

var quotesConrainer = document.getElementById("quotes-conrainer");
var checkNum;
function showQuotes() {
    var randomNum = Math.floor(Math.random() * 4);

    if (checkNum !== randomNum) {
        quotesConrainer.innerHTML = quotes[randomNum];
    } else {
        if (randomNum === 4) {
            randomNum -= 1;
            quotesConrainer.innerHTML = quotes[randomNum];
        } else {
            randomNum += 1;
            quotesConrainer.innerHTML = quotes[randomNum];
        }
    }

    checkNum = randomNum;
}

// =========================Another Solution Without Using Random Method=========================
/* var i = 0;
function showQuotes() {
    quotesConrainer.innerHTML = quotes[i];        
    if (i === 4) {
        i = 0;
    } else {
        i++;
    }
}
*/