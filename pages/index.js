import {useEffect, useState} from 'react'
import axios from 'axios'
import Card from 'components/Card.jsx';

const HomePage = () => {

  const [tools, setTools] = useState([])

 
     useEffect(()=>{
      const initFetch = async () => {
        const response = await axios.get('/db.json')
        setTools(response.data)
      }
      
      initFetch()

  },[])
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center'>
      {tools && tools?.map((tool, i) => (
        <Card key={i} {...tool} />
      ))}
    </div>
  );
};

export default HomePage;
