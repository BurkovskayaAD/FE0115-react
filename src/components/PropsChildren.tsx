type TPropsChildren = {
    children: string
}

function PropsChildren({children}: TPropsChildren) {
    return ( 
        // <button>{children}</button>
        <>
            <div>
                <h1>Hello</h1>
                <p>{children}</p>
            </div>
        </>
     );
}

export default PropsChildren;