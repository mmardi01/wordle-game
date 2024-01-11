# Lendstack Wordle

Wordle is a web-based word game created and developed by Welsh software engineer Josh Wardle. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Game Features](#game-features)
- [State Management](#state-management)
- [User Interface](#user-interface)


## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Clone your the repository to your local machine:

   ```bash
   git clone https://github.com/mmardi01/lendstack-wordle.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lendstack-wordle
   ```

3. Install dependencies:

   ```bash
   npm install
   #or
   yarn install
   ```

### Running the Application

To run the game locally, follow these steps:

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your preferred web browser and navigate to  http://localhost:5173 to access the game.

3. Enjoy playing the game locally on your machine!

## Game Features

Lendstack Wordle includes the following features to enhance the gaming experience:

- **Input Field**: A dedicated input field is provided for users to enter their word guesses.

- **Display Area for Previous Guesses**: A designated area displays the history of previous guesses, allowing users to track their progress.

- **Indication of Correct Letters in Correct Positions**: The game provides feedback by indicating the correct letters that are in the right positions in the guessed word.

- **Indication of Correct Letters in the Wrong Position**: Users receive feedback on correct letters that are in the wrong positions in the guessed word.

- **Keyboard Ui**: Effortlessly input and submit guesses with our intuitive keyboard. Instant feedback on used letters enhances the Wordle game experience.

- **Display Remaining Attempts**: The UI includes a counter indicating the remaining attempts for the user to guess the correct word.

- **End Game State UI**: Upon winning or losing, the game transitions to an end state UI, providing a clear indication of the outcome.

## State Management

For state management, Redux is utilized to handle various aspects of the game:

- **Target Word Selection**: At the start of the game, a random word is selected as the target word.

- **User Guesses and Results**: The game keeps track of user guesses and provides feedback on their correctness.

- **Remaining Attempts**: The system tracks the number of remaining attempts for the user to guess the correct word.

## User Interface

Lendstack Wordle features a clean and intuitive user interface:

- **Sleek Design**: The UI is designed for a seamless and enjoyable gaming experience.

- **User-Friendly Elements**: Elements such as the input field, Keyboard ui, and feedback indicators are thoughtfully designed for ease of use.

```
