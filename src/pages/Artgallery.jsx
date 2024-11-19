import React, { useState, useEffect } from 'react';
import './Artgallery.css';
import { db } from "../firebase";
import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Artgallery = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const getRecords = async () => {
            const q = query(collection(db, "art_gallery"), where("display", "==", true), orderBy("sequence", "asc"));
            const data = await getDocs(q);
            setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getRecords();
    }, [])


    return (
        <div className="artgallery">
            <div className="artgallery-title-container">
                <div className="artgallery-title">
                    Art Gallery
                </div>
                <div className="artgallery-description">
                    The art programs at International Buddy benefit the children by fostering self-expression and confidence, improving motor skills and focus, facilitating non-verbal communication and by building friendships and community. <br /><br />
                    If you are interested in the art works, please <Link to="/contact"><b>contact</b></Link> us.
                </div>
            </div>

            <div className="artgallery-content-container">
                {records.map((record, key) => {
                    // const art = new Image();
                    // art.src = record.link;
                    // const ratio = art.naturalHeight / art.naturalWidth;

                    return (
                        <div className="artgallery-content" key={key}>
                            <div className="artgallery-content-art">
                                <img src={record.link} alt={record.name} />
                            </div>
                            <div className="artgallery-content-text">
                                {record.name?
                                    <p><b>{record.name}</b><br/>By <b>{record.author}</b></p>
                                    :
                                    <p>By <b>{record.author}</b></p>
                                }
                            </div>
                        </div>
                    )
                })}

            </div>
            <div>&nbsp;</div>
        </div>
    )
}

export default Artgallery