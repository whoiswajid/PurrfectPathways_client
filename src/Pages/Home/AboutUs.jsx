

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src="https://i.ibb.co/smd9Y45/3728913.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/5R5nrx7/5666010.jpg" className="w-1/2  absolute right-5 top-1/2 shadow-2xl rounded-lg border-white border-8" />
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-3xl font-bold text-rose-400">About Us</h3>
                    <h1 className="text-5xl font-bold">Welcome to Purrfect Pathways!</h1>
                    <p className="py-6 font-bold text-gray-400">  Your trusted companion for professional pet walking and sitting services. At PetPals, we understand that your pets are not just animals but cherished members of your family. We are dedicated to providing top-notch care and support to ensure the happiness and well-being of your beloved furry friends.

                        <p> <span className="text-rose-400 underline font-bold">Our Story</span> :

                        Purrfect Pathways was founded with a deep passion for animals and a commitment to offer pet owners a reliable, compassionate, and trustworthy service. With a team of pet enthusiasts, we embarked on this journey to provide pets and their owners with a sense of security and peace of mind.</p>

                            <span className="text-rose-400 underline font-bold">Our Mission</span> :

                        Our mission is simple yet powerful: to give your pets the care and love they deserve when you cant be there. We aim to create a stress-free experience for both you and your pets by offering a wide range of services tailored to meet their unique needs</p>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;