// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// //import useData from '../store/hooks/useData';

// const TypeSelec = () => {

//     const [type, setType] = useState([]);
//     //const {data: pokemons, setData: setpokemons} = useData();

//     useEffect(() => {
//         axios.get('https://pokeapi.co/api/v2/type/')
//         .then(res => setType(res.data.results))
//     },[]);

//     const handlerType = (url) => {
//         axios.get(url).then(res => setpokemons(res.data.results))
//         console.log('click', pokemons)
//     }

//     console.log('type', type)
//     return (
//         <div>
//             <h3>Type</h3>
//             <select name="type" onChange={e => handlerType(e.target.value)}>
//                 <option value="">Type</option>
//                 {
//                     type.map(t => (
//                         <option 
//                          key={t.url}
//                          value={t.url}
//                         >
//                             {t.name}
//                         </option>
//                     ))
//                 }
                
//             </select>
//         </div>
//     );
// };

// export default TypeSelec;