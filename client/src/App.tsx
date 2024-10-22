// import data from "./assets/data.json";
import Card from "./components/Card";
import { useFullreposQuery } from "./generated/graphql-types";

function App() {
  const { loading, error, data} = useFullreposQuery();
  // const [repos, setRepos] = useState<Repo[]>([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await connexion.get(`${import.meta.env.VITE_API_URL}/api/repos`);
  //       setRepos(res.data);
  //     } catch (error) {
  //       console.error("Error", error)
  //     }
  //   };

  //   fetchData();
  // }, [])

  // console.log(repos)

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <p>Error</p>;

  if (data)
  return (
    <main>

      <h1>Git'Em All!</h1>
      <ul id="map_card">
        {data.fullrepos.map((repo) => (
          <Card
            key={repo.id}
            name={repo.name}
            url={repo.url}
            langs={repo.langs}
            isFavorite={repo.isFavorite}
            id={repo.id}
            />
        ))}
      </ul>
      {/* <button onClick={refetch}>Rafraichir</button> */}

    </main>
  )
}

export default App
