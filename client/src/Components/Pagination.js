import React from 'react'

function Pagination({ ImgPerPage, totalImg, paginate }) {

    const pageNumbers = [];
    //console.log(`total images on the data is ${totalImg}`);
    for (let i = 1; i <= Math.ceil(totalImg / ImgPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <nav>

                <ul className='pagination justify-content-center mt-5 mb-5'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href='!#' className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Pagination
