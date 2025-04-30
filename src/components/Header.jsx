import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col xl:flex-row lg:flex-row flex-wrap lg:px-10">

      {/* left side  */}
      <div className="lg:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl max-md:text-center md:text-4xl lg:text-5xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight">
        Book Appointment <br />
        With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-black text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>Simply browse through our extensive list of trusted doctors, <br className="hidden md:block" /> 
          schedule your appointment hassle-free.</p>
        </div>
        <a id="speciality" className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white text-sm md:m-0 m-auto hover:scale-105 transition-all duration-300">
          Book Appointment 
        </a>
      </div>

      {/* right side  */}
      <div className="lg:w-1/2 relative">
        <img className="w-full lg:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
