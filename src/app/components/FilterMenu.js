"use client"
import { useState, useEffect } from "react";
import { Container, Button, DropdownButton, Dropdown, Form } from "react-bootstrap";
import MultiRangeSlider from "./MultiRangeSlider";
import Image from "next/image";

export default function FilterMenu() {
    /*TO-DO: 
        - Currently has placeholder min/max values for sliders. Needs to have them set to correct values
        - Ask what we agreed upon for the game type section
        - Make sure syntex for the checkbox forms are correct
    */
    // states for the component checkboxes
    const [toggleComponents, setToggleComponents] = useState(false);
    const [checkedComponents, setCheckedComponents] = useState({
        "Dice": false,
        "Chips": false,
        "Card Guide": false,
        "Other": false
    });

    // states for the game type checkboxes
    const [toggleTypes, setToggleTypes] = useState(false);
    const [checkedTypes, setCheckedTypes] = useState({
        "Abstract Strategy": false,
        "Customizable": false,
        "Family": false,
        "Thematic": false,
        "Children": false,
        "Party": false,
        "Strategy": false,
        "Wargames": false
    });

    //effect to check if all boxes are checked when a box is checked
    useEffect(() => {
        let allChecked = true;
        for (const compName in checkedComponents) {
            if (!checkedComponents[compName]) {
                allChecked = false;
                break;
            }
        }
        setToggleComponents(allChecked);
    }, [checkedComponents]);
    
    // function to check or uncheck a component checkbox 
    const checkComp = compName => {
        let newCheckedComps = { ...checkedComponents };
        newCheckedComps[compName] = !checkedComponents[compName];
        setCheckedComponents(newCheckedComps);
    }
    
    // function to toggle all component checkboxes to on or off
    // if some of the checkboxes are checked, flips all to on 
    const handleToggleComps = isChecked => {
        setToggleComponents(isChecked);
        let newCheckedComps = { ...checkedComponents };
        for (const compName in newCheckedComps) {
            newCheckedComps[compName] = isChecked;
        }
        setCheckedComponents(newCheckedComps);
    }

    //effect to check if all boxes are checked when a box is checked
    useEffect(() => {
        let allChecked = true;
        for (const typeName in checkedTypes) {
            if (!checkedTypes[typeName]) {
                allChecked = false;
                break;
            }
        }
        setToggleTypes(allChecked);
    }, [checkedTypes]);

    // function to check or uncheck a game type checkbox 
    const checkType = typeName => {
        let newCheckedTypes = { ...checkedTypes };
        newCheckedTypes[typeName] = !checkedTypes[typeName];
        setCheckedTypes(newCheckedTypes);
    }

    // function to toggle all game type checkboxes to on or off
    // if some of the checkboxes are checked, flips all to on 
    const handleToggleTypes = isChecked => {
        setToggleTypes(isChecked);
        let newCheckedTypes = { ...checkedTypes };
        for (const typeName in newCheckedTypes) {
            newCheckedTypes[typeName] = isChecked;
        }
        setCheckedTypes(newCheckedTypes);
    }

    return (
        <div className="filter-menu d-flex flex-column gap-3">
            <div className="mb-5">
                <p><Image src={"/gameCardIcons/person-male-svgrepo-com.svg"} width={20} height={20} /> Player Count </p>
                <MultiRangeSlider
                    min={1}
                    max={8}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
            </div>
            <div className="mb-5">
                <p><Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} width={20} height={20} /> Average Playtime </p>
                <MultiRangeSlider
                    min={15}
                    max={120}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
            </div>
            <div className="mb-5">
                <p><Image src={"/gameCardIcons/signal-strong-svgrepo-com.svg"} width={20} height={20} /> Complexity </p>
                <MultiRangeSlider
                    min={1}
                    max={5}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
            </div>

            <div className="mapping-section">
                <DropdownButton title="Mapping Strength" id="mapping-dropdown">
                    <Dropdown.Item eventKey="1">Perfect</Dropdown.Item>
                    <Dropdown.Item eventKey="2">High</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Low</Dropdown.Item>
                </DropdownButton>
            </div>
            
            <div className="components-section">
                <div className="components-title">
                    <p>External Components</p>
                    <Button id="components-toggle" onClick={() => handleToggleComps(!toggleComponents)}>Toggle All</Button>
                </div>
            
            
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`components-${type}`}  className="components-checkboxes">
                        <Form.Check
                            label="Dice"
                            type={type}
                            onChange={() => checkComp("Dice")}
                            checked={checkedComponents["Dice"]}
                        />
                        <Form.Check
                            label="Chips"
                            type={type}
                            onChange={() => checkComp("Chips")}
                            checked={checkedComponents["Chips"]}    
                        />
                        <Form.Check
                            label="Card Guide"
                            type={type}
                            onChange={() => checkComp("Card Guide")}
                            checked={checkedComponents["Card Guide"]} 
                        />
                        <Form.Check
                            label="Other"
                            type={type}
                            onChange={() => checkComp("Other")}
                            checked={checkedComponents["Other"]}    
                        />
                        </div>
                    ))}
                </Form>
            </div>    

            <div className="game-type-section">
                <div className="game-type-title">
                    <p>Game Type</p>
                    <Button id="game-type-toggle" onClick={() => handleToggleTypes(!toggleTypes)}>Toggle All</Button>
                </div>
            
            
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`game-type-${type}`}  className="game-type-checkboxes">
                        <Form.Check
                            label="Abstract Strategy"
                            type={type}
                            onChange={() => checkType("Abstract Strategy")}
                            checked={checkedTypes["Abstract Strategy"]}    
                        />
                        <Form.Check
                            label="Customizable"
                            type={type}
                            onChange={() => checkType("Customizable")}
                            checked={checkedTypes["Customizable"]}
                        />
                        <Form.Check
                            label="Family"
                            type={type}
                            onChange={() => checkType("Family")}
                            checked={checkedTypes["Family"]}
                        />
                        <Form.Check
                            label="Thematic"
                            type={type}
                            onChange={() => checkType("Thematic")}
                            checked={checkedTypes["Thematic"]}
                        />
                        <Form.Check
                            label="Children"
                            type={type}
                            onChange={() => checkType("Children")}
                            checked={checkedTypes["Children"]}
                        />
                        <Form.Check
                            label="Party"
                            type={type}
                            onChange={() => checkType("Party")}
                            checked={checkedTypes["Party"]}
                        />
                        <Form.Check
                            label="Strategy"
                            type={type}
                            onChange={() => checkType("Strategy")}
                            checked={checkedTypes["Strategy"]}
                        />
                        <Form.Check
                            label="Wargames"
                            type={type}
                            onChange={() => checkType("Wargames")}
                            checked={checkedTypes["Wargames"]}
                        />
                        </div>
                    ))}
                </Form>
            </div>    

        </div> 
    )

}