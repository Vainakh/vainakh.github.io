let triviaData;
let cardIndex = 0;

const nextCard = () => {
  cardIndex += 1;
  $('.categories').remove();
  if (triviaData.length === cardIndex) {
      gameOver();
  } else {
      startGame();  
  }
}

const startGame = () => {
    const $categories = $('<div>')
                  .addClass('categories')
                  .appendTo('.container');
    $('<div>')
              .addClass('categories-title')
              .addClass(`title-${[cardIndex]}`)
              .html('<h3>').text("Category")
              .text(triviaData[cardIndex].category.title)
              .appendTo($categories);

    const $question = $('<div>')
                  .appendTo(`.title-${[cardIndex]}`)

    $('<div>')
              .addClass('question')
              .text(triviaData[cardIndex].question)
              .appendTo($question);

    $('<div>')
              .addClass('answer')
              .text(triviaData[cardIndex].answer)
              .appendTo(`.title-${[cardIndex]}`);
    $question.on('click', (event) => {
      $(event.currentTarget).next()
                            .toggleClass("active");   
    });
}

const gameOver = () => {
  // Do gameover view
      $('<div>')
              .addClass('gameover')
              .appendTo('.container')
              .text('Game over!');
}

$(() => {
  $.ajax({url: "https://cors-anywhere.herokuapp.com/http://jservice.io/api/random?count=5"})
    .done((data) => {
        triviaData = data;
        startGame()   
        
      }
    ).then(()=> {
      //modal
      const $openBtn = $("#openModal");
      const $modal = $("#modal");
      const $closeBtn = $("#close");
      const openModal = () => {
        $modal.css("display", "block");
      };
      const closeModal = () => {
        $modal.css("display", "none");
      };
      $openBtn.on("click", openModal);
      $closeBtn.on("click", closeModal);
      setTimeout(openModal, 1);
      //end modal
    })// end of ajax
});//end of on load