import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BloodNavActive, BloodNavDiv, BloodNavInActive } from "../../../Components/style";
import { BloodList } from "../../../Data/BloodInfo";

const WhoCanDonateNav = () => {
    return (
        <>
            {BloodList.map((item,index)=> 
                (<Col key={BloodList[index].type} style={BloodNavDiv}><NavLink to={BloodList[index].path} style={({ isActive})=> {
                    return isActive ? BloodNavActive : BloodNavInActive
                  }}>{BloodList[index].type}</NavLink></Col>)
            )}
        </>
    );
}

export default WhoCanDonateNav;