import { receptorInfo } from "../../../Data/BloodInfo";
import ReceptorRequestCard from "./ReceptorRequestCard";

const ReceptorContainer = () => {
    return (
        <div style={{marginTop: "5rem",paddingBottom: "0.1rem"}}>
            {receptorInfo.map((item) => <ReceptorRequestCard data={item} key={item.id}/> )}
        </div>
    );
}

export default ReceptorContainer;