import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Box extends React.Component{
	render()
	{
		return(
			<span className="boxes">Bx
			</span>
			);
	}
}

class Txtbox extends React.Component{
	constructor(props){
		super(props);
		this.state={value:0};

		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({value:
			event.target.value});
	}

	render()
	{
		
		return(
		<input type="number"  onChange={this.handleChange} />
		);
	}
}

class Pattern extends React.Component{
	constructor(props){
		super(props);
		this.state={value:0,temp:0};

		this.handleChange=this.handleChange.bind(this);
	}
	frender()
	{
		const n=this.state.value;
		var i,j;
		var finalr=[];

		for(i=1;i<=n;i++)
		{
			var k = n-i;
			for(j=k;j>0;j--)
				{
					finalr.push(<span class="space">abi</span>);
				}
			for(j=1;j<=i;j++)
			{
				finalr.push(<span><Box /></span>);
			}
			finalr.push(<div><br></br></div>);
		}
		return finalr ;
	}
	rtr()
	{
		return (<Txtbox />);
	}

	handleChange(event){
		this.setState({temp:
			event.target.value});
	}
	handleClick(i)
	{
		this.setState({value:i})
	}
		render()
	{
		return(
		<div>
		<div>
		<span><input type="number"  onChange={this.handleChange} /></span><span class="space">abcd</span>
		<span><button onClick={() => this.handleClick(this.state['temp'])}>Build</button></span><span class="space">abcd</span>
		<span><button onClick={() => this.handleClick(0) }>Remove</button></span><br></br><br></br>
		</div>
		<div>{this.frender()}</div>
		</div>
		);
	}
}




ReactDOM.render(
<Pattern />,
document.getElementById('root')
);