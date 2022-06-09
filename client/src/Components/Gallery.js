import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import AddImage from './AddImage'
import Showcards from './Showcards';
import Pagination from './Pagination';
import Cards from './Cards';
const Gallery = () => {

    const [ImgData, setImgData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [ImgPerPage] = useState(9);
   


    useEffect(() => {


        const checking = async () => {
            try {
                setLoading(true);
                const res = await fetch('/Take', {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })
                const data = await res.json();
                setImgData(data);
                setLoading(false);
                //console.log(data);
                //console.log(`imag data initiali ${ImgData}`);
                if (!res.status === 200) {
                    throw new Error(res.error);
                }
            } catch (err) {
                console.log(err);
            }
        }
        checking();
        //console.log(ImgUrl)
    }, [])
    const indexOfLastImg = currentPage * ImgPerPage;
    const indexOfFirstImg = indexOfLastImg - ImgPerPage;
    const currentImg = ImgData.slice(indexOfFirstImg, indexOfLastImg);
    //console.log(ImgData.length);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>

            <SearchBar />
            <AddImage />
            <div className="container mt-3">
                <div className="row">
                    <Showcards Img={currentImg} loading={loading} />
                </div>
                <Pagination 
                    ImgPerPage={ImgPerPage}
                    totalImg={ImgData.length}
                    paginate={paginate}
                />
            </div>
        </>
    )
}

export default Gallery
