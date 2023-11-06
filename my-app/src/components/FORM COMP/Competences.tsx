    export const Competences = () => {
        return (
            <div className="w-full">
                <fieldset className="w-full rounded-xl pl-5 mt-10 mb-5 border-4 bg-gradient-to-r from-cyan-200 to-blue-200">
                    <legend className="text-2xl underline"><h2>Formation et compétences : </h2></legend>
                    <div>
                        <div>
                            <label htmlFor="ParcoursScolaire">Parcours scolaire et professionnels: </label><br />
                            <textarea className="mb-3 focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 resize-none" name="parcours" id="parcours" cols={60} rows={5} placeholder="Decrivez votre parcours scolaire..."></textarea>
                        </div>
                        <div>
                            {/*Message d'erreur*/}
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="ExpPro">Expérience professionnelle</label><br />
                            <textarea className="mb-3 focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 resize-none" name="ExpPro" id="ExpPro" cols={60} rows={5} placeholder="Decrivez votre experience professionnels"></textarea>
                        </div>
                        <div>
                            {/*Message d'erreur */}
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="Langues">Langues parlées:</label><br />
                            <label htmlFor="Anglais">Anglais: </label>
                            <input className="ml-2" type="checkbox" />Oral
                            <input className="ml-2" type="checkbox" />Écrit
                            <br />
                            <label htmlFor="Francais">Français: </label>
                            <input className="ml-2" type="checkbox" />Oral
                            <input className="ml-2" type="checkbox" />Écrit
                            <br />
                            <label htmlFor="Arabe">Arabe: </label>
                            <input className="ml-2" type="checkbox" />Oral
                            <input className="ml-2" type="checkbox" />Écrit
                            <br />
                            <label htmlFor="Espagnol">Espagnol: </label>
                            <input className="ml-2" type="checkbox" />Oral
                            <input className="ml-2" type="checkbox" />Écrit

                        </div>
                        <div>
                            {/*Message d'erreur*/}
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="softSkills">Qualités et atouts: </label>
                            <input className="w-80 focus:outline-none focus:ring focus:ring-slate-600" type="text" id="skill1" placeholder="Entrez votre competence" /><br />
                            <button className="rounded-full px-4 mt-3 mb-3 bg-gradient-to-r from-cyan-300 to-blue-300 hover:bg-slate-400 active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300">+ Ajouter un champs</button> 
                            {/*Ajouter un champs de saisie via TS*/}
                        </div>'
                        <div>
                            {/*Message d'erreur*/}
                        </div>
                    </div>
                </fieldset>
                <div className="text-center w-full ">
                    <button type="submit" className="rounded-full w-40 h-18
                    px-4 mt-3 mb-3 bg-gradient-to-r from-cyan-300 to-blue-300  hover:bg-violet-400 focus:outline-none focus:ring focus:ring-cyan-700">ENVOYER</button>
                </div>
            </div>
        );
    }