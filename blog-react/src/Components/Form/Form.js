import {useState} from 'react'
import {useDispatch} from 'react-redux'
import "./Form.css"

export default function Form() {

    const [article, setArticle] = useState({
        title: "",
        body: ""
    })

    const dispatch = useDispatch();

    const handleForm = e => {
       e.preventDefault();
       dispatch(({
           type: "ADD_ARTICLE",
           payload: article
       }));
       setArticle({
           title: "",
           body: ""
       })
    }
    
    const handleInputs = e => {
        if (e.target.classList.contains('inp-title')) {
            const newObjState = {...article, title: e.target.value};
            setArticle(newObjState);
        }
        if (e.target.classList.contains('inp-body')) {
            const newObjState = {...article, body: e.target.value};
            setArticle(newObjState);
        }
    }

    return (
        <>
            <h1 className="title-form">Écrivez un article</h1>

            <form onSubmit={handleForm} className="container-form">
                <label htmlFor="title">Titre</label>
                <input 
                    className="container-form-input inp-title"
                    type="text" id="title"
                    placeholder="Entrez votre nom"
                    value={article.title}
                    onInput={handleInputs}
                />

                <label htmlFor="article">Votre Article</label>
                <textarea 
                    className="container-form-textarea inp-body"
                    type="text"
                    id="article" 
                    placeholder="Votre article"
                    value={article.body}
                    onChange={handleInputs}
                />

                <button className="container-form-button">Envoyer l'article</button>
            </form>
        </>
    )
}
