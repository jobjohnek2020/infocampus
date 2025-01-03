import {useState} from "react";

const HookTwo = () => {

    let [books,updateBooks] = useState(['html','css','bootstrap']);

    const save = ()=>{
        updateBooks([...books,document.getElementById('bookName').value]);
    };

    const deleteBook = (index) => {
        books.splice(index,1);
        updateBooks([...books]);
    };
    return(
        <div className="container">
            <h1>useState() and [...] spread operator</h1>
            <input type="text" name="" id="bookName" placeholder="Add book name"/>
            <button type="submit" onClick={save}>Save</button>
            <p>{books.length} Books</p>
            <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Book Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{book}</td>
                                <td><button type="submit" onClick={deleteBook.bind(this,index)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default HookTwo;