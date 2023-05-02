//import React.....

export class Welcome extends React.Component {
    render() {
        return <p>Welcome, {this.prop.name}
               <p>Your age is {this.prop.age}</p>
               </p>
    }
}

Welcome.nameProps = {
    name: "Pietro"
}
