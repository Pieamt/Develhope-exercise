//import React.....

export class Welcome extends React.Component {
    render() {
        return <p>Welcome, {this.prop.name}</p>
    }
}

Welcome.nameProps = {
    name: "Pietro"
}

//in questo modo viene mostrato il nome "Pietro" di default.
// Se non lo specifichiamo da nessuna parte, verrà mostrata solo la scritta "Welcome".