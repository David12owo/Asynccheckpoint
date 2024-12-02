// iterating with Async/Await
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
}

//const values = [1, 2, 3, 4, 5];
//iterateWithAsyncAwait(values);

// Awaiting  a Call
async function awaitCall() {
  // Simulate fetching data from an API
  const fetchData = new Promise((resolve) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      resolve(data);
    }, 2000); // Simulate a 2-second delay
  });

  // Wait for the API response using await
  const data = await fetchData;

  // Log the received data
  console.log(data);
}
// Call the async function
//awaitCall();

// Awaiting concurrent requests
async function concurrentRequests() {
  // Replace with your actual API endpoints
  const User = "https://jsonplaceholder.typicode.com/users";
  const Post = "https://jsonplaceholder.typicode.com/posts";

  // Create promises for each API call
  const promise1 = fetch(User)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching from API 1:", error));

  const promise2 = fetch(Post)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching from API 2:", error));

  // Use Promise.all to wait for both promises to resolve
  const [result1, result2] = await Promise.all([promise1, promise2]);

  // Log the combined results
  console.log("Combined results:", { result1, result2 });
}

// Call the function to make the concurrent requests
concurrentRequests();
