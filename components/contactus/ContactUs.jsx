import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import InputField from "./InputField";

export default function ContactUs(props) {
    return (
        <div className="bg-neutral-900 px-28 py-10 max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
                    <form autocomplete="off" className="justify-center items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
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
                            <div className="grid relative w-full  items-center gap-1.5">
                                <InputField id={"fullname"} label={"Full Name*"} type="text" />
                            </div>
                            <div className="grid relative w-full  items-center gap-1.5">
                                <InputField id={"email"} label={"Email*"} type="email" />
                            </div>
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                            <div className="grid relative w-full  items-center gap-1.5">
                                <InputField id={"PhoneNumber"} label={"Phone Number*"} type="tel" />
                            </div>
                            <div className="grid relative w-full  items-center gap-1.5">
                                <InputField id={"Company"} label={"Company*"} type="text" />
                            </div>
                        </div>
                        <div className="items-stretch flex-1 self-stretch flex justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                            <div className="grid relative w-full  items-center gap-1.5">
                                {/* <InputField id={"Message"} label={"Message*"} type="text" /> */}
                                <Textarea placeholder="Type your message here." className="placeholder:text-white/50 rounded-xl border-solid border-white/10 py-3 px-[20px] h-full bg-[#1F1F1F] text-white text-base w-full" />
                            </div>
                        </div>

                        <div className="justify-end items-center shadow-sm bg-stone-50 flex gap-2.5 mt-8 pl-2 rounded self-start">
                            <Image
                                loading="lazy"
                                src="/recaptcha.png"
                                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
                                alt=""
                                height={48}
                                width={200}
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
                    </form>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-center items-stretch self-stretch bg-white flex grow flex-col w-full rounded-xl max-md:mt-10">
                        <Image
                            loading="lazy"
                            width={200}
                            height={200}
                            alt=""
                            src="/contact-us-img.jpg"
                            className="aspect-[0.63] rounded-xl max-h-[650px] object-cover object-center w-full overflow-hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

