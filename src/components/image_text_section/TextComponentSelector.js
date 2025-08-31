import {textType} from "../../constant";
import BulletList from "./BulletList";
import Paragraph from "./Paragraph";
import DocText from "./DocText";

const TextComponentSelector = (({content, type}) => {
    {
        if (type === textType.BULL_LIST) {
            return (<BulletList content={content} />)
        }
        if (type === textType.PARAGRAPH) {
            return (<Paragraph content={content} />)
        }
        if (type === textType.DOC) {
            return (<DocText content={content} />);
        }
        else {
            return (<div>Please edit another type here</div>);
        }
    }
});

export default TextComponentSelector;