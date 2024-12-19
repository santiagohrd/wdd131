const cards = document.querySelector('#animals');
const button = document.querySelector('.info');
const animalSections = document.querySelectorAll('#bestAnimals div p');


const animals = [
    {
        name: "African Elephant",
        habitat: "Savannahs and forests of Africa",
        characteristic: "The largest land animal on Earth.",
        funFact: "Their large ears help regulate their body temperature.",
        curiousFact: "They communicate with low-frequency sounds humans can't hear.",
        roleInNature: "They disperse seeds and create pathways in the ecosystem.",
        howToHelp: "Support anti-poaching initiatives and habitat conservation.",
        img: "https://images.pexels.com/photos/2677849/pexels-photo-2677849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Honeybee",
        habitat: "Grasslands, forests, and agricultural environments",
        characteristic: "They pollinate 70% of the world's food crops.",
        funFact: "They communicate through a 'waggle dance' to locate flowers.",
        curiousFact: "A single bee produces just a teaspoon of honey in its lifetime.",
        roleInNature: "Essential for pollination and plant reproduction.",
        howToHelp: "Plant native flowers and avoid using chemical pesticides.",
        img: "https://images.pexels.com/photos/1035224/pexels-photo-1035224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Sea Turtle",
        habitat: "Tropical and subtropical oceans",
        characteristic: "They can live for over 100 years.",
        funFact: "They return to the same beach where they were born to nest.",
        curiousFact: "Their gender is determined by the temperature of the sand.",
        roleInNature: "Maintain healthy seagrass beds and coral reefs.",
        howToHelp: "Reduce plastic use and support nesting beach conservation.",
        img: "https://images.pexels.com/photos/10467/pexels-photo-10467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Gray Wolf",
        habitat: "Forests, tundras, and grasslands",
        characteristic: "They live in highly organized packs.",
        funFact: "Their howls can be heard over 10 kilometers away.",
        curiousFact: "They are the direct ancestors of domestic dogs.",
        roleInNature: "They control herbivore populations, maintaining ecosystem balance.",
        howToHelp: "Support natural reserves and protect their habitats.",
        img: "https://images.pexels.com/photos/39310/wolf-predator-hunter-canis-lupus-39310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Orangutan",
        habitat: "Rainforests of Borneo and Sumatra",
        characteristic: "They are highly intelligent primates.",
        funFact: "They share 97% of their DNA with humans.",
        curiousFact: "They build a new nest to sleep in every night.",
        roleInNature: "Help disperse seeds and promote forest growth.",
        howToHelp: "Avoid products that contribute to deforestation, like palm oil.",
        img: "https://images.pexels.com/photos/1123771/pexels-photo-1123771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Emperor Penguin",
        habitat: "Antarctica",
        characteristic: "They are excellent swimmers and can dive over 500 meters.",
        funFact: "Males incubate the eggs while females search for food.",
        curiousFact: "They survive extreme temperatures as low as -60°C.",
        roleInNature: "Key indicators of the Antarctic ecosystem's health.",
        howToHelp: "Combat climate change by reducing your carbon footprint.",
        img: "https://images.pexels.com/photos/52512/penguin-baby-antarctic-life-52512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Jaguar",
        habitat: "Rainforests of Latin America",
        characteristic: "The largest feline in the Americas.",
        funFact: "They have the strongest bite of all big cats.",
        curiousFact: "They are excellent swimmers and hunt in water.",
        roleInNature: "Regulate prey populations, maintaining ecological balance.",
        howToHelp: "Protect rainforests and support natural reserves.",
        img: "https://images.pexels.com/photos/235674/pexels-photo-235674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Giant Panda",
        habitat: "Bamboo forests in China",
        characteristic: "They eat almost exclusively bamboo.",
        funFact: "They spend up to 14 hours a day eating.",
        curiousFact: "They are a global symbol of wildlife conservation.",
        roleInNature: "Help regenerate bamboo forests by spreading seeds.",
        howToHelp: "Support conservation programs and prevent deforestation.",
        img: "https://images.pexels.com/photos/14925845/pexels-photo-14925845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Bald Eagle",
        habitat: "Forests and lakes in North America",
        characteristic: "It is the national symbol of the United States.",
        funFact: "They can spot prey from a height of 3 kilometers.",
        curiousFact: "They build the largest nests of any bird of prey.",
        roleInNature: "Control fish populations and other species.",
        howToHelp: "Protect their habitat and reduce water pollution.",
        img: "https://images.pexels.com/photos/133356/pexels-photo-133356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Blue Whale",
        habitat: "Oceans around the world",
        characteristic: "The largest animal to have ever existed.",
        funFact: "Their heart is the size of a small car.",
        curiousFact: "Their calls can travel hundreds of kilometers underwater.",
        roleInNature: "Maintain balance in the marine food chain.",
        howToHelp: "Reduce ocean pollution and support anti-whaling laws.",
        img: "https://images.pexels.com/photos/4696771/pexels-photo-4696771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

function displayInfo(animals){
    animals.forEach(animal => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let habitat = document.createElement("p");
        let funFact = document.createElement("p");
        let curiousFact = document.createElement("p");
        
        name.textContent = `${animal.name}`;
        habitat.textContent = `${animal.keys} ${animal.habitat}`;
        funFact.textContent = `${animal.funFact}`;
        curiousFact.textContent = `${animal.curiousFact}`;

        img.setAttribute("src", animal.img);
        img.setAttribute("alt", `img of ${animal.name}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("max-width", "100%");
        img.setAttribute("height", "250");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(habitat);
        card.appendChild(funFact);
        card.appendChild(curiousFact);
        
        cards.appendChild(card);
    });
}

displayInfo(animals)

function curiousFact(animals){
    animals.forEach((animal, index) => {
        if (animalSections[index]) {
            animalSections[index].textContent = `Fun Fact: ${animal.funFact}`;
        }
    });
}
curiousFact(animals)

function moreinfo(){

}