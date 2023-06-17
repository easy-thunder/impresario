import image from "../public/images/jake fancy.jpg"
import Image from "next/image"
export default function LandingImage(){
    return(<div>
        <Image src={image} />
    </div>)
}