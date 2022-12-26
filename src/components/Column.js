import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

function getColorClass(number) {
    if (number === 1) {
        return "player-one";
    } else if (number === -1) {
        return "player-two";
    } else {
        return null;
    }
}

function Column({ onClick, squares }) {
    return (
        <div className="column" onClick={onClick}>
            <Square colorClass={getColorClass(squares[5])} />
            <Square colorClass={getColorClass(squares[4])} />
            <Square colorClass={getColorClass(squares[3])} />
            <Square colorClass={getColorClass(squares[2])} />
            <Square colorClass={getColorClass(squares[1])} />
            <Square colorClass={getColorClass(squares[0])} />
        </div>
    );
}

Column.propTypes = {
    onClick: PropTypes.func,
    squares: PropTypes.array,
};

export default Column;
