import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';

function App() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);


    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='font-bold text-4xl py-9 text-blue-500 text-center'>Pagination in react</h1>
                <Posts posts = { posts }/>
            </div>
        </div>
    );
}

export default App;
