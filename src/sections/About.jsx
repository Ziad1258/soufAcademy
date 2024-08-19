import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

function About() {
  return (
    <div className=" bg-gray-100 dark:bg-dark border-y dark:border-border-gray py-24">
      <div className="container mx-auto px-4 flex flex-col gap-16">
        <h1 className="text-2xl font-bold text-center prTitle">من نحن  </h1>

        <div className="flex flex-col gap-4 text-center relative">
          <p className="text-secondary dark:text-darksecondary leading-loose">
            أكاديمية سوف وعلى مدار خمس سنوات تعد واحدة من أفضل مراكز التدريب في الوطن، لما تتميز به من تنوع كبير في خطتها التدريبية، بالإضافة إلى استخدام أحدث الأساليب والأنظمة في الدورات التدريبية، فأكاديميتنا لازالت تعمل على تطوير المنظومة التدريبية للوصول بها إلى أحدث ما وصل إليه العالم في مجال التدريب المهني الفعّال .
          </p>
          <p className="text-secondary dark:text-darksecondary leading-loose">
            أكاديمية سوف تجعل العالم أكثر انفتاحًا عن طريق التدريب اللغوي بفضل كوكبة من الأساتذة في تعليم اللغات الأجنبية، ولأن الآباء يبحثون دومًا عما هو أفضل لأطفالهم والاختيارات التي تضمن لهم مستقبلًا أفضل، وعلى رأسها اختيار المدرسة المناسبة لهم، كانت ولا زالت أكاديمية سوف الرائدة في مرافقة تلاميذ في مختلف الأطوار .
          </p>
          <span className="">
            <FaQuoteRight className="absolute -top-8 sm:-right-8 right-0 text-xl text-blue-500" />
            <FaQuoteLeft className="absolute -bottom sm:-left-8 left-0 text-xl text-blue-500" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default About