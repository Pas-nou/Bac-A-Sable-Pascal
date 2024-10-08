import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Repo } from "../types/RepoCard";

import connexion from "../services/connexion";

export default function Detail() {
    console.log("Initialisation du Detail");
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        console.log("I'm the useEffect");
        const fetchRepos = async () => {
            try {
                const res = await connexion.get<Repo[]>(`/api/repos/${id}`);
                console.log(" useEffect repos", res);
                setData(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRepos();
    }, []);

    return (
        <div>
            <h2>Detail {id}</h2>
        </div>);
}