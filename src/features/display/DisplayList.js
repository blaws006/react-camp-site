import { Row, Col } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturePromotion } from '../promotions/promotionsSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturePromotion()];
    return (
        <Row>
            {items.map((item, idx) => {
                return(
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default DisplayList;