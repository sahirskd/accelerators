
const About = () => {
    return (
        <div className="self-stretch">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col px-5 items-start max-md:mt-10">
                        <div className="text-white text-base leading-6">Industry</div>
                        <div className="text-white text-2xl font-bold leading-6 whitespace-nowrap mt-2">
                            Media & Entertainment
                        </div>
                        <div className="text-white text-base leading-6 self-stretch mt-9">Tags</div>
                        <div
                            className="text-white text-base leading-8 items-stretch border self-stretch justify-center mt-2 p-3 rounded-lg border-solid border-white border-opacity-40"
                            role="button"
                            aria-label="Trending"
                        >
                            Trending
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col px-5 items-start max-md:max-w-full max-md:mt-10">
                        <div className="self-stretch text-white text-5xl font-medium leading-[54px] max-md:max-w-full">
                            Improve training data to boost LLM performance
                        </div>
                        <div className="self-stretch text-white text-xl leading-8 mt-6 max-md:max-w-full">
                            Data powers AI in the enterprise, but real-world data sets have been found to contain 7%–50% annotation
                            errors. Unsurprisingly, erroneous data — from imperfectly labeled data to outliers — hampers the training (and
                            evaluation) of ML models across tasks like intent recognition, entity recognition and sequence generation. Our
                            joint Solution Accelerator with Cleanlab helps to improve training data to boost LLM performance by 37%
                            without spending any time or resources to change the model architecture, hyperparameters or the training
                            process.
                        </div>
                        <form>
                            <div className="justify-center items-stretch flex gap-4 mt-10 px-8 py-6 rounded-xl border-2 border-solid border-sky-500 border-opacity-60 max-md:px-5">
                                <a href="#" className="text-sky-500 text-xl font-medium leading-8 grow whitespace-nowrap">
                                    Access the Git Repository
                                </a>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/948a56b54d916bd546c273d661302131582fe0b580bf8d8521b8989f2c1d9b6d?apiKey=d2bf8a9a84ec40678f0f823c97e36319&"
                                    className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                                    alt="Git Repository"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About