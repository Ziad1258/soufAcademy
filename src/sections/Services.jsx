import { servicesData } from "../data"
import servicesImage from "../assets/servicesImage.jpg";

function Services() {
  return (
    <section className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-2xl font-bold">
                خدماتنا
            </h1>
            <p className="text-secondary leading-loose">
            خدماتنا هي عبارة عن دورات تكوينية متنوعة، وبرامج تعليمية موجهة لكافة الفئات هدفها تحسين المستوى المعرفي وتطوير المهارات، بالإضافة إلى ورشات مجانية تقام شهريا على مستوى الأكاديمية بجانبها نوادي طلابية مفتوحة للجميع من أجل ترسيخ المعارف ومشاركتها وتعميمها
            </p>
        </div>
        {/* Services */}
        <div className="flex flex-col gap-12">
            {servicesData.map((service , index) => {
                return (
                    <div key={index} className="flex flex-col gap-8 p-4  shadow-slate-300 shadow-md rounded-lg">
                      <div style={{backgroundColor :  service.color }} className="w-12 h-12 rounded-full text-xl text-white flex justify-center items-center">
                        {service.icon}
                      </div>
                      <div className="flex flex-col gap-4">
                        <h3 style={{color : service.color}} className="text-lg font-bold">{service.title}</h3>
                        <p className="text-secondary leading-loose"> {service.description} </p>
                      </div>
                    </div>
                )
            })}
        </div>
        {/* wallPicutre + article */}
        <div className="flex flex-col gap-8">
            <div className="flex justify-center  ">
                <img src={servicesImage} alt="kid" className="w-[500px] rounded-lg  shadow-slate-400 shadow-lg " />
            </div>
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl text-red-500 font-bold">
                تعليم اللغات للاطفال
                </h1>
                <p className="text-secondary leading-loose p-4 shadow-slate-200 shadow-md rounded-lg "> إنّ تعلّم وإتقان الطفل لعدة لغات مختلفة عن لغتهِ الأم، يُساهم وبشكلٍ كبير في تعزيز ثقتهِ بنفسهِ وقدرته على التواجد مع الآخرين والتحدث معهم بثقةٍ كبيرة بعيداً عن الخوف والخجل والارتباك، وهذا ما يزيد من قدرته على بناء علاقات اجتماعيّة ناجحة وبنّاءة مع الآخرين، أكاديمية سوف تعمل على صناعة جيل مثقف واعي </p>

            </div>
        </div>
        


    </section>
  )
}

export default Services