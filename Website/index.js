$(function () {
  let currentDisc = "";
  let answerVals = [];
  let key = ["D1frg4", "D2frg4", "D3frg4", "D4frg4"];

  $("body").on("DOMSubtreeModified", "#box4", function () {
    let compare = compareArrays(answerVals, key);
    console.log(compare);
    if (compare == true) {
      $.ajax({
        url: "http://192.168.0.107/",
        method: "POST",
        data: {},
      }).done();
    } else {
      document.getElementById("error").innerHTML = "WRONG KEY :o";
    }
  });

  let compareArrays = (arr1, arr2) => {
    for (let i = 0; i < answerVals.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  $(document).keypress(function (event) {
    switch (String.fromCharCode(event.which)) {
      case "j":
        currentDisc = "D1";
        document.getElementById("vinylImg").src = "./img/giphy.gif";
        frg1.play();
        console.log(currentDisc);
        break;
      case "k":
        currentDisc = "D2";
        document.getElementById("vinylImg").src = "./img/giphy2.gif";
        frg5.play();
        console.log(currentDisc);
        break;
      case "l":
        currentDisc = "D3";
        document.getElementById("vinylImg").src = "./img/giphy3.gif";
        frg9.play();
        console.log(currentDisc);
        break;
      case "m":
        currentDisc = "D4";
        document.getElementById("vinylImg").src = "./img/giphy4.gif";
        frg13.play();
        console.log(currentDisc);
        break;
      case "a":
        if (currentDisc != "" && answerVals.length < 4) {
          answerVals.push(currentDisc + "frg1");
          console.log(answerVals);
          console.log(answerVals.length);
          let box = "box" + answerVals.length;
          document.getElementById(box).innerHTML = currentDisc + "frg1";
        }
        break;
      case "s":
        if (currentDisc != "" && answerVals.length < 4) {
          answerVals.push(currentDisc + "frg2");
          console.log(answerVals);
          let box = "box" + answerVals.length;
          document.getElementById(box).innerHTML = currentDisc + "frg2";
        }
        break;
      case "d":
        if (currentDisc != "" && answerVals.length < 4) {
          answerVals.push(currentDisc + "frg3");
          console.log(answerVals);
          let box = "box" + answerVals.length;
          document.getElementById(box).innerHTML = currentDisc + "frg3";
        }
        break;
      case "f":
        if (currentDisc != "" && answerVals.length < 4) {
          answerVals.push(currentDisc + "frg4");
          console.log(answerVals);
          let box = "box" + answerVals.length;
          document.getElementById(box).innerHTML = currentDisc + "frg4";
        }
        break;
      default:
      // code block
    }
  });

  //**************FIRST CD
  var frg1 = new Howl({
    src: ["./sounds/Disk_1/1.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg2.play();
    },
  });
  var frg2 = new Howl({
    src: ["./sounds/Disk_1/2.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg3.play();
    },
  });
  var frg3 = new Howl({
    src: ["./sounds/Disk_1/3.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg4.play();
    },
  });
  var frg4 = new Howl({
    src: ["./sounds/Disk_1/4.wav"],
    volume: 1,
    onend: function () {
      //alert("Finished!");
    },
  });

  //**************SECOND CD
  var frg5 = new Howl({
    src: ["./sounds/Disk_2/1.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg6.play();
    },
  });
  var frg6 = new Howl({
    src: ["./sounds/Disk_2/2.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg7.play();
    },
  });
  var frg7 = new Howl({
    src: ["./sounds/Disk_2/3.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg8.play();
    },
  });
  var frg8 = new Howl({
    src: ["./sounds/Disk_2/4.wav"],
    volume: 1,
    onend: function () {
      //alert("Finished!");
    },
  });

  //**************Third CD
  var frg9 = new Howl({
    src: ["./sounds/Disk_3/1.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg10.play();
    },
  });
  var frg10 = new Howl({
    src: ["./sounds/Disk_3/2.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg11.play();
    },
  });
  var frg11 = new Howl({
    src: ["./sounds/Disk_3/3.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg12.play();
    },
  });
  var frg12 = new Howl({
    src: ["./sounds/Disk_3/4.wav"],
    volume: 1,
    onend: function () {
      //alert("Finished!");
    },
  });
  //**************Fourth CD
  var frg13 = new Howl({
    src: ["./sounds/Disk_4/1.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg14.play();
    },
  });
  var frg14 = new Howl({
    src: ["./sounds/Disk_4/2.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg15.play();
    },
  });
  var frg15 = new Howl({
    src: ["./sounds/Disk_4/3.wav"],
    volume: 1,
    onend: function () {
      beep.play();
      frg16.play();
    },
  });
  var frg16 = new Howl({
    src: ["./sounds/Disk_4/4.wav"],
    volume: 1,
    onend: function () {
      //alert("Finished!");
    },
  });
  var beep = new Howl({
    src: ["./sounds/beep.wav"],
    volume: 0.4,
    onend: function () {
      //alert("Finished!");
    },
  });
});
