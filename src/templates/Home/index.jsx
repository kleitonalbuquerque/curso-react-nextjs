import "./styles.css";

// import { Component } from "react";
import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useState, useEffect, useCallback } from "react";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setPallPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setPallPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    console.log(new Date().toLocaleDateString("pt-br"));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = async () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      {/* Se houver busca exibe o título com o valor da busca */}
      <div className="search-container">
        {!!searchValue && (
          <>
            <h1>Search value: {searchValue}</h1>
          </>
        )}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>Não existem posts =(</p>}

      <div className="button-container">
        {/* Se não houver busca exibe o botão */}
        {!searchValue && (
          <>
            <Button
              text="Load more posts"
              onClick={loadMorePosts}
              disabled={noMorePosts}
            />
          </>
        )}
      </div>
    </section>
  );
};

// export class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 10,
//     searchValue: "",
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;
//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   };

//   loadMorePosts = async () => {
//     const { page, postsPerPage, allPosts, posts } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage });
//   };

//   handleChange = (e) => {
//     // console.log(e.target.value)
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   };

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!searchValue
//       ? allPosts.filter((post) => {
//           return post.title
//             .toLowerCase()
//             .includes(searchValue.toLocaleLowerCase());
//         })
//       : posts;

//     return (
//       <section className="container">
//         {/* Se houver busca exibe o título com o valor da busca */}
//         <div className="search-container">
//           {!!searchValue && (
//             <>
//               <h1>Search value: {searchValue}</h1>
//             </>
//           )}

//           <TextInput
//             searchValue={searchValue}
//             handleChange={this.handleChange}
//           />
//         </div>

//         {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
//         {filteredPosts.length === 0 && <p>Não existem posts =(</p>}

//         <div className="button-container">
//           {/* Se não houver busca exibe o botão */}
//           {!searchValue && (
//             <>
//               <Button
//                 text="Load more posts"
//                 onClick={this.loadMorePosts}
//                 disabled={noMorePosts}
//               />
//             </>
//           )}
//         </div>
//       </section>
//     );
//   }
// }
