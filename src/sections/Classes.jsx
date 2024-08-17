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
        <section className="flex flex-col gap-16">
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-bold text-center">
                    ورشاتنا
                </h1>
                <p className="text-secondary leading-loose text-center">
                    أكاديمية سوف تعرض عليكم برنامج B-CREATE المجاني والمقدم من طرف منظمة World learning و Souf Academy والممول من طرف السفارة الأمريكية، يقترح ثلاث أنواع مختلفة من التدريبات
                </p>

            </div>
            <div className="flex flex-col gap-12 " >
                {classesData.map((myClass, key) => {
                    return (
                        <div style={{ borderRightColor: myClass.color }} key={key} className="flex flex-col cursor-pointer p-4 border-r rounded-lg shadow-slate-200 shadow-lg" onClick={() => setShow(myClass.id)}>
                            <div className="flex justify-between items-center ">
                                <h1> {myClass.title} </h1>
                                <span style={{ color: myClass.color }} onClick={(e) => {
                                    e.stopPropagation();
                                    handleClick(myClass.id)
                                }}>{show == myClass.id ? <FaChevronDown /> : <FaChevronUp />}</span>
                            </div>
                            {show == myClass.id &&
                                myClass.content.map((el, index) => {
                                    return (
                                        <div key={index} className="">
                                            {myClass.content.length == 1 ?
                                                <p className="pt-8 leading-loose text-secondary "> {el.text} </p>
                                                : <li className="leading-loose  text-secondary pt-2 classLink "> {el.text} </li>

                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl text-red-500 font-bold">سوف أكاديمي حاضنة أعمال
                    </h1>
                    <p className="text-secondary">
                        سوف أكاديمي أول حاضنة أعمال بولاية الوادي، كنا فكرة أصبحنا عالم من المعرفة نعمل على تأمين ورشات العمل، الدعم، الاستشارة، والإرشاد والتدريب وكل ما من شأنه تنمية العمل الريادي.
                    </p>

                </div>
                <div className="flex">
                    <img src={FinImage} alt="" className="w-full rounded-lg shadow-slate-200 shadow-lg" />
                </div>
            </div>

        </section>
    );
}

export default Classes;
