import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

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

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='flex justify-center w-1/2 mx-auto'>
            <div className='w-full'>
                <h1 className='font-bold text-4xl py-9 text-blue-500 text-center'>Pagination in react</h1>
                {loading ? <h2 className='font-bold text-center text-blue-300'>Loading..</h2> : <Posts posts={ currentPosts } />}
                <Pagination
                    postsPerPage={ postsPerPage }
                    totalPosts={ posts.length }
                    paginate={ paginate }
                />
            </div>
        </div>
    );
}

export default App;
