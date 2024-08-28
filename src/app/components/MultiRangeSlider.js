"use client"

import styles from "../css/multiRangeSlider.module.css";
import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Slider that has minimum bound and maximum bound
 * from Sandra Lewis's Tutorial with some changes
 * https://dev.to/sandra_lewis/building-a-multi-range-slider-in-react-from-scratch-4dl1
 * 
 * @param {Object} props - props for the component 
 * @param {int} props.min - min value for the slider 
 * @param {int} props.max - max value for the slider 
 * @param {int} props.step - step/increment value for the slider 
 * @param {function} props.onChange - function to retrieve min and max when their state changes 
 * @returns {React.ReactElement} - card element
 */
const MultiRangeSlider = ({ min, max, currMin, currMax, setMinMax, step, onChange }) => {
    const [minVal, setMinVal] = useState(currMin);
    const [maxVal, setMaxVal] = useState(currMax);

    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    // callback that converts value to a percentage of the slider
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );
    
    // effect to decrease width of range from left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // effect to decrease width of range from right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        setMinMax([minVal, maxVal]);
    }, [minVal, maxVal]);

    return (
        <div className={styles.sliderContainer}>
            {/* left thumb */}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={minVal}
                ref={minValRef}
                // onChange function sets min value to prevent right bound from passing left bound
                onChange={(event) => {
                    const value = Math.min(+event.target.value, maxVal - step);
                    setMinVal(value);
                }}
                className={`${styles.thumb} ` +
                    (minVal > max - 100 ? `${styles.thumbZInd5}` : `${styles.thumbZInd3}`)}
            />
            {/* right thumb */}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={maxVal}
                ref={maxValRef}
                // onChange value sets max value to prevent left bound from passing right bound
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minVal + step);
                    setMaxVal(value);
                }}
                className={`${styles.thumb} ${styles.thumbZInd4}`}
            />
            
            {/* slider and track */}
            <div className={styles.slider}>
                <div className={ styles.sliderTrack } />
                <div ref={range} className={styles.sliderRange} />
                <div className={styles.sliderLeftVal}>{minVal}</div>
                <div className={styles.sliderRightVal}>{maxVal}</div>
            </div>
        </div>
    );
}

export default MultiRangeSlider;