export const resetSelection = (obj, selectedIndex) => {
    console.log(obj);
    return obj.map((element, index) => ({
        ...element,
        element.selected = index === selectedIndex;
    }));
}

export const mapCardsToState = (obj) => obj.map(e => ({
    plan: e.title,
    monthlyPrice: e.monthlyPrice,
    yearlyPrice: e.yearlyPrice,
    selected: false
}))