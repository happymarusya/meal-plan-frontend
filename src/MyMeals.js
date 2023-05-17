import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

export const MyMeals = ({text, updatingInInput, deleteMeal}) => {
    return (
        <div>
            <p>{text}</p>
            <AiTwotoneEdit onClick={updatingInInput}></AiTwotoneEdit>
            <AiTwotoneDelete onClick={deleteMeal}></AiTwotoneDelete>
        </div>
    )
}
