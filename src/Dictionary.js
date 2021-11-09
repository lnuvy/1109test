

function Dictionary({r_word, r_seq, r_hanja, r_pos, r_des, r_link}) {
    
    const div_style = {
        backgroundColor: 'skyblue',
        width: '60%',
        margin: '0 auto',
        marginBottom: '30px',
        columns: '1'
    }

    const head_s = {
        display: 'inline-block'
    }

    const pos_s = {
        display: 'inline-block'
    }

    const squared_s = {
        verticalAlign: 'super',
        fontSize: '0.7em',
        fontStyle: 'italic'
        
    }

    const link_s = {
        textDecoration: 'none',
        color: 'black'
    }
    return (
        <div>
            <div style={div_style}>
                <h1 style={head_s}><a style={link_s} href={r_link}>{r_word}<span style={squared_s}>{r_seq}</span></a></h1>
                &nbsp;
                <h3 style={pos_s}>{r_hanja}&nbsp;&nbsp;{r_pos}</h3>
                <p>{r_des}</p>
            </div>
        </div>
    )
}

export default Dictionary;

// Dictionary.PropTypes = {
//     r_word : PropTypes.string,
//     r_seq : PropTypes.string,
//     r_hanja : PropTypes.string,
//     r_pos : PropTypes.string,
//     r_des : PropTypes.string,
// }
