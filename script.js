let lamaimg = {
  id: "#LamaImage",
  top: 150,
  left: 400,
  width: 75,
  height: 50,

  teleportToRandomLoc: function(){

    lamaimg.left = Math.floor(Math.random() * screen.width - lamaimg.left);
    lamaimg.top = Math.floor(Math.random() * screen.height - lamaimg.top);

    $(lamaimg.id).css("top", lamaimg.top + "px");
    $(lamaimg.id).css("left", lamaimg.left + "px");
  },

  moveUp: function () {
    lamaimg.top -= 50;
    $(lamaimg.id).css("top", lamaimg.top + "px");
  },

  moveDown: function () {
    lamaimg.top += 50;
    $(lamaimg.id).css("top", lamaimg.top + "px");
  },

  moveRight: function () {
    lamaimg.left += 50;
    $(lamaimg.id).css("left", lamaimg.left + "px");
  },

  moveLeft: function () {
    lamaimg.left -= 50;
    $(lamaimg.id).css("left", lamaimg.left + "px");
  },

  setupProperties: function () {

    lamaimg.left = parseInt($(lamaimg.id).css("left").replace("px", ""));
    lamaimg.top = parseInt($(lamaimg.id).css("top").replace("px", ""));
    lamaimg.width = parseInt($(lamaimg.id).css("width").replace("px", ""));
    lamaimg.height = parseInt($(lamaimg.id).css("height").replace("px", ""));
  }
}


var collision = {
  id: "#Collision",
  top: 0,
  left: 0,
  width: 0,
  height: 0,

  setupProperties: function () {

    collision.left = parseInt($(collision.id).css("left").replace("px", ""));
    collision.top = parseInt($(collision.id).css("top").replace("px", ""));
    collision.width = parseInt($(collision.id).css("width").replace("px", ""));
    collision.height = parseInt($(collision.id).css("height").replace("px", ""));
  }

}


function doRectsCollide(a, b) {
  return !(
    ((a.top + a.height) < (b.top)) ||
    (a.top > (b.top + b.height)) ||
    ((a.left + a.width) < b.left) ||
    (a.left > (b.left + b.width))
  );
}


function onTimerTick() {

  if (doRectsCollide(lamaimg, collision)) {
    lamaimg.teleportToRandomLoc();
    console.log("errore");
  }



}


let init = function () {
  setInterval(onTimerTick, 33); // 33 millisecondi
  lamaimg.setupProperties();
  collision.setupProperties();
  $("#moveUp").on("click", lamaimg.moveUp);
  $("#moveDown").on("click", lamaimg.moveDown);
  $("#moveRight").on("click", lamaimg.moveRight);
  $("#moveLeft").on("click", lamaimg.moveLeft);
};

$(document).ready(init);


