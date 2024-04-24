export function createElement({type = "div", classes, text, src, parent} = {}) {
    const newElement = document.createElement(type);
    
    if(Array.isArray(classes)) {
        for (const c of classes) newElement.classList.add(c);
    } else {
        newElement.classList.add(classes)
    }

    if(type === "img" && src) newElement.setAttribute("src", src)
    if(text) newElement.textContent = text;
    if(parent) parent.append(newElement)

    return newElement;
}