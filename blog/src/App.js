import { BrowserRouter, Route } from 'react-router-dom';
import React, {useState} from 'react'
import PostMain from './page/PostMain';
import PostView from './page/PostView';
import NewWrite from './write/newWrite';


function App() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState(1);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/postView/:no' render={(props) => <PostView {...props} 
        data={data} setData={setData}  />} />
        
        <Route exact path='/' render={(props) => <PostMain {...props} 
        data={data}  />} />
        
        <Route exact path='/newWrite' render={(props) => <NewWrite {...props} 
        order={order} setOrder={setOrder} setData={setData} data={data} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
