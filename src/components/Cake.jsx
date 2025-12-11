import { useState } from 'react';
import './Cake.css';

export default function Cake() {
  const bars = Array.from({ length: 15 });
  const [candlesLit, setCandlesLit] = useState([true, true, true]);
  const [fireworks, setFireworks] = useState(false);

  const blowOut = (index) => {
    // Update only the clicked candle
    const newCandles = [...candlesLit];
    newCandles[index] = false;
    setCandlesLit(newCandles);

    // Show fireworks only when all candles are out
    if (newCandles.every(c => c === false)) {
      setFireworks(true);
      setTimeout(() => setFireworks(false), 2000);
    }
  };

  return (
    <div className="artboard">
      <div className="cake">
        {/* Marmelade bars */}
        <div className="marmelade">
          {bars.map((_, i) => (
            <span key={i} className="marmelade--bar"></span>
          ))}
        </div>

        {/* Decorative bunny */}
        <div className="deco">
          <div className="bunny">
            <div className="eye"></div>
            <div className="eye"></div>
            <div className="mouth"></div>
          </div>
        </div>

        {/* Candles */}
        <div className="candles">
          {candlesLit.map((lit, i) => {
            const positions = [60, 100, 200]; // individual positions
            return (
              <div
                key={i}
                className={`candle ${lit ? 'lit' : 'out'}`}
                style={{ left: `${positions[i]}px` }}
                onClick={() => blowOut(i)} // pass index!
              >
                {lit && <div className="flame"></div>}
              </div>
            );
          })}
        </div>

        {/* Fireworks */}
        {fireworks && <div className="fireworks">SLAY</div>}

        {/* Cake basement */}
        <div className="basement">
          <div className="text">Happy birthday!</div>
          <div className="base"></div>
        </div>

        {/* Light on top */}
        <div className="light"></div>
      </div>
    </div>
  );
}
