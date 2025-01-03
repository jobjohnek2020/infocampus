import { useState, useEffect } from "react";
export default function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:1234/productapi")
            .then(i => i.json())
            .then(i => setProducts(i));
    }, [products]);

    return (
        <>
            <h1 style={{textAlign:"center",marginBottom:"2rem", marginTop:"2rem"}}>{products.length} Products</h1>
            <table align="center">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Sl No</th>
                        <th style={{textAlign:"center"}}>Name</th>
                        <th style={{textAlign:"center"}}>Price($)</th>
                        <th style={{textAlign:"center"}}>Category</th>
                        <th style={{textAlign:"center"}}>Sub Category</th>
                        <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index) => (
                            <tr key={product.id}>
                                <td style={{textAlign:"center"}}>{index+1}</td>
                                <td style={{textAlign:"center"}}>{product.name}</td>
                                <td style={{textAlign:"right"}}>{product.price}</td>
                                <td style={{textAlign:"center"}}>{product.category}</td>
                                <td style={{textAlign:"center"}}>{product.subcategory}</td>
                                <td>
                                    <button type="submit">Delete</button>
                                    <button type="submit">Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}