import CampsiteCard from "./CampSiteCard";
// import { CAMPSITES } from "../../app/shared/CAMPSITES";
import {Col, Row} from 'reactstrap';
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
    const campsite = selectAllCampsites();
    return(
        <Row className="ms-auto">
            {campsite.map((campsite) => {
                return (
                    <Col md='5' className="m-4" key={campsite.id}>
                    <CampsiteCard campsite={campsite}></CampsiteCard>
            </Col>)
            })}
    </Row>
    )
    
}

export default CampsitesList;