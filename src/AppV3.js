import "./App.css";
import { Component } from "react";
import { loadPosts } from "./utils/load-posts";
import { Posts } from "./components/Posts";
class App extends Component {
  state = {
    posts: [],
  };

  // ciclo de vida do componente
  // componentDidMount -> quando monta o componente
  // componentDidUpdate -> quando atualiza/modifica
  // componentWillUnmount - > quando desmonta/finaliza o ciclo de vida
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts()
    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;
