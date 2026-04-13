import './User.css'

type TUser= {
    surname: string
}

function User({surname}: TUser) {

    let initials: string = surname.split(" ").map(item => item[0]).join("") ;
    console.log(initials)

    return ( 
        <>
            <div className='user-container'>
                <div className='user-initials'>{initials}</div>
                <div className='user-surname'>{surname}</div>
            </div>
        </>
     );
}

export default User;