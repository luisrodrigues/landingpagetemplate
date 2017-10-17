const menuButton = document.querySelector("#sidebar-menu");
const sidebar = document.querySelector("#sidebar");
const sidebarItems = document.querySelectorAll(".sidebar-item");

let sidebarOpen = false;

menuButton.addEventListener("click", () => {
	if (!sidebarOpen) {
		sidebar.style.display = "block";
		sidebarOpen = true;
	} else {
		sidebar.style.display = "none";
		sidebarOpen = false;
	}
});

for(let i = 0; i < sidebarItems.length; i++) {
	sidebarItems[i].addEventListener("click", () => {
		sidebar.style.display = "none";
		sidebarOpen = false;
	});
}