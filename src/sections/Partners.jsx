import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpeg";
const PartnersData = [p1, p2, p3, p4];
function Partners() {
  return (
    <section className="flex flex-col gap-12">
        <h1 className="text-2xl font-bold text-center prTitle">شركاؤنا </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        {PartnersData.map((partner , index) => {
            return (
                <div className="flex justify-center" key={index}>
                    <img  src={partner} alt="" className=" w-72 h-72  cursor-pointer rounded-lg shadow-myShadow    prImage  " />
                </div>
            )
        } )}
        </div>

    </section>
  )
}

export default Partners