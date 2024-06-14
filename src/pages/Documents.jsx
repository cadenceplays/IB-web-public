import React, { useState, useEffect } from 'react';
import './Documents.css';
import {db} from '../firebase';
import {collection, query, orderBy, getDocs} from 'firebase/firestore';
import { RiEmphasis, RiEmphasisCn } from "react-icons/ri";
import { Line } from "../components";
import { Fragment } from 'react';


const getLanguageLogo = (language) => {
  return(
      <>
         {language.includes('English') && <RiEmphasis title='English' className="documents-ri" />}        
         {language.includes('Chinese') && <RiEmphasisCn title='Chinese' className="documents-ri" />}        
      </>
  )
}


const Documents = () => {
  const [records, setRecords] = useState([]);
  let category = '';
  let showCategory = 0;
  let count = 0;

  useEffect(() => {
    const getRecords = async () => {
      const q = query(collection(db, "autism_documents"), orderBy("category"));
      const data = await getDocs(q);
      setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getRecords();
  }, [])

  return (
    <div className="documents">
      <div className="documents-title">
        Related Documents
      </div>
      <div className="documents-content">
        {records.map((record) => {
          count++;
          if (category !== record.category) {
            category = record.category;
            showCategory = 1;
          } else {
            showCategory = 0;
          }

          if (showCategory) {
            if (count === 1) {  // first record
              return (
                <Fragment key={record.id}>
                  <div className="documents-category">{category}</div>
                  <div className="documents-filename">
                    <a href={record.address} download={record.filename} target="_blank" rel="noopener">{record.filename}</a>&nbsp;&nbsp;
                    {getLanguageLogo(record.language)}
                  </div>
                </Fragment>
              )
            } else {    // not the first category, print a line before the new category
              return (
                <Fragment key={record.id}>
                  <Line color="--green-color" width="100%" />
                  <div className="documents-category">{category}</div>
                  <div className="documents-filename">
                    <a href={record.address} download={record.filename} target="_blank" rel="noopener">{record.filename}</a>&nbsp;&nbsp;
                    {getLanguageLogo(record.language)}
                  </div>
                </Fragment>
              )
            }
          } else {
            return (
              <Fragment key={record.id}>
                <div className="documents-filename">
                  <a href={record.address} download={record.filename} target="_blank" rel="noopener">{record.filename}</a>&nbsp;&nbsp;
                  {getLanguageLogo(record.language)}
                </div>
              </Fragment>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Documents