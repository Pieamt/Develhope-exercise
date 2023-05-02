//import React.....

export class Age extends React.Component {
  render() {
    return (
      <>
        {this.prop.age > 18 ? (
          <p>Your age is {this.prop.age}.</p>
        ) : (
          <p>You are very young!</p>
        )}
      </>
    );
  }
}
