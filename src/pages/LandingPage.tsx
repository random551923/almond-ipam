import { NavLink } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="flex-1 flex flex-row items-center justify-center gap-10 ">
            <div className="flex flex-col gap-10 max-w-lg items-center text-primary-text">
                <h1 className="text-5xl font-bold text-center">Premium IP Management Solution</h1>
                <p className="text-center text-lg font-normal ">
                    Monitor & Manage IP address space, get real time visibility and control
                    with ALMOND IPAM easy-to-use, intuitive, centralized console
                </p>
                <div className="flex flex-row gap-4 w-full px-10">
                    <NavLink to="/home" className=" flex flex-1 items-center justify-center px-6 py-2.5 rounded-md whitespace-nowrap bg-container-bg-basic text-primary text-sm font-medium transition-transform hover:scale-105">
                        {"<- Get Started"}
                    </NavLink>
                    <NavLink to="/about" className="flex items-center justify-center px-6 py-2.5 rounded-md whitespace-nowrap text-primary-text border-primary-text border-2 text-sm font-medium transition-transform hover:scale-105">
                        Learn More
                    </NavLink>
                </div>
            </div>
            <img className="w-full w-72 " src={'/src/assets/happy-almond.png'} />
        </div>
    );
};

export default LandingPage;