import React, { createRef, useState, useMemo } from 'react';
import styles from "./MatchForm.module.css";
import Ash from "../../media/legends/Ash.png";
import Bangalore from "../../media/legends/Bangalore.png";
import Bloodhound from "../../media/legends/Bloodhound.png";
import Caustic from "../../media/legends/Caustic.png";
import Crypto from "../../media/legends/Crypto.png";
import Fuse from "../../media/legends/Fuse.png";
import Gibraltar from "../../media/legends/Gibraltar.png";
import Horizon from "../../media/legends/Horizon.png";
import Lifeline from "../../media/legends/Lifeline.png";
import Loba from "../../media/legends/Loba.png";
import MadMaggie from "../../media/legends/MadMaggie.png";
import Mirage from "../../media/legends/Mirage.png";
import Octane from "../../media/legends/Octane.png";
import Pathfinder from "../../media/legends/Pathfinder.png";
import Rampart from "../../media/legends/Rampart.png";
import Revenant from "../../media/legends/Revenant.png";
import Seer from "../../media/legends/Seer.png";
import Valkyrie from "../../media/legends/Valkyrie.png";
import Wattson from "../../media/legends/Wattson.png";
import Wraith from "../../media/legends/Wraith.png";
import axios from "axios";


const MatchForm = () => {
    const userCategories = ["kills", "assists", "knocks", "damage", "time"];
    const teammateCategories = [ "teammateKills", "teammateAssists", "teammateKnocks", "teammateDamage"];
    const secondCategories = [ "secondTeammateKills", "secondTeammateAssists", "secondTeammateKnocks", "secondTeammateDamage"];
    const allCategories = [ ...userCategories, ...teammateCategories, ...secondCategories];
    const displayCategories = ["Kills", "Assists", "Knocks", "Damage", "Duration"];
    const charactersStr = ["Ash", "Bangalore", "Bloodhound", "Caustic", "Crypto", "Fuse", "Gibraltar", "Horizon", "Lifeline", 
    "Loba", "MadMaggie", "Mirage", "Octane", "Pathfinder", "Rampart", "Revenant", "Seer", "Valkyrie", "Wattson", "Wraith"];
    const characters = [Ash, Bangalore, Bloodhound, Caustic, Crypto, Fuse, Gibraltar, Horizon, Lifeline, 
    Loba, MadMaggie, Mirage, Octane, Pathfinder, Rampart, Revenant, Seer, Valkyrie, Wattson, Wraith];
    const [legend, setLegend] = useState(Ash);
    const [main, setMain] = useState("Ash");
    const [error, setError] = useState("Hope you kicked some asses in your match 😃");
    const arrIntoObj = (arr) => {
        let obj = {};
        arr.forEach(element => {
            if (element === "time") {
                obj[element] = "1:00";
            } else {
                obj[element] = 0;
            }
        });
        return obj
    };
    const errorRefs = useMemo(() => Array(13).fill(0).map(i => createRef()), []);
    const [match, setMatch] = useState(arrIntoObj(allCategories));
    const [secondTeammate, setSecondTeammate] = useState(true);

    const teammateChange = () => {
        if (secondTeammate) {
            setSecondTeammate(false)
        } else {
            setSecondTeammate(true)
        }
    };

    const handleSelect = (e) => {
        setLegend(characters[e.target.value]);
        setMain(charactersStr[e.target.value])
    };

    const handleChange = (e) => {
        const number = e.target.value;
        const arr = e.target.name.split("+");
        const category = arr[0];
        const i = arr[1];

        if (category === "time") {
            const time = number.split(":");

            if ((isNaN(time[0]) && isNaN(time[1])) || (time[1] > 59) || (time.length !== 2)) {
                setError("Please write your number like this: 4:20 😉😉");
                errorRefs[i].current.style.backgroundColor = "red";;
            } else if (time[0] > 40) {
                setError("More than 40 min!? 🤯");
                errorRefs[i].current.style.backgroundColor = "red";
            } else {
                setError("Nice timing ⌛");
                errorRefs[i].current.style.backgroundColor = "transparent";
                match[`${category}`] = number;
                setMatch({ ...match });
            }
        } else if (!isNaN(number)) {
            if (category === "damage" || category === "teammateDamage") {
                if (number >= 15000) {
                    setError("Really? more than 15k damage!? 🤦‍♂️");
                    errorRefs[i].current.style.backgroundColor = "red";
                } else {
                    setError("Some damage is better than no damage 🔥")
                    errorRefs[i].current.style.backgroundColor = "transparent";
                    match[`${category}`] = number;
                    setMatch({ ...match });
                }
            } else {
                if (number > 59) {
                    setError("Don't lie in your statistics 🙄");
                    errorRefs[i].current.style.backgroundColor = "red";
                } else {
                    setError("Kill 'em all 💀");
                    errorRefs[i].current.style.backgroundColor = "transparent";
                    match[`${category}`] = number;
                    setMatch({ ...match });
                }
            }
        } else {
            setError("Only numbers 🔢");
            errorRefs[i].current.style.backgroundColor = "red";
        }
    };

    const isError = () => {
        for (let i = 0; i < errorRefs.length; i++) {
            if (errorRefs[i].current.style.backgroundColor === "red") {
                setError("Those numbers look sus 🤨");
                return false
            }
        };
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isError()) {
            console.log(await axios.post(`http://localhost:3001/match/create/${1}`, { ...match, main }));
            window.location.reload();
        }
        return
    };

    return (
        <div className={styles.bigContainer}>
            <img src={legend} alt="Not loading" className={styles.legendImg}/>
            <div className={styles.midContainer}>
                <div className={styles.mainContainer}>
                    <label className={styles.mainLabel} htmlFor='main'>Legend</label>
                    <select name='main' className={styles.select} onChange={handleSelect}>
                        {charactersStr.map((legend, i) => (
                            <option value={i} key={i + 100}>{legend}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.error}>
                    <h2>{error}</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit} className={styles.matchForm}>
                <h1>New Match</h1>
                <div className={styles.smallContainer}>
                    <h2>Your stats</h2>
                    <div className={styles.userContainer}>
                        {userCategories.map((category, i) => (
                        <div className={styles.categotyContainer} key={i}>
                            <label className={styles.label} htmlFor={`${category}+${i}`} key={`${i} label`}>{displayCategories[i]}</label>
                            <input className={styles.input} type="text" name={`${category}+${i}`} defaultValue={match[`${category}`]} ref={errorRefs[i]} onChange={handleChange} key={`${i} input`}/>
                        </div>
                        ))}
                    </div>
                    <div className={styles.secondaryContainer}>
                        <div className={styles.internalContainer}>
                            <h2>Teammate</h2>
                            <div className={styles.teammateContainer}>
                                {teammateCategories.map((category, i) => (
                                <div className={styles.categotyContainer_t} key={i + 5}>
                                    <label className={styles.label} htmlFor={`${category}+${i + 5}`} key={`${i + 5} label`}>{displayCategories[i]}</label>
                                    <input className={styles.input} type="text" name={`${category}+${i + 5}`} defaultValue={match[`${category}`]} ref={errorRefs[i + 5]} onChange={handleChange} key={`${i} input`}/>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.internalContainer}>
                            {secondTeammate && <h2>Second Teammate</h2>}
                            {secondTeammate && <div className={styles.teammateContainer}>
                                {secondCategories.map((category, i) => (
                                <div className={styles.categotyContainer_t} key={i + 9}>
                                    <label className={styles.label} htmlFor={`${category}+${i + 9}`} key={`${i + 9} label`}>{displayCategories[i]}</label>
                                    <input className={styles.input} type="text" name={`${category}+${i + 9}`} defaultValue={match[`${category}`]} ref={errorRefs[i + 9]} onChange={handleChange} key={`${i + 9} input`}/>
                                </div>
                                ))}
                            </div>}
                        </div>
                    </div>
                </div>
                {secondTeammate && <button className={styles.teammate_btn} onClick={teammateChange}>Remove Second Teammate</button>}
                {!secondTeammate && <button className={styles.teammate_btn} onClick={teammateChange}>Add Second Teammate</button>}
                <button className={styles.addmatch} type='submit'>Add Match</button>
            </form>
        </div>
    )
};



export default MatchForm;