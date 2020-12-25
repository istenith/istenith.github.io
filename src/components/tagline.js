import React from 'react'
import styled from 'styled-components'

const Tag = styled.div`
    color: rgb(52, 204, 31);
    font-size: 3rem;
    font-family: 'Work Sans',sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: center;
    white-space: pre-wrap;

    @media screen and (max-width:1120px){
        flex-direction: column;
        align-content: center;
        
        #name{
            margin-top: 1em;
        }
    }
`;

const names = ['TEAM', 'FAMILY', 'ORGANISATION', 'SOCIETY'];

class Tagline extends React.Component{
    constructor(){
        super();
        this.state = {idx: 0, opacity: 1};
    }

    componentDidMount(){
        this.timeout = setInterval(() => {
            this.setState({opacity: 0});
            let currentIdx = this.state.idx;
            setTimeout(()=>this.setState({ idx: currentIdx + 1, opacity: 1}), 500);
        }, 1500);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render(){
        let name = names[this.state.idx % names.length];
        return(
            <Tag>
                <div>WE ARE {['A', 'E', 'I', 'O', 'U'].includes(name.charAt(0)) ? 'AN' : 'A'} </div>
                <div id="name" style={{opacity: this.state.opacity, transition:'opacity 0.5s ease-in'}}>{name}</div>
            </Tag>
        )
    }

}

export default Tagline
