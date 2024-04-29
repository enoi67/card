import { useContext, useState } from "react"
import modelS from '../../../assets/modelS.avif'
import model3 from '../../../assets/model3.avif'
import modelX from '../../../assets/modelX.avif'
import modelY from '../../../assets/modelY.avif'
import Cyb from '../../../assets/Cybertruck.avif'
import { Link } from "react-router-dom"
import { UserContext } from "../../../Context/UserContext"

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const {data} = useContext(UserContext);

    const cars = [
        { Image: modelS, id:1, name: "ModelS", url:"/modelS" },
        { Image: model3, id:2, name: "Model3", url:"/model3" },
        { Image: modelX, id:3, name: "ModelX", url:"/modelX" },
        { Image: modelY, id:4, name: "ModelY", url:"/modelY" },
        { Image: Cyb, id:5, name: "Cybertruck", url:"/Cybertruck" },
    ]

    return (
        <header>
            <div className="flex items-center justify-between px-[20px] bg-transparent">
                <div className="z-[999]"><Link to={'/'} className="text-xl font-light md:text-2xl lg:text-4xl" href="#"><h1>TESLA:{data.length}</h1></Link></div>
                <div>
                    <nav>
                        <ul className="flex items-center justify-center">
                            <li className="px-5 relative hidden md:block z-[999] hover:bg-slate-100 py-[5px] rounded"><a onMouseEnter={() => setIsHovered(true)} href="">Vehicles</a></li>
                            <li className="px-5 relative hidden md:block z-[999]  hover:bg-slate-100 py-[5px] rounded"><a onMouseEnter={() => setIsHovered(true)} href="">Energy</a></li>
                            <li className="px-5 relative hidden md:block z-[999]  hover:bg-slate-100 py-[5px] rounded"><a onMouseEnter={() => setIsHovered(true)} href="">Charging</a></li>
                            <li className="px-5 relative hidden md:block z-[999]  hover:bg-slate-100 py-[5px] rounded"><a onMouseEnter={() => setIsHovered(true)} href="">Discover</a></li>
                            <li className="px-5 relative hidden md:block z-[999]  hover:bg-slate-100 py-[5px] rounded"><a onMouseEnter={() => setIsHovered(true)} href="">Shop</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="items-center gap-4 hidden md:flex z-[999]">
                    <p>about us</p>
                    <p>network</p>
                    <p>profile</p>
                </div>
            </div>
            {isHovered && (
            <div className="absolute top-0 left-0 right-0 shadow-xl text-black bg-zinc-50 h-64 flex items-center justify-between z-10" onMouseLeave={() => setIsHovered(false)}>
                {cars.map((car, index) => {
                  return <div className="flex items-center flex-col">
                            <img className="w-full h-[100px]" key={index} src={car.Image} alt="" />
                            <Link to={car.url}>{car.name}</Link>
                        </div>
                })}
            </div>
            )}
        </header>
    );
}
export default Header;
