import React from 'react';

class Log extends React.Component {
  render() {
    return (
      <div className="Log">
        <form>
          <label>Exercise</label>
          <input name="exercise" type="text" />
          <label>Reps</label>
          <input name="reps" type="number" />
          <label>Weight></label>
          <input name="weight" type="number" />
        </form>
      </div>
    );
  }
};

export default Log;