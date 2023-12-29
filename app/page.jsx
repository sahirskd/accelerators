import Accelarators from "@/components/Accelarators";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";


export const metadata = {
  title: 'Accelerators',
  description: 'Speed Your Journey from Idea to Impact with our Accelerators.',
};

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <Accelarators />
      <FAQ />
      <ContactUs />
    </div>
  );
}
