document.addEventListener("DOMContentLoaded", function(event) {
  // Part 1
  let mainTitle = document.getElementById("main-title");
  mainTitle.textContent = "DOM's Website";
  // Part 2
  let body = document.querySelector("body");
  body.style.backgroundColor = "hotpink";
  // Part 3
  let favoriteThingsList = document.getElementById("favorite-things");
  favoriteThingsList.lastElementChild.remove();
  // Part 4
  let specialTitles = document.querySelectorAll(".special-title");
  specialTitles.forEach(title => {
    title.style.fontSize = "2rem";
  });
  // Part 5
  let pastRacesList = document.getElementById("past-races");
  let chicagoRace = pastRacesList.querySelector("li:nth-child(4)");
  chicagoRace.remove();
  // Part 6
  let newRaceCity = "Nairobi";
  let newRaceLi = document.createElement("li");
  newRaceLi.textContent = newRaceCity;
  pastRacesList.appendChild(newRaceLi);
  // Part 7
  let blogContainer = document.querySelector(".main");
  let newBlogPost = document.createElement("div");
  newBlogPost.classList.add("blog-post");
  let newBlogPostTitle = document.createElement("h2");
  newBlogPostTitle.textContent = newRaceCity;
  let newBlogPostContent = document.createElement("p");
  newBlogPostContent.textContent = "We had an exciting race in " + newRaceCity + "!";
  newBlogPost.appendChild(newBlogPostTitle);
  newBlogPost.appendChild(newBlogPostContent);
  blogContainer.appendChild(newBlogPost);
  // Part 8
  let quoteTitle = document.querySelector("#quote-title");
  quoteTitle.addEventListener("click", randomQuote);
  // Part 9
  let blogPosts = document.querySelectorAll(".blog-post");
  blogPosts.forEach(blogPost => {
    blogPost.addEventListener("mouseout", () => {
      blogPost.classList.toggle("purple");
    });
    blogPost.addEventListener("mouseenter", () => {
      blogPost.classList.toggle("red");
    });
  });
});
// Random quote of the day generator
const quotes = [
  "I live my life a quarter mile at a time",
  "I said a ten-second car, not a ten-minute car",
  "You can have any brew you want... as long as it's a Corona.",
  "You almost had me? You never had me - you never had your car!",
  "I don't have friends. I have family.",
  "It don't matter if you win by an inch or a mile. Winning's winning."
];
const randomQuote = function() {
  document.querySelector("#quote-of-the-day").textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};
randomQuote();