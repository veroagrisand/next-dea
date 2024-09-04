import { Button } from "@/components/ui/button";
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/ViewUserButton";

const base__url = "https://jsonplaceholder.typicode.com/albums";
interface Ialbums {
  userId: number;
  id: number;
  title: string;
}

const AlbumPage = async () => {
  const response = await fetch(base__url, {
    next: { revalidate: 3600 },
  });
  const albums: Ialbums[] = await response.json();

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="bg-slate-600 bg">WHEREERER</h1>
      {albums.map((album) => {
        return (
          <CardList key={album.id}>
            <p>{album.id}</p>
            <p>{album.title}</p>
            <ViewUserButton userId={album.userId} />
            <Button className="bg-stone-700 px-6 py-6">Ver</Button>
          </CardList>
        );
      })}
    </>
  );
};

export default AlbumPage;
