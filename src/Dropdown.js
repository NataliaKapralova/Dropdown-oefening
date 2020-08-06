import React, { useState } from 'react'
import onClickOutside from 'react-click-outside';


function Dropdown({ items, multiselect = false }) {
    //hooks
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const [title, setTitle] = useState("Choose a color");



    Dropdown.handleClickOutside = () => setOpen(false);


    // functions
    const toggle = () => setOpen(!open)

    const handleOnclick = (item) => {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiselect) {
                setSelection([item])
            } else if (multiselect) {
                setSelection([...selection, item])
            }
        } else {
            let selecionAfterRemoval = selection;
            selecionAfterRemoval = selecionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selecionAfterRemoval])
        }

        setTitle(item.value)
        toggle(!open)
    }

    function isItemSelected(item) {
        if (selection.find(current => current.id === item.id))
            return true;
        else {
            return false;
        }
    }

    return (
        <div className="dd-wrapper">
            <div
                className="dd-header"
                // tabIndex={0}
                // role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >

                <div className="dd-header__title">
                    <p className="dd-header__title--bold"> {title}</p>
                </div>
                <div className="dd-header__action">
                    <p>  {open ? "Close" : "Open"} </p>
                </div>
            </div>
            {open && (
                <ul className='dd-list'>
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button onClick={() => handleOnclick(item)}>
                                <span> {item.value}</span>
                                <span> {isItemSelected(item) && "Selected"}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);