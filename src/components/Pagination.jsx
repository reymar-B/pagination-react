const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='flex justify-center'>
                { pageNumbers.map( number => (
                    <li key = { number } className=' text-sm font-semibold text-blue-300 border-solid border border-sky-500'>
                        <a onClick = { () => paginate( number )} href='!#' className='py-2 w-10 text-center block'>
                            { number }
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination