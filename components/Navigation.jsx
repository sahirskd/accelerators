import Image from "next/image";

export default function Navigation(props) {
    return (
        <div className="justify-center items-center self-stretch backdrop-blur-sm flex flex-col px-28 py-5  border-b-white border-b-opacity-10 border-b border-solid max-md:px-5">
            <div className="justify-between items-stretch flex w-full  gap-5 max-md:max-w-full max-md:flex-wrap">
                <Image
                    loading="lazy"
                    width={200}
                    height={200}
                    src="/tcz-logo-white.svg"
                    className="aspect-[3.82] object-contain object-center w-[153px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
                <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                    <div className="text-white text-base font-medium grow whitespace-nowrap self-start">
                        About Us
                    </div>
                    <div className="text-white text-base font-medium self-start">
                        Solutions
                    </div>
                    <div className="flex justify-between gap-1 items-start">
                        <div className="text-white text-base font-medium grow whitespace-nowrap">
                            Technology
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/544d43188ebb163ffdce4ffd531ac5667aec42cbcf635da5605d89f52da1c0d9?"
                            className="aspect-square object-contain object-center w-3 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                    </div>
                    <div className="text-white text-base font-medium self-start">
                        Portfolio
                    </div>
                    <div className="flex justify-between gap-1 items-start">
                        <div className="text-white text-base font-medium grow whitespace-nowrap">
                            More
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0923a0cacf2aa984aeb6556b1d68e1047a0505e503dd20fa15ce64c08c8da8d6?"
                            className="aspect-square object-contain object-center w-3 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                    </div>
                </div>
                <div className="items-center flex justify-between gap-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d26d1a561d4b0b08afb66e3ed209b1daa2e5d9ee0247068313ebefa9abb906?"
                        className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-white text-base font-medium leading-8 whitespace-nowrap justify-center items-stretch bg-sky-500 self-stretch grow px-5 py-4 rounded-lg">
                        Estimate Project
                    </div>
                </div>
            </div>
        </div>
    );
}


