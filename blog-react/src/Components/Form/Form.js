import {useState, useRef} from 'react'
import {useDispatch} from 'react-redux'
import "./Form.css"

export default function Form() {

    const dispatch = useDispatch();

    const handleForm = e => {
       e.preventDefault();

       const newArticle = {
           title: inputRefs.current[0].value,
           body: inputRefs.current[1].value
       }

       dispatch(({
           type: "ADD_ARTICLE",
           payload: newArticle
       }));

       e.target.reset();
    }

    const inputRefs = useRef([]);

    const addRefs = el => {
        if (el && !inputRefs.current.includes(el)) {
            inputRefs.current.push(el);
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
                    ref={addRefs}
                />

                <label htmlFor="article">Votre Article</label>
                <textarea 
                    className="container-form-textarea inp-body"
                    type="text"
                    id="article" 
                    placeholder="Votre article"
                    ref={addRefs}
                />

                <button className="container-form-button">Envoyer l'article</button>
            </form>
        </>
    )
}
