import React, { useState } from 'react';
import "./autocomplete.scss";
import { FaUserCheck } from "react-icons/fa";
import { API } from '../../Services/Api';

const AutoComplete = (props) => {
    const [value, setValue] = useState("");
    const [suggestion, setSuggestion] = useState([]);

    const handleSuggestionClick = (value) => {

        setValue(value.fullname);
        props.onSelect(value);
        setSuggestion([]);

    }

    const handleInputChange = async (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        if (inputValue.length > 0) {
            const Response = await API.getAllParticipants({ email: inputValue });
            setSuggestion(Response.data);
        }
        else {
            setSuggestion([]);
        }
    }

    return (
        <div className="row">
            <div className="input-icon-wrap">
                <FaUserCheck />
                <input type="text" value={value} onChange={handleInputChange} placeholder='Search Participants Name' />

            </div>
            <div className="sugg-list">
                <ul>
                    {suggestion.map((value, index) => {
                        return (
                            <li key={value.id} onClick={() => handleSuggestionClick(value)}>{value.email}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default AutoComplete;