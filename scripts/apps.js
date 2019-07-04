// -------------------------------  constants  -------------------------------- //

const cards = [
    {
    name: "Jengar",
    HP: 50,
    DMG: 70,
    imgsrc: 1,
},{
    name: "Jed",
    HP: 45,
    DMG: 65,
    imgsrc: 1,
},{
    name: "Ralphite",
    HP: 100,
    DMG: 30,
    imgsrc: 1,
},{
    name: "Leona",
    HP: 95,
    DMG: 35,
    imgsrc: 1,
},{
    name: "Ben",
    HP: 80,
    DMG: 40,
    imgsrc: 1,
},{
    name: "Darees",
    HP: 75,
    DMG: 45,
    imgsrc: 1,
},{
    name: "Yorki",
    HP: 40,
    DMG: 55,
    imgsrc: 1,
},{
    name: "Dray-ben",
    HP: 35,
    DMG: 60,
    imgsrc: 1,
},{
    name: "Zonya",
    HP: 30,
    DMG: 59,
    imgsrc: 1,
},{
    name: "NamYeet",
    HP: 25,
    DMG: 30,
    imgsrc: 1,
}];
const playerHand = [];
const pcHand = [];

// ----------------------------  state variables  ----------------------------- //
// --------------------------  cached dom elements  --------------------------- //
// -------------------------------  functions  -------------------------------- //

const changeScreen = () => {
    document.body.style.backgroundImage = "url('/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/table top.jpg')";
    $('header').hide();
    $('#Start').hide();
    $('#Deal-cards').show();
};

shuffleDeck = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    };
};

dealCards = (cards) => {
    for (let i = 0; i < 5; i++) {
        playerHand.push(cards.pop());
        pcHand.push(cards.pop());
};
};

const dealPlayerDeck = (playerHand) => {
    for (let i = 0; i < playerHand.length; i++) {
        $('#player-cards').append(playerHand[i]);
        console.log(playerHand[i]);
        // console.log(pcHand[i]);
    };
};

const $dealPlayerCards = function(playerHand) {
    return `
    <div class="col-md-4">
        <h2>${playerHand[0].name}</h2>
        <h2>${playerHand[0].hp}</h2>
        <h2>${playerHand[0].dmg}</h2>
    </div>
    `;
};


// ----------------------------  event listeners  ----------------------------- //

const $start = $('#Start').on('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        changeScreen();
    }
});

const $DealCards = $('#Deal-cards').on('click', function(event) {
    $('#Deal-cards').hide();
    shuffleDeck(cards);
    dealCards(cards);
    dealPlayerDeck(playerHand);
    $dealPlayerCards(playerHand);
    $('.card-backs').show();
});

// const $cardHand = $()



//    battle = () => {
//     for (let i = 0; i < 3; i++) {
//      const randomizer = Math.floor(Math.random() * human.hand.length);
     
//      let inPlayHuman = human.hand.splice(randomizer, 1)[0];
//      let inPlayComp = comp.hand.splice(randomizer, 1)[0];