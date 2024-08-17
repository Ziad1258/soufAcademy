import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiMiniLanguage } from "react-icons/hi2";
import { FiCpu } from "react-icons/fi";
import { FaPhoenixFramework } from "react-icons/fa6";


export const navLinks = [
    {
        label: "خدماتنا",
        url: "#services",
        name: "services",
    },
    {
        label: "القصص",
        url: "#stories",
        name: "stories",
    },
    {
        label: "من نحن",
        url: "#about",
        name: "about",
    },
    {
        label: "اتصل بنا",
        url: "#contact",
        name: "contact",
    },
];




export const socialMedia = [
    {
        name: "Facebook",
        logo: <FaFacebook size={24} className="text-blue-700" />,
        url: "https://www.facebook.com/SoufAcademy",
    },
    {
        name: "Instagram",
        logo: <FaInstagram size={24} className="text-orange-400" />,
        url: "https://www.instagram.com/soufacademy/",
    },
    {
        name: "Twitter",
        logo: <FaTwitter size={24} className="text-blue-400" />,
        url: "#",
    },
    {
        name: "WhatsApp",
        logo: <FaWhatsapp size={24} className="text-green-500" />,
        url: "#",
    },
    {
        name: "TikTok",
        logo: <FaTiktok size={24} className="text-black" />,
        url: "#",
    }
];

export const servicesData = [
    {
        icon: <HiMiniLanguage />,
        title: "تعليم اللغات",
        color: "green",
        description: "اكتساب مهارات لغوية جديدة يمكن أن يفتح لك العديد من الفرص سواء في حياتك المهنية أو الشخصية. نقدم برامج تعليم لغات متكاملة تشمل التحدث، القراءة، والكتابة، مع تركيز على التطبيق العملي من خلال محادثات وتفاعلات يومية. هذه البرامج مصممة لتلبية احتياجات المتعلمين من مختلف المستويات، من المبتدئين إلى المتقدمين."
    },
    {
        icon: <FiCpu />,
        title: "التدريبات التقنية",
        color: "red",
        description: "ابقَ على اطلاع بأحدث التقنيات والاتجاهات في عالم التكنولوجيا من خلال برامجنا التدريبية المتقدمة. سواء كنت تبحث عن تحسين معرفتك بالبرمجة، تطوير التطبيقات، أو فهم الأنظمة المعقدة، نقدم لك دورات تدريبية مصممة بعناية لتناسب مستوى خبرتك وتساعدك على الوصول إلى مستوى جديد من الاحتراف."
    },
    {
        icon: <FaPhoenixFramework />,
        title: "التطوير الوظيفي",
        color: "blue",
        description: "نساعدك على الوصول إلى أهدافك المهنية من خلال برامج تطوير وظيفي مصممة خصيصاً لتعزيز مهاراتك وزيادة فرصك في سوق العمل. تشمل هذه البرامج ورش عمل، استشارات مهنية، وتوجيه مستمر لمساعدتك في تحديد مسارك المهني وتحقيق تقدم مستدام في حياتك الوظيفية."
    }
];

export const classesData = [
    {
        id: 1,
        title: "  التواصل باللغة الانجليزية ",
        content: [
            {
                text: "ورشات التواصل باللغة الإنجليزية 12 حصة بمعدل 3 حصص أسبوعيا لتطوير مهارات التواصل باللغة الإنجليزية - موجهة للطلبة الذين لديهم مستوى B1 في اللغة الإنجليزية هذه التدريبات مجانية تماما تحت إطار مشروع B-create الممول من طرف السفارة الأمريكية و المقدم من طرف World Souf Academy, learning."
            }
        ],
        color: "green",
    },
    {
        id: 2,
        title: "الانخراط المدني",
        content: [
            {
                text: "استيعاب مصادر القوة والضعف في شخصيتك"
            },
            {
                text: " كيفية البحث عن عمل بطريقة فعالة "
            },
            {
                text: "كيفية إجراء مقابلة عمل"
            },
            {
                text: "  التواصل الفعال أمام العامة إنشاء بصمة مهنية افتراضية "
            },
            {
                text: " تبني روح المقاولاتية وريادة الأعمال تخطي عقبات مكان العمل  "
            },
           
        ],
        color: "red",
    },
    {
        id: 3,
        title: " التطوير المهني ",
        content: [

            {
                text: "  ورشات حول تعزيز الانخراط المدني القيادة "
            },
            {
                text: "  التغلب على العقبات الفردية "
            },
            {
                text: " التغلب على العقبات الجماعية  "
            },
            {
                text: " التعامل مع عقبات الطلاب عند التطوع  "
            },
            {
                text: " التطوع و العمل  "
            },
            {
                text: "التخطيط للعمل  "
            },
        ],
        color: "red",
    }
]

