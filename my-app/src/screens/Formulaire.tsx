import { useState } from 'react'
import { Title } from "../components/FORM COMP/Title";
import { Footer } from "../components/FORM COMP/Footer";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInput = {
    lName: string,
    fName: string,
    email: string,
    age: number,
    situation: string,
    file: File,
    objectifs: string,
    ParcoursScolaire: string,
    ExpPro: string,
    skill: string
}

export const Formulaire = () => {

    const [inputs, setInputs] = useState<string[]>(['']); // Initial state with one input

    const addInput = () => {
        setInputs([...inputs, '']); // Add a new input to the array
    };

    const handleInputChange = (index: number, value: string) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = value;
        setInputs(updatedInputs);
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInput>()

    const isUppercase = (value: string) => {
        return value === value.toUpperCase();
    }
    const isFirstUppercase = (value: string) => {
        return value[0] === value[0].toUpperCase();
    }
    const isDigit = (value: number) => {
        return value >= 18 && value <= 60;
    }
    const isEmail = (value: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(value);
    }


    const isValidSelect = (value: string) => {
        return value !== '...';
    }


    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(data);
        // Reset le formulaire apres envoie
        reset();
      }


    return (
        <div className="bg-sky-100">
            <Title />
            <form className="mx-60" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="w-full rounded-xl pl-5 mt-10 mb-5 border-4 bg-gradient-to-r from-cyan-200 to-blue-200">
                    <legend className="text-2xl underline"><h2>Informations personnelles: </h2></legend>
                    <div className="flex items-center">
                        <div>
                            <label htmlFor="lName">*Nom :</label><br />
                            <input {...register("lName", {required: 'Champs obligatoire', validate: (value) =>isUppercase(value) || 'Nom doit être en majuscule'})} className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="text" name="lName" id="lName" placeholder="Ex: EL BOUR" />
                        </div>
                        <div className="ml-5 underline text-pink-800">
                            {errors.lName && <p>{errors.lName.message}</p>}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <label htmlFor="fName">*Prénom :</label><br />
                            <input {...register("fName", { required: 'Champs obligatoire', validate: (value) => isFirstUppercase(value) || 'Debut doit être majuscule' })} className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="text" name="fName" id="fName" placeholder="Ex: Othmane" />
                        </div>
                        <div className="ml-5 underline text-pink-800">
                            {errors.fName && <p>{errors.fName.message}</p>}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <label htmlFor="age">*Age :</label><br />
                            <input {...register("age", {
                                required: 'Champs obligatoire', validate: (value) =>
                                    isDigit(value) || 'Entrez une valeur plausible'
                            })} className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="number" name="age" id="age" placeholder="Ex: 20" />
                        </div>
                        <div className="ml-5 underline text-pink-800">
                            {errors.age && <p>{errors.age.message}</p>}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <label htmlFor="picture">*Situation Familiale :</label><br />
                            <select {...register("situation", { required: 'Champs obligatoire', validate: (value) => isValidSelect(value) || 'Veuillez selectionner une option' })} className="border-2 w-80 py-2" name="situation" id="situation">
                                <option value="..." selected disabled>...</option>
                                <option value="Célibataire">Célibataire</option>
                                <option value="Marié(e)">Marié(e)</option>
                            </select>
                        </div>
                        <div className="ml-5 underline text-pink-800">
                            {errors.situation && <p>{errors.situation.message}</p>}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <label htmlFor="email">*Email :</label><br />
                            <input {...register("email", { required: 'Champs obligatoire', validate: (value) => isEmail(value) || 'Format d\'non valide' })} className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="email" name="email" id="email" placeholder="Ex: abc@XYZ.com" />
                        </div>
                        <div className="ml-5 underline text-pink-800">
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <label htmlFor="picture">*Photo d'identité :</label><br />
                            <input {...register("file", { required: 'Champs obligatoire',/* validate: (value) => isValidFileExtension(value) || 'Entrez un type valide (png/jpg/jpeg/gif)' */ })} className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" id="file" name="file" type="file" />
                        </div>
                        <div className="ml-5 underline text-pink-800">
                            {errors.file && <p>{errors.file.message}</p>}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <label htmlFor="objectifs">*Objectifs professionnels :</label><br />
                            <textarea {...register("objectifs", { required: 'Champs obligatoire' })} className="mb-3 focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 resize-none" placeholder="Entrez vos objectifs professionnels..." name="objectifs" id="objectifs" cols={60} rows={5} />
                        </div>
                        <div className="ml-5 underline text-pink-800">
                            {errors.objectifs && <p>{errors.objectifs.message}</p>}
                        </div>
                    </div>
                </fieldset>
                <div className="w-full">
                    <fieldset className="w-full rounded-xl pl-5 mt-10 mb-5 border-4 bg-gradient-to-r from-cyan-200 to-blue-200">
                        <legend className="text-2xl underline"><h2>Formation et compétences : </h2></legend>
                        <div className="flex items-center">
                            <div>
                                <label htmlFor="ParcoursScolaire">*Parcours scolaire: </label><br />
                                <textarea {...register("ParcoursScolaire", { required: 'Champs obligatoire' })} className="mb-3 focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 resize-none" name="ParcoursScolaire" id="ParcoursScolaire" cols={60} rows={5} placeholder="Decrivez vos objectifs professionnels"></textarea>
                            </div>
                            <div className="ml-5 underline text-pink-800">
                                {errors.ParcoursScolaire && <p>{errors.ParcoursScolaire.message}</p>}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <label htmlFor="ExpPro">*Expériences professionnelles: </label><br />
                                <textarea {...register("ExpPro", { required: 'Champs obligatoire' })} className="mb-3 focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 resize-none" name="ExpPro" id="ExpPro" cols={60} rows={5} placeholder="Decrivez votre experience professionnels"></textarea>
                            </div>
                            <div className="ml-5 underline text-pink-800">
                                {errors.ExpPro && <p>{errors.ExpPro.message}</p>}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <label htmlFor="Langues">Langues parlées: (<i>Optionnelle</i>)</label><br />
                                <label htmlFor="Anglais">Anglais: </label>
                                <input className="ml-2" name="Eng" type="checkbox" />Oral
                                <input className="ml-2" name="Eng" type="checkbox" />Écrit
                                <br />
                                <label htmlFor="Francais">Français: </label>
                                <input className="ml-2" name="Fr" type="checkbox" />Oral
                                <input className="ml-2" name="Fr" type="checkbox" />Écrit
                                <br />
                                <label htmlFor="Arabe">Arabe: </label>
                                <input className="ml-2" name="Ar" type="checkbox" />Oral
                                <input className="ml-2" name="Ar" type="checkbox" />Écrit
                                <br />
                                <label htmlFor="Espagnol">Espagnol: </label>
                                <input className="ml-2" name="Esp" type="checkbox" />Oral
                                <input className="ml-2" name="Esp" type="checkbox" />Écrit

                            </div>
                        </div>
                        <div className="flex items-center">
                            <div>
                                {inputs.map((input, index) => (
                                    <div className="flex items-center" key={index}>
                                        <div>
                                            <label htmlFor={`skill${index + 1}`}>*Qualité {index + 1} </label><br />
                                            <input {...register("skill", { required: 'Champs obligatoire' })} className="focus:outline-none focus:ring focus:ring-slate-600 px-2 py-2 w-80 mb-3 rounded-md border-1" type="text" name="skill" id={`skill${index + 1}`} value={input} placeholder="Entrez votre compétence" onChange={(e) => handleInputChange(index, e.target.value)} />
                                        </div>
                                        <div className="ml-5 underline text-pink-800">
                                            {errors.skill && <p>{errors.skill.message}</p>}
                                        </div>
                                    </div>

                                ))}
                                <button className="rounded-full px-4 mt-3 mb-3 bg-gradient-to-r from-cyan-300 to-blue-300 hover:bg-slate-400 active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={addInput}>+ Ajouter un champ</button>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="text-center w-full ">
                    <button type="submit" className="rounded-full w-40 h-18 px-4 mt-3 mb-3 bg-gradient-to-r from-cyan-300 to-blue-300  hover:bg-violet-400 focus:outline-none focus:ring focus:ring-cyan-700">ENVOYER</button>
                </div>
            </form>
            <Footer />

        </div>
    );
}