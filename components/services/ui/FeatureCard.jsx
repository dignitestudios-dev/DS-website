import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const FeatureCard = ({ featureData, header, header2, para, button }) => {
    return (
        <div >
            <div className="flex relative z-20 w-[90%] md:w-[80%] flex-col text-center mx-auto items-center">
                <h2 className="text-4xl leading-[42px] md:leading-[1.1] tracking-tighter md:text-7xl font-bold">
                    {header} <span className="text-[#F15C20]">{header2}</span>{" "}
                </h2>
                <p className="text-base my-6  mx-auto dark:text-white text-[#0C0C0C]">
                    {para}
                </p>
            </div>
            <div className="w-full flex justify-center">


                <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
                    {featureData?.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[48%] md:w-[23%] bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition duration-300"
                        >

                            <div className="w-14 h-14 p-2 bg-orange-500 rounded-lg flex items-center justify-center text-white mb-6">
                                <img
                                    src={item.image}
                                    alt={item.heading}
                                    className=" object-cover rounded-lg "
                                />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {item.heading}
                            </h3>

                            <p className="text-gray-600 leading-7">
                                {item.para}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <Link
                    href={"/contact-us"}
                    className="flex mt-10 w-fit items-center group justify-center "
                >
                    <button className="bg-[#F15C20] border border-[#F15C20]  group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20]  text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                        {button ? button : " Talk to our California-based team"}
                    </button>
                    <button className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                        <MdArrowOutward />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeatureCard;