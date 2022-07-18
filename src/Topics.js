import './Topics.css';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Topics = ({ topicsArray, callback, deleteCallback }) => {
    const [inputValue, setInputValue] = useState('');

    const onAddButtonClicked = () => {
        if (inputValue.length > 0){
            callback(inputValue);
            setInputValue('');
        }     
    }

    return (
    <div className="topics-div">
        <p className="title">Topics</p>
        <div className="topicsButtons">
        {topicsArray.map( e =>
          <button onDoubleClick={() => {deleteCallback(e)}} className="topicsBtn" key={e}>{e}</button>
        )}
        </div>
        <br /><br />
        <input
        className="topicInput"
        value={inputValue}
        maxLength="25"
        onChange={(e) => {setInputValue(e.target.value)}}
        onKeyDown={(e) => {if(e.key === 'Enter') {onAddButtonClicked();}}}
        />
        <button className="addBtn" onClick={onAddButtonClicked}>Add</button>

        <p className="instructions">*Double click on topics to delete</p>

    </div>
    
  )
}

Topics.propTypes = {
    inputName: PropTypes.string,
    referName: PropTypes.string,
    callback: PropTypes.func
}

export default Topics