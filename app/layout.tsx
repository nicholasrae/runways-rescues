import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://runwaysandrescues.org"),
  title: "Runways and Rescues | Volunteer Pilots Saving Animal Lives",
  description:
    "Runways and Rescues is a 501(c)3 nonprofit using volunteer pilots to fly rescue animals from danger to forever homes — across the country and beyond.",
  keywords: [
    "animal rescue",
    "volunteer pilots",
    "nonprofit",
    "rescue flights",
    "pet rescue",
    "501c3",
  ],
  openGraph: {
    title: "Runways and Rescues",
    description:
      "We don't just save animals — we give them wings. Volunteer pilots flying rescue animals to safety.",
    type: "website",
    images: ["/images/cockpit-puppy.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
