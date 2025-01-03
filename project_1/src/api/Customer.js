import { useState, useEffect } from "react";
export default function Customer() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:1234/customerapi")
            .then(i => i.json())
            .then(i => setCustomers(i));
    }, [customers]);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [cemail, setCemail] = useState("");
    const [company, setCompany] = useState("");
    const [country, setCountry] = useState("");

    const saveCustomer = () => {
        let newCustomer = {
            "email": cemail,
            "first": fname,
            "last": lname,
            "company": company,
            "country": country
        };
        let headers = {
            "content-type":"application/json"
        };
        let request = {
            method : "post",
            headers : headers,
            body : JSON.stringify(newCustomer)
        };
        fetch("http://localhost:1234/customerapi",request)
        .then(i => i.json())
        .then( i => {
            setCemail("");
            setCompany("");
            setCountry("");
            setFname("");
            setLname("");
        });
        
    };

    const deleteCustomer = (id) => {
        let url = "http://localhost:1234/customerapi/"+id;
        fetch(url,{
            method:"delete"
        }).then(i => i.json())
        .then(i => console.log(i));
    };
    return (

        <div className="container-fluid bg-light">
            <div className="row">

                <div className="col-lg-3"><input type="text" name="" id="" className="form-control" placeholder="Enter first name" value={fname} onChange={(e) => setFname(e.target.value)} /></div>
                <div className="col-lg-3"><input type="text" name="" id="" className="form-control" placeholder="Enter last name"  value={lname} onChange={(e) => setLname(e.target.value)} /></div>
                <div className="col-lg-3">
                    <input type="email" name="" id="" className="form-control" placeholder="Enter email"  value={cemail} onChange={(e) => setCemail(e.target.value)} />
                </div>
                <div className="col-lg-3"><input type="text" name="" id="" className="form-control" placeholder="Enter company name"  value={company} onChange={(e) => setCompany(e.target.value)} /></div>
                <div className="col-lg-3"><input type="text" name="" id="" className="form-control" placeholder="Enter country name"  value={country} onChange={(e) => setCountry(e.target.value)} /></div>
                <div className="col-lg-3"><input type="button" value="Save" className="form-control btn btn-success" onClick={() => saveCustomer()} /></div>

            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-3 mt-4 stats text-center">
                        <p className="m-0">Total Customers</p>
                        <p className="text-white display-3">{customers.length}</p>
                    </div>
                    <table className="justify-content-center table table-bordered table-customers shadow-lg">
                        <thead>
                            <tr className="">

                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Country</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((customer, index) => (
                                    <tr key={customer.id}>
                                        <td>{customer.first} {customer.last}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.company}</td>
                                        <td>{customer.country}</td>
                                        <td>
                                            <div className="d-flex flex-row">
                                                <button type="submit" className="btn text-danger mx-2" onClick={()=> deleteCustomer(customer.id)}>Delete</button>
                                                <button type="submit" className="btn btn-warning">Edit</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}