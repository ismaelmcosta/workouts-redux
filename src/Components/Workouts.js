import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import Activity from './Activity';
import AddActivity from './AddActivity';

const Workouts = () => {
  const allActivities = useSelector((state) => state.activities);

  const [add, setAdd] = useState(false);

  return (
    <div>
      <h2 className="mb-4">My Workouts</h2>
      <button className="btn btn-primary btn-block" type="button" onClick={() => setAdd(!add)}>
        Add New
      </button>
      {add && <AddActivity />}

      {allActivities.map((activity) => {
        return (
          <Activity
            key={activity.id}
            id={activity.id}
            name={activity.name}
            duration={activity.duration}
          />
        );
      })}
    </div>
  );
};

export default Workouts;
