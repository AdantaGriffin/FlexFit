export const getType = async () => {
    const response = await fetch('/types.json');
    const result = await response.json();
    //console.log(result.types);
    return result.types
}

export const getData = async () => {
    const response = await fetch('/data.json');
    const result = await response.json();
    //console.log(result.data)
    return result.data
}

export const getDetails = async (id) => {
    const response = await fetch(`/details.json`);
    const result = await response.json();
    return result[id]
}

export const getApi = async () => {
    const response = await fetch('https://exercisedb.dev/api/v1/exercises');
    const result = await response.json();
    console.log(result)
    return result
}



