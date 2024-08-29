import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/ViewUserButton";

const base__url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostPage = async () => {
  const response = await fetch(base__url, {
    next: { revalidate: 3600 }, //cronjob
  });
  const posts: Iposts[] = await response.json();

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="bg-slate-600 bg">WHEREERER</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default PostPage;
