/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function randomNumber() {
    let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    let randomNum = Math.floor(Math.random() * number.length);

    return number[randomNum];
  }

  function randomSuit() {
    let suit = ["♦", "♥", "♠", "♣"];

    let randomSu = Math.floor(Math.random() * suit.length);

    return suit[randomSu];
  }
  let storedRandomSuite = randomSuit();

  document.getElementById("upper-suit").innerHTML = storedRandomSuite;
  document.getElementById("bottom-suit").innerHTML = storedRandomSuite;
  document.getElementById("number").innerHTML = randomNumber();

  if (storedRandomSuite == "♦" || storedRandomSuite == "♥") {
    document.getElementById("bottom-suit").style.color = "red";
    document.getElementById("upper-suit").style.color = "red";
  }
  // if (storedRandomSuite == "♦" || storedRandomSuite == "♥") {
  //   document.getElementById("botton-suit").style.color = "red";
  // }
};
