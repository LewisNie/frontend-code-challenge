import {textType} from "../../constant";

const Paragraph = ({content}) => {
    return (
        <div>
            {
                content.map(({text, type}) => {
                    if(type === textType.TEXT){
                        return (
                            <p className={"py-2"}>{text}</p>
                        )
                    } else {
                        return (<p>Please edit another type here</p>)
                    }
                })
            }
        </div>
    )
};

export default Paragraph;