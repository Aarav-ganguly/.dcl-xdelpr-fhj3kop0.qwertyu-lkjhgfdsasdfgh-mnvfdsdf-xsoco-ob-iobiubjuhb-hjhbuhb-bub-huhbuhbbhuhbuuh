function log_in()
{
acount_name = document.getElementById("username").value;
localStorage.setItem("acount_name",acount_name);
window.location="kwitter_room.html";
}
