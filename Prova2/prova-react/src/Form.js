import React from 'react';
import ReactDOM from 'react-dom';

mostraConsole() {
    let texto = document.getElementById('texto').value;
    let box = document.getElementById('box').checked;

    let con = JSON.stringify(texto, box);
    console.log(con);
}

ReactDOM.render(
<div>
    <form>
        <div>
            <label>Texto</label>
            <input type="text" id="texto"/>
        </div>
        <div>
            <label>Check-Box</label>
            <input type="check-box" id="box"/>
        </div>
        <div>
            <label>Botão</label>
            <button type="submit" onClick="mostraConsole();"></button>
        </div>
    </form>
</div>,
    document.getElementById('root')
)