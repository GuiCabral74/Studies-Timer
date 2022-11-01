import React from 'react';
import Btn_index from "../Button/btn_index";

function Form_index() {
    return (
        <form action="">
            <div>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required/>
            </div>
            <div>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" min="00:00:00" max="01:30:00" required/>
            </div>

            <Btn_index/>
        </form>
    )
}

export default Form_index;