export default async function handler(req, res) {
    console.log("Job started");
    let result = await fetch("https://photosave.onrender.com/data?page=0&type=date&order=desc")
    .then(res => res.json());
    console.log(result);
    console.log("Job ended");
    res.status(200).end("Successful!!");
}