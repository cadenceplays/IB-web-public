import React from 'react';
import './Training.css';
import { RiEmphasis, RiEmphasisCn } from "react-icons/ri";
import { Line } from "../components";
import { Fragment } from 'react';

const getLanguageLogo = (language) => {
  return(
      <>
         {language.includes('English') && <RiEmphasis title='English' className="training-ri" />}        
         {language.includes('Chinese') && <RiEmphasisCn title='Chinese' className="training-ri" />}        
      </>
  )
}

const Training = () => {
    return (
        <div className="training">
            <div className="training-title">
                Volunteer Training
            </div>
            <div className="training-content">
                <Fragment>
                    <div className="training-category">Training Video</div>
                    <div className="training-filename">
                        <a href="https://www.youtube.com/watch?v=a379zfelFCk" target="_blank" rel="noopener">Understanding Autism (recorded online training video in 2022)</a>&nbsp;&nbsp;
                        {getLanguageLogo('English')}
                    </div>
                </Fragment>
                <Fragment>
                    <Line color="--green-color" width="100%" />
                    <div className="training-category">Training PDFs</div>
                    <div className="training-filename">
                        <a href="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/volunteer_training%2FAutism%20Training%20for%20Volunteers%20(1)%5B8226%5D%203.pdf?alt=media&token=6d55498b-dcf3-4906-bc82-f0f7a014b15e" download="Autism Training for Volunteers.pdf" target="_blank" rel="noopener">Autism Training for Volunteers</a>&nbsp;&nbsp;
                        {getLanguageLogo('English')}
                    </div>
                    <div className="training-filename">
                        <a href="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/volunteer_training%2FInternational%20Buddy%20-%20handouts%202023%20for%20volunteers.pdf?alt=media&token=fff6777e-c896-44a3-a136-a8cead02a04f" download="Handouts for Volunteers.pdf" target="_blank" rel="noopener">Handouts for Volunteers</a>&nbsp;&nbsp;
                        {getLanguageLogo('English')}
                    </div>
                    <div className="training-filename">
                        <a href="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/volunteer_training%2FCopy%20of%20Copy%20of%20CARES%20-%20Volunteer%20Training%20for%20International%20Buddy.pdf?alt=media&token=62314814-e130-4964-8029-e2754efcbdfe" download="CARES-Volunteer Training for IB.pdf" target="_blank" rel="noopener">CARES - Volunteer Training for International Buddy</a>&nbsp;&nbsp;
                        {getLanguageLogo('English')}
                    </div>
                </Fragment>
            </div>
        </div>
    )
}

export default Training