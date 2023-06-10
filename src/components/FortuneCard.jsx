import React from "react";

const FortuneCard = ({ phraseData }) => {

    


    return (
        <div className="fortune-card">
            <h1>{ phraseData.phrase} </h1>
            {/*<h1>{ phraseData.author} </h1>*/}
        </div>
    );
};

export default FortuneCard;
