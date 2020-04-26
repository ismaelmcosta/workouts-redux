import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddActivity = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    e.persist();
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputName = document.querySelector("input[name='name']");
  const inputDuration = document.querySelector("input[name='duration']");

  const addActivity = () => {
    if (inputName.value === '' && inputDuration.value === '') {
      alert('Values cannot be empty!');
      return;
    }

    dispatch({
      type: 'CREATE_ACTIVITY',
      payload: {
        name: data.name,
        duration: data.duration,
      },
    });

    setData({});
    inputName.value = '';
    inputDuration.value = '';
  };

  return (
    <div className="add">
      <br />
      <div className="input-section">
        <span>Activity:</span>
        <br />
        <input
          className="form-control"
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Activity name"
        />
      </div>
      <br />
      <div className="input-section">
        <span>Duration:</span>
        <br />
        <input
          className="form-control"
          onChange={handleChange}
          type="text"
          name="duration"
          placeholder="Activity duration"
        />
      </div>
      <br />
      <button
        disabled={Object.keys(data).length <= 1 ? true : false}
        className="btn btn-success"
        type="button"
        onClick={() => addActivity()}
      >
        Add Activity
      </button>
      <hr />
    </div>
  );
};

export default AddActivity;
