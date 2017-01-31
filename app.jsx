function Header(props) {
  return (
    <div className="header">
        <h1>{props.title}</h1>
      </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  
};

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
};

function Counter(props) {
  return (
    <div className="counter">
       <button className="counter-action decrement"> - </button>
       <div className="counter-score"> {props.score} </div>
       <button className="counter-action increment"> + </button>
         </div>
      
  );
  
}

function Player(props){
  return (
    <div className="player">
          <div className="player-name">
            {props.name}
          </div>
          <div className="player-score">
            <Counter score={props.score} />
        </div>
       </div>
  );
  
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};

function Application(props) {
  return (
   <div className="scoreboard">
      <Header title={props.title}/>
        
      <div className="players">
        <Player name="Josh Gressman" score ={31}/>  
        <Player name="Player3" score={20} />
      </div>
    </div>
  );
}



Application.defaultProps = {
  title: "Scoreboard",
};

ReactDOM.render(<Application title="My Scoreboard" />, document.getElementById('container'));