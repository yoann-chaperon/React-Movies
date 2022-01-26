import axios from "axios";
import React, { useEffect } from "react";

const Form = () => {
    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/movie/550?api_key=db66422914223f50e69279fd54ac088f&query=&language=fr-FR"
            )
            .then((data) => console.log());
    }, []);
    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input
                        type="text"
                        placeholder="Entrez le titre d'un film"
                        id="search-input"
                    />
                    <input type="submit" value="">
                        Rechercher
                    </input>
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id="gooToBad">
                        top<span>→</span>
                    </div>
                    <div className="btn-sort" id="BadToGood">
                        Flop<span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
