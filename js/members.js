fetch("../data/profiles.json")
.then(response => response.json())
.then(profiles => {

    const container = document.getElementById("profiles");

    profiles.forEach(profile => {

        const card = document.createElement("div");

        card.className = "profile-card";

        card.innerHTML = `

            <div class="profile-image">
                <img src="${profile.image}" alt="${profile.name}">
            </div>

            <div class="profile-info">

                <h3>${profile.name}</h3>

                <p>
                    ${profile.description}
                </p>

            </div>

        `;

        container.appendChild(card);

    });

})
.catch(error => {

    console.error("Could not load profiles:", error);

});