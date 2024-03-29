var switchInput = document.querySelector(".switch-input"),
    applyBtn = document.querySelector(".apply-btn"),
    submitBtn = document.querySelector(".submit");
function openPopup() {
    document.querySelector(".textarea").classList.toggle("open");
}
function storeValue() {
    var e = document.querySelector(".textarea"),
        t = e.querySelector("textarea"),
        o = { codeType: e.querySelector("select").value, code: t.value };
    localStorage.removeItem("CustomCode"), localStorage.setItem("CustomCode", JSON.stringify(o)), e.classList.toggle("open");
}
function applyCustomCode() {
    var e = JSON.parse(localStorage.getItem("CustomCode"));
    if ("html" == e.codeType) (t = document.createRange().createContextualFragment(e.code)), ((t = document.createElement("style")).innerText = e.code);
    else if ("css" == e.codeType) {
        (t = document.createElement("style")).innerText = e.code;
    } else if ("js" == e.codeType) {
        var t;
        (t = document.createElement("script")).innerText = e.code;
    }
    document.body.appendChild(t);
}
switchInput.addEventListener("change", openPopup);
applyBtn.addEventListener("click", applyCustomCode); 
submitBtn.addEventListener("click", storeValue);
