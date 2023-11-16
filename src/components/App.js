import React, { useEffect, useState } from "react";

function App() {
    const [image, setImage] = useState();
    const [altText, setAltText] = useState('');

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => {
            setImage(data.message);
            setAltText("A Random Dog");
        });


    }, []);

    if (!image) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={image} alt={altText} />
        </div>
    )
}

export default App;