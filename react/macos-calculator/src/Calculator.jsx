import './css/calculator.css'

function Calculator() {
  return (
    <section className="centerizered">
      <div className="bg-dark-1 layout">
        <section className="visor">0</section>
        <section>
          <table>
            <tbody>
              <tr>
                <td><button className="btn bg-dark-2">AC</button></td>
                <td><button className="btn bg-dark-2">+-</button></td>
                <td><button className="btn bg-dark-2">%</button></td>
                <td><button className="btn bg-orange">/</button></td>
              </tr>
              <tr>
                <td><button className="btn bg-dark-3">7</button></td>
                <td><button className="btn bg-dark-3">8</button></td>
                <td><button className="btn bg-dark-3">9</button></td>
                <td><button className="btn bg-orange">X</button></td>
              </tr>
              <tr>
                <td><button className="btn bg-dark-3">4</button></td>
                <td><button className="btn bg-dark-3">5</button></td>
                <td><button className="btn bg-dark-3">6</button></td>
                <td><button className="btn bg-orange">-</button></td>
              </tr>
              <tr>
                <td><button className="btn bg-dark-3">3</button></td>
                <td><button className="btn bg-dark-3">2</button></td>
                <td><button className="btn bg-dark-3">1</button></td>
                <td><button className="btn bg-orange">+</button></td>
              </tr>
              <tr>
                <td colSpan="2"><button className="btn bg-dark-3">0</button></td>
                <td><button className="btn bg-dark-3">.</button></td>
                <td><button className="btn bg-orange">=</button></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </section>
  )
}

export default Calculator