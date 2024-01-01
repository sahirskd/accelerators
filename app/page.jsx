import Accelarators from "@/components/accelarator/card/Accelarators";
import Banner from "@/components/Banner";
import ContactUs from "@/components/contactus/ContactUs";
import Faq from "@/components/Faq";


export const metadata = {
  title: 'Accelerators',
  description: 'Speed Your Journey from Idea to Impact with our Accelerators.',
};

async function getAccelerators() {
  const res = await fetch('http://localhost:3001/node/api/core/search-accelarators')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const accelarators = await getAccelerators();

  return (
    <div className=" ">
      <Banner />
      <Accelarators cards={accelarators.data.cards} />
      <Faq />
      <ContactUs />
    </div>
  );
}
