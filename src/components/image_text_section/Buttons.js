import Link from "next/link";

const Buttons = ({buttons}) => {
    const themeClass = {
        primary: "#6683D9"
    }
    const buttonSize = {
        small: "px-4 py-2",
        medium: "px-6 py-3",
        large: "px-8 py-4"
    }
    // className={"bg-white text-[#6683D9] border-[#6683D9] text-sm font-thin py-2 px-4 rounded-full border"}
    console.log(buttons);
    return (<div>
            {buttons.map((button) => {
                const buttonColor = themeClass[button.button_color];
                const btnSize = buttonSize[button.size];
                return (
                    <Link href={button.link.url}>
                        <button
                            className={`bg-${button.background_color} text-[${buttonColor}] border-[${buttonColor}] 
                            text-sm font-thin py-2 px-4 rounded-full border ${btnSize}`}>
                            {button.label}
                        </button>
                    </Link>
                )
            })}
        </div>)
};

export default Buttons;