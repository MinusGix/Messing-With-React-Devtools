const CONFIG = {
	log$r: false,
}

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		if (CONFIG.log$r && typeof ($r) !== 'undefined') {
			console.log('[$r]:', $r);
		}

		this.setState({
			date: new Date()
		});
	}

	render() {
		return React.createElement("div", {},
			React.createElement("h1", {}, "Hello World!"),
			React.createElement("h2", {}, this.state.date.toLocaleTimeString())
		);
	}
}

ReactDOM.render(
	React.createElement(Clock),
	document.getElementById('root')
);