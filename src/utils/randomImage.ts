import MoviePng1 from '../images/movie1.png';
import MoviePng2 from '../images/movie2.png';
import MoviePng3 from '../images/movie3.png';
import MoviePng4 from '../images/movie4.png';
import MoviePng5 from '../images/movie5.png';
import VideoPng1 from '../images/video1.png';
import VideoPng2 from '../images/video2.png';
import VideoPng3 from '../images/video3.png';
import MsWordPng from '../images/msword.png';

export const shuffleArray = (array: Array<unknown>): Array<unknown> => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
};

export const movieImgs = shuffleArray([
  MoviePng1,
  MoviePng2,
  MoviePng3,
  MoviePng4,
  MoviePng5
]) as string[];

export const videoImgs = shuffleArray([VideoPng1, VideoPng2, VideoPng3]) as string[];

export const docImgs = shuffleArray([MsWordPng]) as string[];