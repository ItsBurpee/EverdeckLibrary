"use client"

import { Container, Button, DropdownButton, Dropdown, Form } from "react-bootstrap";
import MultiRangeSlider from "./MultiRangeSlider";

export default function FilterMenu() {
    /*TO-DO: 
        - Currently has placeholder min/max values for sliders. Needs to have them set to correct values
        - Ask what we agreed upon for the game type section
        - Make sure syntex for the checkbox forms are correct
    */
  
    return (
        
        <div className="filter-menu">
            <h1>Filters</h1>
            <p> Player Count </p>
            <MultiRangeSlider
                min={1}
                max={8}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
             />
            <p> Average Playtime </p>
            <MultiRangeSlider
                min={15}
                max={120}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
             />
            <p> Complexity </p>
            <MultiRangeSlider
                min={1}
                max={5}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
             />

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
                    <Button id="components-toggle">Toggle All</Button>
                </div>
            
            
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`components-${type}`}  className="components-checkboxes">
                        <Form.Check
                            label="Dice"
                            type={type}
                        />
                        <Form.Check
                            label="Chips"
                            type={type}
                        />
                        <Form.Check
                            label="Card Guide"
                            type={type}
                        />
                        <Form.Check
                            label="Other"
                            type={type}
                        />
                        </div>
                    ))}
                </Form>
            </div>    

            <div className="game-type-section">
                <div className="game-type-title">
                    <p>Game Type</p>
                    <Button id="game-type-toggle">Toggle All</Button>
                </div>
            
            
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`game-type-${type}`}  className="game-type-checkboxes">
                        <Form.Check
                            label="Abstract Strategy"
                            type={type}
                        />
                        <Form.Check
                            label="Customizable"
                            type={type}
                        />
                        <Form.Check
                            label="Family"
                            type={type}
                        />
                        <Form.Check
                            label="Thematic"
                            type={type}
                        />
                        <Form.Check
                            label="Children"
                            type={type}
                        />
                        <Form.Check
                            label="Party"
                            type={type}
                        />
                        <Form.Check
                            label="Stratagy"
                            type={type}
                        />
                        <Form.Check
                            label="Wargames"
                            type={type}
                        />
                        </div>
                    ))}
                </Form>
            </div>    

        </div> 
    )

}