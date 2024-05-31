fetch("https://fakestoreapi.com/products")
  .then((data) => {
    //console.log(data);
    return data.json(); // converted to object
  })
  .then((objectData) => {
    console.log(objectData[0].title); // converted to array so can access
    let tableData = "";
    objectData.map((values) => {
      tableData += ` <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
      <td><img src="${values.image}"/</td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });
