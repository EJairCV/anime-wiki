import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


import { useNavigate } from 'react-router-dom';

function AnimeItem({data}) {

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate("/aniinfo/"+data.mal_id)
  }
  return (
    <Col className='my-3 d-flex justify-content-center'>
    <Card  onClick={handleClick}  style={{ width: '15rem', cursor:'pointer' }}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
      </Card.Body>
      <Card.Img  variant="bottom" src={data.images.jpg.image_url} />
    </Card>
    </Col >
  )
}

export default AnimeItem