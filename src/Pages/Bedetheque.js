import { Card,CardGroup } from "react-bootstrap"
import { useEffect, useState} from 'react'

const Bedetheque = () => {
  const [initialState, setInitialState] = useState([])

  useEffect(()=>{
    fetch("/api/getImages").then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => console.log(jsonResponse))
  },[])

    return <div>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://cdn001.tintin.com/public/tintin/img/static/tintin-au-pays-de-l-or-noir/tintin-au-pays-de-l-or-noir-fr.jpg" />
    <Card.Body>
      <Card.Title>Tintin au Tibet</Card.Title>
    </Card.Body>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="https://cdn001.tintin.com/public/tintin/img/static/objectif-lune/objectif-lune-fr.jpg" />
    <Card.Body>
      <Card.Title>Tintin en Amerique</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cdn001.tintin.com/public/tintin/img/static/on-a-marche-sur-la-lune/on-a-marche-sur-la-lune.jpg" />
    <Card.Body>
      <Card.Title>Tintin au Congo</Card.Title>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img  variant="top" src="https://cdn001.tintin.com/public/tintin/img/static/l-affaire-tournesol/l-affaire-tournesol-fr.jpg" />
    <Card.Body>
      <Card.Title>Tintin au Tibet</Card.Title>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img  variant="top" src="https://cdn001.tintin.com/public/tintin/img/static/vol-714-pour-sydney/vol-714-pour-sydney-fr.jpg" />
    <Card.Body>
      <Card.Title>Tintin au Tibet</Card.Title>
    </Card.Body>
  </Card>
  
</CardGroup>
<br></br>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://www.bdaddik.com/10678-large_default/album-les-aventures-de-tintin-t11-le-secret-de-la-licorne.jpg

" />
    <Card.Body>
      <Card.Title>Les Aventures de Tintin et le Secret de la Licorne</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.bdaddik.com/954-large_default/album-de-tintin-l-oreille-cassee-edition-fac-simile-couleurs-1943.jpg" />
    <Card.Body>
      <Card.Title>Tintin , L'Oreille Cassée</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.bdaddik.com/929-large_default/album-de-tintin-coke-en-stock-edition-fac-simile-couleurs-1958.jpg" />
    <Card.Body>
      <Card.Title>Tintin , Coke en Stock</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="http://orangemetallique.boutique/boutique/image/cache/catalog/Album%20r%C3%A9gulier/20%20-%20Tintin%20au%20Tibet-980x980.jpg" />
    <Card.Body>
      <Card.Title>Tintin au Tibet</Card.Title>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="http://orangemetallique.boutique/boutique/image/cache/catalog/Album%20r%C3%A9gulier/20%20-%20Tintin%20au%20Tibet-980x980.jpg" />
    <Card.Body>
      <Card.Title>Tintin au Tibet</Card.Title>
    </Card.Body>
  </Card>
</CardGroup>
<br></br>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://www.bdaddik.com/967-large_default/album-de-tintin-le-temple-du-soleil-edition-fac-simile-couleurs-1949.jpg" />
    <Card.Body>
      <Card.Title>Les Aventures de tintin et le Temple du Soleil</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.bdaddik.com/927-large_default/album-de-tintin-les-cigares-du-pharaon-edition-fac-simile-couleurs-1955.jpg" />
    <Card.Body>
      <Card.Title>Tintin et les Cigares du Pharaon</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.bdaddik.com/950-large_default/album-de-tintin-le-lotus-bleu-edition-fac-simile-couleurs-1946.jpg" />
    <Card.Body>
      <Card.Title>Tintin et le Lotus Bleu</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="http://orangemetallique.boutique/boutique/image/cache/catalog/Album%20r%C3%A9gulier/20%20-%20Tintin%20au%20Tibet-980x980.jpg" />
    <Card.Body>
      <Card.Title>Tintin au Tibet</Card.Title>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="http://orangemetallique.boutique/boutique/image/cache/catalog/Album%20r%C3%A9gulier/20%20-%20Tintin%20au%20Tibet-980x980.jpg" />
    <Card.Body>
      <Card.Title>Tintin au Tibet</Card.Title>
    </Card.Body>
  </Card>
</CardGroup>
    </div>
    }
    export default Bedetheque
