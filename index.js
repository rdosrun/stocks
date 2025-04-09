document.addEventListener("DOMContentLoaded", () => {
    const dataList = document.getElementById("data-list");

    fetch("http://cors.io/?https://gamma-api.polymarket.com/markets/501011")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Assuming the API returns an array of items
            data.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = item.name || "Unnamed Item"; // Replace 'name' with the actual property
                dataList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            const errorItem = document.createElement("li");
            errorItem.textContent = "Failed to load data.";
            dataList.appendChild(errorItem);
        });
});
