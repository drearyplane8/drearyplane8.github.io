function addLinksToImages() {
    console.log("Running function.");
    images = document.getElementsByTagName("img");
    Array.from(images).filter((image) => image.class != "not-thumbail").forEach(image => {
        console.log(image);
        let parentElement = image.parentNode;

        let newLink = image.currentSrc.replace("/small/", "/large/");
        let wrapper = document.createElement("a");
        wrapper.setAttribute("href", newLink);
        wrapper.setAttribute("target", "_blank")

        parentElement.replaceChild(wrapper, image);
        wrapper.appendChild(image);
    });
}

document.addEventListener("DOMContentLoaded", addLinksToImages)