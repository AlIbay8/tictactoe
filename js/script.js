var player;
var moves = 0;
var xMoves = [];
var oMoves = [];
var gameEnd = false;
toggle();

function toggle() {
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  }
  $(".player").text(player);
}

function performLogic(button, tile) {
  if (gameEnd === false) {
    $(button).hide();
    $(tile).text(player);

    if (moves < 9) {
      moves++;
    }

    checkBoard(tile);
    toggle();
  }
}

function checkBoard(tile) {
  if (player == "X") {
    xMoves.push(tile);
  } else if (player == "O") {
    oMoves.push(tile);
  }
  
  var bothMoves = [xMoves, oMoves];
  
  bothMoves.forEach(function(pMoves) {
    if (pMoves.includes("#tile1") && pMoves.includes("#tile2") && pMoves.includes("#tile3")) {
      gameEndLogic();
    } else if (pMoves.includes("#tile1") && pMoves.includes("#tile5") && pMoves.includes("#tile9")) {
      gameEndLogic();
    } else if (pMoves.includes("#tile1") && pMoves.includes("#tile4") && pMoves.includes("#tile7")) {
      gameEndLogic();
    } else if (pMoves.includes("#tile3") && pMoves.includes("#tile5") && pMoves.includes("#tile7")) {
      gameEndLogic();
    } else if (pMoves.includes("#tile2") && pMoves.includes("#tile5") && pMoves.includes("#tile8")) {
      gameEndLogic();
    } else if (pMoves.includes("#tile3") && pMoves.includes("#tile6") && pMoves.includes("#tile9")) {
      gameEndLogic();
    } else if (pMoves.includes("#tile4") && pMoves.includes("#tile5") && pMoves.includes("#tile6")) {
      gameEndLogic();
    } else if (pMoves.includes("#tile7") && pMoves.includes("#tile8") && pMoves.includes("#tile9")) {
      gameEndLogic();
    }  else if (moves == 9 && gameEnd !== true) {
      console.log("board full");
      alert("It's a draw!");
      gameEnd = true;
      $(".reset").show();
    }
  });
  
}

function gameEndLogic() {
  gameEnd = true;
  alert(player + " win");
  $(".reset").show();
}

$(".reset").click(function() {
  location.reload();
})

$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

