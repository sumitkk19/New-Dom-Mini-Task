// 1. Change color of car and addToCart button color when a color is selected
// - Selecting Elements
const blueColor = document.querySelector(".blue");
const grayColor = document.getElementsByClassName("gray");
const yellowColor = document.querySelector(".yellow");
const blackColor = document.querySelector(".black");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");

// Modifying Elements
// - Add Event Listeners
// - Red Color
blueColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "blue";
  itemTag.style.backgroundColor = "blue";
  imageCard.style.backgroundImage = 'url("https://imgd-ct.aeplcdn.com/1056x660/n/xzia9ta_1490440.jpg?q=75")';
});

// - Gray Color
grayColor[0].addEventListener("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.style.backgroundImage = 'url("https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/E-Class/8409/1615887045542/front-left-side-47.jpg")';
});

// - Black Color
yellowColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "yellow";
  itemTag.style.backgroundColor = "yellow";
  imageCard.style.backgroundImage = 'url("https://diecastsociety.com/wp-content/uploads/2019/01/aa76332c.jpg")';
});




blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("https://imgd-ct.aeplcdn.com/1056x660/n/wtq9f4a_1518501.jpg?q=75")';
});

// Button Click Implementation
// - Cart Button
const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// - Feedback Button
const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);
