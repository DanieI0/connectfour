import React from "react";
import PropTypes from "prop-types";

function Square({ colorClass }) {
    return <div className={`square ${colorClass || ""}`}></div>;
}

Square.propTypes = {
    colorClass: PropTypes.string,
};

export default Square;
