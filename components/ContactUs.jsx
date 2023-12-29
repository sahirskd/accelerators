import { FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";

export default function ContactUs(props) {
    return (
        <div className="bg-neutral-900 px-28 py-10 max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
                    <div className="justify-center items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <div className="self-stretch text-white text-5xl font-medium leading-[54px] bg-clip-text bg-[linear-gradient(118deg,#1E8AF2_11.5%,#05BED7_55.42%)] max-md:max-w-full">
                            Let’s work on your
                            <br />
                            new digital ideas.
                        </div>
                        <div className="text-white text-xl leading-8 self-stretch mt-3 max-md:max-w-full">
                            Fill out some quick details about your project and we will get in
                            touch with you!
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
                            <div className="justify-center border bg-stone-900 flex grow basis-[0%] flex-col pl-5 pr-20 py-1.5 rounded-xl border-solid border-white border-opacity-10 items-start max-md:pr-5">
                                <div className="text-white text-opacity-50 text-base leading-6 whitespace-nowrap">
                                    Full Name*
                                </div>
                                <div className="text-white text-opacity-90 text-base font-medium leading-6 whitespace-nowrap">
                                    Rajat Mishra
                                </div>
                            </div>
                            <div className="text-white text-opacity-50 text-base leading-6 whitespace-nowrap border bg-stone-900 grow justify-center pl-5 pr-16 py-5 rounded-xl border-solid border-white border-opacity-10 items-start max-md:pr-5">
                                Email*
                            </div>
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                            <div className="items-center border bg-stone-900 flex justify-between gap-3 pl-5 pr-20 py-5 rounded-xl border-solid border-white border-opacity-10 max-md:pr-5">
                                <div className="items-stretch flex gap-1 my-auto">
                                    <img
                                        loading="lazy"
                                        srcSet="..."
                                        className="aspect-[1.5] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/42da3a06ad9d84422212b86f953bba3be5bb9cb54b843e6b1bfc3264b9bdde86?"
                                        className="aspect-square object-contain object-center w-3 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                    />
                                </div>
                                <div className="items-stretch self-stretch flex justify-between gap-3">
                                    <div className="text-white text-opacity-90 text-base font-medium leading-6 whitespace-nowrap">
                                        +91
                                    </div>
                                    <div className="text-white text-opacity-50 text-base leading-6 grow whitespace-nowrap">
                                        Phone Number*
                                    </div>
                                </div>
                            </div>
                            <div className="text-white text-opacity-50 text-base leading-6 whitespace-nowrap border bg-stone-900 grow justify-center pl-5 pr-16 py-5 rounded-xl border-solid border-white border-opacity-10 items-start max-md:pr-5">
                                Company*
                            </div>
                        </div>
                        <div className="text-white text-opacity-50 text-base leading-6 whitespace-nowrap self-stretch border bg-stone-900 mt-6 pl-5 pr-16 pt-5 pb-14 rounded-xl border-solid border-white border-opacity-10 items-start max-md:max-w-full max-md:pr-5">
                            Message*
                        </div>
                        <div className="justify-end items-center shadow-sm bg-stone-50 flex gap-2.5 mt-8 pl-2 rounded self-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/45a6547c58cc4dbf9ee624ac1c5c9d384f510dcf1ea9e229fda188713bddeb84?"
                                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                            <div className="items-stretch bg-blue-500 self-stretch flex grow basis-[0%] flex-col pl-4 pr-6 py-2.5 max-md:pr-5">
                                <div className="text-white text-xs whitespace-nowrap">
                                    <span className="">protected by </span>
                                    <span className="font-medium leading-4">reCAPTCHA</span>
                                </div>
                                <div className="text-white text-xs tracking-normal mt-1">
                                    Privacy - Terms
                                </div>
                            </div>
                        </div>
                        <div className="justify-between items-center self-stretch flex w-full gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                            <div className="text-white text-sm leading-5 bg-clip-text bg-[linear-gradient(118deg,#1E8AF2_11.5%,#05BED7_55.42%)] grow shrink basis-auto my-auto max-w-[28rem]">
                                I understand and consent to my personal data being processed in
                                accordance with TechChefzs Privacy Policy.
                            </div>{" "}
                            <Button variant="light" >
                                Send a Message
                                <FiArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-center items-stretch self-stretch bg-white flex grow flex-col w-full rounded-xl max-md:mt-10">
                        <img
                            loading="lazy"
                            width={200}
                            height={200}
                            src="/contact-us-img.jpg"
                            className="aspect-[0.63] object-contain object-center w-full overflow-hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

