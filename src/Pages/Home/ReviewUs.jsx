

const ReviewUs = () => {
    return (

        <div>
            
            <div className="flex  flex-col max-w-xl p-8 shadow-xl rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold font-mono text-rose-400 text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center text-rose-400">How was your experience?</span>
                        <div className="flex space-x-3">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea rows="3" placeholder="Message..." className="p-4 border-2 border-rose-400 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                        <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 bg-rose-400 text-white" >Leave feedback</button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <a rel="noopener noreferrer" href="#" className="text-sm text-rose-400">Maybe later</a>
                </div>
            </div>
        </div>
    );
};

export default ReviewUs;