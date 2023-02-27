"use client";
import Banner from "./components/Banner";
import Course from "./components/Course";
import EarWhileYouLearn from "./components/Earning";
import Instructor from "./components/Instructor";
import OperationCities from "./components/OperationalCities";
import PanaverseDao from "./components/PanaveseDao";
import ProgramStudy from "./components/ProgramsStudy";
import Web3 from "./components/Web3";

export default function Home() {
  return (
    <main>
      <Banner />
      <ProgramStudy />
      <Web3 />
      <PanaverseDao />
      <EarWhileYouLearn />
      <OperationCities />
      <Course />
      <Instructor />
    </main>
  );
}
