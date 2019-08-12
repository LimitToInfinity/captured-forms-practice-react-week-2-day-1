import React from "react";

export default function HateList(props) {

    const hates = props.hates.map(hate => {
        return <li className="hate">{hate.rage}</li>
    });

    return (
        <ul className="hate-list">
            {hates}
        </ul>
    );
}