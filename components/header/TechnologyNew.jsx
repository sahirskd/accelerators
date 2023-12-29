
function TechnologyNews(props) {
    return (
        <div className="items-stretch self-stretch bg-stone-900 flex grow flex-col w-full px-10 py-11 max-md:px-5">

            <header className="header text-neutral-200 text-base font-medium"> Latest from technology </header>

            <div className="items-stretch bg-neutral-900 flex w-full flex-col mt-6 p-5 rounded-xl">

                <div className="image-container justify-center items-stretch bg-zinc-700 flex flex-col px-px rounded-lg">
                    <img loading="lazy" srcSet="/users.png" className="aspect-[2.22] object-contain object-center w-full overflow-hidden" aria-label="Latest technology" role="img" />
                </div>

                <div className="content-container justify-between items-stretch flex gap-5 mt-5 pr-3 py-1.5">
                    <a href="#" className="link-text text-neutral-200 text-base font-medium" aria-label="Learn more about the latest Drupal Updates"> Learn more about the latest Drupal Updates </a>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b3f3ffc0ffb30da4d4f4a3c9cb84fb6193723a5f168eb68b96440c88b0bfae?apiKey=d2bf8a9a84ec40678f0f823c97e36319&" className="aspect-[1.33] object-contain object-center w-4 fill-white stroke-[0.2px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto" aria-label="Image" role="img" />
                </div>
            </div>

            <div className="items-stretch bg-neutral-900 flex w-full flex-col justify-center mt-4 p-5 rounded-xl">
                <div className="content-container justify-between items-stretch flex gap-5 pr-3">
                    <span className="text-neutral-200 text-base font-medium"> CMS has been the game changer of 2023 website trends </span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b8406f9844c6527ebccecc234881657a23c829b1632b2f745f206a0bd38843a?apiKey=d2bf8a9a84ec40678f0f823c97e36319&" className="aspect-[1.45] object-contain object-center w-4 fill-white stroke-[0.2px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto" aria-label="Image" role="img" />
                </div>
            </div>

        </div>
    );
}

export default TechnologyNews;