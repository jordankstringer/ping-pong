var pingPong = function(input) {
  var pingPongArray = [];
    for (var i = 1; i <= input; i++) {
      if (i % 15 === 0) {
        pingPongArray.push("pingpong");
      } else if (i % 5 === 0) {
        pingPongArray.push("pong");
      } else if (i % 3 === 0) {
        pingPongArray.push("ping");
      } else {
        pingPongArray.push(i);
      }
  };
};
