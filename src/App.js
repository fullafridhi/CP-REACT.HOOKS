// import Component
import './App.css';
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import { Route, Routes } from 'react-router-dom';
import Trailer from './Trailer';



// the is the lis of movies 
const initialMovies = [
  { 
    id : 1,
    title: 'Blade Runner 2049',
    description: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
    posterURL: 'https://i.ibb.co/ThPNnzM/blade-runner.jpg', 
      rating: 9,
    trailer:"https://www.youtube.com/embed/MUY3GVByRUs?si=_4KzAAMTY7ymlVwD" 
  },
  { 
    id:2,
    title: 'Siccin',
    description: 'Öznur uses black magic to be with the one she loves but is unprepared for the evil spell she unleashes.',
    posterURL: 'https://tse4.mm.bing.net/th?id=OIP.FxJrrzx94Y9-RtHMKvrwggHaKl&pid=Api&P=0&h=220', 
    rating: 6,
    trailer:"https://www.youtube.com/embed/K8hcGAYXoQQ?si=ZUN0HJkpYEv9LoZs" 
  },

  { 
    id:3,
    title: 'Justice League',
    description: 'Determined to ensure that Superman\'s ultimate sacrifice wasn\'t in vain, Bruce Wayne recruits a team of metahumans to protect the world from an approaching threat of catastrophic proportions.', 
    posterURL: 'https://i.ibb.co/Zd51z5c/justice-league.jpg',
    rating: 9,
    trailer: "https://www.youtube.com/embed/3cxixDgHUYw?si=LYKk4BMNHScTTEq7",
  },
  { 
    id:4,
    title: 'Bright',
    description: 'In an alternate present day, humans, orcs, elves and fairies have been coexisting since the beginning of time. Two police officers, one a human, the other an orc, embark on a routine night patrol that will alter the future of their world as they know it.', 
    posterURL: 'https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg',
    rating: 5,
    trailer:"https://www.youtube.com/embed/Gy-BpW8AFyQ?si=9kMzzYeXANb-eeUA",
  },
  { 
    id:5,
    title: 'Tomb Raider',
    description: 'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
    posterURL: 'https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg',
    rating: 7,
    trailer:"https://www.youtube.com/embed/8ndhidEmUbI?si=qgECA1dmMZVy6d7h",
  },
  { 
    id:6,
    title: 'Black Panther',
    description: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
    posterURL: 'https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg',
    rating: 10,
    trailer:'https://www.youtube.com/embed/xjDjIWPwcPU?si=FHqh3v2iCkiGPYXs',
  },
  { 
    id:7,
    title: 'Interstellar',
    description: 'A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great Depression of the 1930s. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way.', 
    posterURL: 'https://tse4.mm.bing.net/th?id=OIP.hUIc4_dvzNTLwqRNtDXTiQHaEK&pid=Api&P=0&h=220',
    rating: 8,
    trailer:"https://www.youtube.com/embed/zSWdZVtXT7E?si=cqvBVyXjB8uWQ0KD",
  },
  { 
    id:8,
    title: 'Longlegs',
    description: 'In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying spree.', 
    posterURL: 'https://tse1.mm.bing.net/th?id=OIP.hgfc1ZyJU3IlvDW0avp-LwHaEK&pid=Api&P=0&h=220',
    rating: 7,
    trailer:"https://www.youtube.com/embed/OG7wOTE8NhE?si=8ITcMG_YV6RoPixf",
  },
  { 
    id:9,
    title: 'A Quiet Place: Day One',
    description: 'When New York City comes under attack from an alien invasion, a woman and other survivors try to find a way to safety.', 
    posterURL: 'https://tse1.mm.bing.net/th?id=OIP.6W66p7OGb6ybkUtkqRWXMQAAAA&pid=Api&P=0&h=220',
    rating: 10,
    trailer:"https://www.youtube.com/embed/YPY7J-flzE8?si=tNe2c4htZAkBUxNN",
  },
  { 
    id:10,
    title: 'Borderlands',
    description: 'Returning to her home planet Pandora, an infamous bounty hunter forms an unexpected alliance with a ragtag team of misfits.', 
    posterURL: 'https://tse1.mm.bing.net/th?id=OIP.mfYsvpayV7974PRsvt01nAHaK9&pid=Api&P=0&h=220',
    rating: 8,
    trailer:"https://www.youtube.com/embed/Icnysn53neU?si=Q0n3KPsSIubY_khZ",
  },

];
function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating ? movie.rating >= rating : true)
      );
    });
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>What to watch!</h1>
      
      <Filter onFilter={handleFilter} />
      <AddMovie addMovie={addMovie} />
<Routes>
<Route path='/trailer/:id' element={<Trailer movies={movies}/>}/>
<Route path='/' element= {<MovieList movies={filteredMovies} />}/>
  
</Routes>
  
    </div>
  );
}

export default App;
