import type { Metadata } from "next";
import Home from "./Main";

export const metadata: Metadata = {
  title: "FCSC - Advanced Specialty Chemicals for Construction",
  description:
    "Firstchoice Speciality Chemicals offers advanced chemical solutions for construction, ensuring superior results for waterproofing, concrete durability, etc.",
};


export default function Page() {
  return <Home />;
}
