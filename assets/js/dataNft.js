const addressNFT = [
  "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
  "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
  "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
];

const cryptoPunk = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
const bayc = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
const cloneX = "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B";
const cardItem = $(".card-item");
const pageItem = $$(".page-item");

console.log(pageItem);
function nftList(object, contractNFT) {
  // Render nft list
  for (let i = 1; i < 6; i++) {
    const data = `
      <div class="card-item">
      <div class="card-img">
        <img
          class="img-item"
          src="${object.nfts[i].cached_file_url}"
          alt=""
        />
      </div>
      <div class="card-info">
        <div class="card-title">
          ${object.contract.name}
          <i class="uil uil-check-circle"></i>
        </div>
        <div class="card-name">#${object.nfts[i].token_id}</div>
        <div class="card-price">${i} ETH</div>
      </div>
      <div class="card-btn">
        <button class="buy-btn">Buy</button>
        <button class="add-btn">
          <i class="uil uil-shopping-cart-alt"></i>
          Add to cart
        </button>
      </div>
    </div>
    `;
    cardItem.insertAdjacentHTML("afterend", data);
  }

  for (let i = 1; i < 5; i++) {
    const dataHome = `
    <div class="page-item">
      <img
        class="item-img"
        src="${object.nfts[i].cached_file_url}"
        style="width: 100%"
      />
      <p class="item-name">${object.contract.name}</p>
      <p class="item-price">Floor: ${i} ETH</p>
    </div>
    <div class="page-item">
      <img
        class="item-img"
        src="${object.nfts[i + 1].cached_file_url}"
        style="width: 100%"
      />
      <p class="item-name">${object.contract.name}</p>
      <p class="item-price">Floor: ${i + 1} ETH</p>
    </div>
    <div class="page-item">
      <img
        class="item-img"
        src="${object.nfts[i + 2].cached_file_url}"
        style="width: 100%"
      />
      <p class="item-name">${object.contract.name}</p>
      <p class="item-price">Floor: ${i + 2} ETH</p>
    </div>
    <div class="page-item">
      <img
        class="item-img"
        src="${object.nfts[i + 3].cached_file_url}"
        style="width: 100%"
      />
      <p class="item-name">${object.contract.name}</p>
      <p class="item-price">Floor: ${i + 3} ETH</p>
    </div>
  `;
    let j = i - 1;

    if (j < 3) {
      pageItem[j].insertAdjacentHTML("afterend", dataHome);
    }
  }
}

function getNFT(address) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "2451280c-6901-43e0-bb02-06e1ac3a2234",
    },
  };
  fetch(`https://api.nftport.xyz/v0/nfts/${address}?chain=ethereum`, options)
    .then((response) => response.json())
    .then((response) => nftList(response, address))
    .catch((err) => console.error(err));
}

const renderItem = () => {
  addressNFT.map((item) => {
    getNFT(item);
  });
};

const dataNftMain = () => {
  renderItem();
};

dataNftMain();
