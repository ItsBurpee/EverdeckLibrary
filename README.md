# EverdeckLibrary
The Everdeck is a card game system jam packed with card information patterns usable across various traditional and modern games. This is a web app archives a variety of games playable with the Everdeck.

## An Alternative Archiving Solution
The Everdeck Library is an alternative archiving option for games playable by the Everdeck.
Most of the Everdeck’s game lists are available on online forums such as BGG and Reddit. The Everdeck Library takes the format of those game lists and expands upon them by providing in-depth information and interactivity from being able to filter out certain games to knowing how the Everdeck maps to the game’s cards and rules.
Sifting through the Everdeck’s 120 cards for the game you’re playing is quite involved and forgetting a card or not knowing what a card does can heavily hinder gameplay experience.

## Quick Start
You can access the web app through its Vercel deployment at [https://everdeck-library.vercel.app/](https://everdeck-library.vercel.app/)

To setup a local version of the Everdeck Library, you'll need to do the following:
- Clone (or download and extract) this project and open a command line in its directory 
- Install the necessary dependencies with `npm install` or something similar
- You'll need to link a MongoDB database to the web app for it to function
  - Create a `.env.local` file in the root directory and add this line `MONGODB_URI="MongoDB connection string"`
  - The MongoDB database requires a specific format to function. See the **DB Structure** section for more details
- Run the project with `npm run dev`

## DB Structure

### Game
- _id: ObjectID
  - Unique entry ID
  - Used in the **Rules** and **CardZone** Collections
- title: string
- cardImg: string
  - A link to the game's box art
  - For the Vercel deployment, this uses the `<thumbnail>` element from the **BGG XML API**

### Rules

### CardZones


## How to Use
_TODO: Everdeck Library Tutorial_

## Project by:
Nathan \
Carl \
Philip
