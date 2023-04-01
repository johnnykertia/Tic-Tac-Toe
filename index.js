let buttonOption = document.querySelectorAll(".button-option");
let popUp = document.querySelector(".popup");
let restart = document.getElementById("restart");
let message = document.getElementById("message");
let newGame = document.getElementById("new-game");

// Pola kemenangan
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [1, 4, 7],
  [3, 4, 5],
  [0, 4, 8],
  [2, 4, 6],
];

// Player X playing first
let xturn = true;
let count = 0;

// Display o/x Click
buttonOption.forEach((element) => {
  element.addEventListener("click", () => {
    if (xturn) {
      xturn = false;

      // X display
      element.innerText = "X";
      element.disable = true;
    } else {
      xturn = true;

      // O display
      element.innerText = "O";
      element.disable = true;
    }

    // increment count on click
    count += 1;
    if (count === 9) {
      // its a draw there are 9 box
      drawFunction();
    }

    // checker for win every click
    Winchecker();
  });
});

const Winchecker = () => {
  //Loop through all win patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      buttonOption[i[0]].innerText,
      buttonOption[i[1]].innerText,
      buttonOption[i[2]].innerText,
    ];

    //Check if elements are filled
    //If 3 empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  buttonOption.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });

  //disable popup
  popUp.classList.add("hide");
};

// Disable Alll Button
const disableButtons = () => {
  buttonOption.forEach((element) => (element.disable = true));

  // enable popup
  popUp.classList.remove("hide");
};

//This function is executed when a player wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    message.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    message.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

//Function for draw
const drawFunction = () => {
  disableButtons();
  message.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//New Game
newGame.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restart.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
