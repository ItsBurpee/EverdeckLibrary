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
This web app uses MongoDB. The database name is `everdeck_database` and contains the following Collections:

For a few examples on what some of these Collection entries look like, check the `docs/db` folder

### Game
- _id: ObjectID
  - Unique entry ID
  - Used in the **Rules** and **CardZone** Collections
- title: string
- cardImg: string
  - A link to the game's box art
  - For the Vercel deployment, this uses the `<thumbnail>` element from the **BGG XML API**
- shDescription: string
  - Short description of the game
- plCount: Object
  ```
  plCountMin: int
  plCountMax: int
  ```
  - Setting both fields to the same value results in 1 value shown
- plTime: Object
  ```
  plTimeMin: int
  plTimeMax: int
  ```
  - Setting both fields to the same value results in 1 value shown
- complexity: double
- gameType: [string]
  ```
  Abstract, Customizable, Family, Thematic, Children, Party, Strategy, Wargames
  ```
  - The game's player count, play time, weight, and game type as described on BGG
- mapStrength: string
  - How well does the Everdeck map/emulate the game
  ```
  Perfect - Maps 1:1
  High - Playable with a few changes, mental tracking, or a simple card guide
  Low - Playable but with missing feature, changes with fair amounts of mental tracking, or complex card guides
  ```
- extComponents: [string]
  - Any extra components the game needs that's not related to tracking score (unless score affects gameplay)
  ```
  Dice, Chips, Timer
  Other - For extra components that can't be handled by any of the 3 basic components
  ```

### Rules
- _id: ObjectID
  - Unique entry ID
- game_id: ObjectID
  - Game ID assigned to the Rules entry
- summary: string
- bggLink: string
  - The URL link to the game's BGG entry
- rules: [object]
  ```
  objective - string
  setup - string
  gameplay - string
  ruleSource - string
  *mapDiff - string (Use only on non-perfect mapping strength)
  ```
  - Special formatting: 
    - newline (enter) - Newlines don’t need the `\n` escape character
    - Tab - Use the `\t` escape character
- cardTable: [object]
  ```
  rank: string
  suit: string
  label: string
  cardZone: [ObjectID]
  ```
  - A table cell can be assigned to multiple card zones
- extComponents: [string]
  - A list of extra components

### CardZones
- _id: ObjectID
  - Unique entry ID
- game_id: ObjectID
  - Game ID assigned to the CardZones entry
- keyword: string
  - Keywords assigned to the card zone. Used in the **Rules** Collections
    - Case insensitive
    - The longest variant of a keyword must be first `Ex: royal cards, royal card, royal`
- name: string
- cardComponents: [string]
  ```
  Rank, Suit, Dots, Sequence Number, Uncolored Sequence Number, Colored Sequence Number, Border, Image, Name
  ```
- extRules: [object]
  - Further rules for each card zone
  - Special formatting: 
    - The suit’s name will be replaced with its corresponding symbol
      ```
      club - ♣️
      spade - ♠️
      diamond - ♦️
      heart - ❤️
      coin - 🪙
      crown - 👑
      moon - 🌙
      star - ⭐
      ```

## How to Use
This is a simplified version on how to use the app. A more detailed explanation can be found within the app by pressing the **?** button.

### Game List Page
Each game has an associated card with information related to the game such as the game's title, summary, warnings, and stats provided by BGG (BoardGameGeek).

![Image of a game card](https://github.com/ItsBurpee/EverdeckLibrary/blob/main/public/cardExample.png)

You can search, sort, and filter the card list by using the search bar, sort buttons, and filter menu found near the top of the page if your looking for specific games.

Upon clicking a game card, you'll be brought to its **Rules Page** where you'll be given detailed information like the rules, how the Everdeck maps to the game's cards, and a table of what cards will be in use.

### Rules Page
The **Rules Page** is split into 3 sections:
#### Top Section
This section is a more descriptive version of the game's card from the  **Game List Page**. Alongside more descriptive versions of the game's summary and warnings, there's a link to the game's BGG entry.

#### Middle Section
This section covers the game's rules and presents a visual example of how various aspects of the game's cards map onto the Everdeck's cards.

Keywords in the game's rules have a different appearance and have interactions when hovered or clicked. Upon interacting with these keywords, the Card Zone section will highlight the corresponding Card Zone and card component(s) it maps to.

![Image of the card zone highlighting](https://github.com/ItsBurpee/EverdeckLibrary/blob/main/public/filterEx/cardZoneEx.png)

#### Bottom Section
This section covers the Card Table and a more detailed list of the game's extra components

The Card Table displays which cards are used in the selected and the labels/information assigned to each of them. Upon hovering or clicking each cell, the corresponding card zone will be shown near the interaction point and all cells/cards related to that card zone will be highlighted.

![Image of interacting with the Card Table](https://github.com/ItsBurpee/EverdeckLibrary/blob/main/public/filterEx/cardTableEx.png)

This will also happen when interacting with the Card Zone description positioned below the Card Table.

## Credits
Thanks to:
- Nathan, Carl, and Philip for developing this project
- The various users who created mappings for the Everdeck. You can find more information in the About Page's **Game Source List** section
- UltraBoardGames for providing some of the game's rules
- BoardGameGeek for their XML API and providing information on the games found on this web app
- And you for trying out this app!

![Powered by BGG logo](https://github.com/ItsBurpee/EverdeckLibrary/blob/main/public/poweredByBGG.webp)
