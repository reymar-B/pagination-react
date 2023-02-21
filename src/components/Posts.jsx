const Posts = ({ posts }) => {

    return (
        <ul className='mb-4 text-lg text-start'>
            {posts.map(post => (
                <li key={post.id} className='border-solid border border-sky-500 p-2 m-1 rounded'>
                    {post.title}
                </li>
            ))}
        </ul>
    )

}

export default Posts