export const InfoPerso = () => {
    return (
        <fieldset className="w-full rounded-xl pl-5 mt-10 mb-5 border-4 bg-gradient-to-r from-cyan-200 to-blue-200">
            <legend className="text-2xl underline"><h2>Informations personnelles: </h2></legend>
            <div>
                <div>
                    <label htmlFor="lName">*Nom :</label><br />
                    <input className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="text" name="lName" id="lName" placeholder="Ex: EL BOUR" required/>
                </div>
                <div>
                    {/*Message d'erreur*/}
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="fName">*Prénom :</label><br />
                    <input className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="text" name="fName" id="fname" placeholder="Ex: Othmane" required/>
                </div>
                <div>
                    {/*Message d'erreur*/}
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="age">*Age :</label><br />
                    <input className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="number" name="age" id="age" placeholder="Ex: 20"  required/>
                </div>
                <div>
                    {/*Message d'erreur*/}
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="picture">*Situation Familiale :</label><br />
                    <select className="border-2 w-80 py-2" name="situation" id="situation">
                        <option value="..." selected disabled>...</option>
                        <option value="Célibataire">Célibataire</option>
                        <option value="Marié(e)">Marié(e)</option>
                    </select>
                </div>
                <div>
                    {/*Message d'erreur*/}
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="email">*Email :</label><br />
                    <input className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="email" name="email" id="email" placeholder="Ex: abc@XYZ.com"  required/>
                </div>
                <div>
                    {/*Message d'erreur*/}
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="picture">*Photo d'identité :</label><br />
                    <input className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="file"  required/>
                </div>
                <div>
                    {/*Message d'erreur*/}
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="objectifs">*Objectifs professionnels :</label><br />
                    <textarea className="mb-3 focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 resize-none" placeholder="Entrez vos objectifs professionnels..." name="objectifs" id="objectifs" cols={60} rows={5} />
                </div>
                <div>
                    {/*Message d'erreur*/}
                </div>
            </div>
        </fieldset>
        
    );
}