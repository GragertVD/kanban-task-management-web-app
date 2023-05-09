const getData = (setData) => {
  fetch('data.json'
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      // setData(myJson);
      localStorage.setItem('dataBoards', JSON.stringify(myJson));
    });
}

export default getData;