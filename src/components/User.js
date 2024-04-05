import React from "react"

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: this.props.name
        }

    }

render(){
    return(
        <div className="container flex mx-auto items-center justify-center">
            <div className="text-2xl">
                Page in making
            </div>
            {/* <h1>{this.state.name}</h1> */}
        </div>
    )
}

}

export default User