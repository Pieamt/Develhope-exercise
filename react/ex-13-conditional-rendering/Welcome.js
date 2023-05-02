//import React.....
//import Age...
Age.age = 25;

export class Welcome extends React.Component {
    render() {
        return <p>Welcome, {this.prop.name}
               {Age.age > 18 && Age.age < 65 && prop.name === "John" && <Age age = {Age.age}/>}
               </p>
    }
}