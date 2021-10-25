import MovieWebp1 from '../images/movie1.webp';
import MovieWebp2 from '../images/movie2.webp';
import MovieWebp3 from '../images/movie3.webp';
import MovieWebp4 from '../images/movie4.webp';
import MovieWebp5 from '../images/movie5.webp';
import VideoWebp1 from '../images/video1.webp';
import VideoWebp2 from '../images/video2.webp';
import VideoWebp3 from '../images/video3.webp';
import MsWordWebp from '../images/msword.webp';

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
  MovieWebp1,
  MovieWebp2,
  MovieWebp3,
  MovieWebp4,
  MovieWebp5
]) as string[];

export const videoImgs = shuffleArray([VideoWebp1, VideoWebp2, VideoWebp3]) as string[];

export const docImgs = shuffleArray([MsWordWebp]) as string[];