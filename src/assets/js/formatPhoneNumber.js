export const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    const limited = digits.slice(0, 7);
    let formatted = '';

    if (limited.length > 0) formatted += limited.slice(0, 3);
    if (limited.length > 3) formatted += '-' + limited.slice(3, 5);
    if (limited.length > 5) formatted += '-' + limited.slice(5, 7);

    return formatted;
};