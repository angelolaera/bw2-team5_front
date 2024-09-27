const PostAuthService = async (url, formRegister) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formRegister),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Errore: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    // console.log("data "+data);
    return data;
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
  }
};

const getClient = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3Mjc0MjQ2MTQsImV4cCI6MTcyNzY4MzgxNCwic3ViIjoiMzhjODEyZDUtZDA4NC00NGZiLThmYTAtMjgwOTFhMmMzZDZlIn0.EbyHqvn3OljZTPlJ6CplmfujcLL_VOtcyF5-XGdVzfLfVaikWg5JzLjIzMBpseZxZcn4npxVr28VvG0BEcLO1Q",
      },
    });

    if (!response.ok) {
      throw new Error(`Errore: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
  }
};

const PutClient = async (url, clienti) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(clienti),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3Mjc0MjQ2MTQsImV4cCI6MTcyNzY4MzgxNCwic3ViIjoiMzhjODEyZDUtZDA4NC00NGZiLThmYTAtMjgwOTFhMmMzZDZlIn0.EbyHqvn3OljZTPlJ6CplmfujcLL_VOtcyF5-XGdVzfLfVaikWg5JzLjIzMBpseZxZcn4npxVr28VvG0BEcLO1Q",
      },
    });

    if (!response.ok) {
      throw new Error(`Errore: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
  }
};

export { PostAuthService, getClient, PutClient };
