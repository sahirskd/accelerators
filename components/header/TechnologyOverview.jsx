
function TechnologyOverview(props) {
    return (
        <>
            <header className="items-stretch bg-neutral-900 flex grow flex-col w-full p-10 max-md:max-w-full max-md:px-5">
                <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="flex justify-between gap-5 items-start">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9deab4a88acc1fb330cb9a644a35eb3e9a61da8ec7c19e4b6913e34bd1e3c140?apiKey=d2bf8a9a84ec40678f0f823c97e36319&"
                            className="aspect-square object-contain object-center w-11 overflow-hidden shrink-0 max-w-full"
                            alt="Technology Overview"
                        />
                        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                            <h1 className="text-neutral-200 text-xl font-medium" aria-label="Technology Overview">
                                Technology Overview
                            </h1>
                            <p className="text-white text-sm leading-5 mt-3">
                                Be a partner for industry verticals on the inevitable journey towards enterprise.
                            </p>
                        </div>
                    </div>
                </div>

                <form className="mt-9 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex flex-col max-md:mt-9">
                                <div className="justify-center items-stretch border shadow-sm bg-stone-900 flex w-full flex-col p-5 rounded-xl border-solid border-black border-opacity-0">
                                    <div className="justify-between flex gap-5 items-start">
                                        <h2 className="text-neutral-200 text-base font-medium" aria-label="CMS">
                                            CMS
                                        </h2>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c60df11a2792a3b286b3753e2a4bb8baa2f5cca00003bd5479e09e1fbd79e3db?apiKey=d2bf8a9a84ec40678f0f823c97e36319&"
                                            className="aspect-[0.58] object-contain object-center w-[7px] fill-white stroke-[0.2px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full"
                                            alt="CMS"
                                        />
                                    </div>
                                </div>
                                <div className="justify-center items-stretch border shadow-sm bg-stone-900 flex w-full flex-col mt-4 p-5 rounded-xl border-solid border-black border-opacity-0">
                                    <div className="justify-between flex gap-5 items-start">
                                        <h2 className="text-neutral-200 text-base font-medium" aria-label="Commerce">
                                            Commerce
                                        </h2>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6178ff202833ec99c433dac789f5072cae8314cf8222d595d9688d1a883e22b?apiKey=d2bf8a9a84ec40678f0f823c97e36319&"
                                            className="aspect-[0.58] object-contain object-center w-[7px] fill-white stroke-[0.2px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full"
                                            alt="Commerce"
                                        />
                                    </div>
                                </div>
                                <div className="justify-center items-stretch border shadow-sm bg-stone-900 flex w-full flex-col mt-4 p-5 rounded-xl border-solid border-black border-opacity-0">
                                    <div className="justify-between flex gap-5 items-start">
                                        <h2 className="text-neutral-200 text-base font-medium" aria-label="Microservices">
                                            Microservices
                                        </h2>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a9b540464e031181bcd01452efc6442727edcebd5be264eb93ef4f7e2c8a444?apiKey=d2bf8a9a84ec40678f0f823c97e36319&"
                                            className="aspect-[0.58] object-contain object-center w-[7px] fill-white stroke-[0.2px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full"
                                            alt="Microservices"
                                        />
                                    </div>
                                </div>
                                <div className="justify-center items-stretch border shadow-sm bg-stone-900 flex w-full flex-col mt-4 p-5 rounded-xl border-solid border-black border-opacity-0">
                                    <div className="justify-between flex gap-5 items-start">
                                        <h2 className="text-neutral-200 text-base font-medium" aria-label="Cloud & DevSecOps">
                                            Cloud & DevSecOps
                                        </h2>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/88f9c9d80defa45ef2bc020b501885ac692605f12afe3604dba612504a78d1d7?apiKey=d2bf8a9a84ec40678f0f823c97e36319&"
                                            className="aspect-[0.58] object-contain object-center w-[7px] fill-white stroke-[0.2px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full"
                                            alt="Cloud & DevSecOps"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"></div>
                    </div>
                </form>
            </header>

        </>
    );
}

export default TechnologyOverview;