import { useState, useEffect } from "react";

const ApiOne = () => {
    let [cities, setCities] = useState([]);
    let [users, setUsers] = useState([]);
    let [albums,setAlbums] = useState([]);
    const getCities = () => {
        fetch("city.json")
            .then(i => i.json())
            .then(i => setCities(i));
    };

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(i => i.json())
            .then(i => setUsers(i));
    };

    const getAlbums = ()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(i => i.json())
        .then(i => setAlbums(i));
    };

    useEffect(()=>{
        getUsers();
        getAlbums();
        getCities();
    },[]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/*<button type="submit" className="btn btn-primary mb-3" onClick={() => getCities()}>Show Cities</button>*/}
                    <fieldset className="d-block">
                        <legend className="text-center h3 border-danger">{cities.length} cities</legend>
                        {
                            cities.map(city => {
                                return (
                                    <p key={city.id} className="d-block">{city.name}</p>
                                )
                            })
                        }
                    </fieldset>

                </div>
                <div className="col-lg-4">
                    {/*<button type="submit" className="btn btn-primary mb-3" onClick={() => getUsers()}>Show Users</button>*/}
                    <fieldset className="d-block">
                        <legend className="text-center h3">{users.length} users</legend>
                        {
                            users.map(user => {
                                return (
                                    <p key={user.id} className="d-block">{user.name}</p>
                                )
                            })
                        }
                    </fieldset>
                </div>
                <div className="col-lg-4">
                    {/*<button type="submit" className="btn btn-primary mb-3" onClick={() => getAlbums()}>Show Albums</button>*/}
                    <fieldset className="d-block">
                        <legend className="text-center h3">{albums.length} Albums</legend>
                        {
                            albums.map(album => {
                                return (
                                    <p key={album.id} className="d-block">{album.title}</p>
                                )
                            })
                        }
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default ApiOne;