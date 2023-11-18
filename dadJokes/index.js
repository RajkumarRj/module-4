const btn = document.getElementById("but");
const ans = document.getElementById("val");

const accesskey = "tgY8Kz27CQk4tmmAq6jZrg==XsnPQ7w0TamMC7q3";

const options = {
    method: "GET",
    headers: { 'X-Api-Key': accesskey },
};

const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function jokes() {
    ans.innerText ="I'm Thinking for you 💭🙆‍♂️..."
    btn.innerText = "I Got it 💡";
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        ans.innerText = data[0].joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
   btn.innerText = "Tell me a joke!";
}

btn.addEventListener("click", jokes);
