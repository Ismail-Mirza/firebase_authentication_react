
import { useEffect, useState } from 'react'
import Login from './components/Signup'
import { db } from './firebase/config'
import { addDoc, collection, getDocs } from 'firebase/firestore';

type movieFormType = {
    title:string,
    releaseDate:string,
    receivedOscar: boolean,
}

function App() {
  const [movieList,setMovieList] = useState<any>([]);
  const moviesCollectionRef = collection(db,"movies");
  const initialData:movieFormType = Object.freeze(
    {
       title:'',
       releaseDate:'',
       receivedOscar: false
    }
  )
  const [formData,setFormData] = useState<movieFormType>(initialData)
  const handleChange = (e:any)=>{
      

       setFormData({
            ...formData,
            [e.target.name]:e.target.checked || (e.target.value === "on"?false:e.target.value)
       })

       console.log(formData)

  }
  useEffect(()=>{
    const getMovieList = async()=>{
        //read data 
        //set the movie list
        try {
          const data = await getDocs(moviesCollectionRef);
          const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}))
          setMovieList(filteredData)
        } catch (error) {
          console.error(error)
        }

    }
    getMovieList();
  },[])
  const onSubmit =async () => {
    try {
      await addDoc(moviesCollectionRef,formData);

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <Login></Login>
      <div>
        <h1>Add a movie to database</h1>
        <input type="text" onChange={handleChange} name='title' placeholder='movie title' />
        <input type="text" onChange={handleChange} name='releaseDate' placeholder='movie release date' />
        <input type="checkbox" onChange={handleChange} name='receivedOscar' id='oscar' />
        <label htmlFor="oscar">Received an Oscar</label>
        <button onClick={onSubmit}>Submit Movie</button>
      </div>
      <div style={{
          display:"flex",
          justifyContent:"center",
      }}>
        {
          movieList.map((movie:any)=>(
            <div key={movie.id} style={{
              border: "1px solid black",
              padding: "10px",
            }} >
                <h1>title : {movie.title}</h1>
                <h1>release date: {movie.releaseDate}</h1>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default App
