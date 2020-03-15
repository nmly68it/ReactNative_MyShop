const searchProduct = (key) => {
    const url = `http://192.168.1.54/api/search.php?key=${key}`;
    return fetch(url)
        .then((res) => res.json());
};

export default searchProduct;
