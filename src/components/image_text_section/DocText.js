import TextComponentSelector from "./TextComponentSelector";

const DocText = ({content}) => {
    return (
        <div>
            {
                content.map((contentDetail) => {
                    return (<TextComponentSelector {...contentDetail} />);
                })
            }
        </div>
    )
}

export default DocText;