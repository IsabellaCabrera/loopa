import { useNavigate } from "react-router"
import { Button } from "../Button"

export const ProductCard = () => {
    const navigate = useNavigate()

    
    return (
        <article className="flex flex-col gap-6 p-4 bg-white rounded-2xl">
            <img className="h-[140px] w-auto object-cover rounded-lg " src="/mclogo.webp" alt="" />
            <div>
                <h3 className="font-bold">Product Name</h3>
                <p className="text-morado font-bold text-2xl flex items-center gap-1">$6.99<span className="text-black/30 font-normal text-xl">(Save $6)</span></p>
            </div>
            <Button onClick={()=> navigate("/customer/checkout")}>Add</Button>
        </article>
    )
}