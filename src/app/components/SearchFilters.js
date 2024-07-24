"use client"

import { Button, ButtonGroup } from "react-bootstrap"
import Image from "next/image"

export default function SearchFilters() {
    return (
        <ButtonGroup>
            <Button>Name</Button>
            <Button><Image src={"/gameCardIcons/person-male-svgrepo-com.svg"} width={20} height={20} /> Player Count</Button>
            <Button><Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} width={20} height={20} /> Play Time</Button>
            <Button><Image src={"/gameCardIcons/signal-strong-svgrepo-com.svg"} width={20} height={20} /> Complexity</Button>
        </ButtonGroup>
    )
}