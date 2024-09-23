import localFont from "next/font/local";
import "./globals.css";
import {Noto_Serif_Bengali, Open_Sans} from 'next/font/google'
import Navbarcomponent from "@/components/Navbar";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ['bengali'], // Ensure the Bengali subset is loaded
  weight: ['400', '700'], // Optional: Load specific font weights
});
export const metadata = {
  title: "অং বং চং",
  description: "সব মানুষের জীবনেই নানা গল্প থাকে। আমারও আছে। গল্প ভাগ করে নিতে কারো কারো ভালো লাগে... কারো কাছে একেবারেই তা নিজস্ব, আত্মস্থিত । আমারটা মাঝামাঝি। যা দেখি-যা শুনি, তার উপর দাঁড়িয়ে মিলিয়ে নেওয়া আরকি!!",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"/>
      </head>
      <body className={notoSerifBengali.className}>
      <Navbarcomponent/>
      <div className="container mt-5">
          {children}
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
              crossOrigin="anonymous"></script>
      </body>
      </html>
  );
}
