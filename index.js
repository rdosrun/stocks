var x;
document.addEventListener("DOMContentLoaded", () => {
    const dataList = document.getElementById("data-list");

    fetch("https://corsproxy.io/?url=https://gamma-api.polymarket.com/markets/501011")
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns an array of items
                console.log(data);
                x=data;
                const listItem = document.createElement("li");
                listItem.textContent = data.description || "Unnamed Item"; // Replace 'name' with the actual property
                dataList.appendChild(listItem);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            const errorItem = document.createElement("li");
            errorItem.textContent = "Failed to load data.";
            dataList.appendChild(errorItem);
        });
});
