


export default function Banner(props) {
    return (
        <div className="items-center flex flex-col justify-center px-28 py-12 max-md:px-5">
            <div className="w-full my-8 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
                        <div className="text-white text-6xl font-medium leading-[80px] bg-clip-text bg-[linear-gradient(118deg,#1E8AF2_11.5%,#05BED7_55.42%)] w-full my-auto max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-md:mt-10">
                            Speed Your Journey from Idea to Impact with our Accelerators.
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="justify-center items-stretch self-stretch flex grow flex-col max-md:mt-10">
                            <div className="text-white text-opacity-80 text-xl leading-8">
                                Streamline Your Tech Projects with Techchefz Solution
                                Accelerators. Our tailor-made toolkits designed to fast-track
                                your most critical and impactful projects.
                            </div>
                            <div className="justify-between items-stretch bg-sky-500 flex gap-4 mt-16 pl-12 pr-14 py-6 rounded-xl max-md:mt-10 max-md:px-5">
                                <div className="text-white text-xl font-medium leading-8">
                                    Request a Demo
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7959846b2b68f58f80c91eef663007a3a43fd334502c50896ece0fb498c83ad7?"
                                    className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


