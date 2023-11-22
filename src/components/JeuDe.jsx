// import { Component } from "react";

// class JeuDe extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { randomFace: null, nbrEssais: 0, win: false }
//     }

//     randomFaceFunc = () => {
//         const face = Math.floor(Math.random() * (6 - 1 + 1)) + 1
//         this.setState({ randomFace: face, nbrEssais: this.state.nbrEssais + 1 });
//         if (face === this.props.numberOfWinner) {
//                 this.setState({ win: true });
//         }
//     }
//     initFunc = () => {
//         this.setState({ randomFace: null, nbrEssais: 0, win: false });
//     }
//     render() {
//         return (
//             <div className="JeuDe mt-5">
//                 {!this.state.randomFace && <img src="/images/init.PNG" width={120} className="my-2" alt="" />}
//                 {this.state.randomFace && <img src={`/images/face${this.state.randomFace}.PNG`} width={120} className="my-2" alt="" />}
//                 <h2>Jue Dé...</h2>
//                 <p>face : {!this.state.randomFace ? 0 : this.state.randomFace}</p>
//                 <p>Nombre d'essais : {this.state.nbrEssais}</p>
//                 {this.state.win && <><p>Bravo, vous avez gagné!</p><button className="btn btn-success" onClick={this.initFunc}>initialiser</button></>}
//                 {!this.state.win && <button className="btn btn-primary" onClick={this.randomFaceFunc}>Jouer</button>}
//             </div>
//         )
//     }
// }

// export default JeuDe;


import React, { useState, useEffect } from "react";

const JeuDe = ({numberOfWinner, children}) => {
  const [randomFace, setRandomFace] = useState(null);
  const [nbrEssais, setNbrEssais] = useState(0);
  const [win, setWin] = useState(false);

  const randomFaceFunc = () => {
    const face = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    setRandomFace(face);
    setNbrEssais(nbrEssais + 1);
    if (face === numberOfWinner) {
      setWin(true);
    }
  };

  const initFunc = () => {
    setRandomFace(null);
    setNbrEssais(0);
    setWin(false);
  };

  // useEffect(() => {
  //   if (win) {
  //     // Do something when the game is won (optional)
  //   }
  // }, [win]);

  return (
    <div className="JeuDe mt-5">
      {!randomFace && (
        <img src="/images/init.PNG" width={120} className="my-2" alt="" />
      )}
      {randomFace && (
        <img
          src={`/images/face${randomFace}.PNG`}
          width={120}
          className="my-2"
          alt=""
        />
      )}
      <h2>Jue Dé...</h2>
      <p>face : {!randomFace ? 0 : randomFace}</p>
      <p>Nombre d'essais : {nbrEssais}</p>
      {win && (
        <>
          {children}
          <button className="btn btn-success" onClick={initFunc}>
            initialiser
          </button>
        </>
      )}
      {!win && (
        <button className="btn btn-primary" onClick={randomFaceFunc}>
          Jouer
        </button>
      )}
    </div>
  );
};

export default JeuDe;
