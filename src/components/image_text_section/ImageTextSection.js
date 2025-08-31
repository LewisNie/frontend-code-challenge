import Image from "next/image";
import Headline from "./Headline";
import TextComponentSelector from "./TextComponentSelector";
import Buttons from "./Buttons";

const ImageTextSection = ({blok}) => {
    console.log(blok);
    return (
        <div className={"flex flex-row justify-center"}>
            <div className={"w-[66%] flex flex-row justify-between"}>
                <div className={"w-[40%]"}>
                    <Image src={blok.image.filename} width={500} height={500} alt={blok.image.alt}/>
                </div>
                <div className={"text-left w-[55%] flex flex-col justify-center"}>
                    <Headline headline={blok.headline}/>
                    <div className={"text-[#59616E] text-base"}>
                        <TextComponentSelector {...blok.text}/>
                    </div>
                    <div className="pt-4">
                        <Buttons buttons={blok.button} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ImageTextSection;