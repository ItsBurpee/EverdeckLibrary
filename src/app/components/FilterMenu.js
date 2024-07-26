"use client"
import { useState, useEffect } from "react";
import { Container, Button, DropdownButton, Dropdown, Form, Col, Row } from "react-bootstrap";
import MultiRangeSlider from "./MultiRangeSlider";
import Image from "next/image";
const firstOpen = true;

export default function FilterMenu() {
    
    /*TO-DO: 
        - Currently has placeholder min/max values for sliders. Needs to have them set to correct values
        - Ask what we agreed upon for the game type section
    */
    // states for the component checkboxes
    const [toggleComponents, setToggleComponents] = useState(false);


    const  [checkedComponents, setCheckedComponents] = useState({
        "Dice": true,
        "Chips": true,
        "Card Guide": true,
        "Other": true
    });

    // states for the game type checkboxes
    const [toggleTypes, setToggleTypes] = useState(false);
    const [checkedTypes, setCheckedTypes] = useState({
        "Abstract Strategy": true,
        "Customizable": true,
        "Family": true,
        "Thematic": true,
        "Children": true,
        "Party": true,
        "Strategy": true,
        "Wargames": true
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
                    <Row>
                        <Col>
                            <p>External Components</p>
                        </Col>
                        <Col>
                            <Button id="components-toggle" onClick={() => handleToggleComps(!toggleComponents)}>Toggle All</Button>
                        </Col>
                    </Row>
                </div>

                <Form>
                    <Row>
                        <Col>
                            <Form.Check
                                label="Dice"
                                type="checkbox"
                                onChange={() => checkComp("Dice")}
                                checked={checkedComponents["Dice"]}
                            />  
                            <Form.Check
                                label="Card Guide"
                                type="checkbox"
                                onChange={() => checkComp("Card Guide")}
                                checked={checkedComponents["Card Guide"]} 
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                label="Chips"
                                type="checkbox"
                                onChange={() => checkComp("Chips")}
                                checked={checkedComponents["Chips"]}    
                            />
                            <Form.Check
                                label="Other" 
                                type="checkbox"
                                onChange={() => checkComp("Other")}
                                checked={checkedComponents["Other"]}    
                            />
                        </Col>
                    </Row>
                </Form>
            </div>    

            <div className="game-type-section">
                <div className="game-type-title">
                    <Row>
                        <Col>
                            <p>Game Type</p>
                        </Col>
                        <Col>
                             <Button id="game-type-toggle" onClick={() => handleToggleTypes(!toggleTypes)}>Toggle All</Button>
                        </Col>
                    </Row>
                    
                </div>
                <Form>
                    <Row>
                        <Col>
                            <Form.Check
                                label="Abstract Strategy"
                                type="checkbox"
                                onChange={() => checkType("Abstract Strategy")}
                                checked={checkedTypes["Abstract Strategy"]}    
                            />
                            <Form.Check
                                label="Customizable"
                                type="checkbox"
                                onChange={() => checkType("Customizable")}
                                checked={checkedTypes["Customizable"]}
                            />
                            <Form.Check
                                label="Family"
                                type="checkbox"
                                onChange={() => checkType("Family")}
                                checked={checkedTypes["Family"]}
                            />
                            <Form.Check
                                label="Thematic"
                                type="checkbox"
                                onChange={() => checkType("Thematic")}
                                checked={checkedTypes["Thematic"]}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                label="Children"
                                type="checkbox"
                                onChange={() => checkType("Children")}
                                checked={checkedTypes["Children"]}
                            />
                            <Form.Check
                                label="Party"
                                type="checkbox"
                                onChange={() => checkType("Party")}
                                checked={checkedTypes["Party"]}
                            />
                            <Form.Check
                                label="Strategy"
                                type="checkbox"
                                onChange={() => checkType("Strategy")}
                                checked={checkedTypes["Strategy"]}
                            />
                            <Form.Check
                                label="Wargames"
                                type="checkbox"
                                onChange={() => checkType("Wargames")}
                                checked={checkedTypes["Wargames"]}
                            />
                        </Col>
                    </Row>
                </Form>
            </div>    

        </div> 
    )

}