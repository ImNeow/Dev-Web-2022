import "../Assets/Styles/CustomNavBar.css"
import {Pagination} from 'react-bootstrap';


function CustomPagination(props) {
  let activePage = props.page;
  let type = props.type
  let items = [];

  items.push(
      <><Pagination.First /><Pagination.Prev /></>
  )
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item href={'/bedetheque/'+type+'/'+number} key={number} active={number == activePage}>
        {number}
      </Pagination.Item>,
    );
  }
  items.push(
      <><Pagination.Next /><Pagination.Last /></>
  )
    
    return(<>
      <Pagination>
          {items}
      </Pagination>
    </>
    );  
}
  
  export {CustomPagination};
