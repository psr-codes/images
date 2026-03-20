const url = "https://api.github.com/repos/psr-codes/images/contents/onichan-fun/docs";

async function getImages() {
  const res = await fetch(url);
  const data = await res.json();

  const images = data
    .filter(file => file.type === "file")
    .map(file => file.download_url);

  console.log(images);
}

getImages();