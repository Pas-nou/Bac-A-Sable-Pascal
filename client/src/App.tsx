import { useEffect, useState } from "react";
import type { Repo } from "./types/RepoCard";

import connexion from "./services/connexion";
import Card from "./components/Card";

import "./App.css"

function App() {

  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await connexion.get(`${import.meta.env.VITE_API_URL}/repos`);
        setRepos(res.data);
      } catch (error) {
        console.error("Error", error)
      }
    };

    fetchData();
  }, [])

  console.log(repos)

  return (
    <main>

      <h1>Git'Em All!</h1>
      <ul id="map_card">
        {repos.map((repo: Repo) => (
          <Card
            key={repo.id}
            name={repo.name}
            url={repo.url}
            langs={repo.langs}
            status={repo.status}
            id={""} />
        ))}
      </ul>

    </main>
  )
}

export default App
