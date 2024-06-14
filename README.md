# PokeDex React Application

## Overview
Welcome to the PokeDex React Application, a sophisticated web tool designed for Pokémon enthusiasts and developers alike. This application leverages React to provide a seamless user experience for browsing Pokémon data sourced from the PokeAPI. Whether you're exploring Pokémon details, catching your favorites, or simply searching for specific Pokémon, this application offers a robust platform tailored to meet your needs.

## Key Features
- **Homepage (/home)**: Effortlessly search for Pokémon by name and view detailed information upon selection.
- **All Pokémon Page (/all)**: Browse through an extensive list of Pokémon in a paginated grid format, complete with the ability to capture and add them to your collection.
- **Caught Pokémon Page (/caught)**: Keep track of Pokémon you've captured and view their details anytime.
- **Navbar Navigation**: Seamlessly navigate between different sections of the application (Home, All Pokémon, Caught Pokémon) for a streamlined user experience.

## How It Works
The PokeDex React Application operates through a structured architecture designed to deliver an intuitive and feature-rich experience:

### 1. Frontend Structure
The frontend of the application is structured using React, a powerful JavaScript library known for its declarative and component-based approach to building user interfaces. The application utilizes Next.js, a React framework that enhances performance through server-side rendering and simplified routing.

### 2. Pages and Components
- **Pages**: Defined within the `pages/` directory, each page represents a distinct section of the application accessible via URLs (e.g., `/home`, `/all`, `/caught`). These pages leverage components to display content and manage interactions.
- **Components**: Located in the `components/` directory, reusable UI components such as buttons, menus, and Pokémon cards facilitate consistent design and functionality across different parts of the application.

### 3. State Management
State management in the PokeDex React Application is handled using Zustand, a minimalist state management library for React. Zustand efficiently manages the application state, particularly the list of caught Pokémon across different pages, ensuring data consistency and responsiveness.

### 4. Integration with PokeAPI
The PokeDex application integrates seamlessly with the PokeAPI (https://pokeapi.co/), a RESTful API that serves as the primary source of Pokémon data. Through API requests, the application fetches comprehensive details about Pokémon, including names, types, sprites, weights, heights, and moves, enriching the user experience with accurate and up-to-date information.

### 5. User Interaction
- **Searching Pokémon**: On the homepage (/home), users can enter a Pokémon name in the search bar. Upon submission, the application fetches and displays the corresponding Pokémon details from the PokeAPI.
- **Browsing Pokémon**: The All Pokémon page (/all) presents a paginated grid layout of Pokémon fetched from the PokeAPI. Users can scroll through and click on individual Pokémon cards to view detailed information.
- **Catching Pokémon**: Across different pages, users have the option to "catch" Pokémon. This action adds the Pokémon to the Caught Pokémon page (/caught), where all captured Pokémon are listed with their respective details.

## Installation and Setup
To run the PokeDex application locally on your machine, follow these straightforward steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/C-gyeltshen/Web101_cap2.git
   cd pokedex-react

2. **Install Dependencies:**

    ```
    npm install
    # or
    yarn install


3. **Run the Development Server:**

    ```
    npm run dev
    # or
    yarn dev

    Once the server is running, navigate to http://localhost:3000 to access the application in your preferred web browser.

## Dependencies and Frameworks

The PokeDex React Application relies on the following technologies:

- **React:** A powerful JavaScript library for building interactive user interfaces.

- **Next.js:** A React framework that facilitates server-side rendering and simplifies the development of React applications.

- **PokeAPI:** An indispensable RESTful API that provides extensive Pokémon data, including attributes such as names, types, sprites, weight, height, and moves.
