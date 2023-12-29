import { FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";




export default function Banner(props) {
    return (
        <div className="items-center flex flex-col justify-center px-28 py-12 max-md:px-5">
            <div className="w-full my-8 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
                        <div className="text-white text-6xl font-medium leading-[80px] bg-clip-text bg-[linear-gradient(118deg,#1E8AF2_11.5%,#05BED7_55.42%)] w-full my-auto max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-md:mt-10">
                            Speed Your Journey
                            <br />
                            from Idea to Impact
                            <br />
                            with our <span className="text-light-blue">Accelerators.</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 max-w-[27rem]">
                        <div className="h-full justify-between items-stretch self-stretch flex grow flex-col max-md:mt-10">
                            <div className="text-[#ffffff80] text-opacity-80 text-xl leading-8">
                                Streamline Your Tech Projects with Techchefz Solution
                                Accelerators. Our tailor-made toolkits designed to fast-track
                                your most critical and impactful projects.
                            </div>
                            <div className="mt-4">
                                <Button variant="light" >
                                    Request a Demo
                                    <FiArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


