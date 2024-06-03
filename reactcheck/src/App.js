
import Card from 'react-bootstrap/Card';
import Description from './components/Description';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';

function App() {
  return (
    <div >
       <Card style={{ width: '18rem' }}>

      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <p ><Price/></p>
      </Card.Body>
    </Card>
      
    </div>
  );
}

export default App;
