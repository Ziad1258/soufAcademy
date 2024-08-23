import { storiesData } from "../data"
import { Link } from "react-router-dom"
function Stories() {
  return (
    <section id="stories" className="flex flex-col gap-12">
      <h1 className="text-2xl text-center font-bold">
      حكايات و قصص نجاح

      </h1>
      <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 rounded-lg shadow-myShadow dark:shadow-mydarkShaow  p-4">
        {storiesData.map((story,index) => {
            return (
               <Link key={index} to={`/User/${story.id}`} onClick={() => window.scrollTo({top : 0 , behavior : "smoothe"})}>
                 <div  key={index} className="flex flex-col cursor-pointer relative h-full  ">
                        <img  src={story.imgUrl} alt={story.name} className="rounded-lg h-full blur-[2px] hover:filter-none hover:scale-105 transition-all duration-300 ease-linear " />
                        <h1 className="absolute bottom-10 rounded-l-md  bg-black/90 dark:bg-spdarkbg p-2 text-white w-fit "> {story.name} </h1>
                    
                    
                </div> 
               </Link>
            )
        })}
      </div>
         
    </section>
  )
}

export default Stories