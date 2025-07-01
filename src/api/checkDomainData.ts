export const checkDomainData = async (domain: string) => {
    const response = await fetch(`https://dangerous.domains/api/v1/${domain}`, {
        method: 'GET',
    });
    return  response.json();
};
