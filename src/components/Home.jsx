import React from "react";
import Header from "./Header";
import DonateSection from "./DonateSection";
import Initiatives from "./Initiatives";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function Home() {
  return (
    <>
     <Header />
      <main>
        <DonateSection />
        <Initiatives />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default Home;