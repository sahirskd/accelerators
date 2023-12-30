import Accelarators from "@/components/accelarator/Accelarators";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";


export const metadata = {
  title: 'Accelerators',
  description: 'Speed Your Journey from Idea to Impact with our Accelerators.',
};

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <Accelarators />
      <Faq />
      <ContactUs />
    </div>
  );
}
