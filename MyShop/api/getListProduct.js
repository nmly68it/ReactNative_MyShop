const getListProduct = (idType, page) => {
    const url = `http://192.168.1.54/api/product_by_type.php?id_type=${idType}&page=${page}`;
    return fetch(url)
        .then((res) => res.json());
};

export default getListProduct;