function switchClass(select) {
    var category = select.options[select.selectedIndex].parentNode.label;
    switch (category) {
        case "Build PC":
            anim2();
            break;
        case "Hardware job":
            try {
                removeEntity(m);
            } catch (err) {
                console.log(err.message);
            }
            animationOne();
            alert("Spustí se animace.");
            break;
        case "WEB":
            try {
                removeEntity(m);
            } catch (err) {
                console.log(err.message);
            }
            alert("Spustí se animace.");
            animationTwo();
            break;
    }
}