import React from 'react';
import { useParams } from 'react-router';

const CaterogyNews = () => {
    const id = useParams()
    console.log(id);
    return (
        <div>
            Cetegory News
        </div>
    );
};

export default CaterogyNews;