const cards = document.querySelector('.container');

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla, Atlantico",
        dedicated: "2018, December, 9",
        area: 25349,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/3-Barranquilla-Columblia-Temple-2135198.jpg"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Distrito Capital",
        dedicated: "1999, April, 24-26",
        area: 53500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
    },
    {
        templeName: "Fortaleza Brazil",
        location: "Fortaleza–CE",
        dedicated: "2019, June, 2",
        area: 36000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/2-Fortaleza-Temple-Photo-2219774.jpg"
    }
    // Add more temple objects here...
  ];


const displayTemples = (temples) => {
    document.querySelector('.container').innerHTML = "";
temples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedication.textContent = `Dedicated: ${temple.dedicated}`;
    area.textContent = `Size: ${temple.area} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName}`);
    img.setAttribute("loading", 'lazy');
    img.setAttribute("width", '400');
    img.setAttribute("height", '250');

//   card.setAttribute("width", "600");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img)

    cards.appendChild(card);
});

}
displayTemples(temples);

const home = document.querySelector('#home');
const new_temples = document.querySelector('#new');
const old_temples = document.querySelector('#old');
const small_temples = document.querySelector('#small');
const large_temples = document.querySelector('#large');

home.addEventListener("click", () => {
    cards.innerHTML = "";
    displayTemples(temples);
})

old_temples.addEventListener("click", () => {
    displayTemples(
        temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1990;
       })
    );
});
  
new_temples.addEventListener("click", () => {
    displayTemples(
        temples.filter((temple) => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            return year >= 2000;
        })
    );
});

large_temples.addEventListener("click", () => {
    displayTemples(
        temples.filter((temple) => {
            return temple.area > 90000
        })
    );
});

small_temples.addEventListener("click", () => {
    displayTemples(
        temples.filter((temple) => {
            return temple.area < 10000
        })
    );
});