import Image from "next/image";
import { Button } from "../ui/button";
import { HeaderNavigationLinks } from "./HeaderNavigationLinks";

export default function Navigation(props) {
    return (
        <div className="justify-center items-center self-stretch backdrop-blur-sm flex flex-col px-28 py-5  border-b-white border-b-opacity-10 border-b border-solid max-md:px-5">
            <div className="justify-between items-stretch flex w-full  gap-5 max-md:max-w-full max-md:flex-wrap">
                <Image
                    loading="lazy"
                    width={200}
                    height={200}
                    alt=""
                    src="/tcz-logo-white.svg"
                    className="aspect-[3.82] object-contain object-center w-[153px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                />

                <HeaderNavigationLinks />

                <div className="items-center flex justify-between gap-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d26d1a561d4b0b08afb66e3ed209b1daa2e5d9ee0247068313ebefa9abb906?"
                        className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <Button variant="light" size="sm" className="">
                        Estimate Project
                    </Button>
                </div>
            </div>
        </div>
    );
}


