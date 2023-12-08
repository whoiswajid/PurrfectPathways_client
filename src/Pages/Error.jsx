import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Error = () => {

    const textToType = "But dont worry you can find plenty of other things on our homepage.";
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (currentIndex < textToType.length) {
          setTypedText((prevText) => prevText + textToType[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust the interval for your desired typing speed.
  
      return () => clearInterval(interval);
    }, [currentIndex]);
    
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldnt find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">{typedText}</p>
                        <Link to='/' className="px-8 py-3 font-semibold rounded bg-rose-400 text-white">Back to homepage  </Link>  
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;