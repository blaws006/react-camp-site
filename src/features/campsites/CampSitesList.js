import CampsiteCard from "./CampSiteCard";
import { CAMPSITES } from "../../app/shared/CAMPSITES";
import {Col, Row} from 'reactstrap'

const CampsitesList = () => {
    return(
        <Row className="ms-auto">
            {CAMPSITES.map((campsite) => {
                return (
                    <Col md='5' className="md-4" key={campsite.id}>
                    <CampsiteCard campsite={campsite}></CampsiteCard>
            </Col>)
            })}
    </Row>
    )
    
}

export default CampsitesList;