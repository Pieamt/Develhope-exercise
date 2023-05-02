//import React.....
//import Age...
Age.age = 25;

export class Welcome extends React.Component {
    render() {
        return <p>Welcome, {this.prop.name}
               {Age.age && <Age age = {Age.age}/>}
               </p>
    }
}