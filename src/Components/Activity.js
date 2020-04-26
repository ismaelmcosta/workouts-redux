import React from 'react';
import { useDispatch } from 'react-redux';

const Activity = (props) => {
  const dispatch = useDispatch();

  const deleteActivity = () => {
    dispatch({
      type: 'DELETE_ACTIVITY',
      payload: {
        id: props.id,
      },
    });
  };

  return (
    <div className="card my-5">
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <p>
              <b>Activity:</b> {props.name}
            </p>

            <p>
              <b>Duration:</b> {props.duration}
            </p>
          </div>

          <div className="col-md-4">
            <div
              style={{ height: '100%' }}
              className="d-flex flex-row justify-content-end align-items-center align-self-baseline"
            >
              <button className="btn btn-danger" type="button" onClick={deleteActivity}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
