

const OurTeam = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-4xl font-bold leadi text-rose-400 text-center sm:text-5xl">Our Team</h1>
                <p className="max-w-2xl text-center dark:text-gray-400">At PurrfectPathways, our success is driven by the talented and dedicated individuals who make up our team. We take pride in the diverse skills, backgrounds, and experiences that each member brings to the table. Get to know the people behind our mission!</p>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                        <p className="text-xl text-rose-400 font-semibold leadi">Andrew Harmens</p>
                        <p className="dark:text-gray-400">Back End Manager</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                        <p className="text-xl text-rose-400 font-semibold leadi">Jimmy Doland</p>
                        <p className="dark:text-gray-400">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                        <p className="text-xl text-rose-400 font-semibold leadi">Alex Hartmen</p>
                        <p className="dark:text-gray-400">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                        <p className="text-xl text-rose-400 font-semibold leadi">Fredy Goodman</p>
                        <p className="dark:text-gray-400">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                        <p className="text-xl text-rose-400 font-semibold leadi">Jeff Hushman</p>
                        <p className="dark:text-gray-400">Content Writer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                        <p className="text-xl text-rose-400 font-semibold leadi">Leroy Jenkins</p>
                        <p className="dark:text-gray-400 ">Front End Designer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;