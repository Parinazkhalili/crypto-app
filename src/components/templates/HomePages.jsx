import {useEffect, useState} from "react" ;
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/cryptoApi';
import Pagination from "../modules/Pagination";



function HomePages() {
    const[coins , setCoins] = useState([]) ;
    const [isLoading , setIsLoading] = useState(true) ;
    const [page, setPage]= useState(1)

useEffect(() => {
     
   const getData = async () => {
    setIsLoading(true);
    const res = await fetch(getCoinList(page));
    const json = await res.json();
    setCoins(json);
    setIsLoading(false) ;
   };
   getData();

},[page]) ;

     return (
    <div>
      <Pagination  page={page} setPage={setPage}/>
      <TableCoin coins={coins}  isLoading={isLoading}/>
      </div>
  )
}

export default HomePages
