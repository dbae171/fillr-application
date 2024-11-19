//this cn function takes multiple class names, filters out any falsy values
//and joins them with a space. its commonly used to handle conditional tailwind class names

export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}