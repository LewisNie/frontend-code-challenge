import {textType} from "../../constant";
import DocText from "./DocText";

const BulletList = ({content}) => {
    return (
        <ul className={"list-disc pl-[20px] marker:text-[#D1D5DB]"}>
            {
                content.map((detail) => {
                    if (detail.type === textType.LIST_ITEM) {
                        return (
                            <li><DocText content={detail.content} /></li>
                        )
                    }
                })
            }
        </ul>
    )
};

export default BulletList;