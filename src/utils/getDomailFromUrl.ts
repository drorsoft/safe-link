export const getDomainFromUrl = (url: string) => {
    const domain = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
    return domain;
}
