import "./App.css";
import { Component } from "react";
class App extends Component {
  state = {
		counter: 0,
    posts: [
			{
				id: 1,
				title: "O título 1",
				body: "O corpo 1",
			},
			{
				id: 2,
				title: "O título 2",
				body: "O corpo 2",
			},
			{
				id: 3,
				title: "O título 3",
				body: "O corpo 3",
			},
		],
  };

	handleTimeOut = () => {
		const { posts, counter } = this.state;
		posts[0].title = `O título 1 mudou ${counter + 1}x`;

		this.timeOutUpdate = setTimeout(() => {
			this.setState({ posts, counter: counter + 1 })
		}, 1000)
	}

	timeOutUpdate = null;

	// ciclo de vida do componente
	// componentDidMount -> quando monta o componente
	// componentDidUpdate -> quando atualiza/modifica
	// componentWillUnmount - > quando desmonta/finaliza o ciclo de vida
	componentDidMount() {
		this.handleTimeOut();
	}

	componentDidUpdate() {
		this.handleTimeOut();
	}

	// limpa o lixo da página
	componentWillUnmount() {
		clearTimeout(this.timeOutUpdate);
	}

	// componentDidMount() {
	// 	// simular chamada de uma api
	// 	setTimeout(() => {
	// 		this.setState({
	// 			posts: [
	// 				{
	// 					id: 1,
	// 					title: "O título 1",
	// 					body: "O corpo 1",
	// 				},
	// 				{
	// 					id: 2,
	// 					title: "O título 2",
	// 					body: "O corpo 2",
	// 				},
	// 				{
	// 					id: 3,
	// 					title: "O título 3",
	// 					body: "O corpo 3",
	// 				},
	// 			],
	// 		})
	// 	}, 3000)
	// }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
				<h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
