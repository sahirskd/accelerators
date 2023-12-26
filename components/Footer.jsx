

export default function Footer(props) {
    return (
        <div className="self-stretch bg-neutral-900 flex flex-col items-center pt-12 pb-5 px-16 max-md:px-5">
            <div className="flex w-full max-w-[1203px] flex-col items-stretch mt-2.5 max-md:max-w-full">
                <div className="flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
                    <div className="flex grow basis-[0%] flex-col items-start max-md:max-w-full">
                        <img
                            loading="lazy"
                            width={200}
                            height={200}
                            src="/tcz-logo-white.svg"
                            className="aspect-[3.83] object-contain object-center w-[184px] justify-center items-center overflow-hidden max-w-full"
                        />
                        <div className="text-white text-opacity-80 text-base leading-6 self-stretch mt-6 max-md:max-w-full">
                            Stay at the forefront of innovation, trends, and industry insights
                            by subscribing to our newsletter.{" "}
                        </div>
                    </div>
                    <div className="items-stretch flex grow basis-[0%] flex-col mt-16 self-end max-md:max-w-full max-md:mt-10">
                        <div className="text-white text-opacity-80 text-2xl font-medium leading-8 max-md:max-w-full">
                            Follow Us on Social Media
                        </div>
                        <div className="items-stretch flex gap-5 mt-5 pr-6 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <div className="items-center border flex justify-between gap-3 px-6 py-3 rounded-lg border-solid border-white border-opacity-20 max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/19649779e75ef7605d442d75dfd9e897a9ed756a07bec732fa066eff4956e080?"
                                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                                />
                                <div className="text-white text-opacity-80 text-base leading-6 self-stretch">
                                    Linkedin
                                </div>
                            </div>
                            <div className="items-center border flex justify-between gap-3 px-6 py-3 rounded-lg border-solid border-white border-opacity-20 max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/21f4fbc0843ee3e2719d0224e98feb1a59cd527107453cf9d9e2cae6cb39ff58?"
                                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                                />
                                <div className="text-white text-opacity-80 text-base leading-6 self-stretch">
                                    Facebook
                                </div>
                            </div>
                            <div className="items-center border flex justify-between gap-3 px-6 py-3 rounded-lg border-solid border-white border-opacity-20 max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f26677b2ea42fd27e6f526de15083cb32ba578b49bf2532039a2c2ac71c6bbe0?"
                                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                                />
                                <div className="text-white text-opacity-80 text-base leading-6 self-stretch">
                                    Twitter
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center bg-sky-500 flex aspect-[1.0166666666666666] flex-col w-[61px] h-[61px] mt-28 px-6 rounded-lg self-end max-md:mt-10 max-md:px-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1231aa28e901dda25b527602184e1137c9cdc0c02e3ff5a7fed600eae29168f8?"
                            className="aspect-[0.86] object-contain object-center w-full overflow-hidden"
                        />
                    </div>
                </div>
                <div className="mt-8 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                                <img
                                    loading="lazy"
                                    width={200}
                                    height={200}
                                    src="/become-our-partner.png"
                                    className="aspect-[4.74] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                                />
                                <div className="text-white text-2xl font-medium leading-8 mt-12 max-md:max-w-full max-md:mt-10">
                                    Stay Ahead of the Tech Curve
                                </div>
                                <div className="items-stretch flex justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="text-white text-opacity-50 text-base leading-6 whitespace-nowrap bg-stone-900 grow justify-center pl-5 pr-16 py-3.5 rounded-xl items-start max-md:pr-5">
                                        Business Email Address
                                    </div>
                                    <div className="justify-between bg-sky-500 flex gap-4 px-6 py-5 rounded-lg items-start max-md:px-5">
                                        <div className="text-white text-base font-medium leading-8">
                                            Subscribe
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d4ec5a995b09e6669d2768a08dc6a8cdef2cfa14078b18228a865d2254a115?"
                                            className="aspect-[1.17] object-contain object-center w-3.5 overflow-hidden self-stretch shrink-0 max-w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="grow mt-10 px-px max-md:max-w-full max-md:mt-10">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex flex-col max-md:mt-10">
                                            <div className="text-white text-opacity-80 text-xl font-medium leading-7 whitespace-nowrap">
                                                About us
                                            </div>
                                            <div className="text-white text-opacity-80 text-xl font-medium leading-7 whitespace-nowrap mt-6">
                                                Solutions
                                            </div>
                                            <div className="text-white text-opacity-80 text-xl font-medium leading-7 whitespace-nowrap mt-6">
                                                Portfolio
                                            </div>
                                            <div className="text-white text-opacity-80 text-xl font-medium leading-7 whitespace-nowrap mt-6">
                                                Contact Us
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex grow flex-col max-md:mt-10">
                                            <div className="text-white text-opacity-80 text-xl font-medium leading-7 whitespace-nowrap">
                                                Technology
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-6">
                                                CMS
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-3">
                                                Commerce
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-3">
                                                Microservices
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-3">
                                                Cloud & DevSecOps
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-3">
                                                Data Intelligence
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-3">
                                                Analysis Automation
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex flex-col max-md:mt-10">
                                            <div className="text-white text-opacity-80 text-xl font-medium leading-7 whitespace-nowrap">
                                                More
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-5">
                                                Careers
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-3">
                                                Insights
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-3">
                                                Center of Excellence
                                            </div>
                                            <div className="text-white text-opacity-80 text-base leading-6 whitespace-nowrap mt-3">
                                                Accelerators
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex shrink-0 h-px flex-col mt-16 max-md:max-w-full max-md:mt-10" />
                <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-px max-md:max-w-full max-md:flex-wrap">
                    <div className="text-white text-sm font-medium leading-8 grow shrink basis-auto">
                        © 2023 TCZ Digital Pvt. Ltd. All rights reserved.
                    </div>
                    <div className="items-stretch flex justify-between gap-5 self-start">
                        <div className="text-white text-opacity-80 text-base leading-7">
                            Terms of Use
                        </div>
                        <div className="text-white text-opacity-80 text-base leading-7">
                            Security
                        </div>
                        <div className="text-white text-opacity-80 text-base leading-7">
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


