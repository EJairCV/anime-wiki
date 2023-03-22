



import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function RecomendItem(data) {
    
  return (
    <Col className='my-3'>
    <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>{data.data.entry.title}</Card.Title>
      </Card.Body>
      <Card.Img variant="bottom" src={data.data.entry.images.jpg.image_url}  />
    </Card>
    </Col >
  )
}

export default RecomendItem