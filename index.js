var x;
document.addEventListener("DOMContentLoaded", () => {
    const dataList = document.getElementById("data-list");

    fetch("https://api.cors.lol/?url=https://gamma-api.polymarket.com/markets/501011")
        .then(response => {
            console.log(response);
            x =response;
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Assuming the API returns an array of items
                const listItem = document.createElement("li");
                listItem.textContent = data || "Unnamed Item"; // Replace 'name' with the actual property
                dataList.appendChild(listItem);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            const errorItem = document.createElement("li");
            errorItem.textContent = "Failed to load data.";
            dataList.appendChild(errorItem);
        });
});
