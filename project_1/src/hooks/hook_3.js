import { useState } from "react";

const HookThree = () => {

    const [books, updateBooks] = useState(['html', 'css', 'bootstrap']);

    const [book, addBook] = useState("");
    const save = () => {
        updateBooks([...books, book]);
        addBook("");
    };

    const deleteBook = (index) => {
        books.splice(index, 1);
        updateBooks([...books]);
    };
    return (
        <div className="container">
            <h1>useState() and [...] spread operator</h1>
            <input type="text" name="" id="bookName" placeholder="Add book name" onChange={e => addBook(e.target.value)} 
                value={book}
            />
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
                        books.map((book, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{book}</td>
                                <td><button type="submit" onClick={() => deleteBook(index)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default HookThree;