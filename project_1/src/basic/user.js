const MyUser = ()=>{
    let users = ['Ram','Luv','Kush','Pawan','Komal'];
    return(
        <div className="container">
            <h1>Users : {users.length}</h1>
            {
                
                users.map((u,index)=> {
                    return(
                        <p key ={index} className="four">{u}</p>
                    )
                })
            }
        </div>
    );
};

export default MyUser;