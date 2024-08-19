import { useParams } from "react-router-dom"
import { storiesData } from "./data";
import { useTheme } from "./hooks/useTheme";
function User() {
    const { id } = useParams();
    const user = storiesData.find((story) => story.id == id);
    // const theme = localStorage.getItem("theme");
    
   useTheme();
    return (
        <div>
            <div className="container mx-auto p-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16    text-center lg:text-right ">
                <div className="flex flex-1 justify-center lg:justify-start ">
                    <img className="max-h-[700px]   rounded-lg shadow-myShadow object-cover" src={user.imgUrl} alt={user.name} />

                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-4"> {user.name} </h1>
                    <div className="flex flex-col gap-4">
                        {user.content.map((el, index) => {
                            return (
                                < p key={index} className="text-secondary dark:text-darksecondary leading-loose "> {el} </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default User