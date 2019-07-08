// -------------------------------  constants  -------------------------------- //

const cardBack = ('/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/card back.jpg')
const $playerCards = $('.player-cards');
const $pcCards = $('.pc-cards');
const $battleArena = $('.battleArena')
const cards = [
    {
    name: "Rengar",
    DMG: 70,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/rengar.png",
},{
    name: "Zed",
    DMG: 65,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/zeddd.png",
},{
    name: "Malphite",
    DMG: 30,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/malphite.png",
},{
    name: "Leona",
    DMG: 30,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/Leona.jpg",
},{
    name: "Shen",
    DMG: 45,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/shen.jpg",
},{
    name: "Darius",
    DMG: 50,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/darius.jpg",
},{
    name: "Corki",
    DMG: 60,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/corki.jpg",
},{
    name: "Draven",
    DMG: 65,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/Draven.png",
},{
    name: "Sona",
    DMG: 45,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/sona.jpg",
},{
    name: "Nami",
    DMG: 30,
    imgsrc: "/Users/jameslyons/Desktop/GeneralAssembly/Class/projects/Conference_Of_Fables/pictures/nami.jpg",
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

// --------------------- creates unique decks ---------------------//

function shuffleDeck(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    };
};

function dealCards(cards) {
    for (let i = 0; i < 5; i++) {
        playerHand.push(cards.pop());
        pcHand.push(cards.pop());
};
};


// --------------------- deals and renders unique decks ---------------------//

// --- Player Cards --- //
function $dealPlayerCards() {
    renderPlayerCards(playerHand, $playerCards);
}

function $dealPlayerCardDivs(playerCard) {
    playerCard.forEach(playerHand => {
        const col2 = `
        <div class="col-md-1 offset-sm-1 p-4 mb-4 bg-dark text-light animated fadeIn">
            <h2>${playerHand.name}</h2>
            <h2>${playerHand.DMG}</h2>
            <img class="card-faces" src="${playerHand.imgsrc}"/>
        </div>
        `;
        $playerCards.append(col2);
    });
};

function renderPlayerCards(dataObj, domElement) {
    const template = $dealPlayerCardDivs(dataObj);
    domElement.append(template);
};


// --- Computer Cards --- //

function $dealPcCards() {
    renderPcCards(pcHand, $pcCards);
}

function $dealPcCardDivs(pcCard) {
    pcCard.forEach(pcHand => {
        const col2 = `
        <div class="col-md-1 offset-sm-1 p-4 mb-4 bg-dark text-light">
            <h2>${pcHand.name}</h2>
            <h2>${pcHand.DMG}</h2>
            <img class="card-faces" src="${pcHand.imgsrc}"/>
        </div>
        `;
        $pcCards.append(col2);
    });
};

function renderPcCards(dataObj, domElement) {
    const template = $dealPcCardDivs(dataObj);
    domElement.append(template);
};


// --- Game Logic --- //

function pickACard() {
    $battleArena.append(event.target);
};

function battleTime(playerHand, pcHand) {
    for (let i = 0; i < playerHand.length; i++) {
        if (playerHand[i].DMG > pcHand[i].DMG) {
            alert('you win!')
        } else if (playerHand[i].DMG < pcHand[i].DMG) {
            alert('you lose!');
        } else {
            alert(`It's a tie`)
        };
    };
};



// ----------------------------  event listeners  ----------------------------- //

const $start = $('#Start').on('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        changeScreen();
    }
});

const $dealCards = $('#Deal-cards').on('click', function() {
    $('#Deal-cards').hide();
    shuffleDeck(cards);
    dealCards(cards);
    $dealPlayerCards();
    $dealPcCards();
    $('.card-backs').show();
    $('#Battle-time').show();
});

const $clickPlayerCard = $('#player').on('click', function() {
    if (event.target.tagName === 'DIV') {
    pickACard();
    };
});

const $clickPCCard = $('#computer').on('click', function() {
    if (event.target.tagName === 'DIV') {
    console.log(event.target)
    pickACard();
    };
});

const $clickBattleTime = $('#Battle-time').on('click', function () {
    battleTime(playerHand, pcHand);
});