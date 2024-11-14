import './othello.css'
import Board1 from './Board1.jsx';
import Board2 from './Board2.jsx';
import Board3 from './Board3.jsx';
import Board4 from './Board4.jsx';
import Board5 from './Board5.jsx';
const OthelloGame = () => {
    return (
      <div className="content-wrapper">
        <div className="nav-bar">OTHELLO</div>
  
        <div className="general">
          <div className="welcome">
            <marquee direction="left" style={{ color: 'red', fontSize: '30px' }}>
              <b>Welcome to the Othello tutorial</b>
            </marquee>
          </div>
          <div className="w3-panel w3-leftbar w3-sand">
            <div className="othello-img">
              <img src="othello.jpg" alt="othello.jpg" />
            </div>
            <div className="about-othello">
              <p>
                <b>
                  <i>About Othello</i>
                </b>
              </p>
              <p className="w3-xxlarge w3-serif">
                <i>
                  Are you looking for an exciting 2-player game that’s super simple to learn but takes years to master? Othello, also known as Reversi, is the perfect game that has complex strategies but is still suitable for all ages. Whether you’re playing the game for the first time or just need to brush up on the rules, we’ve got you covered. Keep reading, and we’ll teach you everything about Othello so you’re ready to crush your opponent on your next game night!
                </i>
              </p>
            </div>
          </div>
  
          <h2>
            <u>Things You Should Know</u>
          </h2>
          <div className="know-othello">
            <div className="instructions">
              <ul>
                <div>
                  <b>Number of Players: 2</b>
                </div>
                <img
                  src="players.jpeg"
                  style={{ marginTop: '30px' }}
                  alt="2 players image"
                />
              </ul>
            </div>
            <div className="instructions">
              <ul>
                <div>
                  <b>Materials Needed: 8 x 8 square Othello board, 64 double-sided disks (black on one side, white on the other)</b>
                </div>
                <img
                  src="boardsetup.jpg"
                  alt="Othello board setup"
                  style={{ marginTop: '30px' }}
                />
              </ul>
            </div>
            <div className="instructions">
              <ul>
                <div>
                  <b>Objective: Have the most disks of your color on the board at the end of the game</b>
                </div>
                <img
                  src="winning.jpeg"
                  style={{ marginTop: '30px' }}
                  alt="Winning image"
                />
              </ul>
            </div>
          </div>
  
          <div className="play">
            <b>
              <u>How to Play Othello</u>
            </b>
          </div>
  
          <div className="step">
            <p className="step-paragraph">
              <strong>
                <u>Step 1: Setup</u>
              </strong>
            </p>
            <p className="step-paragraph">
              <span className="step-number">1</span>
              Othello is a strategy board game for two players (Black and White), played on an 8 by 8 board. The game traditionally begins with four discs placed in the middle of the board as shown below. Black moves first.
            </p>
          <Board1/>
          </div>
  
          <div className="step">
            <p className="step-paragraph">
              <strong>
                <u>Step 2</u>
              </strong>
            </p>
            <p className="step-paragraph">
              <span className="step-number">2</span>
              Black must place a black disc on the board, in such a way that there is at least one straight (horizontal, vertical, or diagonal) occupied line between the new disc and another black disc, with one or more contiguous white pieces between them. In the starting position, Black has the following 4 options indicated by translucent discs:
            </p>
            <Board2/>
          </div>
  
          <div className="step">
            <p className="step-paragraph">
              <strong>
                <u>Step 3</u>
              </strong>
            </p>
            <p className="step-paragraph">
              <span className="step-number">3</span>
              After placing the disc, Black flips all white discs lying on a straight line between the new disc and any existing black discs. All flipped discs are now black. If Black decides to place a disc in the topmost location, one white disc gets flipped, and the board now looks like this:
            </p>
           <Board3/>
          </div>
  
          <div className="step">
            <p className="step-paragraph">
              <strong>
                <u>Step 4</u>
              </strong>
            </p>
            <p className="step-paragraph">
              <span className="step-number">4</span>
              Now White plays. This player operates under the same rules, with the roles reversed: White lays down a white disc, causing black discs to flip. Possibilities at this time would be:
            </p>
            
            <Board4/>
          </div>
  
          <div className="step">
            <p className="step-paragraph">
              <strong>
                <u>Step 5</u>
              </strong>
            </p>
            <p className="step-paragraph">
              <span className="step-number">5</span>
              When White places a disc in the bottom left position, it flips the adjacent black disc to white, as its now surrounded by two white discs, increasing Whites control on the board.
            </p>
            <Board5/>
          </div>
  
          <div className="step">
            <p className="step-paragraph">
              <strong>
                <u>Bonus</u>
              </strong>
            </p>
  
            <div className="step-paragraph">
              Players alternate taking turns. If a player does not have any valid moves, play passes back to the other player. When neither player can move, the game ends. A game of Othello may end before the board is completely filled.
              The player with the most discs on the board at the end of the game wins. If both players have the same number of discs, then the game is a draw.
              <p>Although the rules of Othello are very simple, mastering the game is not easy.</p>
              <h3>
                <u>Basic Othello strategy</u>
              </h3>
              <div style={{ justifyContent: 'left' }}>
                <p>
                  i)<u>Corners and stable discs</u> - According to the rules of Othello, once a disc is placed in a corner, that disc can never be flipped back (it is stable). Because of that, corners are the most valuable squares on the board. Once you have a corner, you can often build more adjacent stable discs around it.
                </p>
                <img src="basic_strategy_othello_1.jpg" alt="Basic strategy 1" />
                <p>
                  ii)<u>Danger squares</u> - Within the Othello board there are squares that are safer than others. When starting a game, it is recommended to play within the 4x4 central area when possible. It is often not recommended to move on the squares next to corners (marked by black translucent discs). Moving in these squares could give the opponent access to the adjacent corner.
                </p>
                <img src="basic_strategy_othello_2.png" alt="Basic strategy 2" />
                <p>
                  iii)<u>Mobility</u> - A common beginner mistake is to try to get as many discs as possible from the beginning. This is not a good strategy in Othello. A better strategy is to focus on limiting your opponents options, while having many possible moves yourself. This is usually easier to achieve by having fewer discs.
                </p>
                <img src="basic_strategy_othello_3.png" alt="Basic strategy 3" />
              </div>
              <p>
                <a href="https://youtu.be/Ol3Id7xYsY4" target="_blank" rel="noopener noreferrer">
                  CLICK HERE TO WATCH A TUTORIAL
                </a>
              </p>
            </div>
          </div>
        </div>
  
        <div id="cookieConsent" className="cookie-banner">
          <p>This website uses cookies to ensure you get the best experience.</p>
          <button id="acceptCookies">Accept Cookies</button>
        </div>
  
        <footer>
          <p>&copy; Gwethe Group. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default OthelloGame;