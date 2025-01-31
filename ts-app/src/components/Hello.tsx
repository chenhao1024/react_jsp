import React from 'react'

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onDecrement, onIncrement }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('you could be a little more enthusiastic')
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
}

export default Hello