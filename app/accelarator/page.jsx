import About from "@/components/accelarator/post/About"
import Features from "@/components/accelarator/post/Features"
import Impact from "@/components/accelarator/post/Impact"
import Intro from "@/components/accelarator/post/Intro"
import ContactUs from "@/components/contactus/ContactUs"

const Page = () => {
    return (
        <div>
            <Intro />
            <About />
            <div className="items-stretch flex flex-col">
                <div className="text-white text-base font-bold leading-6 tracking-[3.2px] uppercase w-full max-md:max-w-full">
                    Features
                </div>
                <h2 className="text-white text-6xl font-medium leading-[54px] w-full mt-7 max-md:max-w-full">
                    Unleashing Language Precision and Data Excellence
                </h2>
            </div>
            <Impact />
            <Impact />
            <Impact />

            <Features />

            <ContactUs />
        </div>
    )
}

export default Page