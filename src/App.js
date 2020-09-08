import React , {useState , useEffect} from 'react';
import PokeList from './PokeList'
import Pagination from './Pagination'
import axios from 'axios'


function App() {
  const [pokemon , setPokemon] = useState([])
  const [currentPage , setcurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")

  const [nextPage , setnextPage] = useState()
  const [prevPage , setprevPage] = useState()
  const [loading , setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    axios.get(currentPage).then(res=>{
    setLoading(false)
    setnextPage(res.data.next)
    setprevPage(res.data.previous)
    setPokemon(res.data.results.map(p => p.name))
  }) 
  },[currentPage])

  function toNextPage () {
    setcurrentPage(nextPage)
  }

  function toPrevPage () {
    setcurrentPage(prevPage)
  }

  if (loading) return <h3>"Loading..."</h3>
  
  return (
    <>
    <PokeList pokemon = {pokemon} />
    <Pagination 
    toNextPage={ nextPage ? toNextPage : null}
    toPrevPage={ prevPage ? toPrevPage : null}
    />
    </>
    
  );
}

export default App;
