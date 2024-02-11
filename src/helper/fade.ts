/**
 * Animates the fading of an item's opacity
 * @param itemOpacity - The initial opacity of the item
 * @param opacityCb - The callback function to update the item's opacity
 * @param callback - The callback function to be called when the animation is complete
 */
export const fadeAnimate = (itemOpacity: number, opacityCb: (itemOpacity: number) => void, callback: () => void) => {
    let isUp = false;
    const interval = setInterval(() => {
        if (!isUp) {
            itemOpacity -= 5;
            if (itemOpacity < 0) {
                isUp = true;
                callback();
            }
        } else {
            itemOpacity += 5;
            if (itemOpacity > 100) {
                itemOpacity = 100;
                clearInterval(interval);
            }
        }
        
        opacityCb(itemOpacity)
    }, 10);
};