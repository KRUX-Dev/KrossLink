export function determineResolution (width: number, height: number): 0 | 1 | 2 | 3 | 4 {
    /**
     * 0 - Phone-Portrait
     * 1 - Tablet-Portrait
     * 2 - Phone-Landscape
     * 3 - Tablet-Landscape
     * 4 - Desktop
     */
    
    // Determine if device is in PORTRAIT orientation
    if (height > width) {
        if (width >= 768) {
            // TABLET: For larger portrait screens, we can assume a width of at least 768px
            return 1;
        }
        // PHONE: If mobile + portrait but smaller than tablet, we assume the device is a phone
        return 0;
    }

    // Else, determine LANDSCAPE orientation
    if (width >= 1200) {
        // DESKTOP: For extra large screens
        return 4;
    }
    if (width >= 992) {
        // TABLET-WIDE: Large screens
        return 3;
    }
    if (width >= 768) {
        // PHONE-WIDE: Medium screens
        return 2;
    }

    // Default case for small landscape screens
    return 0;
}