var x;
document.addEventListener("DOMContentLoaded", () => {
    const dataList = document.getElementById("data-list");

    const corsProxy = "https://corsproxy.io/?url=";
    const apiUrl = "https://gamma-api.polymarket.com/markets/501011";

    fetch(corsProxy + apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            x = data;
            Object.entries(data).forEach(([key, value]) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${key}: ${value}`;
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
