
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      },

      // === 20 NEW MOVIES (using reliable picsum links) ===
      {
        title: "Moana",
        date: "November 23, 2016",
        description: "A spirited teenager sets sail on a daring mission to save her people and discover her true identity.",
        imgSrc: "https://picsum.photos/id/1015/300/450",
        imgAlt: "Moana standing on the ocean shore",
        ages: "6+",
        genre: "Adventure/Family",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Encanto",
        date: "November 24, 2021",
        description: "The magic of the Madrigal family is threatened when their house begins to lose its power.",
        imgSrc: "https://picsum.photos/id/133/300/450",
        imgAlt: "The Madrigal family with magical elements",
        ages: "6+",
        genre: "Family/Musical",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Coco",
        date: "October 27, 2017",
        description: "Aspiring musician Miguel journeys to the Land of the Dead.",
        imgSrc: "https://picsum.photos/id/201/300/450",
        imgAlt: "Miguel in the Land of the Dead",
        ages: "7+",
        genre: "Family/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Lion King",
        date: "July 19, 2019",
        description: "A young lion prince must overcome betrayal to reclaim his throne.",
        imgSrc: "https://picsum.photos/id/251/300/450",
        imgAlt: "Simba on Pride Rock",
        ages: "8+",
        genre: "Adventure/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Frozen",
        date: "November 27, 2013",
        description: "A fearless princess sets off on an epic journey to find her sister.",
        imgSrc: "https://picsum.photos/id/274/300/450",
        imgAlt: "Elsa with ice magic",
        ages: "6+",
        genre: "Family/Musical",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Toy Story",
        date: "November 22, 1995",
        description: "A cowboy doll feels threatened by a new space ranger.",
        imgSrc: "https://picsum.photos/id/314/300/450",
        imgAlt: "Woody and Buzz Lightyear",
        ages: "5+",
        genre: "Family/Animation",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Inside Out",
        date: "June 19, 2015",
        description: "Emotions inside a young girl's mind help her navigate life.",
        imgSrc: "https://picsum.photos/id/367/300/450",
        imgAlt: "Joy and the other emotions",
        ages: "7+",
        genre: "Family/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Finding Nemo",
        date: "May 30, 2003",
        description: "A timid clownfish searches for his son across the ocean.",
        imgSrc: "https://picsum.photos/id/401/300/450",
        imgAlt: "Marlin and Dory",
        ages: "6+",
        genre: "Family/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Incredibles",
        date: "November 5, 2004",
        description: "A family of superheroes comes out of retirement.",
        imgSrc: "https://picsum.photos/id/431/300/450",
        imgAlt: "The Incredibles family",
        ages: "8+",
        genre: "Action/Family",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Up",
        date: "May 29, 2009",
        description: "An elderly man flies his house to South America.",
        imgSrc: "https://picsum.photos/id/488/300/450",
        imgAlt: "Carl and Russell with balloons",
        ages: "8+",
        genre: "Adventure/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Big Hero 6",
        date: "November 7, 2014",
        description: "A robotics prodigy forms a superhero team.",
        imgSrc: "https://picsum.photos/id/503/300/450",
        imgAlt: "Hiro and Baymax",
        ages: "7+",
        genre: "Action/Animation",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Raya and the Last Dragon",
        date: "March 5, 2021",
        description: "A warrior teams up with the last dragon to save her world.",
        imgSrc: "https://picsum.photos/id/669/300/450",
        imgAlt: "Raya and Sisu",
        ages: "7+",
        genre: "Adventure/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Tangled",
        date: "November 24, 2010",
        description: "A princess with magical hair escapes her tower.",
        imgSrc: "https://picsum.photos/id/870/300/450",
        imgAlt: "Rapunzel and Flynn",
        ages: "6+",
        genre: "Family/Musical",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Soul",
        date: "December 25, 2020",
        description: "A musician gets stuck in the Great Before.",
        imgSrc: "https://picsum.photos/id/1016/300/450",
        imgAlt: "Joe and 22",
        ages: "8+",
        genre: "Family/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Elemental",
        date: "June 16, 2023",
        description: "Fire and water elements fall in love in Element City.",
        imgSrc: "https://picsum.photos/id/1020/300/450",
        imgAlt: "Ember and Wade",
        ages: "7+",
        genre: "Family/Romance",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Princess and the Frog",
        date: "December 11, 2009",
        description: "A waitress and prince are turned into frogs.",
        imgSrc: "https://picsum.photos/id/133/300/450",
        imgAlt: "Tiana and Naveen as frogs",
        ages: "7+",
        genre: "Family/Musical",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Brave",
        date: "June 22, 2012",
        description: "A skilled archer princess changes her fate.",
        imgSrc: "https://picsum.photos/id/201/300/450",
        imgAlt: "Merida aiming her bow",
        ages: "7+",
        genre: "Adventure/Family",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Ratatouille",
        date: "June 29, 2007",
        description: "A rat dreams of becoming a chef.",
        imgSrc: "https://picsum.photos/id/251/300/450",
        imgAlt: "Remy cooking",
        ages: "7+",
        genre: "Family/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Wall-E",
        date: "June 27, 2008",
        description: "A lonely robot finds love on a deserted Earth.",
        imgSrc: "https://picsum.photos/id/274/300/450",
        imgAlt: "WALL-E and EVE",
        ages: "6+",
        genre: "Family/Sci-Fi",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Turning Red",
        date: "March 11, 2022",
        description: "A girl turns into a giant red panda when excited.",
        imgSrc: "https://picsum.photos/id/314/300/450",
        imgAlt: "Mei as a red panda",
        ages: "7+",
        genre: "Family/Comedy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Greatest Showman",
        date: "December 20, 2017",
        description: "The story of P.T. Barnum and the birth of show business.",
        imgSrc: "https://picsum.photos/id/367/300/450",
        imgAlt: "The Greatest Showman cast",
        ages: "10+",
        genre: "Musical/Drama",
        stars: "⭐⭐⭐⭐"
      }
    ];

    movies.forEach(movie => {

        // Code for going through each movie and creating content for that movie

        // display a new movie card (HTML) on the screen for each movie in the array

        // 1. create our component (template literal)
        const card = `
            <article class="movie">
                <h2>${movie.title}</h2>
                <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
                <p><strong>Release Date:</strong> ${movie.date}</p>
                <p><strong>Recommended Age:</strong> ${movie.ages}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
                <p id='desc'>${movie.description}</p>
            </article>

        `;

        // 2. display 

        document.getElementById("movie-list").innerHTML += card;

        // keep going, use up to 20 cards
    
    });
          