import React from "react";
const Fragment = React.Fragment;

const Rank = ({ name, entries }) => {
  return (
    <Fragment>
      <div className="f1 white">{`Hello ${name}, welcome back!`}</div>
      <div className="f2 white">{`Your current score is: ${entries}`}</div>
    </Fragment>
  );
};

export default Rank;
