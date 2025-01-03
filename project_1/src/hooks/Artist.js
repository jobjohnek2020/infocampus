import { useState } from 'react';
const Artist = () => {
    const [artists, setArtists] = useState([]);
    const addArtist = () => {
        setArtists([...artists, document.getElementById('artistId').value]);
    };
    const deleteArtist = (artist) => {
        setArtists(artists.filter(i => i !== artist));
    };
    return (
        <div>
            <input type="text" name="" id="artistId" />
            <button type="submit" onClick={addArtist}>Add Artists</button>
            <ul>
                {artists.map((artist, index) => (<li key={index}>{artist} <button type="submit" onClick={() => deleteArtist(artist)}>Delete</button></li>))}
            </ul>
        </div>
    );
};

export default Artist;