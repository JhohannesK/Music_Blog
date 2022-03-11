import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import axios from 'axios'

function App() {
  const { posts, setPosts } = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/post')
      console.log(res);
    }
    fetchPost()
  }, [])

  return (
    <>
      <Header />
      <Posts />
      <Footer />
    </>
  );
}

export default App;
