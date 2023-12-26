import Accelarators from "@/components/Accelarators";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/Faq";

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <Accelarators />
      <FAQ />
      {/* <Button variant="outline">Hi</Button> */}
      <ContactUs />
    </div>
  );
}
