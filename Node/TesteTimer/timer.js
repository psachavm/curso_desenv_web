function Timer(callback, delay) {
    var timerId;
  
    var resume = function () {
      timerId = setTimeout(function () {
        resume();
        callback();
      }, delay);
    }
    this.resume = resume;
  }
  
  var timer = new Timer(function () {
    console.log("Chamou a função!");
  }, 3000);
  timer.resume();