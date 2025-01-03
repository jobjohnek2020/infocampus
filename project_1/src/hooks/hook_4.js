import { useState } from "react";

export default function HookFour() {

    let [users, setUsers] = useState([]);
    let [fname, setFname] = useState("");
    let [mobno, setMobno] = useState("");
    let [femail, setFemail] = useState("");
    let [fcity, setCity] = useState("");
    let [userId, setUserId] = useState(1);
    let [updateUserId, setUpdateUserId] = useState(-1);
    const saveUser = () => {
        let newUser = {
            id: userId++,
            name: fname,
            mobile: mobno,
            email: femail,
            city: fcity
        };
        setUsers([...users, newUser]);
        setFname("");
        setMobno("");
        setFemail("");
        setCity("");
        setUserId(userId);
    };

    const deleteUser = (id) => {
        setUsers(users.filter(i => i.id !== id));
        setFname("");
        setMobno("");
        setFemail("");
        setCity("");
    };
    const editUser = (user) => {
        setFname(user.name);
        setMobno(user.mobile);
        setFemail(user.email);
        setCity(user.city);
        setUpdateUserId(user.id);
    };

    const updateUser = () => {
        let updatedUser = {
            id: updateUserId,
            name: fname,
            mobile: mobno,
            email: femail,
            city: fcity
        };
        setUsers(
            users.map(user => user.id === updateUserId ? updatedUser : user)
        );
        setFname("");
        setMobno("");
        setFemail("");
        setCity("");
        setUpdateUserId(-1);
    };
    return (
        <div className="container">
            <h1>
                Array of Objects CRUD
            </h1>
            <div className="userForm">
                <div className="userData">
                    <label htmlFor="fname">Full Name:</label>
                    <input type="text" name="" id="fname" onChange={(e) => setFname(e.target.value)} value={fname} /><br />
                </div>
                <div className="userData">
                    <label htmlFor="mobno">Mobile:</label>
                    <input type="text" name="" id="mobno" onChange={(e) => setMobno(e.target.value)} value={mobno} /><br />
                </div>
                <div className="userData">
                    <label htmlFor="fmail">Email:</label>
                    <input type="text" name="" id="femail" onChange={(e) => setFemail(e.target.value)} value={femail} /><br />
                </div>
                <div className="userData">
                    <label htmlFor="fcity">City:</label>
                    <input type="text" name="" id="fcity" onChange={(e) => setCity(e.target.value)} value={fcity} /><br />
                </div>
                <button type="submit" onClick={() => saveUser()}>Save</button>
                <button type="submit" onClick={() => updateUser()}>Update</button>
            </div>
            <div className="users">
                <h1>{users.length} Users</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Full Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}</td>
                                    <td>
                                        <button type="submit" onClick={() => deleteUser(user.id)}>Delete</button>
                                        <button type="submit" onClick={() => editUser(user)}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

