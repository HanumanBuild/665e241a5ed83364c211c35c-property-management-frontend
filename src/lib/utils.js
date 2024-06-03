
/**
 * A utility library that includes helper functions that might be needed across the application.
 * This could include date formatting, number formatting, or other common utilities.
 */

/**
 * Formats a number as a currency string.
 * @param {number} amount - The amount to format.
 * @param {string} currency - The currency symbol to use.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
};

/**
 * Formats a date string into a more readable format.
 * @param {string} dateStr - The date string to format.
 * @param {string} locale - The locale to use for formatting.
 * @returns {string} The formatted date string.
 */
export const formatDate = (dateStr, locale = 'en-US') => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }).format(date);
};

/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
};
