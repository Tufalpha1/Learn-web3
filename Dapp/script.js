const MoodContractABI = 
  [
    {
      inputs: [],
      name: "getMood",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_mood",
          type: "string",
        },
      ],
      name: "setMood",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ]


const MoodContractAddress = "0x936A64Ef3f26687022D5d2B925a8F132131BF79b";
let MoodContract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum);

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    MoodContract = new ethers.Contract(
      MoodContractAddress,
      MoodContractABI,
      signer
    );
  });
});

async function getMood() {
  const getMoodPromise = MoodContract.getMood();
  const Mood = await getMoodPromise;
  document.getElementById("showMood").innerText = `Your Mood: ${Mood}`;
  console.log(Mood);
}

async function setMood() {
  const mood = document.getElementById("mood").value;
  const setMoodPromise = MoodContract.setMood(mood);
  await setMoodPromise;
}