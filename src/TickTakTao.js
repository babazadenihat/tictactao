import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';


const TickTakTao = () => {
    const classes = useStyle();
    const [selectedFigure, setSelectedFigure] = useState("");
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
    const [selected, setSelected] = useState(board);
    const [activePlayer, setActivePlayer] = useState("");
    const [disableBtnX, setDisableX] = useState(false);
    const [disableBtnO, setDisableO] = useState(false);
    const [activeKey, setActiveKey] = useState("");


    const divRef = React.createRef(null);

    // useEffect(() => {
    //     if (divRef && divRef.current) {
    //         divRef.current.innerText = selectedFigure;
    //     }
    // }, [divRef])

    function handleFigure(e, key) {
        let target = e.target.innerText;

        setSelectedFigure(target);
        if (key === "X") {
            setActiveKey("X")
            setDisableX(true)
            setDisableO(false)
        } else {
            setActiveKey("O")
            setDisableO(true);
            setDisableX(false);
        }
    }


    function handleClick(e, key, index1, index2) {
        let selectedThis = [...selected];
        selectedThis[index1][index2] = selectedFigure;
        setSelected(selectedThis);
        setActivePlayer(key);
        if (activeKey == "X") {
            setDisableO(false)
            setDisableX(true)
        } else {
            setDisableX(false);
            setDisableO(true)
        }
        setSelectedFigure("")
    }

    useEffect(() => {
        let diagonal1 = [selected[0][0], selected[1][1], selected[2][2]]
        let diagonal2 = [selected[0][2], selected[1][1], selected[2][0]];

        let vertical1 = [selected[0][0], selected[1][0], selected[2][0]]
        let vertical2 = [selected[0][1], selected[1][1], selected[2][1]]
        let vertical3 = [selected[0][2], selected[1][2], selected[2][2]];

        let horizontal1 = [selected[0][0], selected[0][1], selected[0][2]]
        let horizontal2 = [selected[1][0], selected[1][1], selected[1][2]]
        let horizontal3 = [selected[2][0], selected[2][1], selected[2][2]];


        if (diagonal1.every((b) => b === "X")) {
            alert(`${activeKey} wins`);
            setDisableO(false)
            setDisableX(false)
            setSelected(board)
            return;
        }
        if (diagonal1.every((b) => b === "O")) {
            alert(`${activeKey} wins`);
            setDisableO(false)
            setDisableX(false)
            setSelected(board)

            return;
        }
        if (diagonal2.every((b) => b === "X") || diagonal2.every((b) => b === "O")) {
            setSelected(board);
            alert(`${activeKey} wins`);
            setDisableO(false)
            setDisableX(false)
            return
        }
        if (vertical1.every((b) => b === "X") || vertical1.every((b) => b === "O")) {
            setSelected(board);
            alert(`${activeKey} wins`);
            setDisableO(false)
            setDisableX(false)
            return
        }
        if (vertical2.every((b) => b === "X") || vertical2.every((b) => b === "O")) {
            setSelected(board);
            alert(`${activeKey} wins`);
            setDisableO(false);
            setDisableX(false);
            
            return;
        }
        if (vertical3.every((b) => b === "X") || vertical3.every((b) => b === "O")) {
            setSelected(board);
            alert(`${activeKey} wins`);
            setDisableO(false);
            setDisableX(false);
            return;
        }
        if (horizontal1.every((b) => b === "X") || horizontal1.every((b) => b === "O")) {
            setSelected(board);
            alert(`${activeKey} wins`);
            setDisableO(false);
            setDisableX(false);
            return;
        }
        if (horizontal2.every((b) => b === "X") || horizontal2.every((b) => b === "O")) {
            setSelected(board);
            alert(`${activeKey} wins`);
            setDisableO(false);
            setDisableX(false);
            return;
        }
        if (horizontal3.every((b) => b === "X")) {
            setSelected(board);
            alert(`${activeKey} wins`);
            setDisableO(false);
            setDisableX(false);
            return;
        }
        if(horizontal3.every((b) => b === "O")) {
            setSelected(board);
            alert(`${activeKey} wins`);
            setDisableO(false);
            setDisableX(false);
            return;
        }
    }, [selected, activeKey]);

    return (
        <div>
            <div className={classes.grid}>
                <div key={selected[0][0]} ref={divRef[0]} type="horizontal" onClick={(e) => handleClick(e, selected[0][0], 0, 0)} className={classes.input}>{selected[0][0]}</div>
                <div ref={divRef[1]} onClick={(e) => handleClick(e, selected[0][0], 0, 1)} className={classes.input}>{selected[0][1]}</div>
                <div ref={divRef[3]} onClick={(e) => handleClick(e, selected[0][0], 0, 2)} className={classes.input}>{selected[0][2]}</div>
                <div ref={divRef[2]} onClick={(e) => handleClick(e, selected[0][0], 1, 0)} className={classes.input}>{selected[1][0]}</div>
                <div ref={divRef[4]} onClick={(e) => handleClick(e, selected[0][0], 1, 1)} className={classes.input}>{selected[1][1]}</div>
                <div ref={divRef[5]} onClick={(e) => handleClick(e, selected[0][0], 1, 2)} className={classes.input}>{selected[1][2]}</div>
                <div ref={divRef[6]} onClick={(e) => handleClick(e, selected[0][0], 2, 0)} className={classes.input}>{selected[2][0]}</div>
                <div ref={divRef[7]} onClick={(e) => handleClick(e, selected[0][0], 2, 1)} className={classes.input}>{selected[2][1]}</div>
                <div ref={divRef[8]} onClick={(e) => handleClick(e, selected[0][0], 2, 2)} className={classes.input}>{selected[2][2]}</div>
            </div>
            <div>
                <button onClick={(e) => handleFigure(e, "X")} disabled={disableBtnX}>X</button>
                <button onClick={(e) => handleFigure(e, "O")} disabled={disableBtnO}>O</button>
            </div>
        </div >
    )
}

export default TickTakTao;

const useStyle = makeStyles({
    grid: {
        display: "grid",
        gridTemplateColumns: "50px 50px 50px"
    },
    input: {
        width: "50px",
        height: "50px",
        border: "1px solid black"
    }
})