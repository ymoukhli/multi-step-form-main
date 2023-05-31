export const resetSelection = (obj, selectedIndex) => {
    return obj.map((element, index) => ({
        ...element,
        selected: index === selectedIndex
    }));
}

export const toggleSelection = (obj, selectedIndex) => {
    return obj.map((element, index) => ({
        ...element,
        selected: index === selectedIndex ? !element.selected : element.selected
    }));
}

export const mapCardsToState = (obj) => obj.map(e => ({
    plan: e.title,
    monthlyPrice: e.monthlyPrice,
    yearlyPrice: e.yearlyPrice,
    selected: false
}))

export const mapAddonsToState = (obj) => obj.map(e => ({
    addon: e.title,
    monthlyPrice: e.monthlyPrice,
    yearlyPrice: e.yearlyPrice,
    selected: false
}))