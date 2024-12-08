const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  const productSelect = document.getElementById("product-name");

// Función para poblar las opciones
function populateProductOptions() {
  products.forEach(product => {
    const option = document.createElement("option"); // Crear elemento <option>
    option.value = product.id;  // Asignar el id como valor
    option.textContent = product.name; // Asignar el nombre como texto visible
    productSelect.appendChild(option); // Añadir la opción al <select>
  });
}

// Llamada a la función para poblar opciones
populateProductOptions();