import TextSlider from "./TextSlider";
import Navbar from './Navbar';

const ProfileComponent = () => {
    const texts = [
        "Priya Sharma",
        "</Frontend Developer/>",
        "</Software Developer/>",
        "</Web Dev Enthusiast/>",
        "</Problem Solver/>",
    ];


    return (
        <div className="flex justify-center items-center bg-navy-dark min-h-screen flex flex-col">
            <div className="flex flex-col items-center space-y-2 bg-navy-dark">
                <img
                    src="./my-passport-photo.jpg"
                    alt="Your Name"
                    className="w-40 rounded-full"
                />
                <div className="slider text-sunny-yellow">
                    <span className="flex justify-center items-center text-2xl text-center text-custom-gray font-bold">Hello, I&apos;m</span>
                    <TextSlider texts={texts} interval={3000} />
                </div>
            </div>
            <div className="Navbar pt-8">
                <Navbar />
            </div>
        </div>
    );
};

export default ProfileComponent;

