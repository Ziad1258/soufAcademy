import { useState } from "react";
import { classesData } from "../data";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import FinImage from "../assets/finance.jpg";



function Classes() {
    const [show, setShow] = useState(0);
    const handleClick = (id) => {
        setShow(prevShow => (prevShow === id ? 0 : id));
    }

    return (
        <section id="classes" className="flex flex-col gap-16">
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-bold text-center">
                    ورشاتنا
                </h1>
                <p className="text-secondary  dark:text-darksecondary leading-loose text-center">
                    أكاديمية سوف تعرض عليكم برنامج B-CREATE المجاني والمقدم من طرف منظمة World learning و Souf Academy والممول من طرف السفارة الأمريكية، يقترح ثلاث أنواع مختلفة من التدريبات
                </p>

            </div>
            {/* classes + explain */}
            <div className="flex flex-col items-center gap-12 " >
                {classesData.map((myClass, key) => {
                    return (
                        <div style={{ borderRightColor: myClass.color }} key={key} className="flex flex-col  p-4 border-r rounded-lg shadow-slate-200  shadow-lg dark:shadow-mydarkShaow w-full md:w-[80%] lg:w-[50%] " >
                            <div className="flex justify-between items-center cursor-pointer"
                              onClick={() => {
                                handleClick(myClass.id)
                            }}
                            >
                                <h1> {myClass.title} </h1>
                                <span style={{ color: myClass.color }}>
                                    {show == myClass.id ? <FaChevronDown /> : <FaChevronUp />}
                                </span>
                                
                            </div>
                            {show == myClass.id &&
                                myClass.content.map((el, index) => {
                                    return (
                                        <div key={index} className="">
                                            {myClass.content.length == 1 ?
                                                <p className="pt-8 leading-loose text-secondary dark:text-darksecondary "> {el.text} </p>
                                                : <li className="leading-loose  text-secondary dark:text-darksecondary pt-2 classLink "> {el.text} </li>

                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-col lg:flex-row text-center lg:text-right lg:items-center">
                <div className="flex flex-col flex-1 gap-8 ">
                    <h1 className="text-xl lg:text-3xl text-blue-500 font-bold">سوف أكاديمي حاضنة أعمال
                    </h1>
                    <p className="text-secondary dark:text-darksecondary leading-loose">
                        سوف أكاديمي أول حاضنة أعمال بولاية الوادي، كنا فكرة أصبحنا عالم من المعرفة نعمل على تأمين ورشات العمل، الدعم، الاستشارة، والإرشاد والتدريب وكل ما من شأنه تنمية العمل الريادي.
                    </p>

                </div>
                <div className="flex flex-1 justify-center p-12 md:p-16 relative">
                    <img src={FinImage} alt="" className="w-full  rounded-lg " />
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-blue-500 absolute right-6 bottom-6 md:right-8 md:bottom-8 z-[-1]  "></div>
                </div>
            </div>

        </section>
    );
}

export default Classes;
