let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

  let title = document.getElementById('main-title');
  title.textContent = 'Dom webpage';


  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = 'pink';

  // Part 3
  let ulTag= document.querySelector('#favorite-things');
    ulTag.lastElementChild.remove();

  // Part 4
  let specialTitles = document.querySelectorAll('.special-title');

    specialTitles.forEach(title => {
    title.style.fontSize = '2rem';
  });

// Part 5
  let pastRaces = document.querySelector('#past-races');
  let chiTown = pastRaces.querySelector("li:nth-child(4)");
  chiTown.remove();

// Part 6
  let secondLi = document.createElement('li');
  secondLi.textContent = 'Nairobi';
  pastRaces.appendChild(secondLi);


  // Part 7
  let firstDiv = document.createElement('div');
  firstDiv.classList.add('blog-post');
  
  let h1tag = document.createElement('h1');
  h1tag.textContent = 'Nairobi';
  
  let ptag = document.createElement('p');
  ptag.textContent = 'I went to the wild and saw lions';
  
  firstDiv.appendChild(h1tag);
  firstDiv.appendChild(ptag);
  
  // Part 8
  let quoteTitle = document.querySelector('#quote-titleID');
  quoteTitle.addEventListener('click', function() {
    randomQuote();
  });
  
  

  // Part 9

 

  let blogPosts = document.querySelectorAll('.blog-post');

  for (let i = 0; i < blogPosts.length; i++) {
    let blogPost = blogPosts[i];
  
    blogPost.addEventListener('mouseout', function() {
      blogPost.classList.toggle('purple');
    });
  
    blogPost.addEventListener('mouseenter', function() {
      blogPost.classList.toggle('red');
    });
  }
  


});
