import React, { useEffect, useState } from "react";
import { Movie } from "../typings";
import Image from "next/image";
import { imageSrcUrl } from "../constants/movie";

interface BannerProps {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: BannerProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);
  return (
    <div>
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${imageSrcUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p>{movie?.overview}</p>
    </div>
  );
};

export default Banner;
