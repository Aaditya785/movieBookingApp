// import Image from "next/image";
// import styles from "./page.module.css";
// import Logo from '../../public/logo.svg'
import { BiUserCircle } from 'react-icons/bi'
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';

export default function Home() {
  return (
    <>
      <HomeSlider />
      <MovieCarousel/>
    </>
  );
}
