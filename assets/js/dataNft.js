const addressNFT = [
  "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
  "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
  "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
];

const cryptoPunk = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
const bayc = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
const cloneX = "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B";

let dataNFT = {
  //   cryptoPunk: {},
  //   bayc: {},
  //   clonex: {},
};

let test = {
  cryptoPunk: {
    key: {
      siu: {
        l: "ok",
      },
    },
  },
  bayc: {},
  clonex: {},
};
console.log(test);
console.log(addressNFT);

function nftList(info, contract) {
  console.log(info.contract);
  if (contract == cryptoPunk) {
    dataNFT.cryptoPunk = { ...info };
  }
  if (contract == cloneX) {
    dataNFT.clonex = { ...info };
  }
  if (contract == bayc) {
    dataNFT.bayc = { ...info };
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
  console.log(dataNFT);
  console.log(JSON.stringify(dataNFT));
};

const getItem = () => {
  const itemNft = Object.keys(dataNFT);
};

const dataNftMain = () => {
  renderItem();
  getItem();
};

dataNftMain();
