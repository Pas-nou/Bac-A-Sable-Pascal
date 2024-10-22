import { Link } from "react-router-dom";
import type { Repo, Lang } from "../types/RepoCard";

import '../assets/css/Card.css'

function Card({ name, url, langs, id }: Repo) {

    return (

        <div id="card_container">
            <h2 id="card_name">{name}</h2>
            <Link to={url}>Plus d'informations</Link>
            <ul>
                {langs?.map((langs: Lang) => (
                    <li key={langs.id}>{langs.label}</li>
                ))
                }
            </ul>
        </div>
    );
};

export default Card;