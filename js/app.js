// define original price
const originalPrice = "24.00";
const sectionWrapper = document.getElementById("section-wrapper");

// define size and colors for the items
const sizes = ["XS", "SM", "MD", "LG", "XL"];
const colors = ["Red", "Blue", "Green"];

// Dynamically creating 3 articles
for (let i = 1; i <= 3; i++) {
  const article = document.createElement("article");

  // Dynamically creating table rows
  let tableRows = "";
  for (let j = 1; j <= i; j++) {
    tableRows += `
      <tr>
        <td>#${j}</td>
        <td>
          <select>
            <option value="">Select size</option>
            ${sizes
              .map(
                (size) =>
                  `<option value="${size.toLowerCase()}">${size}</option>`
              )
              .join("")}
          </select>
        </td>
        <td>
          <select>
            <option value="">Select color</option>
            ${colors
              .map(
                (color) =>
                  `<option value="${color.toLowerCase()}">${color}</option>`
              )
              .join("")}
          </select>
        </td>
      </tr>
    `;
  }

  // Defining article content
  article.innerHTML = `
    <div class="section-header">
      <ul>
        <li>
          <div class="checkbox"></div>
        </li>
        <li>
          <h2>
            ${i}Unit
            <span> ${i * 10}% off </span>
          </h2>
          ${i === 1 ? `<h3>Standard Price</h3>` : ""}
        </li>
        <li>
          <h2>${(24 - (24 * i) / 10).toFixed(2)} USD</h2>
          <h3>${originalPrice} USD</h3>
        </li>
      </ul>
    </div>
    <div class="section-content">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Size</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  `;

  // appemding to section wrapper
  sectionWrapper.appendChild(article);
}

// Close all articles
const closeAllArticles = () => {
  const articles = document.querySelectorAll("article");
  articles.forEach((article) => {
    const articleContent = article.querySelector(".section-content");
    const checkbox = article.querySelector(".checkbox");
    const table = article.querySelector("table");

    articleContent.style.maxHeight = null;
    checkbox.classList.remove("checkbox-active");
    table?.classList.remove("display");
  });
};

const initializeArticles = () => {
  const articles = document.querySelectorAll("article");
  articles.forEach((article) => {
    // selectors
    const header = article.querySelector(".section-header");
    const checkbox = article.querySelector(".checkbox");
    const articleContent = article.querySelector(".section-content");
    const table = article.querySelector("table");

    header.addEventListener("click", () => {
      const isOpen = checkbox.classList.contains("checkbox-active");

      // close all current articles
      closeAllArticles();

      // if not open the current articles do folow these changes
      if (!isOpen) {
        checkbox.classList.add("checkbox-active");
        articleContent.style.maxHeight = `${articleContent.scrollHeight}px`;
        table?.classList.add("display");
      }
    });
  });
};

initializeArticles();
