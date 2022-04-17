import { useState} from 'react';

const Form = (props) => {

    const [name, setName] = useState('');

    //event handling
    function handleSubmit(e) {

        e.preventDefault();

       props.addTask(name);

       setName('');
    }

    //event for input change (textbox)
    function handleChange(e){
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input 
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <div class="d-grid gap-2">
            <button type="submit" class="btn btn-secondary btn-lg btn-block" id="submitButton">Add</button>
            </div>
        </form>
    );
}

export default Form;