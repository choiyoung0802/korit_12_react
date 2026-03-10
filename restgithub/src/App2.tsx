import { useState } from 'react'
import './App.css'
import axios from 'axios';

type Repository = {
  id: number; // 고유값을 통해서 나중에 .map() 적용했을 때 사용
  full_name: string;
  html_url: string;
}

function App2() {
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState<Repository[]>([]);

  const handleClick = () => {
    axios.get<{items: Repository[]}>(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => setRepodata(response.data.items))
    .catch(error => console.log(error));
  }

  return (
    <>
      <input type="text" onChange={event => setKeyword(event.target.value)} value={keyword}/>
      <button onClick={handleClick}>검색</button>
    </>
  )
}

export default App2