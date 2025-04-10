import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firstchoice Speciality Chemicals",
  description:
    "Develop a Sustainable Future with High Efficiency Construction Chemicals",
};

export default function SubPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
