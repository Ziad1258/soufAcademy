import { socialMedia } from "../data";
import TeamImage from "../assets/team.jpg";
import { BsPalette } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";


function Home() {
    return (
        <section className="flex flex-col items-center gap-16 relative">
            <p className="bg-gray-100 dark:bg-spdarkbg text-center rounded-full p-4 md:p-6">
                Live as if you were to die tomorrow. Learn as if you were to live forever.
            </p>
            {/* title */}
            <h2 className="text-3xl font-bold text-center">
                مدرسة سوف اكاديمي لتعليم اللغات 
                <span className="text-orange-400"> والتطوير </span> المهني
            </h2>
            {/* descriptions */}
            <p className="text-secondary dark:text-darksecondary text-center leading-loose md:w-[70%]">
                نحن سوف اكاديمي مدرسة تعليمية خاصة لدينا الاعتماد المهني من الدولة الجزائرية نعمل على تطوير الطلاب بمختلف العلوم والمعارف سواء كانوا بمرحلة الدارسة او بعد اكمال مسارهم المهني والاكاديمي
            </p>
            {/* social media icons */}
            <div className="flex gap-8 text-lg">
                {socialMedia.map((icon, index) => (
                    <a
                        key={index}
                        href={icon.url}
                        className={` ${icon.url != "#" ? "" : "cursor-default pointer-events-none"} hover:scale-110 transition-transform duration-300`}
                        aria-label={`Visit our ${icon.name} page`}
                        target="_blank"
                    >
                        {icon.logo}
                    </a>
                ))}
            </div>
            {/* team image */}
            <div className="hidden md:flex mt-8   ">
                <img src={TeamImage} alt="team Image" className="md:w-[600px] lg:w-[700px]  rounded-lg  shoadow-slate-200 shadow-lg " />
                
            </div>
            {/* decoration Icons */}
            <span className="absolute  right-2 top-[40%]  sm:right-0 sm:top-[35%] text-orange-400 p-1 bg-white dark:bg-spdarkbg rounded-lg shadow-md ">
                <BsPalette size={40} />
            </span>
            <span className="absolute left-0  bottom-16  text-blue-400 p-1 bg-white dark:bg-spdarkbg rounded-lg shadow-md ">
                <FaBookOpen size={36} />
            </span>
            <div  className="absolute  z-[-1] -left-[5%] top-[20%] shadow-homeShaow dark:shadow-darkhomeShadow "></div>
            <div  className="absolute  z-[-1] -right-[5%] bottom-[20%] shadow-homeShaow dark:shadow-darkhomeShadow  "></div>

        </section>
    );
}

export default Home;
