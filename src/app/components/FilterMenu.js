"use client"
import { useState, useEffect } from "react";
import {
    Container,
    Button,
    DropdownButton,
    Dropdown,
    Form,
    Col,
    Row,
} from "react-bootstrap";
import MultiRangeSlider from "./MultiRangeSlider";
import Image from "next/image";
import styles from "../css/filterMenu.module.css"
// import { Alegreya, Alegreya_Sans } from "next/font/google";

// // font variables from index were not reaching the filter menu
// // so reinitialize those variables
// const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya"});
// const alegreyaSans = Alegreya_Sans({ weight: ["500"], subsets: ["latin"], variable: "--font-alegreya-sans" });

export default function FilterMenu({
    sliderRanges,
    setSliderRanges,
    mappingStrength,
    setMappingStrength,
    checkedComponents,
    setCheckedComponents,
    checkedTypes,
    setCheckedTypes
}) {
    
    /*TO-DO: 
        - Currently has placeholder min/max values for sliders. Needs to have them set to correct values
        - Ask what we agreed upon for the game type section
    */
    
    // state to track if all components are checked
    const [toggleComponents, setToggleComponents] = useState(false);

    // state to track if all types are checked
    const [toggleTypes, setToggleTypes] = useState(false);

    // states for the sliders current min and max values
    const [plCountRange, setPlCountRange] = useState([sliderRanges["complexityMin"], sliderRanges["complexityMax"]])
    const [plTimeRange, setPlTimeRange] = useState([sliderRanges["complexityMin"], sliderRanges["complexityMax"]])
    const [complexityRange, setComplexityRange] = useState([sliderRanges["complexityMin"], sliderRanges["complexityMax"]])

    // effect to update parent state if player count slider is modified
    useEffect(() => {
        setSliderRanges({
            ...sliderRanges,
            "plCountMin": plCountRange[0],
            "plCountMax": plCountRange[1]
        });
    }, [plCountRange]);

    // effect to update parent state if player time slider is modified
    useEffect(() => {
        setSliderRanges({
            ...sliderRanges,
            "plTimeMin": plTimeRange[0],
            "plTimeMax": plTimeRange[1]
        });
    }, [plTimeRange]);

    // effect to update parent state if complexity slider is modified
    useEffect(() => {
        setSliderRanges({
            ...sliderRanges,
            "complexityMin": complexityRange[0],
            "complexityMax": complexityRange[1]
        });
    }, [complexityRange]);

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
        <div className={`d-flex flex-column gap-3`}>
            <div className="mb-5">
                <p className={styles.filterMenuSliderSections}><Image src={"/gameCardIcons/person-male-svgrepo-com.svg"} width={24} height={24} alt="Player Count Icon"/> Player Count </p>
                <MultiRangeSlider
                    min={1}
                    max={16}
                    currMin={sliderRanges["plCountMin"]}
                    currMax={sliderRanges["plCountMax"]}
                    setMinMax={setPlCountRange}
                    step={1}
                    onChange={({ currMin, currMax }) => console.log(`min = ${currMin}, max = ${currMax}`)}
                />
            </div>
            <div className="mb-5">
                <p className={styles.filterMenuSliderSections}><Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} width={24} height={24} alt="Play Time Icon"/> Play Time </p>
                <MultiRangeSlider
                    min={5}
                    max={120}
                    currMin={sliderRanges["plTimeMin"]}
                    currMax={sliderRanges["plTimeMax"]}
                    setMinMax={setPlTimeRange}
                    step={5}
                    onChange={({ currMin, currMax }) => console.log(`min = ${currMin}, max = ${currMax}`)}
                />
            </div>
            <div className="mb-5">
                <p className={styles.filterMenuSliderSections}><Image src={"/gameCardIcons/signal-strong-svgrepo-com.svg"} width={24} height={24} alt="Complexity Icon"/> Complexity </p>
                <MultiRangeSlider
                    min={1}
                    max={5}
                    currMin={sliderRanges["complexityMin"]}
                    currMax={sliderRanges["complexityMax"]}
                    setMinMax={setComplexityRange}
                    step={0.1}
                    onChange={({ currMin, currMax }) => console.log(`min = ${currMin}, max = ${currMax}`)}
                />
            </div>

            <Row className="w-100 mb-3 align-items-center">
                <Col>
                    <p className={styles.filterMenuSections}>Mapping Strength</p>
                </Col>
                <Col>
                    <Form.Select
                        value={mappingStrength}
                        onChange={e => {
                            setMappingStrength(e.currentTarget.value);
                        }}
                        className={styles.mappingSelect}
                    >
                        <option value="Any">Any</option>
                        <option value="Perfect">Perfect</option>
                        <option value="High">High</option>
                        <option value="Low">Low</option>
                    </Form.Select>
                </Col>

            </Row>
            
            <div className="components-section mb-3">
                
                <div className="components-title mb-3">
                    <Row className="align-items-center">
                        <Col>
                            <p className={styles.filterMenuSections}>External Components</p>
                        </Col>
                        <Col>
                            <Button id="components-toggle" className={styles.toggleButton} onClick={() => handleToggleComps(!toggleComponents)}><p>Toggle All</p></Button>
                        </Col>
                    </Row>
                </div>

                <Form style={{fontSize:"1.1rem"}} className={styles.checkboxes}>
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
                <div className="game-type-title mb-3">
                    <Row className="align-items-center">
                        <Col>
                            <p className={styles.filterMenuSections}>Game Type</p>
                        </Col>
                        <Col>
                             <Button id="game-type-toggle" className={styles.toggleButton} onClick={() => handleToggleTypes(!toggleTypes)}><p>Toggle All</p></Button>
                        </Col>
                    </Row>
                    
                </div>
                <Form style={{fontSize:"1.1rem"}} className={styles.checkboxes}>
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