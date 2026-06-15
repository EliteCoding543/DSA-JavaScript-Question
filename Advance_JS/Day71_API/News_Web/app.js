const container = document.getElementById("container");

const apiUrl = "https://api.spaceflightnewsapi.net/v4/articles";

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {

    data.results.forEach((item) => {

      const card = document.createElement("div");
      card.classList.add("news-card");

      card.innerHTML = `
        <img src="${item.image_url}" alt="${item.title}">

        <div class="news-content">

          <div class="news-meta">
            <span class="category">SPACE NEWS</span>
            <span class="date">
              ${new Date(item.published_at).toLocaleDateString()}
            </span>
          </div>

          <h2>${item.title}</h2>

          <p>
            ${item.summary.slice(0, 120)}...
          </p>

          <div class="news-footer">
            <span>
              <i class="fa-regular fa-clock"></i>
              5 min read
            </span>

            <a href="${item.url}" target="_blank">
              Read More →
            </a>
          </div>

        </div>
      `;

      container.appendChild(card);
    });

  })
  .catch((err) => console.log(err));