let teleport ={

  
}

let lamaimg = {
  topValue: 50,
  rightValue: 50,

  moveUp: function () {
    lamaimg.topValue -= 5;
    $("#LamaImage").css("top", lamaimg.topValue + "%");
  },

  moveDown: function () {
    lamaimg.topValue += 5;
    $("#LamaImage").css("top", lamaimg.topValue + "%");
  },

  moveRight: function () {
    lamaimg.rightValue -= 5;
    $("#LamaImage").css("right", lamaimg.rightValue + "%");
  },

  moveLeft: function () {
    lamaimg.rightValue += 5;
    $("#LamaImage").css("right", lamaimg.rightValue + "%");
  },
}

let init = function () {

  $("#moveUp").on("click", lamaimg.moveUp);
  $("#moveDown").on("click", lamaimg.moveDown);
  $("#moveRight").on("click", lamaimg.moveRight);
  $("#moveLeft").on("click", lamaimg.moveLeft);
};

$(document).ready(init);
