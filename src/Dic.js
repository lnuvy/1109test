import React from "react";

function Dic({r_word, r_pos, r_seq, r_hanja, r_des}) {
    return (
        <div>
            <h2>{r_word}</h2>
            <h3>{r_seq}</h3>
            <h4>{r_pos} - ({r_hanja})</h4>
            <p>{r_des}</p>
        </div>
    )
}
export default Dic;