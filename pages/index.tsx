import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/SiteWrapper";
import SiteWrapper from "../components/SiteWrapper";
//import FavouriteProjects from "../components/FavouriteProjects";
//import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <SiteWrapper>
      <Hero />
      {/* <FavouriteProjects />
      <LatestCode /> */}
    </SiteWrapper>
  )
}
